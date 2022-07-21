import React from "react";
import "./CryptoCard.css";

const Date = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return date;
};

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
      {/* <a href="https://github.com/aabdullin/product_feedback">
        Link
      </a> */}
      ;<ul className="section__news--article-list">{value.Date}</ul>
    </div>
  );
};



export default Article;
