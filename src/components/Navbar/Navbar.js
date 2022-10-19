import React from "react";
import logo from "../../assets/logo.png";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/" className="brand">
            <img src={logo} alt="Rahim Creative Logo" />
            <h3>Rahim Creative</h3>
          </a>
        </li>
      </ul>
      <div class="account">
        <span class="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
        {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
      </div>
    </nav>
  );
};

export default Navbar;
