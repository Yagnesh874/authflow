import React from "react";
import "../style/header.css";

import logo from "../assets/logo.jpg";
import userData from "../data/userData.json";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
function Header({ onSignUpClick , onSignInClick }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users"));

    if (!existingUsers || existingUsers.length === 0) {
      localStorage.setItem("users", JSON.stringify(userData));
      console.log("User data loaded into localStorage from userdata.json");
    }
  }, []);

  

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img src={logo} alt="" srcSet="" className="logo" />

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li className="nav-link"> Home</li>
            <li className="nav-link"> About</li>
            <li className="nav-link"> Contact Us</li>
            <div className="auth-buttons">
              <button className="btn btn-signin" onClick={onSignInClick}>
                Sign In
              </button>

              <button className="btn btn-signup" onClick={onSignUpClick}>
                Sign Up
              </button>
            </div>
          </ul>

          <div className="mobile-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
