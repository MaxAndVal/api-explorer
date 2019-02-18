import React from "react";
import Lottie from "react-lottie";
const back = require("../images/back.json");

const IconLottie = props => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: props.icon || back,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const width = props.width || 20;
  const height = props.height || 20;
  const margin = props.margin || 5;
  return (
    <Lottie
      options={defaultOptions}
      isStopped={!props.isHover}
      style={{ width: width, height: height, margin: margin }}
    />
  );
};

export default IconLottie;
