import ChatArea from "./ChatArea";
import Crypto from "./Crypto";
import News from "./News";

function CryptoChatArea() {
    return (
        <div className="grid grid-cols-2">
            <div>
                <Crypto />
            </div>
            <div>
                <ChatArea />
                <News />
            </div>
        </div>
    );
}

export default CryptoChatArea;
