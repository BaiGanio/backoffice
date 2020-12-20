import React from "react";
import "./Home.css";
import backoffice from '../../assets/images/backoffice.jpg';

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
          <img src={backoffice} className="Home-image" alt="BO" />
          <br/>
          <br/>
          <h1>Welcome to BackOffice</h1>
          <p>A simple React app</p>
        </div>
    </div>
  );
}