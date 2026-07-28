import { useState } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import EligibilityForm from "../component/ElgibilityForm";
import ChatBot from "../component/ChatBot";

function App() {

  const [mode, setMode] = useState("form");



  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">

      <Navbar />

      <Hero />

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">

        <button
          onClick={() => setMode("form")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            mode === "form"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          📝 Fill Form
        </button>

        <button
          onClick={() => setMode("chat")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            mode === "chat"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          🤖 Chat with AI
        </button>

      </div>

       <div className="flex justify-center" style={{ marginTop: "25px"}}>
      {mode === "form" ? 
      <EligibilityForm /> : <ChatBot />}
       </div>
    </div>
  );
}

export default App;