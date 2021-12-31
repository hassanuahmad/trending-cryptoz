import { auth } from "../Firebase.js";

function SignOutBtn() {
    return (
        <div>
            <button
                className="bg-red-700 hover:bg-red-400 text-white font-bold p-4 rounded w-full"
                onClick={() => auth.signOut()}
            >
                SIGN OUT
            </button>
        </div>
    );
}

export default SignOutBtn;
