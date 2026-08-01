import { useState } from "react";

function ChatBot() {

    const [message, setMessage] = useState("");
     const [listening, setListening] = useState(false);
     const [language, setLanguage] = useState("hi-IN");

    const startListening = () => {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech Recognition is not supported.");
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

    recognition.onerror = (event) => {
        console.log(event.error);
        setListening(false);
    };
};
const handleSend = () => {

    if (!message.trim()) return;

    console.log("Sending:", message);

    // Later you'll call your Spring Boot API here
    // const response = await api.post("/response", { message });

    setMessage("");
};

    return (
        <div className=" w-full bg-[#212121] flex justify-center">

            <div className="w-full max-w-5xl flex flex-col h-screen">

                {/* Header */}

                <div className="border-b border-[#3d3d3d] h-12 flex items-center justify-between px-6">



                    <button className="text-gray-300 hover:text-white">
                        + New Chat
                    </button>

                </div>

                {/* Messages */}

                <div className="flex-1  px-8 py-8 space-y-6">

                    <div className="flex">

                        <div className="bg-[#2f2f2f] rounded-2xl px-5 py-4  w-full text-white">

                            👋 Hello!

                            <br /><br />

                            I'm GramSathi AI.

                            Ask me about any Government Scheme.

                        </div>

                    </div>

                   

                </div>

                {/* Input */}

               
               <div className="flex h-12 gap-3 mt-4">

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
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type or speak your question..."
                      className="flex-1 bg-[#2f2f2f] text-white rounded-lg px-4 py-3"
                  />

                  <button
                      onClick={startListening}
                      className={`px-4 rounded-lg w-8 ${
                          listening ? "bg-red-500" : "bg-gray-700"
                      }`}
                  >
                      🎤
                  </button>

                  <button
                      onClick={handleSend}
                      className="bg-black hover:bg-gray-700 px-4 w-8 rounded-lg"
                  >
                      ➤
                  </button>

              </div>

            </div>

        </div>
    );
}

export default ChatBot;