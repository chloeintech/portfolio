import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Sidebardata } from "./Sidebardata";
import "./Navbar.css";
import { IconContext } from "react-icons";
import LinkedIn from "../components/images/linkedin.png";
import Github from "../components/images/github.png";
import Email from "../components/images/email.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color : '#FF9045'}}> */}
      <div className="navbar">

        <Link to="#" id="cssnav" className="navleft">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        <ul id="cssnav" className="navright">
          <img className="social-image" src={LinkedIn} alt="linkedin"></img>
          <img className="social-image" src={Github} alt="github"></img>
          <img className="social-image" src={Email} alt="email"></img>
        </ul>

      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="x-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {Sidebardata.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
