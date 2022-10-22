import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={logo} alt="Rahim Creative Logo" />
            <h3>Rahim Creative</h3>
          </Link>
        </li>
      </ul>
      <div class="account">
        <span class="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/signup">Signup</Link>
        <Link to="/loin">Login</Link>
        {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
      </div>
    </nav>
  );
};

export default Navbar;
