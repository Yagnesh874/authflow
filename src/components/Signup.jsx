import React, { useState, useEffect } from "react";
import "../style/signup.css";
import { useNavigate  } from "react-router-dom";
import userData from "../data/userData.json";

const Signup = ({onClose , onOpenSignin}) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message , setMessage] = useState("")
  const [users, setUsers] = useState([]);
  const [visible , setVisible] = useState(false)
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
      onOpenSignin();
    }, 3000);

  };

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  const toggleForm = () =>{
    setVisible(prev => !prev)
    console.log(visible);
    
  }     
  return (
    <>
    
      <div id="signupModal" className= "signup-modal" >
      <div className="signup-modal-content">
        <div className="signup-modal-header">
          <button className="close-signup" onClick={onClose}>&times;</button>
          <h2>Create Account</h2>
          <p>Join us today and get started</p>
        </div>
        <div className="signup-modal-body">
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="signup-email">Email Address</label>
              <input
                type="email"
                id="signup-email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Create a password"
                required
              />
            </div>
            <button type="submit" className="signup-btn">Create Account</button>
            <div className="signin-link">
              Already have an account?
              <span onClick={onOpenSignin} id="switchToSignin">Sign in</span>
            </div>
          </form>
        </div>
      </div>
    </div>
    

    {/*
      <div classNameName="container">
        <div classNameName="auth-container">
          <h2 classNameName="auth-title">Create Your Account</h2>
          <form onSubmit={handleSignup}>
            <div classNameName="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                required
              />
            </div>
            <div classNameName="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Create a password"
                required
              />
            </div>
            
            <button type="submit" classNameName="auth-btn">
              Sign Up
            </button>
            <button classNameName="signup-btn-submit" onClick={navigateToSignIn}>
              Already have an account?{" "}
            </button>
          </form>
        </div>
      </div>
    */}
    </>
  );
};

export default Signup;
