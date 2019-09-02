import React from "react";
import { Nav, NavItem } from "reactstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
      <div>
        <Nav className="App">
          <h1>React Router Mini</h1>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </Nav>
      </div>
    </Router>
  );
};

export default Navigation;
