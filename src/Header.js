import React from "react";
import styled from "styled-components";

const DivHead = styled.div`
  width: 100%;
  height: 150px;
  background-color: #000;
  background-image: url("src/images/HeaderBG.png");
  img {
    width: 100%;
    height: 100%;
  }
`;

const header = () => {
  return (
    <DivHead>
      <img src={require("./images/HeaderBG.png")} alt="header Magic" />
    </DivHead>
  );
};

export default header;
