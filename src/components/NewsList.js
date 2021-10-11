import React, {useState, useEffect} from "react";
import "./newsList.css";

const API_ENDPOINT =
    "http://localhost:8080/magnoliaAuthor/.rest/delivery/news";
const IMAGE_BASE = "http://localhost:8080";

export default ({headline}) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchnewsList() {
            let response = await fetch(API_ENDPOINT);
            let data = await response.json();
            setNews(data.results);
        }

        fetchnewsList();
    }, []);

    return (
        <div className="news-list">
            <h1>{headline}</h1>
            {news.length > 0 ? (
                <div className="news-list-cards">
                    {news.map(news => (
                        <div class="card">
                            <img
                                src={IMAGE_BASE + news.image.renditions["480x360"].link}
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">{news.headline}</h5>
                                <p class="card-text">{news.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>No news found</h2>
            )}
        </div>
    );
};