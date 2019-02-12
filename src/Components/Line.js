import React from "react"
import { DivResult, DivSpec } from "../Styles";

const Line = (props) => {
    return(
        <div style={{ display: "flex" }}>
            <DivSpec>{props.type}</DivSpec>
            <DivResult> {props.value}</DivResult>
          </div>
    );
};

export default Line