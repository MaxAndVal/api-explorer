import React from "react";

const ImageCard = props => {
  return (
    <div style={{ flex: 1, padding: "2%" }}>
      <img src={props.image} alt="représentation de la carte" />
    </div>
  );
};

export default ImageCard;
