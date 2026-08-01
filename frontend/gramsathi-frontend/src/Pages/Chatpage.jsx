import Navbar from "../component/Navbar";
import ChatBot from "../component/ChatBot";

function ChatPage() {
  return (
    <>
      <Navbar />
       <div className="flex justify-center px-4 py-4" >
      <ChatBot />
      </div>
    </>
  );
}

export default ChatPage;