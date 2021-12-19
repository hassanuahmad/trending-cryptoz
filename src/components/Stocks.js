import axios from "axios";
import React, { useState, useEffect } from "react";
import GainCrypto from "./GainCrypto";
import LossCrypto from "./LossCrypto";

const Stocks = () => {
    const [gainCryptoList, setGainCryptoList] = useState([]);
    const [loseCryptoList, setLoseCryptoList] = useState([]);

    useEffect(() => {
        var options = {
            method: "GET",
            url: "https://crypto-update-live.p.rapidapi.com/top-gainers-losers",
            headers: {
                "x-rapidapi-host": "crypto-update-live.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_APIKEY,
            },
        };

        axios
            .request(options)
            .then(function (response) {
                setGainCryptoList(response.data["Top Gainers"]);
                setLoseCryptoList(response.data["Top Losers"]);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div className="w-96 mx-5 my-12 bg-gray-100">
            <div>
                <h1 className="text-4xl font-bold text-blue-700">
                    CRYPTOCURRENCY
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-8">
                {gainCryptoList.map(
                    (name, index) =>
                        index < 4 && <GainCrypto key={index} name={name} />
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-8">
                {loseCryptoList.map(
                    (name, index) =>
                        index < 4 && <LossCrypto key={index} name={name} />
                )}
            </div>
        </div>
    );
};

export default Stocks;
