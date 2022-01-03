import Navbar from "./components/Navbar";
import CryptoChatArea from "./components/CryptoChatArea";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import GainCryptoDetails from "./components/GainCryptoDetails";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<CryptoChatArea />} />
                <Route path="/about" element={<About />} />
                <Route path="/gaincrypto/:id" element={<GainCryptoDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
