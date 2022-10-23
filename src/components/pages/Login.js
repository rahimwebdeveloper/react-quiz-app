import React from "react";
import "../style/Login.css";
import login from "../../assets/login.svg";
import LoginFrom from "../LoginFrom";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <div className="illustration">
          <img src={login} alt="Login" />
        </div>
        <LoginFrom />
      </div>
    </>
  );
};

export default Login;
