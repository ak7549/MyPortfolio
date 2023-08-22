import React from "react";
import "./Home.css";
import passPic from "../images/passPic.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import About from "./About";
import Resume from "../images/ahadResume.pdf"
import Footer from "./Footer";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="homeMain">
        <div className="homeLogo">
          <div className="homeUp" style={{ backgroundImage: `url(${passPic})` }} ></div>
        </div>

        <div className="homeContent">
        <div className="homeDown">
          <h1>Akhlakh Ahmad</h1>
          <h3>UI/UX Designer</h3>
          <a href="https://www.linkedin.com/in/akhlakh-ahmad-b53a12209/" target="_blank"><LinkedInIcon/></a>
          <a href="https://github.com/ak7549" target="_blank"><GitHubIcon/></a>
          <a href="https://instagram.com/ahad__hussain?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank"><InstagramIcon/></a>
          <a href="https://www.facebook.com/ahad.hussain.7798" target="_blank">< FacebookIcon /></a>
        </div>
        

        </div>
        <div className="homeBtn">
          <div className="twobtn">
          <button><a href={Resume} target="_blank">Download CV</a></button>
          <button><a href="#">Hire Me</a></button>
          

          </div>
          

        </div>
       
      </div>
      <About/>
      <Contact/>
   
    </>
  );
};

export default Home;
