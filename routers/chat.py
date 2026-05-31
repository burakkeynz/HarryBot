# routers/chat.py
import re
from fastapi import APIRouter, HTTPException
from src.models import ChatRequest, ChatResponse
from src.llm import chat
from src.context import ConversationContext
from src.database import save_message, create_session

router = APIRouter()

# In-memory store for active contexts per session
active_contexts: dict[int, ConversationContext] = {}

FORMAT_PATTERNS = [
    r',?\s*(tell me|answer|reply|respond|say it|write|explain)\s+in\s+\d+\s+words?[.,!?]*\s*$',
    r',?\s*in\s+\d+\s+words?[.,!?]*\s*$',
    r',?\s*just\s+\d+\s+words?[.,!?]*\s*$',
    r',?\s*(just|only)\s+\d+[.,!?]*\s*$',
    r',?\s*(be brief|be concise|keep it short|in one sentence|briefly)[.,!?]*\s*$',
    r'^\s*(just|only|please)?\s*(answer|tell me|say it|respond|reply)\s+in\s+\d+\s+words?[,.]?\s*',
    r'^\s*(just|only|please)\s+in\s+\d+\s+words?[,.]?\s*',
    r'^\s*(just|only|please)\s+\d+\s+words?[,.]?\s*',
    r'^\s*in\s+\d+\s+words?[,.]?\s*',
    r'^\s*please\s+just\s+in\s+\d+\s+words?[.,!?]*\s*$',
    r'^\s*i said\s+.*\d+\s+words?[.,!?]*\s*$',
    r'^\s*\d+\s+words?\s*(only|just)?[.,!?]*\s*$',
    r'^\s*(please\s+)?(just\s+)?in\s+\d+\s+words?[.,!?]*\s*$',
    r'^\s*i said\s+(just\s+)?.*$',
    r'^\s*(please\s+)?(just\s+)?(only\s+)?$',
    r'\d+\s+words?\s*(not\s+\d+)?[.,!?]*\s*$',
    r'^\s*(please|just|only)(\s+(please|just|only))*\s*$',
    r',?\s*(answer|reply|respond|tell me|explain|write)\s+in\s+(turkish|french|german|spanish|italian|arabic|chinese|japanese|russian|portuguese)[.,!?]*\s*$',
    r',?\s*in\s+(turkish|french|german|spanish|italian|arabic|chinese|japanese|russian|portuguese)[.,!?]*\s*$',
    r'^\s*(answer|reply|respond)\s+in\s+(turkish|french|german|spanish|italian|arabic|chinese|japanese|russian|portuguese)[.,!?]*\s*',
]

def strip_format_directives(message: str) -> str:
    # Removing format directives from user message before sending to agent
    cleaned = message
    for pattern in FORMAT_PATTERNS:
        cleaned = re.sub(pattern, '', cleaned, flags=re.IGNORECASE)
    return cleaned.strip()


@router.post("/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    # Handling incoming chat messages and returning bot response
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    # Creating session on first message, not on house selection
    if request.session_id == -1:
        session_id = create_session(request.house, title=request.message[:40])
        active_contexts[session_id] = ConversationContext()
    else:
        session_id = request.session_id
        if session_id not in active_contexts:
            active_contexts[session_id] = ConversationContext()

    context = active_contexts[session_id]

    # Stripping format directives before sending to agent
    clean_message = strip_format_directives(request.message)

    # If only a format directive was sent, return last answer silently
    if not clean_message:
        history = context.get_history()
        last_answer = history[-1]["bot"] if history else "Please ask a Harry Potter question."
        return ChatResponse(
            answer=last_answer,
            source="format_blocked",
            session_id=session_id
        )

    result = chat(clean_message, context)

    # Saving original message to database
    save_message(session_id, "user", request.message)
    save_message(session_id, "bot", result["answer"])

    return ChatResponse(
        answer=result["answer"],
        source=result["source"],
        session_id=session_id
    )


@router.post("/reset")
def reset_context():
    # Clearing all active contexts
    active_contexts.clear()
    return {"status": "ok"}