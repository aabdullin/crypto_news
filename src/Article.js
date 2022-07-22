import React from "react";
import "./CryptoCard.css";

const date = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() +
    1}/${current.getFullYear()}`;
  return date;
};

const Article = (props) => {
  console.log(props);
  const { key, value } = props;
  return (
    <div className="news-card">
      {key}
      <div>
        <h3>{value.title}</h3>
        {value.preview}
        <h3>
          <a href={value.url}>More details</a>
        </h3>
        <div className="date">{date()}</div>
      </div>
    </div>
  );
};

export default Article;
