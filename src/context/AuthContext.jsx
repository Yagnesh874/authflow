import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [emailId, setEmailId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role , setRole] = useState();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFirstName = localStorage.getItem("firstName") ;
  const storedLastName = localStorage.getItem("lastName");
  const storedRole = localStorage.getItem("role");

  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  if (storedEmail) setEmailId(storedEmail);
  if (storedFirstName) setFirstName(storedFirstName);
  if (storedLastName) setLastName(storedLastName);
  if(storedRole) setRole(storedRole);
  setIsLoggedIn(isAuth);
}, []);

  const login = (email, firstName, lastName , roleParam = "user") => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("role" ,roleParam)
    setEmailId(email);
    setFirstName(firstName);
    setLastName(lastName);
    setRole(roleParam);
    setIsLoggedIn(true);
  };


  const logOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setRole(null);
    navigate("/");
  };

  const updateName = (newFirst , newLast) =>{
    localStorage.setItem("firstName" , newFirst);
    localStorage.setItem("lastName" , newLast);
    setFirstName(newFirst);
    setLastName(newLast)
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          login,
          logOut,
          emailId,
          firstName,
          lastName,
          role,
          updateName
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
