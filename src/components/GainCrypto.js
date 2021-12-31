const GainCrypto = ({ name }) => {
    return (
        <div className="bg-filter bg-opacity-75 bg-gray-50 p-5 rounded shadow">
            <p className="text-base">{name.Symbol}</p>
            <h1 className="text-xl font-bold py-5">
                ${parseFloat(name.Price.substring(1)).toFixed(5)}
            </h1>
            <p className="text-sm text-green-500">+{name["Rise 24hr"]}</p>
        </div>
    );
};

export default GainCrypto;
