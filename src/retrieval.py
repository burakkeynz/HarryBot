import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import pickle
import numpy as np
import pandas as pd
import faiss
from numpy.typing import NDArray
from sentence_transformers import SentenceTransformer
from config import (
    EMBEDDING_MODEL, FAISS_INDEX_DIR,
    FAISS1_THRESHOLD, TOP_K_CHUNKS, DATA_PATH
)

# Loading the embedding model (downloads on first run)
model = SentenceTransformer(EMBEDDING_MODEL)


def load_data() -> tuple[list[str], list[str], list[str]]:
    # Reading Excel and separating Q&A rows from raw info rows
    df = pd.read_excel(DATA_PATH)
    qa_rows = df[df["answer"].notna()].reset_index(drop=True)
    qa_questions: list[str] = qa_rows["content"].tolist()
    qa_answers: list[str] = qa_rows["answer"].tolist()
    all_content: list[str] = df["content"].tolist()
    return qa_questions, qa_answers, all_content


def _normalize(vecs: NDArray[np.float32]) -> NDArray[np.float32]:
    # L2-normalizing vectors for cosine similarity via inner product
    norms = np.linalg.norm(vecs, axis=1, keepdims=True)
    return (vecs / norms).astype(np.float32)


def build_indexes() -> None:
    # Building both FAISS indexes and saving them to disk
    qa_questions, qa_answers, all_content = load_data()
    os.makedirs(FAISS_INDEX_DIR, exist_ok=True)

    # Building FAISS Index 1 — Q&A questions only
    q_embeddings = _normalize(model.encode(qa_questions, convert_to_numpy=True))
    dim = q_embeddings.shape[1]
    index1 = faiss.IndexFlatIP(dim)
    index1.add(q_embeddings)  # type: ignore[arg-type]
    faiss.write_index(index1, os.path.join(FAISS_INDEX_DIR, "index1.faiss"))

    # Saving Q&A questions and answers to disk
    with open(os.path.join(FAISS_INDEX_DIR, "qa_answers.pkl"), "wb") as f:
        pickle.dump(qa_answers, f)
    with open(os.path.join(FAISS_INDEX_DIR, "qa_questions.pkl"), "wb") as f:
        pickle.dump(qa_questions, f)

    # Building FAISS Index 2 — all data (Q&A + raw info)
    all_embeddings = _normalize(model.encode(all_content, convert_to_numpy=True))
    index2 = faiss.IndexFlatIP(dim)
    index2.add(all_embeddings)  # type: ignore[arg-type]
    faiss.write_index(index2, os.path.join(FAISS_INDEX_DIR, "index2.faiss"))

    # Saving all content to disk
    with open(os.path.join(FAISS_INDEX_DIR, "all_content.pkl"), "wb") as f:
        pickle.dump(all_content, f)

    print("Both indexes created and saved successfully.")


def load_indexes() -> tuple:
    # Loading saved indexes and metadata from disk
    index1 = faiss.read_index(os.path.join(FAISS_INDEX_DIR, "index1.faiss"))
    index2 = faiss.read_index(os.path.join(FAISS_INDEX_DIR, "index2.faiss"))
    with open(os.path.join(FAISS_INDEX_DIR, "qa_answers.pkl"), "rb") as f:
        qa_answers: list[str] = pickle.load(f)
    with open(os.path.join(FAISS_INDEX_DIR, "qa_questions.pkl"), "rb") as f:
        qa_questions: list[str] = pickle.load(f)
    with open(os.path.join(FAISS_INDEX_DIR, "all_content.pkl"), "rb") as f:
        all_content: list[str] = pickle.load(f)
    return index1, index2, qa_answers, qa_questions, all_content


def retrieve(query: str) -> dict:
    # Main retrieval — checks FAISS-1 first, falls back to FAISS-2 if no match
    index1, index2, qa_answers, qa_questions, all_content = load_indexes()

    # Embedding and normalizing the query
    q_vec = _normalize(model.encode([query], convert_to_numpy=True))

    # Searching FAISS-1 for a direct match
    scores1, indices1 = index1.search(q_vec, k=1)  # type: ignore[arg-type]
    top_score = float(scores1[0][0])
    top_idx = int(indices1[0][0])

    # Returning direct answer if score meets threshold (no API call)
    if top_score >= FAISS1_THRESHOLD:
        return {
            "type": "direct",
            "answer": qa_answers[top_idx],
            "matched_question": qa_questions[top_idx],
            "score": top_score
        }

    # Searching FAISS-2 for top-k relevant chunks
    scores2, indices2 = index2.search(q_vec, k=TOP_K_CHUNKS)  # type: ignore[arg-type]
    chunks = [all_content[i] for i in indices2[0] if i >= 0]

    # Returning chunks for llm.py to send to Qwen API
    return {
        "type": "context",
        "chunks": chunks,
        "scores": scores2[0].tolist()
    }


if __name__ == "__main__":
    # Running this file directly will build the indexes
    build_indexes()
    print("\nRunning test query...")
    result = retrieve("What type of creature is Buckbeak?")
    print(result)