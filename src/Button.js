import React from "react";
import "./Button.css";

function operateButton(props) {
  return <div className="Button2" onClick={props.buttonFunction}>{props.element}</div>;
}

export default operateButton;
