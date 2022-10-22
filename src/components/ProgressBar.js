import React from "react";
import { Link } from "react-router-dom";
import './style/ProgressBar.css'

const ProgressBar = () => {
  return (
    <div class="progressBar">
      <div class="backButton">
        <span class="material-icons-outlined"> arrow_back </span>
      </div>
      <div class="rangeArea">
        <div class="tooltip">24% Complete!</div>
        <div class="rangeBody">
          <div class="progress" style={{width: "20%"}}></div>
        </div>
      </div>
      <Link to="/result">
        <button class="button next">
          <span>Next Question</span>
          <span class="material-icons-outlined"> arrow_forward </span>
        </button>
      </Link>
    </div>
  );
};

export default ProgressBar;
