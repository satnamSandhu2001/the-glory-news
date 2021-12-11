import React from "react";
import "../App.css";

const NewsComponent = (props) => {
    let { title, description, urlToImage, url, publishedAt, source } = props;
    return (
        <div className="my-3 ">
            <div className="card">
                <img
                    src={
                        !urlToImage
                            ? "https://scontent.fluh2-1.fna.fbcdn.net/v/t39.30808-1/p200x200/244239540_199292378975124_7642261756158151429_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=c6021c&_nc_ohc=t7ZRmAFkbuQAX-K0b01&_nc_ht=scontent.fluh2-1.fna&oh=86e9e6fd3f878b82bb01dc4870a3047d&oe=61B507E6"
                            : urlToImage
                    }
                    className="card-img-top"
                    alt="loading image"
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={!description ? { opacity: "0.4", fontStyle: "italic" } : { opacity: "1" }}>
                        {!description ? "description not available" : description}
                    </p>
                    <a href={url} target="blank" className="btn btn-sm btn-primary">
                        Read More
                    </a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Published by {source}</small>
                    <br />
                    <small className="text-muted">{publishedAt}</small>
                </div>
            </div>
        </div>
    );
};
export default NewsComponent;
