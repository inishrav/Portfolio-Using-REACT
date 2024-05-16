import React from "react";
import img from "../img/About-me.jpg";
import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="headd">About me</h1>
      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="about-section">
        <div className="img-section">
          <img src={img} alt="" srcset="" />
        </div>
        <div className="about-text">
          <div className="text-section">
          Hi, I'm Varshini! I'm a passionate software developer with a love for creating
                    innovative solutions. My journey in tech started with a curiosity to explore
                    the digital world, and since then, I've been dedicated to honing my skills
                    and embracing new technologies. I believe in the power of technology to
                    transform lives and solve real-world problems, and I'm excited to be part
                    of this ever-evolving industry.
          </div>
          <div className="highlight">
            <ul>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                Frontend Developer
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                DevOps Enthusiastic
              </li>
              
               
            </ul>
          </div>
          <div className="about-btn">
            <a className="resume" href="images/myresume.pdf" download>
              Resume
            </a>
            <a href="#contact" className="hire-me">
              Hire Me
            </a>
          </div>
          <div>
            <h1>google map location</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};
