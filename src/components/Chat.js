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

    // TODO: Add CSS to the chat

    return (
        <div className="mx-5 my-12 bg-gray-100">
            <div>
                <h1 className="text-4xl font-bold text-blue-700">CHAT</h1>
            </div>
            {messages.map(({ id, text, photoURL }) => (
                <div className="flex items-center my-4" key={id}>
                    <img
                        className="rounded-full"
                        src={photoURL}
                        height="50px"
                        width="50px"
                        alt=""
                    />
                    <p className="ml-5">{text}</p>
                </div>
            ))}
            <SendMessage />
        </div>
    );
}

export default Chat;
