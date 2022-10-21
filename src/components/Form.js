import React from "react";
import "./style/form.css";

const Form = ({children, className, ...rest }) => {
  return (
    <form className={`${className}, signup form`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
