// House configuration. Themes, crests, mottos and greeting messages
const HOUSES = {
  gryffindor: {
    name: "Gryffindor",
    crest: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8B1A1A"/>
          <stop offset="100%" stop-color="#5A0E0E"/>
        </linearGradient>
      </defs>
      <path d="M50 4 L94 22 L94 68 Q94 104 50 118 Q6 104 6 68 L6 22 Z" fill="url(#gg)" stroke="#C9A84C" stroke-width="2.5"/>
      <path d="M50 11 L87 27 L87 67 Q87 98 50 111 Q13 98 13 67 L13 27 Z" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.4"/>
      <circle cx="50" cy="52" r="22" fill="#8B5E10" opacity="0.85"/>
      <circle cx="50" cy="52" r="18" fill="#A07020"/>
      <circle cx="50" cy="52" r="14" fill="#C9A84C"/>
      <circle cx="44" cy="49" r="3" fill="#2A1400"/>
      <circle cx="56" cy="49" r="3" fill="#2A1400"/>
      <circle cx="44.8" cy="48.2" r="1" fill="white"/>
      <circle cx="56.8" cy="48.2" r="1" fill="white"/>
      <ellipse cx="50" cy="55" rx="3" ry="2.2" fill="#7A3010"/>
      <path d="M45 58 Q50 62 55 58" fill="none" stroke="#7A3010" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="32" y1="54" x2="43" y2="56" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
      <line x1="32" y1="57" x2="43" y2="57" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
      <line x1="57" y1="56" x2="68" y2="54" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
      <line x1="57" y1="57" x2="68" y2="57" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
      <ellipse cx="50" cy="85" rx="16" ry="20" fill="#B89038"/>
      <path d="M34 75 Q26 68 28 58 Q32 50 38 54 Q44 58 40 70 L36 78 Z" fill="#C9A84C"/>
      <path d="M30 76 L27 82 M34 78 L32 84 M38 77 L37 83" stroke="#8B6010" stroke-width="1.2" stroke-linecap="round"/>
      <ellipse cx="38" cy="100" rx="10" ry="6" fill="#B89038"/>
      <ellipse cx="62" cy="100" rx="10" ry="6" fill="#B89038"/>
      <path d="M64 88 Q84 80 86 66 Q88 52 78 48" fill="none" stroke="#C9A84C" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="77" cy="45" rx="5" ry="8" fill="#8B6010" transform="rotate(-20 77 45)"/>
      <path d="M35 22 L50 14 L65 22" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.6"/>
      <circle cx="50" cy="13" r="3" fill="#C9A84C" opacity="0.7"/>
    </svg>`,
    tag: "House of the Brave",
    motto: "Where dwell the brave at heart",
    glow: "radial-gradient(ellipse, rgba(139,26,26,0.12) 0%, transparent 70%)",
  },
  slytherin: {
    name: "Slytherin",
    crest: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1A3A2A"/>
          <stop offset="100%" stop-color="#0A2018"/>
        </linearGradient>
      </defs>
      <path d="M50 4 L94 22 L94 68 Q94 104 50 118 Q6 104 6 68 L6 22 Z" fill="url(#sg)" stroke="#808080" stroke-width="2.5"/>
      <path d="M50 11 L87 27 L87 67 Q87 98 50 111 Q13 98 13 67 L13 27 Z" fill="none" stroke="#808080" stroke-width="1" opacity="0.35"/>
      <path d="M58 18 Q72 22 72 36 Q72 50 54 54 Q36 58 36 72 Q36 88 54 94 Q66 98 68 104"
            fill="none" stroke="#1A3A2A" stroke-width="13" stroke-linecap="round"/>
      <path d="M58 18 Q72 22 72 36 Q72 50 54 54 Q36 58 36 72 Q36 88 54 94 Q66 98 68 104"
            fill="none" stroke="#D8D8D8" stroke-width="9" stroke-linecap="round"/>
      <path d="M58 18 Q72 22 72 36 Q72 50 54 54 Q36 58 36 72 Q36 88 54 94 Q66 98 68 104"
            fill="none" stroke="#F0F0F0" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 4"/>
      <path d="M58 18 Q72 22 72 36 Q72 50 54 54 Q36 58 36 72 Q36 88 54 94 Q66 98 68 104"
            fill="none" stroke="#A0A0A0" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 6" opacity="0.5"/>
      <ellipse cx="54" cy="16" rx="12" ry="8" fill="#D0D0D0" transform="rotate(-30 54 16)"/>
      <ellipse cx="54" cy="16" rx="9" ry="5.5" fill="#E0E0E0" transform="rotate(-30 54 16)"/>
      <ellipse cx="48" cy="11" rx="2.5" ry="3" fill="#0A0A0A" transform="rotate(-30 48 11)"/>
      <ellipse cx="48" cy="11" rx="0.8" ry="2.2" fill="#CC8800" transform="rotate(-30 48 11)"/>
      <ellipse cx="43" cy="14" rx="1" ry="0.7" fill="#A0A0A0" transform="rotate(-30 43 14)"/>
      <path d="M40 17 L32 14" stroke="#CC0000" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M32 14 L28 11 M32 14 L28 17" stroke="#CC0000" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M35 22 L50 14 L65 22" fill="none" stroke="#A0A0A0" stroke-width="1.5" opacity="0.5"/>
      <circle cx="50" cy="13" r="3" fill="#A0A0A0" opacity="0.6"/>
    </svg>`,
    tag: "House of the Ambitious",
    motto: "Cunning folk use any means to achieve their ends",
    glow: "radial-gradient(ellipse, rgba(26,80,50,0.12) 0%, transparent 70%)",
  },
  hufflepuff: {
    name: "Hufflepuff",
    crest: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2A1F00"/>
          <stop offset="100%" stop-color="#1A1200"/>
        </linearGradient>
      </defs>
      <path d="M50 4 L94 22 L94 68 Q94 104 50 118 Q6 104 6 68 L6 22 Z" fill="url(#hg)" stroke="#E8C84A" stroke-width="2.5"/>
      <path d="M50 11 L87 27 L87 67 Q87 98 50 111 Q13 98 13 67 L13 27 Z" fill="none" stroke="#E8C84A" stroke-width="1" opacity="0.35"/>
      <clipPath id="sc"><path d="M50 11 L87 27 L87 67 Q87 98 50 111 Q13 98 13 67 L13 27 Z"/></clipPath>
      <g clip-path="url(#sc)" opacity="0.1">
        <rect x="13" y="11" width="12" height="100" fill="#E8C84A"/>
        <rect x="37" y="11" width="12" height="100" fill="#E8C84A"/>
        <rect x="61" y="11" width="12" height="100" fill="#E8C84A"/>
      </g>
      <ellipse cx="50" cy="84" rx="22" ry="16" fill="#6A5028"/>
      <ellipse cx="50" cy="84" rx="20" ry="14" fill="#7A6030" opacity="0.6"/>
      <ellipse cx="50" cy="58" rx="20" ry="16" fill="#6A5028"/>
      <ellipse cx="50" cy="58" rx="6" ry="14" fill="#E8E4D8" opacity="0.95"/>
      <ellipse cx="36" cy="58" rx="10" ry="14" fill="#100C00" opacity="0.75"/>
      <ellipse cx="64" cy="58" rx="10" ry="14" fill="#100C00" opacity="0.75"/>
      <circle cx="41" cy="53" r="3.5" fill="#0A0800"/>
      <circle cx="59" cy="53" r="3.5" fill="#0A0800"/>
      <circle cx="41.8" cy="52.2" r="1.2" fill="white" opacity="0.8"/>
      <circle cx="59.8" cy="52.2" r="1.2" fill="white" opacity="0.8"/>
      <ellipse cx="50" cy="63" rx="5" ry="3.5" fill="#100C00"/>
      <ellipse cx="33" cy="43" rx="7" ry="6" fill="#5A4020" transform="rotate(-20 33 43)"/>
      <ellipse cx="34" cy="43" rx="4" ry="3.5" fill="#3A2810" transform="rotate(-20 34 43)"/>
      <ellipse cx="67" cy="43" rx="7" ry="6" fill="#5A4020" transform="rotate(20 67 43)"/>
      <ellipse cx="66" cy="43" rx="4" ry="3.5" fill="#3A2810" transform="rotate(20 66 43)"/>
      <ellipse cx="30" cy="96" rx="11" ry="7" fill="#5A4020"/>
      <ellipse cx="70" cy="96" rx="11" ry="7" fill="#5A4020"/>
      <path d="M22 98 L19 104 M27 100 L25 106 M32 99 L31 105 M37 98 L37 104" stroke="#3A2810" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M62 98 L59 104 M67 100 L65 106 M72 99 L73 105 M77 98 L78 104" stroke="#3A2810" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M35 22 L50 14 L65 22" fill="none" stroke="#E8C84A" stroke-width="1.5" opacity="0.6"/>
      <circle cx="50" cy="13" r="3" fill="#E8C84A" opacity="0.7"/>
    </svg>`,
    tag: "House of the Loyal",
    motto: "Those patient, those loyal, those true",
    glow: "radial-gradient(ellipse, rgba(120,100,0,0.12) 0%, transparent 70%)",
  },
  ravenclaw: {
    name: "Ravenclaw",
    crest: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1A2A4A"/>
          <stop offset="100%" stop-color="#0A1830"/>
        </linearGradient>
      </defs>
      <path d="M50 4 L94 22 L94 68 Q94 104 50 118 Q6 104 6 68 L6 22 Z" fill="url(#rg)" stroke="#6A9FD8" stroke-width="2.5"/>
      <path d="M50 11 L87 27 L87 67 Q87 98 50 111 Q13 98 13 67 L13 27 Z" fill="none" stroke="#6A9FD8" stroke-width="1" opacity="0.35"/>
      <path d="M48 72 Q24 60 10 38 Q18 44 28 54 Q36 62 46 68 Z" fill="#1E2840"/>
      <path d="M48 72 Q26 64 14 44" fill="none" stroke="#2A3A5A" stroke-width="2"/>
      <path d="M46 67 Q24 60 12 40" fill="none" stroke="#2A3A5A" stroke-width="1.5"/>
      <path d="M44 62 Q26 54 16 36" fill="none" stroke="#3A4A6A" stroke-width="1"/>
      <path d="M52 72 Q76 60 90 38 Q82 44 72 54 Q64 62 54 68 Z" fill="#1E2840"/>
      <path d="M54 67 Q76 60 88 44" fill="none" stroke="#2A3A5A" stroke-width="2"/>
      <path d="M56 62 Q76 56 86 40" fill="none" stroke="#2A3A5A" stroke-width="1.5"/>
      <path d="M58 57 Q74 50 82 36" fill="none" stroke="#3A4A6A" stroke-width="1"/>
      <ellipse cx="50" cy="82" rx="12" ry="18" fill="#1E2840"/>
      <ellipse cx="50" cy="80" rx="7" ry="12" fill="#D0D8E8" opacity="0.5"/>
      <ellipse cx="50" cy="60" rx="8" ry="6" fill="#1E2840"/>
      <circle cx="50" cy="50" r="13" fill="#1E2840"/>
      <ellipse cx="50" cy="44" rx="8" ry="5" fill="#D8E0F0" opacity="0.75"/>
      <circle cx="43" cy="49" r="4" fill="#080810"/>
      <circle cx="57" cy="49" r="4" fill="#080810"/>
      <circle cx="43" cy="49" r="2.5" fill="#C8A010"/>
      <circle cx="57" cy="49" r="2.5" fill="#C8A010"/>
      <circle cx="43" cy="49" r="1" fill="#080810"/>
      <circle cx="57" cy="49" r="1" fill="#080810"/>
      <circle cx="43.6" cy="48.4" r="0.6" fill="white" opacity="0.8"/>
      <circle cx="57.6" cy="48.4" r="0.6" fill="white" opacity="0.8"/>
      <path d="M47 54 L50 54 L56 60 Q52 62 49 60 Z" fill="#C8A020"/>
      <path d="M40 98 L34 106 M40 98 L39 107 M40 98 L45 105 M40 98 L46 108" stroke="#8A7030" stroke-width="2" stroke-linecap="round"/>
      <path d="M60 98 L55 106 M60 98 L60 107 M60 98 L65 105 M60 98 L54 108" stroke="#8A7030" stroke-width="2" stroke-linecap="round"/>
      <path d="M35 22 L50 14 L65 22" fill="none" stroke="#6A9FD8" stroke-width="1.5" opacity="0.6"/>
      <circle cx="50" cy="13" r="3" fill="#6A9FD8" opacity="0.7"/>
    </svg>`,
    tag: "House of the Wise",
    motto: "Wit beyond measure is man's greatest treasure",
    glow: "radial-gradient(ellipse, rgba(26,60,140,0.12) 0%, transparent 70%)",
  },
};

