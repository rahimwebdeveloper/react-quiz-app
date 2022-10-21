import React from "react";
import './style/Button.css'

const Button = ({children}) => {
  return (
    <div class="button">
      <span>{children}</span>
    </div>
  );
};

export default Button;
