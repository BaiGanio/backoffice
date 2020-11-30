import React from "react";
import "./Home.css";
import backoffice from '../../assets/images/backoffice.jpg';

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
      <img src={backoffice} className="App-logo" alt="logo" />
        <h1>Welcome to BackOffice</h1>
        <p className="text-muted">A simple React app</p>
      </div>
    </div>
  );
}