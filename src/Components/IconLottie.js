import React from "react";
import Lottie from "react-lottie";
const animationData = require("../images/back.json");

const IconLottie = props => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Lottie
      options={defaultOptions}
      isStopped={!props.isHover}
      style={{ width: 20, height: 20, margin: 5 }}
    />
  );
};

export default IconLottie;
