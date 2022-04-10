import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import './Header.css';

const Header = () => {
  const [user] = useState(auth);
  const [name, setName] =useState();

  const handleLogOut = () =>{
    signOut(auth);
  }
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

            {
              user ? <button onClick={handleLogOut}>Logout</button>
              :<Link to="/login">Login</Link>
            }
            {user.name}
          </nav>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
