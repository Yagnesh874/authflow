import React from "react";
import "../style/header.css"
import { useNavigate } from "react-router-dom";
function Header() {

  const navigate = useNavigate();

  const  handleClick = () =>{
    navigate("/signin")
  }

  const handleClick2 = () =>{
    navigate("/signup")
  }
  return (
    <>
      <header>
        <div class="header-buttons">
        <button className="btn btn-signup" onClick={handleClick2}>
        Sign Up
        
        </button>

        <button className="btn btn-login" onClick={handleClick}>
        Log In
        
        </button>
        </div>
      </header>
    </>
  );
}

export default Header;
