import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import './AppNavBar.css'

import Routes from "../../Routes";
export default function AppNavBar() {
  return (
    <div className="appbar">
    <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
          <Navbar.Brand className="font-weight-bold text-muted">
            Scratch
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
  <Routes />
</div>
  );
}
