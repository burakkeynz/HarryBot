import os
from dotenv import load_dotenv

load_dotenv()

# Qwen API
QWEN_API_KEY = os.getenv("QWEN_API_KEY", "")
QWEN_BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
QWEN_MODEL = "qwen-plus"

# FAISS
FAISS_INDEX_DIR = "faiss_index"
EMBEDDING_MODEL = "all-MiniLM-L6-v2"

# Retrieval
FAISS1_THRESHOLD = 0.75   # if > 0.75, return answ 
TOP_K_CHUNKS = 3          # FAISS-2 chunk

# Memory
MEMORY_WINDOW_SIZE = 5    # Show last x window

# Data
DATA_PATH = "data/harry_potter_data_02.xlsx"