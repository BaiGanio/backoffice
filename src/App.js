import './App.css';
import React from "react";

import Routes from "./Routes";
import AppNavBar from './components/NavBar/AppNavBar';
export default function App() {
    return (
      <div className="App container py-3">
        <AppNavBar/>
        <Routes />
      </div>
    );
}