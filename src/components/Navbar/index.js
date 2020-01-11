import React from "react";
import { Link } from "react-router-dom";
import Col from "../Col";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Col size="md-2">
        <Link className="navbar-brand" to="/">
          Clicky Game
      </Link>
      </Col>
      <Col size="md-8">
        <nav id="guess">
          { props.message }
        </nav>
      </Col>
      <Col size="md-1">
        <nav id="score">
          Score: { props.score }
        </nav>
      </Col>
      |
        <Col size="md-1">
        <nav id="top-score">
          Top Score: { props.topScore }
        </nav>
      </Col>
    </nav>
  );
}

export default Navbar;
