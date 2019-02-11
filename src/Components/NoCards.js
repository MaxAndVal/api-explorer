import React from "react";

const NoCards = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={require("../images/sw-droid.jpg")} alt="This is not the card you are looking for" />
      <h2>This is not the card you are looking for</h2>
    </div>
  );
};

export default NoCards;
