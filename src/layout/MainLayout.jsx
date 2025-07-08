import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import React, { useState } from "react";

const MainLayout = () => {
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  return (
    <>
      <Header
        onSignUpClick={() => setIsSignOpen(true)}
        onSignInClick={() => setIsSigninOpen(true)}
      />
      {isSignOpen && (
        <Signup
          onClose={() => setIsSignOpen(false)}
          onOpenSignin={() => {
            setIsSignOpen(false);
            setIsSigninOpen(true);
          }}
        />
      )}
      {isSigninOpen && (
        <Signin
          onCloseIn={() => setIsSigninOpen(false)}
          onOpenSignup={() => {
            setIsSigninOpen(false);
            setIsSignOpen(true);
          }}
        />
      )}
      <Outlet />
    </>
  );
};

export default MainLayout;
