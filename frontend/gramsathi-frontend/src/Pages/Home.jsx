import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {

    const navigate = useNavigate();

       return (
    <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
    >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Content */}
        
            <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

                <div className="max-w-3xl text-center">

                    <span className="text-green-400 text-lg font-semibold">
                        🌾 Rural India • AI • Government Schemes
                    </span>

                    <h1 className="mt-4 text-6xl lg:text-7xl font-black text-white leading-tight">
                        GramSathi AI
                    </h1>

                    <p className="mt-6 text-2xl text-gray-200">
                        Find Government Schemes with Artificial Intelligence.
                    </p>

                    <p className="mt-4 text-gray-300 text-lg leading-8">
                        Discover schemes you're eligible for, chat in your own
                        language and receive personalized recommendations in
                        seconds.
                    </p>

                    <div className="flex justify-center gap-6 mt-10">

                        <button
                            onClick={() => navigate("/form")}
                            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105"
                        >
                            📋 Check Eligibility
                        </button>

                        <button
                            onClick={() => navigate("/chat")}
                            className="bg-white/15 border border-white/30 backdrop-blur-md hover:bg-white/25 px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105"
                        >
                            🤖 Talk to AI
                        </button>

                    </div>

                    <div className="flex justify-center gap-8 mt-16 text-gray-300">

                        <div>🎤 Voice Enabled</div>

                        <div>🌍 Multilingual</div>

                        <div>⚡ AI Powered</div>

                    </div>

                </div>

            </div>

        </div>
);
    
}

export default Home;