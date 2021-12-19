const LossCrypto = ({ name }) => {
    return (
        <div className="bg-filter bg-opacity-75 bg-gray-50 p-5 rounded">
            <p className="text-lg">{name.Symbol}</p>
            <h1 className="text-2xl font-bold py-5">{name.Price}</h1>
            {/* <p className="text-sm text-red-500">
                {name.Drop 24hr.toFixed(2)}%
            </p> */}
        </div>
    );
};

export default LossCrypto;
