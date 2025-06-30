import React from "react";
import "../style/home.css";

const Home = () => {
  return (
    <>
      <main className="main-content">
        <section id="home" className="section home">
          <div className="container">
            <h1>Welcome to ModernWeb</h1>
            <p>Create amazing experiences with our cutting-edge solutions</p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
