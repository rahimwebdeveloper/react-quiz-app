import React from "react";
import "./style/textInput.css";

const TextInput = ({icon, ...rest}) => {
  return (
    <div class="textInput">
      <input {...rest} />
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
