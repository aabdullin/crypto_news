import React from "react";
import "./CryptoCard.css";

const CryptoCard = (props) => {
  console.log(props);
  const { key, value } = props;
  return (
    <div className="crypto-card">
      {key}
      <h2>{value.name}</h2>
      <img className="card-image" src={value.image} alt={value.name} />
      <div className="crypto-card-list">
        <div>Price: ${value.current_price} </div>
        <div>
          Change (24h):{" "}
          {Math.round(value.price_change_percentage_24h * 100) / 100} %
        </div>
      </div>
      Market cap: {value.market_cap}
    </div>
  );
};

export default CryptoCard;
