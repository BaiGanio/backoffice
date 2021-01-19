import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAction } from "../../redux/actions/user.action";
import { useHistory } from "react-router-dom";

export default function AppNavBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const routeHistory = useHistory();

  function logout() {
    dispatch(logoutUserAction());
    routeHistory.push("/login");
  }

  return (
    <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
      <LinkContainer to="/">
        <Navbar.Brand className="font-weight-bold">BO</Navbar.Brand>
      </LinkContainer>
      <LinkContainer to="/dashboard">
        <Nav.Link>Dashboard</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/blog">
        <Nav.Link>Blog</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/courses">
        <Nav.Link>Courses</Nav.Link>
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
          {user.email ? (
            <Nav.Link
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Nav.Link>
          ) : (
            <>
              <LinkContainer to="/login">
                <Nav.Link>Sign in</Nav.Link>
              </LinkContainer>
              <Nav.Link>|</Nav.Link>
              <LinkContainer to="/signup" className="text-muted">
                <Nav.Link>Sign up</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
