import React from "react";
import "../style/header.css";
import logo from "../assets/logo.jpg";
import userData from "../data/userData.json";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Home from "../pages/Home";
import { useAuth } from "../context/AuthContext";

function Header({ onSignUpClick, onSignInClick }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logOut } = useAuth();

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
            <li className="nav-link">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home{" "}
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact us
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li className="nav-link">
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                    Dashboard
                  </Link>
                </li>
                <div className="auth-buttons">
                  <button className="btn btn-signout" onClick={logOut}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="auth-buttons">
                <button className="btn btn-signin" onClick={onSignInClick}>
                  Sign In
                </button>

                <button className="btn btn-signup" onClick={onSignUpClick}>
                  Sign Up
                </button>
              </div>
            )}
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
