import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from collections import deque
from config import MEMORY_WINDOW_SIZE


class ConversationContext:
    # Managing sliding window memory for follow-up question support

    def __init__(self):
        # Initializing the sliding window with max size from config
        self.window: deque = deque(maxlen=MEMORY_WINDOW_SIZE)

    def add(self, user_message: str, bot_response: str) -> None:
        # Adding a new Q&A pair to the conversation window
        self.window.append({
            "user": user_message,
            "bot": bot_response
        })

    def get_history(self) -> list[dict]:
        # Returning the current conversation history as a list
        return list(self.window)

    def format_for_prompt(self) -> str:
        # Formatting conversation history for injection into system prompt
        if not self.window:
            return ""

        lines = []
        for turn in self.window:
            lines.append(f"User: {turn['user']}")
            lines.append(f"Assistant: {turn['bot']}")

        return "\n".join(lines)

    def clear(self) -> None:
        # Clearing all conversation history
        self.window.clear()

    def is_empty(self) -> bool:
        # Checking if conversation history is empty
        return len(self.window) == 0