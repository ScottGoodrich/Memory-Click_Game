import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div>
      <h1 className="title">{props.children}</h1>
      <h3>Don't click the same picture twice!</h3>
    </div>
  )
}

export default Title;
