const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between h-screen w-72 bg-filter bg-opacity-75 bg-gray-50 p-12">
            <div>
                <h1 className="text-4xl font-bold text-blue-700">
                    TRENDING CRYPTOZ
                </h1>
            </div>
            <div>
                <p className="text-lg">Home</p>
                <p className="text-lg pt-5">About Us</p>
            </div>
            <div className="w-full">
                <div>
                    <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold p-4 rounded">
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
