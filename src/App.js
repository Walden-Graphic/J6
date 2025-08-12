import React, { useState } from "react";
import ChatBox from "./components/ChatBox";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are J6, a friendly assistant." }
  ]);

  const handleSend = async (text) => {
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);

    // Placeholder AI behavior: echo with a prefix so the app builds without API keys.
    const reply = `J6: ${text}`;
    setMessages([...next, { role: "assistant", content: reply }]);
  };

  return (
    <div style={{ padding: 16 }}>
      <header style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 24, fontWeight: 700 }}>J6</div>
        <div style={{ opacity: 0.7, fontSize: 14 }}>online</div>
      </header>
      <ChatBox messages={messages} onSend={handleSend} />
    </div>
  );
}