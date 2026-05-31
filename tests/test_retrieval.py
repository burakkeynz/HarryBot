# tests/test_retrieval.py
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import pytest
from src.retrieval import retrieve

# Testing FAISS-1 direct retrieval — exact question match should skip API call
def test_direct_retrieval_exact_match():
    result = retrieve("What type of creature is Buckbeak?")
    assert result["type"] == "direct"
    assert "hippogriff" in result["answer"].lower()
    assert result["score"] >= 0.75

# Testing FAISS-1 direct retrieval — similar question should still match
def test_direct_retrieval_similar_question():
    result = retrieve("What kind of animal is Buckbeak?")
    assert result["type"] == "direct"
    assert result["score"] >= 0.75

# Testing FAISS-2 context retrieval — off-topic HP question should fall back
def test_context_retrieval_fallback():
    result = retrieve("Tell me about the Forbidden Forest creatures")
    assert result["type"] == "context"
    assert len(result["chunks"]) > 0
    assert len(result["chunks"]) <= 3

# Testing FAISS-2 chunks are relevant — should contain HP-related content
def test_context_chunks_are_relevant():
    result = retrieve("Who teaches Divination at Hogwarts?")
    assert result["type"] in ["direct", "context"]
    if result["type"] == "context":
        combined = " ".join(result["chunks"]).lower()
        assert any(word in combined for word in ["trelawney", "divination", "hogwarts"])

# Testing retrieve returns correct structure for direct type
def test_direct_result_structure():
    result = retrieve("What position does Harry play in Quidditch?")
    assert "type" in result
    if result["type"] == "direct":
        assert "answer" in result
        assert "matched_question" in result
        assert "score" in result

# Testing retrieve returns correct structure for context type
def test_context_result_structure():
    result = retrieve("What is the Forbidden Forest?")
    assert "type" in result
    if result["type"] == "context":
        assert "chunks" in result
        assert isinstance(result["chunks"], list)