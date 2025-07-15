import React, { useState, useEffect } from "react";
import "../style/signup.css";
import { useNavigate  } from "react-router-dom";
import userData from "../data/userData.json";
import { useAuth } from "../context/AuthContext";

const Signup = ({onClose , onOpenSignin}) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [visible , setVisible] = useState(false)
  const {login } = useAuth();
  console.log(firstName);
  console.log(lastName);
  

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

    const newUser = { firstName , lastName , email , password  };
    const updatedUser = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUser));
    // localStorage.setItem("firstName" , firstName);
    // localStorage.setItem("lastName" , lastName)
    login(email , firstName , lastName)
    alert("Signup successful!");
    setEmail("");
    setPassword("");
    console.log(email , firstName , lastName);
    

    setTimeout(() => {
      onOpenSignin();
    }, 2000);

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
          <span className="close-signup" onClick={onClose}>&times;</span>
          <h2>Create Account</h2>
          <p>Join us today and get started</p>
        </div>
        <div className="signup-modal-body">
          <form className="signup-form" onSubmit={handleSignup}>
          <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
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

    </>
  );
};

export default Signup;
