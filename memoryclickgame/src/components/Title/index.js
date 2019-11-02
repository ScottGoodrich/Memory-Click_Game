import React from "react";
import Scores from "../Scores";
import "./style.css";

function Title(props) {
  return (
    <div className="titleDiv">
      <h1 className="title">{props.children}</h1>
      <h3>Don't click the same picture twice!</h3>
      <Scores />
    </div>
  )
}

export default Title;
