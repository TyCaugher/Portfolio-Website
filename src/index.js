import React from 'react';
import ReactDOM from 'react-dom';
// import { Browser as Router } from "react-router-dom";
// Component import
import PortfolioContainer from './components/PortfolioContainer'
//Stylesheet
import "./App.css"
import "./Fonts.css"

ReactDOM.render(
    <React.StrictMode>
        <PortfolioContainer />
    </React.StrictMode>,
    document.getElementById("root")
)