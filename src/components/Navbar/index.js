import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Col size="md-2">
        <Link className="navbar-brand" to="/">
          Clicky Game
      </Link>
      </Col>
      <Col size="md-8">
        <nav id="guess">
          You Guessed Correctly!
        </nav>
      </Col>
      <Col size="md-1">
        <nav id="score">
          Score:
        </nav>
      </Col>
      |
        <Col size="md-1">
        <nav id="top-score">
          Top Score:
        </nav>
      </Col>
    </nav>
  );
}

export default Navbar;
