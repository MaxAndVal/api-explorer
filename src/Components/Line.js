import React from "react"
import { DivResult, DivSpec } from "../Styles";

const Line = (props) => {
    return(
        <div style={{ display: "flex" }}>
            <DivSpec style={{textTransform: "uppercase", fontStyle: "italic", fontFamily: "fantasy"}}>{props.type}</DivSpec>
            <DivResult> {props.value}</DivResult>
          </div>
    );
};

export default Line