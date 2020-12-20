import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar/AppNavBar';

export default function App() {
    return (
      <div className="App py-3">
        <AppNavBar/>
      </div>
    );
}