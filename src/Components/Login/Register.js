import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase.init';


const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  
  const [createUserWithEmailAndPassword, user, hookError] = useCreateUserWithEmailAndPassword(auth);

  const handleEventName = (event) => {
    setName(event.target.value);
  };
  const handleEventEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleEventPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEventConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if(user){
    navigate('/home')
  }

  const handleCreateEvent = (event) => {
    console.log("submitted", name, email, password);
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two password did not match");
      return;
    }

    if(password.length < 6){
      setError("Password must be 6 characters");
      return;
    }

    createUserWithEmailAndPassword(email, password);

  };


  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
      <h1>Regiter</h1>
        <Form onSubmit={handleCreateEvent}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onBlur={handleEventName}
              type="text"
              placeholder="Your name"
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEventEmail}
              type="email"
              placeholder="Enter email"
              required
            />
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
          <Form.Text className="text-danger">{error}</Form.Text>
          <Form.Text className="text-danger">{hookError}</Form.Text>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onBlur={handleEventConfirmPassword}
              type="confirm-password"
              placeholder="Confirm Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
