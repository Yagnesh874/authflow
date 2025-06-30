import React from "react";
import "../style/about.css"

const About = () => {
  return (
    <>
      <section id="about" class="section about">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>About Our Company</h2>
              <p>
                We are a forward-thinking company dedicated to delivering
                innovative solutions that transform businesses and enhance user
                experiences. Our team of experts combines creativity with
                technical expertise to bring your vision to life.
              </p>
              <p>
                With years of experience in the industry, we understand what it
                takes to create successful digital products. From concept to
                completion, we're here to guide you every step of the way.
              </p>
              <p>
                Our mission is to empower businesses through technology,
                creating solutions that are not only functional but also
                beautiful and user-friendly.
              </p>
            </div>
            <div class="about-image">
              <span>🚀 Innovation in Action</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
