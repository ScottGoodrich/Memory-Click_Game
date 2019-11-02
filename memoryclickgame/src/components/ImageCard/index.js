import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
      <button>
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
        </button>
  );
}

export default ImageCard;
