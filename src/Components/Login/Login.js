import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  

  const [
    signInWithEmailAndPassword,
    newUser, 
    loading, 
    error
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathName || "/";

  const handleEventEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleEventPassword = (event) => {
    setPassword(event.target.value);
  };

  if (newUser) {
    navigate(from, { replace: true });
  }

  const handleEventSignId = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h1>Login</h1>
        <Form onSubmit={handleEventSignId}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEventEmail}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-danger">{error?.message}</Form.Text>
            {loading && <p>Loading ....</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handleEventPassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            If you don't register. Please, <Link to="/register">Register</Link>{" "}
            here!!
          </p>
          <Button onClick={()=>signInWithGoogle()} variant="primary" type="submit">
            Continue with Google
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
