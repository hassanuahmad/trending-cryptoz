import { auth, signInWithPopup, GoogleAuthProvider } from "../Firebase.js";

function SignInBtn() {
    const provider = new GoogleAuthProvider();

    function signInWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <button
                className="border-4 border-blue-700 hover:bg-blue-700 hover:text-white text-black font-bold px-4 py-2 rounded w-full"
                onClick={signInWithGoogle}
            >
                SIGN IN
            </button>
        </div>
    );
}

export default SignInBtn;
