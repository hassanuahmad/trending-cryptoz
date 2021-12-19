import Sidebar from "./components/Sidebar";
import Stocks from "./components/Stocks";
import ChatArea from "./components/ChatArea";

function App() {
    return (
        <div className="flex bg-blue-50">
            <Sidebar />
            <Stocks />
            <ChatArea />
        </div>
    );
}

export default App;
