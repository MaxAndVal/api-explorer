import React from "react";
import { Button } from "@material-ui/core";
import IconLottie from "./IconLottie";
import { Link } from "react-router-dom";

const ButtonBack = props => {
  return (
    <Link to={`/`}>
      <Button
        variant="contained"
        color="primary"
        onMouseLeave={() => props.mouseOver(false)}
        onMouseEnter={() => props.mouseOver(true)}
      >
        <IconLottie isHover={props.isHover} />
        {props.text}
      </Button>
    </Link>
  );
};

export default ButtonBack;
