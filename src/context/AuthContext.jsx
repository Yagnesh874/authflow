import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const login = (email) => {
    localStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("userEmail", email);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, login, logOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
