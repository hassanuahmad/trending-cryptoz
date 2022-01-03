import { auth } from "../Firebase.js";

function SignOutBtn() {
    return (
        <div>
            <button
                className="border-4 border-red-700 hover:bg-red-700 hover:text-white text-black font-bold px-4 py-2 rounded w-full"
                onClick={() => auth.signOut()}
            >
                SIGN OUT
            </button>
        </div>
    );
}

export default SignOutBtn;
