import React from "react";
import { DivResult, DivSpec } from "../Styles";

const Line = props => {
  console.log(props.value);
  return (
    <div style={{ display: "flex" }}>
      <DivSpec style={{ textTransform: "uppercase", fontStyle: "italic", fontFamily: "fantasy" }}>
        {props.type}
      </DivSpec>
      <DivResult>
        {Array.isArray(props.value) ? props.value.map(item => item + " ") : props.value}
      </DivResult>
    </div>
  );
};

export default Line;
