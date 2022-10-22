import React from "react";
import success from "../assets/success.png";
import "./style/Summary.css";

const Summary = () => {
  return (
    <div class="summary">
      <div class="point">
        <p class="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div class="badge">
        <img src={success} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
