import Sidebar from "./components/Sidebar";
import Crypto from "./components/Crypto";
import ChatArea from "./components/ChatArea";

function App() {
    return (
        <div className="flex bg-blue-50">
            <div>
                <Sidebar />
            </div>
            <div>
                <Crypto />
            </div>
            {/* <div className="flex-grow">
                <ChatArea />
            </div> */}
        </div>
    );
}

export default App;