// App state
let currentHouse = null;
let currentSessionId = null;
let isWaiting = false;

// Selecting a house and transitioning to chat screen
async function selectHouse(house) {
  currentHouse = house;
  currentSessionId = -1;

  const sel = document.getElementById("selection-screen");
  sel.style.transition = "opacity 0.5s";
  sel.style.opacity = "0";

  setTimeout(async () => {
    sel.style.display = "none";
    const app = document.getElementById("chat-app");
    app.style.display = "flex";
    app.style.opacity = "0";
    app.style.transition = "opacity 0.5s";

    applyHouseTheme(house);
    document.getElementById("messages").innerHTML = "";
    addBotMessage(getGreeting());
    await loadSessionHistory();

    setTimeout(() => {
      app.style.opacity = "1";
    }, 50);
  }, 500);
}

// Applying house-specific CSS class and UI elements
function applyHouseTheme(house) {
  const h = HOUSES[house];
  document.body.className = house;
  document.getElementById("headerCrest").innerHTML = h.crest;
  document.getElementById("houseTag").textContent = h.tag;
  document.getElementById("houseMotto").textContent = h.motto;
  document.getElementById("ambientGlow").style.background = h.glow;
}

// Creating a new session on the backend
async function startNewSession() {
  const res = await fetch("/session/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ house: currentHouse }),
  });
  const data = await res.json();
  currentSessionId = data.session_id;
  document.getElementById("messages").innerHTML = "";
  addBotMessage(getGreeting());
}

