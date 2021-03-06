import React from "react";
import Line from "../Components/Line";

const FieldsBox = props => {
  return (
    <div
      style={{
        flex: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "2%",
        alignSelf: "center"
      }}
    >
      {Object.keys(props.state).map((e, key) => (
        <Line type={e} value={props.state[e]} key={key} isMobile={props.isMobile} />
      ))}
    </div>
  );
};

export default FieldsBox;
