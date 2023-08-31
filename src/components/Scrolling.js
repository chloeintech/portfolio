// import React, { useRef, useEffect } from "react";
// import "./Scrolling.css";
// import About from "../components/images/about.png";
// import Portfolio from "../components/images/portfolio.png";
// import CV from "../components/images/cv.png";
// import Contact from "../components/images/contact.png";
// import LinkedIn from "../components/images/linkedin.png";
// import Github from "../components/images/github.png";
// import Email from "../components/images/email.png";

// const Scrolling = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const images = container.querySelectorAll(".banner-image");

//     const scrollSpeed = 1;
//     const totalImagesWidth = images.length * images[0].clientWidth;
//     let animationFrameId;
//     let scrollOffset = 0;

//     const animate = () => {
//       scrollOffset += scrollSpeed;

//       if (scrollOffset >= totalImagesWidth) {
//         scrollOffset = 0;
//       }

//       container.style.transform = `translateX(-${scrollOffset}px)`;

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div className="home">
//       <div className="scrolling-banner-container" ref={containerRef}>
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//         <img className="banner-image" src={Image1} alt="Chloe in Tech" />
//       </div>

//       <div className="grid-container">
//         <img className="grid-image" src={About} alt="about" onClick={event=> window.location.href='/about'}></img>
//         <img className="grid-image" src={Portfolio} alt="portfolio" onClick={event=> window.location.href='/projects'}></img>
//         <img className="grid-image" src={CV} alt="cv"></img>
//         <img className="grid-image1" src={Contact} alt="contact"  onClick={event=> window.location.href='/contact'}></img>
//       </div>

//       <div className="text-container">
//         <h1>
//           <i>Crafting code with a </i><b>love for creativity.</b> <br  />
//           <i> I'm a junior software developer who </i> 
//           <b>colours outside the lines of convention.</b>
//         </h1>
//       </div>

//       <div className="social-container">
//         <img className="social-image" src={LinkedIn} alt="linkedin"></img>
//         <img className="social-image" src={Github} alt="github"></img>
//         <img className="social-image" src={Email} alt="email"></img>
//       </div>
//     </div>  );
// };

// export default Scrolling;
