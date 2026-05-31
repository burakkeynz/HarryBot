import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.context import ConversationContext

# Testing that a new context starts empty
def test_initial_context_is_empty():
    ctx = ConversationContext()
    assert ctx.is_empty()

# Testing that adding a message updates the window
def test_add_message():
    ctx = ConversationContext()
    ctx.add("Who is Harry?", "Harry is a young wizard.")
    assert not ctx.is_empty()
    assert len(ctx.get_history()) == 1

# Testing sliding window drops oldest when full
def test_sliding_window_drops_oldest():
    ctx = ConversationContext()
    for i in range(6):
        ctx.add(f"Question {i}", f"Answer {i}")
    history = ctx.get_history()
    assert len(history) == 5
    assert history[0]["user"] == "Question 1"

# Testing format_for_prompt returns correct string
def test_format_for_prompt():
    ctx = ConversationContext()
    ctx.add("Who is Harry?", "Harry is a young wizard.")
    prompt = ctx.format_for_prompt()
    assert "User: Who is Harry?" in prompt
    assert "Assistant: Harry is a young wizard." in prompt

# Testing clear resets the window
def test_clear():
    ctx = ConversationContext()
    ctx.add("Who is Harry?", "Harry is a young wizard.")
    ctx.clear()
    assert ctx.is_empty()