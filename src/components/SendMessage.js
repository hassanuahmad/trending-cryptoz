import { useState } from "react";
import { auth, db, collection, addDoc, serverTimestamp } from "../Firebase";

function SendMessage({ scroll }) {
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
        scroll.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="m-2">
            <form onSubmit={sendMessage}>
                <div className="flex">
                    <div className="flex-grow mr-2">
                        <textarea
                            value={msg}
                            maxLength={200}
                            onChange={(e) => setMsg(e.target.value)}
                            placeholder="Message..."
                            className="px-4 py-2 w-full rounded "
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SendMessage;
