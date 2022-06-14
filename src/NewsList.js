import React, { useState } from "react";
import ReactDOM from "react-dom";
import useAxios from "axios-hooks";
import Article from "./Article";
import "./CryptoCard.css";
import "./index.css";

const NewsList = () => {
  const [search, setSearch] = useState("");
  const [{ data, loading, error }] = useAxios(
    "https://api.tokendatabase.com/v1/news/posts?&key=Af5bvYww4hQMoKuwdXm-vLMMUONwLAYAb4wcXPaLLwBiBcq5DIqm7_lst2JP"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data.results);

  return (
    <div className="news_list">
      <a name="news">Latest News</a>
      {data.results
        .filter((item) => {
          return true;
        })
        .map((item) => {
          return <Article key={item.id} value={item} />;
        })}
    </div>
  );
};

export default NewsList;
