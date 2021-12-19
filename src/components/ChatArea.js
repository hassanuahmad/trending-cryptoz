import Chat from "./Chat";
import SignIn from "./SignIn";
import { auth } from "../Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatArea() {
    // Checks if the user is logged in or not
    // If logged in, returns true and otherwise
    const [user] = useAuthState(auth);

    return <div>{user ? <Chat /> : <SignIn />}</div>;
}

export default ChatArea;
