import { auth } from "../Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOutBtn from "./SignOutBtn.js";
import SignInBtn from "./SignInBtn.js";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="flex w-screen bg-filter bg-opacity-75 shadow justify-between items-center px-8 py-4 bg-white">
            <div>
                <Link to="/" className="text-xl font-bold text-blue-700">
                    TRENDING CRYPTOZ
                </Link>
            </div>

            <div className="flex">
                <div className="mx-2">
                    <Link
                        to="/"
                        className="text-sm hover:bg-blue-100 rounded px-4 py-2"
                    >
                        HOME
                    </Link>
                </div>
                <div className="mx-2">
                    <Link
                        to="/about"
                        className="text-sm hover:bg-blue-100 rounded px-4 py-2"
                    >
                        ABOUT
                    </Link>
                </div>
            </div>

            <div>{user ? <SignOutBtn /> : <SignInBtn />}</div>
        </div>
    );
};

export default Navbar;
