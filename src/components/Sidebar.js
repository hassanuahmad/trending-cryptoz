import { auth } from "../Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOutBtn from "./SignOutBtn.js";
import SignInBtn from "./SignInBtn.js";

const Sidebar = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="flex flex-col justify-between items-center h-screen w-60 bg-filter bg-opacity-75 shadow bg-white p-12">
            <div>
                <h1 className="text-4xl font-bold text-blue-700">
                    TRENDING CRYPTOZ
                </h1>
            </div>

            <div>
                <div>
                    <button className="text-lg hover:bg-blue-500 rounded p-4 w-full">
                        HOME
                    </button>
                </div>
                <div>
                    <button className="text-lg pt-5 hover:bg-blue-500 round p-4 w-full">
                        ABOUT US
                    </button>
                </div>
            </div>

            <div>{user ? <SignOutBtn /> : <SignInBtn />}</div>
        </div>
    );
};

export default Sidebar;
