import React, { useState } from "react";
import "./About.css";
import quali from "./Qualificaton";
import SchoolIcon from "@mui/icons-material/School";
import skills from "../images/skillNew.png";

const About = () => {
  const [qualiData, setQualiData] = useState(quali);
  console.log(qualiData);
  return (
    <>
      <div className="aboutMain">
        <div className="up">
          <div className="upCenter">
            <h1>Basic Information</h1>
            <h4>Address: New Ashokh Nagar Noida Sec-14</h4>
            <h4>Phone: +919065455197</h4>
            <h4>Email: akhlakh7549@gmail.com</h4>
          </div>
        </div>

        <div className="heading">
          <h1>Qualification 🧑‍🎓 </h1>
        </div>
        <div className="down">
          {qualiData.map((elem, i) => {
            return (
              <div className="qualification" key={elem.id}>
                <div className="icon">
                  <SchoolIcon />
                </div>
                <div className="course">
                  <ul>
                    <li>
                      <h4>
                        {" "}
                        <span className="courseContent">Course</span> ➡️{" "}
                        {elem.course}
                      </h4>
                    </li>
                  </ul>
                </div>

                <div className="from">
                  <ul>
                    <li>
                      {" "}
                      <h4>
                        {" "}
                        <span className="courseContent">From</span> ➡️{" "}
                        {elem.from}
                      </h4>
                    </li>
                  </ul>
                </div>

                <div className="completed">
                  <ul>
                    <li>
                      <h4>
                        {" "}
                        <span className="courseContent">Completed</span> ➡️{" "}
                        {elem.completed}
                      </h4>
                    </li>
                  </ul>
                </div>
                <div className="division">
                  <ul>
                    <li>
                      <h4>
                        {" "}
                        <span className="courseContent">Division</span> ➡️{" "}
                        {elem.division}
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>




        <div className="skillsHeading">
            <h1>Skills</h1>
          </div>
        <div className="skills">
          
        
            <h3>ReactJs</h3>
            <h3>JavaScript</h3>
            <h3>Html</h3>
            <h3>Css</h3>
            <h3>Bootstrap</h3>
            <h3>Material UI</h3>
            <h3>Canva</h3>
          
        </div>
      </div>
    </>
  );
};

export default About;
