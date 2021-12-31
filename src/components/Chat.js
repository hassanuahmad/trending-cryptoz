import { useState, useEffect } from "react";
import { db, onSnapshot, collection, limit, orderBy, query } from "../Firebase";
import SendMessage from "./SendMessage";

function Chat() {
    const [messages, setMessages] = useState([]);

    // creates a createdAt timestamp and limit to 50 msgs
    // use Snapshop to see if anything changes
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        //const unsub
        onSnapshot(q, (snapshot) => {
            setMessages(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });
    }, []);

    return (
        <div className="mx-5 my-12 h-full bg-gray-200">
            <div>
                <h1 className="text-4xl font-bold text-blue-700">CHAT</h1>
            </div>
            <div className="flex flex-col">
                {messages.map(({ id, text, photoURL }) => (
                    <div>
                        <div
                            className="flex flex-row border-b border-gray-300 m-1 "
                            key={id}
                        >
                            <img
                                className="rounded-full object-scale-down h-12 w-12"
                                src={photoURL}
                                alt=""
                            />
                            <p className="ml-3 break-all">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage />
        </div>
    );
}

export default Chat;
