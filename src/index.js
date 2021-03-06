import React from "react";
import ReactDOM from "react-dom";
import NewsList from "./NewsList";
import CryptoList from "./CryptoList";

import "./index.css";

const App = () => {
  return (
    <>
      <CryptoList />
      <NewsList />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
