import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import "./Login.css";
import Routes from "../../Routes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <br/>
      <LinkContainer to="/forgot-password">
      <Nav.Link> Forgot password?</Nav.Link>
     
        </LinkContainer>
        <Routes/>
    </div>
  );
}