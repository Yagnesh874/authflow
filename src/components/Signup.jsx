import React, { useState, useEffect } from "react";
import "../style/signup.css";
import { useNavigate  } from "react-router-dom";
import userData from "../data/userData.json";

const Signup = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message , setMessage] = useState("")
  const [users, setUsers] = useState([]);
  const [confirmPassword , setConfirmPassword] = useState("");

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(localUsers);
  }, []);

  
      
  const handleSignup = (e) => {
    e.preventDefault();

    const exists = users.some((user) => user.email === email);

    if (exists) {
      alert("User already exists!");
      return;
    }

    const newUser = { email, password };
    const updatedUser = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUser));
    alert("Signup successful!");
    setEmail("");
    setPassword("");

    setTimeout(() => {
      navigate("/signin");
    }, 3000);

  };

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="container">
        <div className="auth-container">
          <h2 className="auth-title">Create Your Account</h2>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label for="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label for="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
              />
            </div>
            

            
            <button type="submit" className="auth-btn">
              Sign Up
            </button>
            <button className="signup-btn-submit" onClick={navigateToSignIn}>
              Already have an account?{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
