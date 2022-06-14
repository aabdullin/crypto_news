import React, { useState } from "react";
import useAxios from "axios-hooks";
import CryptoCard from "./CryptoCard";
import "./index.css";

const CryptoList = () => {
  const [search] = useState("");
  const [{ data, loading, error }] = useAxios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  return (
    <>
      <div className="background-image"></div>
      <div className="crypto-cards">
        {data
          .filter((item, index) => {
            if (index >= 15) return false;
            return item.id.startsWith(search);
          })
          .map((item) => {
            return <CryptoCard key={item.id} value={item} />;
          })}
      </div>
    </>
  );
};

export default CryptoList;
