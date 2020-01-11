import React from "react";
import Col from "../Col";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Col size="md-2">
        <a className="navbar-brand" href="/">
          Clicky Game
      </a>
      </Col>
      <Col size="md-6">
        <nav id="guess">
          {props.message}
        </nav>
      </Col>
      <Col size="md-2">
        <nav id="score">
          Score: {props.score}
        </nav>
      </Col>
      |
        <Col size="md-2">
        <nav id="top-score">
          Top Score: {props.topScore}
        </nav>
      </Col>
    </nav>
  );
}

export default Navbar;
