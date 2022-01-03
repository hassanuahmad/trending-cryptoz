function GainCryptoDetails({ name }) {
    return (
        <div>
            <p>{name.Coin}</p>
            <p>{name.Symbol}</p>
            <p>{name.Price}</p>
            <p>{name["Rise 24hr"]}</p>
            <p>{name["Volume 24hr"]}</p>
        </div>
    );
}

export default GainCryptoDetails;
