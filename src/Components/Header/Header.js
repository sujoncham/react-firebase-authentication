import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <Row>
      <Col md>
        <div className="header">
          <Link to="/">React Auth</Link>
          <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
