import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
