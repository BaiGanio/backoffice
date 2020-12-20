import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './parts/AppNavBar/AppNavBar';
import Footer from './parts/Footer/Footer';

export default function App() {
    return (
      <div className="App">
        <AppNavBar/>
        <Footer/>
      </div>
    );
}