import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import FormPage from "./Pages/FormPage";
import ChatPage from "./Pages/ChatPage";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/form" element={<FormPage />} />

            <Route path="/chat" element={<ChatPage />} />

        </Routes>

    );

}

export default App;