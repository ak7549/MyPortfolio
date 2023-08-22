import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import Back1 from "./images/whiteSar.png";


import "./Nav.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  GiHamburgerMenu,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {

  

  const [showMediaIcon, setShowMediaIcon] = useState(false);

  const showMenu = () => {
    console.log("clicked");
    setShowMediaIcon(!showMediaIcon);
  };


 

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h1>My<span className="port">Portfolio</span> </h1>
        </div>
        {/* 2nd menu part */}
        <div
          className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutubeSquare />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={showMenu}>
              <MenuIcon />
            </a>
          </div>
        </div>
      </nav>
      {/* hero section  */}
      
    </>
  );
};

export default Navbar;
