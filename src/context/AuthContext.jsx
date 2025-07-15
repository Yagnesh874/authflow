import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [emailId, setEmailId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFirstName = localStorage.getItem("firstName") ;
  const storedLastName = localStorage.getItem("lastName");
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  if (storedEmail) setEmailId(storedEmail);
  if (storedFirstName) setFirstName(storedFirstName);
  if (storedLastName) setLastName(storedLastName);
  setIsLoggedIn(isAuth);
}, []);

  const login = (email, firstName, lastName) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    setEmailId(email);
    setFirstName(firstName);
    setLastName(lastName);
    setIsLoggedIn(true);
  };


  const logOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    setIsLoggedIn(false);
    navigate("/");
  };

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