// Loading past sessions for the current house into sidebar
// Loading past sessions for the current house into sidebar
async function loadSessionHistory() {
  const res = await fetch(`/session/${currentHouse}/list`);
  const data = await res.json();
  const list = document.getElementById("historyList");
  list.innerHTML = "";

  data.sessions.forEach((session) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.dataset.sessionId = session.id;

    const label = document.createElement("span");
    label.textContent = session.title || "Untitled session";
    label.style.flex = "1";
    label.style.overflow = "hidden";
    label.style.textOverflow = "ellipsis";
    label.style.whiteSpace = "nowrap";
    label.onclick = () => loadSession(session.id);

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "×";
    deleteBtn.style.cssText = `
      margin-left: 8px;
      opacity: 0;
      cursor: pointer;
      font-size: 16px;
      color: var(--h-primary);
      flex-shrink: 0;
      transition: opacity 0.2s;
    `;
    deleteBtn.onclick = async (e) => {
      e.stopPropagation();
      await deleteSession(session.id);
    };

    item.style.display = "flex";
    item.style.alignItems = "center";
    item.appendChild(label);
    item.appendChild(deleteBtn);

    item.addEventListener("mouseenter", () => (deleteBtn.style.opacity = "1"));
    item.addEventListener("mouseleave", () => (deleteBtn.style.opacity = "0"));

    list.appendChild(item);
  });
}

