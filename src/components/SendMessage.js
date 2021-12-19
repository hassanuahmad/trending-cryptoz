import { useState } from "react";
import { auth, db, collection, addDoc, serverTimestamp } from "../Firebase";

function SendMessage() {
    const [msg, setMsg] = useState("");

    // gets the user id & photoURL given to us by firebase
    // when he sends a message, we add all the info to the db

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        const collectionRef = collection(db, "messages");
        const payload = {
            text: msg,
            uid,
            photoURL,
            createdAt: serverTimestamp(),
        };

        await addDoc(collectionRef, payload);
        setMsg("");
    };

    return (
        <div>
            <form onSubmit={sendMessage}>
                <input
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default SendMessage;
