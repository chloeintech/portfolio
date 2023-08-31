import React from "react";
import "./Home.css";
import About from "../components/images/about.png";
import Portfolio from "../components/images/portfolio.png";
import CV from "../components/images/cv.png";
import Contact from "../components/images/contact.png";


const Home = () => {

  return (
    <>

      <div className="home-container">

      <div className="chloe-container">
      Chloe Moss
      </div>

      <div className="portfolio-container">
      Portfolio
      </div>

      <div className="grid-container">
        <img className="grid-image" src={About} alt="about" onClick={event=> window.location.href='/about'}></img>
        <img className="grid-image" src={Portfolio} alt="portfolio" onClick={event=> window.location.href='/projects'}></img>
        <img className="grid-image" src={CV} alt="cv"></img>
        <img className="grid-image1" src={Contact} alt="contact"  onClick={event=> window.location.href='/contact'}></img>
      </div>

      </div> 

      <div className="text-container">
          Crafting code with a love for creativity.<br  />
          I'm a junior software developer who colours outside the lines of convention.
      </div>

      {/* <div className="social-container">
        <img className="social-image" src={LinkedIn} alt="linkedin"></img>
        <img className="social-image" src={Github} alt="github"></img>
        <img className="social-image" src={Email} alt="email"></img>
      </div> */}
    </>  );
};

export default Home;
