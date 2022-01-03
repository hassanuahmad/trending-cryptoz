import axios from "axios";
import { useEffect, useState } from "react";
import NewsBlock from "./NewsBlock";

const News = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        let options = {
            method: "GET",
            url: "https://crypto-update-live.p.rapidapi.com/news",
            headers: {
                "x-rapidapi-host": "crypto-update-live.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_NEWSAPIKEY,
            },
        };

        axios
            .request(options)
            .then(function (response) {
                setAllNews(response.data.News);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div className="px-4 py-8">
            <div>
                <h1 className="text-4xl font-bold text-blue-700">NEWS</h1>
            </div>
            <div className="mt-8">
                {allNews.map(
                    (newsName, index) =>
                        index < 6 && (
                            <NewsBlock key={index} newsName={newsName} />
                        )
                )}
            </div>
        </div>
    );
};

export default News;
