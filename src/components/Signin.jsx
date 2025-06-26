import React from "react";
import { useState, useEffect } from "react";
import "../style/signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let localusers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(localusers);
  }, []);

  const handleSignin = (e) => {
    e.preventDefault();

    const match = users.find(
      (user) => user.email === email && user.password === password
    );

    if (match) {
      alert("Login successful!");
    } else {
      alert("Email or Password is Wrong Please check it.");
    }
  };

  const resetFeature = () => {
    let input = prompt("Please Enter Email id to Update");
    alert("Email id has been changed");
  };
  return (
    <>
      <div class="login-container">
        <h1 class="login-title">Welcome Back</h1>
        <form onSubmit={handleSignin}>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              class="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="login-btn-submit">
            Log In
          </button>
          <div class="login-links">
            <button className="reset-btn" onClick={resetFeature}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
