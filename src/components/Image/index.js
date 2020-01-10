import React from "react";
import "./style.css";

function Image(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.imageClick(props.name)} />
      </div>
    </div>
  );
}

export default Image;
