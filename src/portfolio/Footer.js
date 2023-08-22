import React from "react";
import "./Footer.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import footerLogo from "../images/signature-removebg-preview (1).png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footerMain">
        <div className="footerUp">
          <div className="upperContent">
            <p className="firstPara">ui/ux designer</p>
            <h1 className="secondHeading">Akhlakh Ahmad.</h1> <br /> <br />
            <p>
              As a UI/UX designer, I am a versatile and skilled <br /> 
              professional who excels in crafting seamless and engaging digital
              experiences.
            </p>
          </div>
        </div>
        <div className="footerContact">
          <button>
            <Link to="/contact">Contact.</Link>
          </button>
          <button>
            <Link to="/contact"> <ArrowForwardIcon /></Link>
           
          </button>
        </div>

        <div className="footerLogo">
          <a href="https://www.linkedin.com/in/akhlakh-ahmad-b53a12209/" target="_blank">linkedin.</a>
          <a href="https://github.com/ak7549" target="_blank">github.</a>
          
        </div>

        <div className="copyright">
            <p>&copy; Akh 2023</p>
            
        </div>
      </footer>
    </>
  );
};

export default Footer;
