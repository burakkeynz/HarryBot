# routers/session.py
from fastapi import APIRouter
from src.database import get_sessions_by_house, get_messages_by_session, delete_session
from routers.chat import active_contexts

router = APIRouter()


@router.get("/session/{house}/list")
def get_sessions(house: str):
    # Fetching all sessions for a given house
    sessions = get_sessions_by_house(house)
    return {"sessions": sessions}


@router.get("/session/{session_id}/messages")
def get_messages(session_id: int):
    # Fetching all messages for a given session
    messages = get_messages_by_session(session_id)
    return {"messages": messages}


@router.delete("/session/{session_id}")
def remove_session(session_id: int):
    # Deleting a session and its messages
    delete_session(session_id)
    active_contexts.pop(session_id, None)
    return {"status": "ok"}