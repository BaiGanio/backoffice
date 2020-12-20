import React from "react";
import "./Home.css";
import backoffice from '../../assets/images/backoffice.jpg';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <img src={backoffice} className="Home-image" alt="BO" />
        <h1>Welcome to BackOffice</h1>
        <p className="text-muted">A simple React app</p>
        <Button variant="primary">Primary</Button>{' '}
      </div>
      <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
    </div>
  );
}