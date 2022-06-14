import React from "react";
import "./CryptoCard.css";

const Article = (props) => {
  console.log(props);
  const { key, value } = props;
  return (
    <div className="news-card">
      {key}
      <h2>{value.title}</h2>
      <h2>{value.name}</h2>
      <img className="card-image" src={value.thumbnail} alt={value.name} />
      {value.preview}
      <ul className="section__news--article-list">
        <li>Posted: {value.time}</li>
      </ul>
    </div>
  );
};

export default Article;
