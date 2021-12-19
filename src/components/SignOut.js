import { auth } from "../Firebase.js";

function SignOut() {
    return (
        <div>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    );
}

export default SignOut;
