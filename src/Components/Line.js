import React from "react";
import { DivResult, DivSpec } from "../Styles";

const Line = props => {
  return (
    <div
      style={{
        display: "flex",
        borderTop: "1px solid black",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
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