// Deleting a session
async function deleteSession(session_id) {
  await fetch(`/session/${session_id}`, { method: "DELETE" });
  if (currentSessionId === session_id) {
    currentSessionId = -1;
    document.getElementById("messages").innerHTML = "";
    addBotMessage(getGreeting());
  }
  await loadSessionHistory();
}

// Loading a past session's messages into chat
async function loadSession(session_id) {
  currentSessionId = session_id;
  const res = await fetch(`/session/${session_id}/messages`);
  const data = await res.json();

  document.getElementById("messages").innerHTML = "";
  data.messages.forEach((msg) => {
    if (msg.role === "user") addUserMessage(msg.content);
    else addBotMessage(msg.content);
  });
}

// Switching back to house selection screen
function switchHouse() {
  const app = document.getElementById("chat-app");
  app.style.transition = "opacity 0.4s";
  app.style.opacity = "0";

  setTimeout(() => {
    app.style.display = "none";
    document.body.className = "";
    currentSessionId = null;
    currentHouse = null;

    const sel = document.getElementById("selection-screen");
    sel.style.display = "flex";
    sel.style.opacity = "0";
    setTimeout(() => {
      sel.style.transition = "opacity 0.4s";
      sel.style.opacity = "1";
    }, 50);
  }, 400);
}

