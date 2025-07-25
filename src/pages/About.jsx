import React, { useEffect, useRef, useState } from "react";

import "../style/about.css"
import logo from "../assets/logo-2.png"
import image1 from "../assets/office1.jpg";
import image2 from "../assets/office2.jpg"
import image3 from "../assets/office3.jpg"
import image4 from "../assets/office4.jpg"
import image5 from "../assets/office5.jpg"

const About = () => {

  const allImages = [image1 , image2 , image3 , image4 , image5]

  const [currentIndex , setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

    useEffect(()=>{
      intervalRef.current = setInterval(()=>{
        setCurrentIndex((prevIndex)=>
          prevIndex === allImages.length -1  ? 0 : prevIndex + 1
        )
      },3000)

      return () => clearInterval(intervalRef.current);
    },[])

    const stopAutoSlider = () =>{
      if(intervalRef.current){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    const goForward = () =>{
      stopAutoSlider()
      setCurrentIndex((prevIndex)=>
        prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
      )
    }

    const backForward = () =>{
      stopAutoSlider()
      setCurrentIndex((prevIndex)=>
        prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
      )
    }

  return (
    <>
      <section id="about" className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
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
            <div className="image-slider">
            <div className="about-image">
            <img src={allImages[currentIndex]} alt="" srcSet="" />
            <button onClick={goForward} className="nav-button next-button">⟶</button>
            <button onClick={backForward} className="nav-button prev-button">⟵ </button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
