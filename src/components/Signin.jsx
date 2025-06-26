import React, { useState, useEffect } from "react";
import "../style/signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(localUsers);
  }, []);

  const handleSignin = (e) => {
    e.preventDefault();

    console.log("Users from localStorage:", users);
    console.log("Entered:", email, password);

    const match = users.find(
      (user) => user.email === email && user.password === password
    );

    if (match) {
      alert("Login successful!");
    } else {
      alert("Email or password is incorrect.");
    }
  };

  const resetFeature = () => {
    const input = prompt("Please enter your email to reset:");
    if (input) {
      alert("Reset link sent to: " + input); // Just a placeholder
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <form onSubmit={handleSignin}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn-submit">
          Log In
        </button>
        <div className="login-links">
          <button type="button" className="reset-btn" onClick={resetFeature}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
