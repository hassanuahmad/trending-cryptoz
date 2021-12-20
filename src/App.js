import Sidebar from "./components/Sidebar";
import Crypto from "./components/Crypto";
import ChatArea from "./components/ChatArea";

function App() {
    return (
        <div className="flex bg-blue-50">
            <Sidebar />
            <Crypto />
            <ChatArea />
        </div>
    );
}

export default App;
