import React, { useRef, useEffect } from "react";
import "./Home.css";
import About from "../components/images/about.png";
import Portfolio from "../components/images/portfolio.png";
import CV from "../components/images/cv.png";
import Contact from "../components/images/contact.png";
import LinkedIn from "../components/images/linkedin.png";
import Github from "../components/images/github.png";
import Email from "../components/images/email.png";

const Home = () => {

  return (
    <div className="home">

      <div className="portfolio-container">
        <div className="chloe">
          <h4>Chloe Moss</h4>
        </div>
        <div className="portfolio">
          <h3>Portfolio</h3>
        </div>
      </div>

      <div className="grid-container">
        <img className="grid-image" src={About} alt="about" onClick={event=> window.location.href='/about'}></img>
        <img className="grid-image" src={Portfolio} alt="portfolio" onClick={event=> window.location.href='/projects'}></img>
        <img className="grid-image" src={CV} alt="cv"></img>
        <img className="grid-image1" src={Contact} alt="contact"  onClick={event=> window.location.href='/contact'}></img>
      </div>

      <div className="text-container">
        <h1>
          <i>Crafting code with a </i><b>love for creativity.</b> <br  />
          <i> I'm a junior software developer who </i> 
          <b>colours outside the lines of convention.</b>
        </h1>
      </div>

      <div className="social-container">
        <img className="social-image" src={LinkedIn} alt="linkedin"></img>
        <img className="social-image" src={Github} alt="github"></img>
        <img className="social-image" src={Email} alt="email"></img>
      </div>
    </div>  );
};

export default Home;
