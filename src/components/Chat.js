import { useState, useEffect, useRef } from "react";
import { db, onSnapshot, collection, limit, orderBy, query } from "../Firebase";
import SendMessage from "./SendMessage";

function Chat() {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);

    // creates a createdAt timestamp and limit to 50 msgs
    // use Snapshop to see if anything changes
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        onSnapshot(q, (snapshot) => {
            setMessages(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });
    }, []);

    return (
        <div className="px-4 py-8">
            <div>
                <h1 className="text-4xl font-bold text-blue-700">LIVE CHAT</h1>
            </div>
            <div className="flex flex-col mt-8 max-h-96 overflow-auto">
                {messages.map(({ id, text, photoURL }) => (
                    <div>
                        <div
                            className="flex flex-row m-1 items-start p-1 border-b-2"
                            key={id}
                        >
                            <img
                                className="rounded-full h-10 w-10"
                                src={photoURL}
                                alt=""
                            />
                            <p className="ml-3 break-all">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    );
}

export default Chat;
