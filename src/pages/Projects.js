import React, { useRef, useEffect } from "react";
import "./Projects.css";
import Project from "../components/images/projects.png"
import Cats4Lyf from "../components/images/cats4lyf.png";
import CookieClub from "../components/images/cookieclub.png";
import ModernHouse from "../components/images/modernhouse.png";
import Pokemon from "../components/images/pokemon.png";


const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const images = container.querySelectorAll(".banner-image");

    const scrollSpeed = 1;
    const totalImagesWidth = images.length * images[0].clientWidth;
    let animationFrameId;
    let scrollOffset = 0;

    const animate = () => {
      scrollOffset += scrollSpeed;

      if (scrollOffset >= totalImagesWidth) {
        scrollOffset = 0;
      }

      container.style.transform = `translateX(-${scrollOffset}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="projects">
      <div className="scrolling-banner-container" ref={containerRef}>
      <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
        <img className="banner-image" src={Project} alt="Projects" />
   
      </div>

      <div className="grid-container">
        <img className="grid-image-p" src={ModernHouse} alt="modern house"></img>
        <img className="grid-image-p" src={Pokemon} alt="pokemon"></img>
        <img className="grid-image-p" src={CookieClub} alt="cookie club"></img>
        <img className="grid-image-p" src={Cats4Lyf} alt="cats 4 lyf"></img>
      </div>

 


    </div>
  );
};

export default Projects;
