import React from "react";
import "../style/Login.css";
import login from "../../assets/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <div class="illustration">
          <img src={login} alt="Login" />
        </div>
        <form class="login form" action="#">
          <div class="textInput">
            <input type="text" placeholder="Enter email" />
            <span class="material-icons-outlined"> alternate_email </span>
          </div>

          <div class="textInput">
            <input type="password" placeholder="Enter password" />
            <span class="material-icons-outlined"> lock </span>
          </div>

          <button class="button">
            <span>Submit now</span>
          </button>

          <div class="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
