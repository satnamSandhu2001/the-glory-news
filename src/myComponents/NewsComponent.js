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
              ? "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="
              : urlToImage
          }
          className="card-img-top"
          alt="loading image"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text"
            style={
              !description
                ? { opacity: "0.4", fontStyle: "italic" }
                : { opacity: "1" }
            }
          >
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
