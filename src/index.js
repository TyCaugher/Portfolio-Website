import React from 'react';
import ReactDOM from 'react-dom';
// import { Browser as Router } from "react-router-dom";
// Component import
import PortfolioContainer from './components/PortfolioContainer'
import Navbar from './components/Navbar';
//Stylesheet
import "./css/App.css"

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <PortfolioContainer />
    </React.StrictMode>,
    document.getElementById("root")
)