import "./styles/global.css";
import React from "react";
import AppNavBar from "./navigation/AppNavBar/AppNavBar";
import Footer from "./navigation/Footer/Footer";
import Routes from "./navigation/Routes";

export default function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Routes />
      <Footer />
    </div>
  );
}
