import React from 'react';
import Routes from "../../Routes";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

export default function AppNavBar() {
  return (
    <div className="appbar">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold">
            BO
          </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/blog">
          <Nav.Link>Blog</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/characters">
          <Nav.Link>Characters</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/characters-mui">
          <Nav.Link>Characters MUI</Nav.Link>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          <LinkContainer to="/login">
              <Nav.Link>Sign in</Nav.Link>
            </LinkContainer>
            <Nav.Link>|</Nav.Link>
            <LinkContainer to="/signup" className="text-muted">
              <Nav.Link>Sign up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Routes />
</div>
  );
}