// Starting a new chat within the same house
async function newChat() {
  currentSessionId = -1;
  document.getElementById("messages").innerHTML = "";
  addBotMessage(getGreeting());
}

// Returning house-specific greeting message
function getGreeting() {
  const greetings = {
    gryffindor:
      "Gryffindor, where the brave at heart find their home. It is our choices that show what we truly are, far more than our abilities. Ask what you will.",
    slytherin:
      "Slytherin; a house of ambition, cunning, and resourcefulness. Only those with the will to achieve greatness find their way here. What knowledge do you seek?",
    hufflepuff:
      "Hufflepuff; where hard work, patience, and loyalty are prized above all. I will teach the lot and treat them just the same. What would you like to know?",
    ravenclaw:
      "Wit beyond measure is man's greatest treasure. You have found Ravenclaw; where the cleverest always rise to the top. What wisdom do you seek?",
  };
  return greetings[currentHouse];
}

// Sending user message to backend and displaying response
async function sendMessage() {
  if (isWaiting) return;

  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addUserMessage(text);
  input.value = "";
  input.style.height = "auto";

  isWaiting = true;
  const typingEl = showTyping();

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: text,
        house: currentHouse,
        session_id: currentSessionId,
      }),
    });

    const data = await response.json();
    typingEl.remove();
    addBotMessage(data.answer);

    // Updating session id from response (first message creates session)
    if (currentSessionId === -1) {
      currentSessionId = data.session_id;
      await loadSessionHistory();
    }
  } catch {
    typingEl.remove();
    addBotMessage("Something went wrong. Please try again.");
  } finally {
    isWaiting = false;
  }
}

// Adding bot message bubble to chat
function addBotMessage(text) {
  const h = HOUSES[currentHouse];
  const msgs = document.getElementById("messages");
  const div = document.createElement("div");
  div.className = "message bot";
  div.innerHTML = `
    <div class="avatar bot">${h.crest}</div>
    <div class="bubble bot">
      <div class="sender">HARRYBOT</div>
      ${text}
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// Adding user message bubble to chat
function addUserMessage(text) {
  const msgs = document.getElementById("messages");
  const div = document.createElement("div");
  div.className = "message user";
  div.innerHTML = `
    <div class="avatar user">🧙</div>
    <div class="bubble user">
      <div class="sender">YOU</div>
      ${text}
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// Showing animated typing indicator
function showTyping() {
  const h = HOUSES[currentHouse];
  const msgs = document.getElementById("messages");
  const div = document.createElement("div");
  div.className = "message bot";
  div.innerHTML = `
    <div class="avatar bot">${h.crest}</div>
    <div class="typing">
      <div class="tdot"></div>
      <div class="tdot"></div>
      <div class="tdot"></div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

// Handling Enter key to send message
function handleKey(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

// Auto-resizing textarea as user types
function autoResize(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 110) + "px";
}

// Rendering SVG crests on selection screen
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(HOUSES).forEach((house) => {
    const el = document.getElementById(`crest-${house}`);
    if (el) el.innerHTML = HOUSES[house].crest;
  });
});
