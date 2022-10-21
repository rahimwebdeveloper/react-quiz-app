import React from "react";
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
      <a href="result.html">
        <button class="button next">
          <span>Next Question</span>
          <span class="material-icons-outlined"> arrow_forward </span>
        </button>
      </a>
    </div>
  );
};

export default ProgressBar;
