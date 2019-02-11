import React from "react";

const Error404 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={require("./images/DeadLink.jpg")}
        alt="Error 404, page not found"
      />
    </div>
  );
};

export default Error404;
