import React from "react";
import "../style/header.css";
import userData from "../data/userData.json"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Header() {

  const navigate = useNavigate();


  useEffect(()=>{
    const existingUsers = JSON.parse(localStorage.getItem("users")) ;

    if(!existingUsers || existingUsers.length === 0){
      localStorage.setItem("users" , JSON.stringify(userData));
        console.log("User data loaded into localStorage from userdata.json");
    }
  },[])


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
