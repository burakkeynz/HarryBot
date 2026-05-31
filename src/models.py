# src/models.py
from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str
    house: str
    session_id: int = -1


class ChatResponse(BaseModel):
    answer: str
    source: str
    session_id: int


class NewSessionRequest(BaseModel):
    house: str


class NewSessionResponse(BaseModel):
    session_id: int