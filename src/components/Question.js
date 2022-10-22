import React from "react";
import Answers from "./Answers";
import './style/Question.css'

const Question = () => {
  return (
    <div className="question ">
      <div class="qtitle">
        <span class="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
};

export default Question;
