import React from "react";
import Routes from "./Routes";
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar/PrimarySearchAppBar';

export default function App() {
  return (
    <div className="App  py-3">
      <PrimarySearchAppBar/>
      <Routes />
    </div>
  );
}

