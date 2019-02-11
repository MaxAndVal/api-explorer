import React from "react";
import DivHead from "./Styles";

const header = () => {
  return (
    <DivHead>
      <img src={require("./images/HeaderBG.png")} alt="header Magic" />
    </DivHead>
  );
};

export default header;
