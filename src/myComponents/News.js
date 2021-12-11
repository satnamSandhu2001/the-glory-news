import React, { useState, useEffect } from "react";
import NewsComponent from "./NewsComponent";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
        props.setProgress(10);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);

        setArticles(parsedData.articles);
        setTotalResults(totalResults.parsedData);
        props.setProgress(100);
    };
    useEffect(() => {
        updateNews();
    }, []);

    const fetchMoreData = async () => {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${
            page + 1
        }&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };
    return (
        <div>
            {loading && <Loader />}

            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loader />}>
                <div className="container my-3">
                    <div className="row g-7">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsComponent
                                        urlToImage={element.urlToImage}
                                        title={element.title}
                                        description={element.description}
                                        url={element.url}
                                        publishedAt={element.publishedAt.slice(0, 10)}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
};
News.defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;
