import React from "react";
import { DivResult, DivSpec } from "../Styles";

const Line = props => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        borderTop: "1px solid black",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        flexWrap: "wrap",
        flexDirection: props.isMobile ? "column" : "row"
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
