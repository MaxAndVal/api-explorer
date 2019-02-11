import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = props => {
  return (
    <div style={{ textAlign: "center" }}>
      <ClipLoader sizeUnit={"px"} size={150} color={"#123abc"} loading={props.isLoading} />
    </div>
  );
};

export default Loader;
