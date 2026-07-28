function ChatBot() {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Chat with GramSathi AI
      </h2>

      <div className="border rounded-lg p-4 h-80 bg-gray-50 overflow-y-auto">

        <p className="text-gray-500">
          👋 Hello! Ask me about any government scheme.
        </p>

      </div>

      <input
        type="text"
        placeholder="Type your question..."
        className="w-full mt-4 border rounded-lg p-3"
      />

      <button
        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
      >
        Send
      </button>

    </div>
  );
}

export default ChatBot;