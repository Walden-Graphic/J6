import React, { useState, useRef, useEffect } from "react";

export default function ChatBox({ messages, onSend }) {
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        height: "calc(100vh - 100px)",
        background: "#0b0f14",
        borderRadius: 12,
        border: "1px solid #1b2836",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          padding: 12,
          overflowY: "auto",
          lineHeight: 1.4
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: 10,
              whiteSpace: "pre-wrap",
              color:
                m.role === "user"
                  ? "#e2f3e8"
                  : m.role === "assistant"
                  ? "#9ad29f"
                  : "#8aa6b3"
            }}
          >
            <strong style={{ opacity: 0.8 }}>
              {m.role === "user" ? "You" : m.role === "assistant" ? "J6" : "System"}
              :
            </strong>{" "}
            {m.content}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const value = text.trim();
          if (!value) return;
          onSend(value);
          setText("");
        }}
        style={{
          display: "flex",
          gap: 8,
          padding: 10,
          borderTop: "1px solid #1b2836",
          background: "#0d131a"
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Say something…"
          style={{
            flex: 1,
            background: "#0f1620",
            color: "#cde6d0",
            border: "1px solid #223144",
            borderRadius: 8,
            padding: "10px 12px",
            outline: "none"
          }}
        />
        <button
          type="submit"
          style={{
            background: "#1f8a52",
            color: "white",
            border: "none",
            borderRadius: 8,
            padding: "10px 14px",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}