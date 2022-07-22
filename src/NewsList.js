import React from "react";
import Article from "./Article";
import "./CryptoCard.css";
import "./index.css";
import axios from "axios";

const NewsList = () => {

  const [post, setPost] = React.useState(null);

  const options = {
    method: "GET",
    url: "https://crypto-news-live3.p.rapidapi.com/news",
    headers: {
      "X-RapidAPI-Key": "6a0fc04c95msh8d637e82defa129p193ba4jsn70ee0e183ed6",
      "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
    },
  };

  React.useEffect(() => {
    axios.request(options).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);
  return (
    <div className="news_list">
      <h4 className="news_header">Latest News</h4>

      {post.map((item) => {
        return <Article key={item.id} value={item} />;
      })}
    </div>
  );
};

<a href="https://github.com/aabdullin/product_feedback">
  Product Feedback App
</a>;
export default NewsList;
