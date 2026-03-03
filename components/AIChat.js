"use client";
import { useState, useRef, useEffect } from "react";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setChat((prev) => [...prev, { type: "user", text: userMessage }]);
    setMessage("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    setChat((prev) => [
      ...prev,
      { type: "bot", text: data.reply },
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #000, #444)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "24px",
          zIndex: 1000,
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          transition: "0.3s",
        }}
      >
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "340px",
            height: "450px",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "15px",
              background: "#000",
              color: "#fff",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            🤖 Vivek AI Assistant
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "15px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {chat.map((item, index) => (
              <div
                key={index}
                style={{
                  alignSelf:
                    item.type === "user" ? "flex-end" : "flex-start",
                  background:
                    item.type === "user" ? "#000" : "#f1f1f1",
                  color:
                    item.type === "user" ? "#fff" : "#000",
                  padding: "10px 14px",
                  borderRadius: "15px",
                  maxWidth: "75%",
                  fontSize: "14px",
                }}
              >
                {item.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: "10px",
              borderTop: "1px solid #eee",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about Vivek..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                outline: "none",
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                padding: "10px 16px",
                borderRadius: "20px",
                border: "none",
                background: "#000",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}