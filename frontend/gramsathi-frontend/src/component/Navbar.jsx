import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-400 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-10 px-8 py-5">

        <h1 className="text-3xl font-bold text-green-950">
          🌾 GramSathi AI
        </h1>
          <div className="flex justify-between gap-6 mt-10">

                         <button
                            onClick={() => navigate("/")}
                            className="px-5 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-gray-700 transition"
                        >
                             Home
                        </button>

                        <button
                            onClick={() => navigate("/form")}
                            className="px-5 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-gray-700 transition"
                        >
                            📋 Form
                        </button>

                        <button
                            onClick={() => navigate("/chat")}
                            className="px-5 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-gray-700 transition"
                        >
                            🤖 Talk to AI
                        </button>

                    
        <button
          className="px-5 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
        >
          About
        </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;