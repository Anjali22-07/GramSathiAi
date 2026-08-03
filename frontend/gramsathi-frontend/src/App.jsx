import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import FormPage from "./Pages/FormPage";
import ChatPage from "./Pages/ChatPage";
import Result from "./Pages/Result";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/form" element={<FormPage />} />

            <Route path="/chat" element={<ChatPage />} />

            <Route path="/result" element={<Result />} />

        </Routes>

    );

}

export default App;