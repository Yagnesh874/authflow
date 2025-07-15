import React from "react";
import { useState, useEffect } from "react";
import "../style/signin.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = ({ onCloseIn, onOpenSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {login} = useAuth();

  const getStoredUsers = () =>{
    return JSON.parse(localStorage.getItem("users")) || []
  }

  const handleSignin = (e) => {
    e.preventDefault();

    const users = getStoredUsers();

    const match = users.find(
      (user) => user.email === email && user.password === password
    );

    if (match) {
      alert("Login successful!");
      login(match.email, match.firstName, match.lastName); 
      onCloseIn();
      navigate("/dashboard")

    } else {
      alert("Email or Password is Wrong Please check it.");
    }
  };

  const resetFeature = () => {
    if (!email.trim()) {
      alert("Please enter your email before clicking Reset.");
      return;
    }

    let input = prompt("Please Enter Email id to Update");
    if (input) {
      alert("Email ID has been changed to: " + input);
    } else {
      alert("Reset cancelled or invalid input.");
    }
  };

  return (
    <>
      <div id="signinModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={onCloseIn}>
              &times;
            </span>
            <h2>Welcome Back!</h2>
            <p>Sign in to your account</p>
          </div>
          <div className="modal-body">
            <form className="signin-form" onSubmit={handleSignin}>
              <div className="form-group">
                <label htmlFor="signin-email">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="signin-email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signin-password">Password</label>
                <input
                  type="password"
                  id="signin-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="signin-btn">
                Sign In
              </button>

              <div className="signup-link">
                You Don't Have Account ?
                <span onClick={onOpenSignup}> Register</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
