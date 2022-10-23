import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import "../style/Navbar.css";

const Navbar = () => {
  const { currentUser, SignOut } = useAuth();

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
      <div className="account">
        {currentUser ? (
          <>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span>{currentUser?.displayName}</span>
            <span
              className="material-icons-outlined"
              title="Logout"
              onClick={SignOut}
            >
              {" "}
              logout{" "}
            </span>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
