# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from src.database import init_db
from routers import chat, session

app = FastAPI()
init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

app.mount("/static", StaticFiles(directory="frontend"), name="static")

app.include_router(chat.router)
app.include_router(session.router)

@app.get("/")
def serve_frontend():
    return FileResponse("frontend/index.html")