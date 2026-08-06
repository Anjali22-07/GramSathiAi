import { useState, useRef, useEffect } from "react";
import api from "../Services/api";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello!\n\nI'm GramSathi AI.\nAsk me about any Government Scheme.",
    },
  ]);
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("en-IN");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = language;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      setMessage(event.results[0][0].transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };
  };

  const handleSend = async () => {
        console.log("handleSend called");

    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await api.post("/ai/chat", {
        message: userMessage,
      });
         
      const data = response.data;

let botReply = "";

if (data.totalEligibleSchemes === 0) {

    botReply =
        "😔 Sorry! Based on the information you provided, I couldn't find any eligible government schemes.";

} else {

    botReply =
        `🎉 Hey there!\n\n` +
        `You are eligible for ${data.totalEligibleSchemes} government scheme${data.totalEligibleSchemes > 1 ? "s" : ""}.\n\n`;

    data.eligibleSchemes.forEach((scheme, index) => {

        botReply +=
            `${index + 1}. ${scheme.schemeName}\n` +
            `📝 ${scheme.description}\n` +
            `🎁 Benefits: ${scheme.benefits}\n` +
            `📄 Documents: ${scheme.documentsRequired}\n` +
            `🔗 ${scheme.url}\n\n`;

    });
}

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Unable to contact the server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-[#212121] flex justify-center">
      <div className="w-full max-w-5xl flex flex-col">

        {/* Header */}

        <div className="border-b border-[#3d3d3d] h-14 flex items-center justify-between px-6 text-white">
          <h2 className="text-lg font-semibold">GramSathi AI</h2>

          <button
            onClick={() =>
              setMessages([
                {
                  sender: "bot",
                  text: "👋 Hello!\n\nI'm GramSathi AI.\nAsk me about any Government Scheme.",
                },
              ])
            }
            className="text-gray-300 hover:text-white"
          >
            + New Chat
          </button>
        </div>

        {/* Messages */}

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                    className={`inline-block max-w-[75%] px-4 py-2 rounded-2xl whitespace-pre-wrap break-words ${
                        msg.sender === "user"
                            ? "bg-gray-600 text-white ml-auto"
                            : "bg-[#2f2f2f] text-white"
                    }`}
                >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#2f2f2f] text-gray-300 px-5 py-4 rounded-2xl">
                Thinking...
              </div>
            </div>
          )}

          <div ref={messagesEndRef}></div>

        </div>

        {/* Input */}

        <div className="border-t border-[#3d3d3d] p-4 flex gap-3 bg-[#212121]">

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#2f2f2f] text-white border border-gray-600 rounded-lg px-3"
          >
            <option value="en-IN">🇬🇧 English</option>
            <option value="hi-IN">🇮🇳 Hindi</option>
            <option value="bn-IN">🇧🇩 Bengali</option>
            <option value="ta-IN">தமிழ் Tamil</option>
            <option value="te-IN">తెలుగు Telugu</option>
            <option value="mr-IN">मराठी Marathi</option>
            <option value="gu-IN">ગુજરાતી Gujarati</option>
          </select>

          <input
            type="text"
            value={message}
            placeholder="Ask about any government scheme..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="flex-1 bg-[#2f2f2f] text-white rounded-lg px-4 py-3 outline-none"
          />

          <button
            onClick={startListening}
            className={`px-4 rounded-lg text-white ${
              listening
                ? "bg-red-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            🎤
          </button>

          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-5 rounded-lg"
          >
            ➤
          </button>

        </div>
      </div>
    </div>
  );
}

export default ChatBot;