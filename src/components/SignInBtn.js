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
                className="bg-blue-700 hover:bg-blue-500 text-white font-bold p-4 rounded w-full"
                onClick={signInWithGoogle}
            >
                SIGN IN
            </button>
        </div>
    );
}

export default SignInBtn;
