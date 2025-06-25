import { useState, useEffect, useRef } from "react";
const techLogo ="https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ChatbotMaxineUsu%C3%A1rio/Techsyn_logo_nova.png";
const techLogo2 = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ChatbotMaxineUsu%C3%A1rio/logo_sphere.png";
const Maxine = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/MaxineImages/Maxine.png";

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sideMessage, setSideMessage] = useState(null);
  const timeoutRef = useRef(null);
  const messagesEndRef = useRef(null);
  const initialMessageRef = useRef(null);
  const [animationDirection, setAnimationDirection] = useState("");

  async function fetchInitialMessage() {
    try {
      const res = await fetch("http://localhost:5000/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Start" }),
      });
      const data = await res.json();
      return (
        data.reply ||
        "👋 Olá! Seja bem-vindo(a) à TechSyn. Como posso te ajudar hoje?"
      );
    } catch {
      return "👋 Olá! Seja bem-vindo(a) à TechSyn. Como posso te ajudar hoje?";
    }
  }

  useEffect(() => {
    fetchInitialMessage().then((msg) => {
      initialMessageRef.current = msg;
      timeoutRef.current = setTimeout(() => {
        setSideMessage(msg);
      }, 5000);
    });
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (open) {
      setMessages([
        {
          from: "bot",
          text:
            initialMessageRef.current ||
            "👋 Olá! Seja bem-vindo(a) à TechSyn. Como posso te ajudar hoje?",
        },
      ]);
      setSideMessage(null);
      clearTimeout(timeoutRef.current);
    }
  }, [open]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function handleToggleChat() {
    setAnimationDirection(open ? "rotate-out" : "rotate-in");
    setOpen(!open);
  }

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });
      const data = await res.json();
      const botMsg = {
        from: "bot",
        text: data.reply || "Desculpe, não entendi.",
      };

      setTimeout(() => {
        setMessages((msgs) => [...msgs, botMsg]);
        setLoading(false);
      }, 1500);
    } catch (error) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          { from: "bot", text: "Desculpe, ocorreu um erro." },
        ]);
        setLoading(false);
      }, 1500);
    }
  }

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 0.2; }
            20% { opacity: 1; }
            100% { opacity: 0.2; }
          }

          @keyframes rotateIn {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes rotateOut {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }

          .rotate-in {
            animation: rotateIn 1.3s ease forwards;
          }

          .rotate-out {
            animation: rotateOut 1.3s ease forwards;
          }

          .side-message-bubble {
            position: fixed;
            bottom: 100px;
            right: 10px;
            max-width: 250px;
            background-image: linear-gradient(45deg, #5F54D7, #972FDB);
            color: white;
            padding: 12px 16px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgb(120,84,217);
            cursor: pointer;
            z-index: 1000;
            font-size: 14px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.4;
          }

          .side-message-bubble::after {
            content: "";
            position: absolute;
            bottom: -12px;
            right: 30px;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 12px solid #833bd9;
          }

          .typing-indicator {
            display: inline-block;
            width: 10px;
            height: 10px;
            margin: 0 2px;
            background-color: #FFFFFF;
            border-radius: 50%;
            animation: blink 1.4s infinite both;
          }

          .typing-indicator:nth-child(2) {
            animation-delay: 0.2s;
          }

          .typing-indicator:nth-child(3) {
            animation-delay: 0.4s;
          }
        `}
      </style>

      <button
        onClick={handleToggleChat}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: 20,
          right: 15,
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: open ? "#9232DA" : "#5F54D7",
          color: "white",
          fontSize: 24,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(95,84,215,0.6)",
          zIndex: 1000,
          transition: "background-color 0.5s ease",
        }}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        <img
          src={techLogo2}
          alt="Logo"
          className={animationDirection}
          style={{ width: "auto", height: 50 }}
        />
      </button>

      {!open && sideMessage && (
        <div
          className="side-message-bubble"
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
          }}
        >
          {sideMessage}
        </div>
      )}

      <div
        style={{
          position: "fixed",
          bottom: 90,
          right: 57,
          width: 320,
          height: 420,
          backgroundImage: "linear-gradient(45deg, #FFFFFF, #D0CDCD)",
          borderRadius: 16,
          border: "1px solid #00000033",
          boxShadow: "0 8px 20px rgba(95, 84, 215, 0.4)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#FFFFFF",
          zIndex: 1000,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          style={{
            backgroundImage: "linear-gradient(45deg, #5F54D7, #972FDB)",
            padding: 12,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            fontWeight: "bold",
            fontSize: 18,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={techLogo} alt="TechSyn" style={{ height: "40px" }} />
        </div>

        <div
          style={{
            flex: 1,
            padding: 12,
            overflowY: "auto",
            fontSize: 14,
            color: "#000000",
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                marginBottom: 12,
                display: "flex",
                justifyContent: m.from === "user" ? "flex-end" : "flex-start",
                alignItems: "flex-start",
                gap: 8,
                textAlign: m.from === "user" ? "right" : "left",
              }}
            >
              {m.from === "bot" && (
                <div
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    backgroundColor: "#5F54D7",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={Maxine}
                    alt="Bot"
                    style={{
                      width: "auto",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <span
                style={{
                  display: "inline-block",
                  backgroundImage:
                    m.from === "user"
                      ? "linear-gradient(45deg, #5F54D7, #5F54D7)"
                      : "linear-gradient(45deg, #5F54D7, #972FDB)",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: 12,
                  maxWidth: "80%",
                  whiteSpace: "pre-wrap",
                }}
              >
                {m.text}
              </span>
            </div>
          ))}

          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: "#5F54D7",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Maxine}
                  alt="Bot"
                  style={{ width: "auto", height: "50px", objectFit: "cover" }}
                />
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundImage: "linear-gradient(45deg, #5F54D7, #972FDB)",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: 12,
                }}
              >
                <span className="typing-indicator"></span>
                <span className="typing-indicator"></span>
                <span className="typing-indicator"></span>
              </span>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </div>

        <div
          style={{
            padding: 8,
            display: "flex",
            gap: 8,
            borderTop: "1px solid #ccc",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              padding: 8,
              borderRadius: 8,
              border: "1px solid #ccc",
              outline: "none",
              fontSize: 14,
              color: "#000",
            }}
            placeholder="Digite sua mensagem..."
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "8px 12px",
              backgroundColor: "#5F54D7",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}
