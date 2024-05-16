import React from "react";
import { useEffect } from "react";
import './resume.css';
const Resume = () => {
  useEffect(() => {
    let list = document.querySelectorAll(".left a");
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active-link";
      };
    }
  }, []);

  return (
    <div id="resume" className="resume-section">
      <h1 className="headd">Career Summary</h1>

      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="main-resume">
        <div class="left">
          <a href="#first" className="active-link">
            <b></b>
            <b></b>
            <i className="fa-solid fa-graduation-cap"></i> Qualifications
          </a>
          <a href="#second">
            <b></b>
            <b></b>
            <i className="fa-solid fa-laptop"></i> Technical acumen
          </a>
          <a href="#third">
            <b></b>
            <b></b>
            <i className="fa-solid fa-chart-column"></i> Projects
          </a>
          <a href="#fourth">
            <b></b>
            <b></b>
          </a>
        </div>
        <div className="right">
          <div id="first">
             
            <div className="edu">
              <div className="edu-name">
                <h1 className="te">
                  <i class="fa-solid fa-circle-dot"></i> KARPAGAM INSTITUTE OF TECHNOLOGY,COIMBATORE
                </h1>
                <h2 className="time">2021-2025</h2>
              </div>
              {/* <br /> */}
              <h2 className="type">B TECH IT <p>CGPA - 8.14</p></h2>
            </div>
            <div className="edu">
              <div className="edu-name">
                <h1 className="te">
                  <i class="fa-solid fa-circle-dot"></i> SARU MATRICULATION HIGHER SECONDARY SCHOOL,ERODE
                </h1>
                <p className="time">2019-2020</p>
              </div>
              <h2 className="type">HSC<p>Percentage - 89.7%</p></h2>
            </div>
            <div className="edu">
              <div className="edu-name">
                <h1 className="te">
                  <i class="fa-solid fa-circle-dot"></i> SARU MATRICULATION HIGHER SECONDARY SCHOOL,ERODE
                </h1>
                <h3 className="time">2017-2018</h3>
              </div>
              <h2 className="type">SSLC<p>Percentage - 86.4</p></h2>
            </div>
          </div>
          <div id="second">
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> reactjs
              </p>
              <div className="p-bar">
                <div style={{ width: "80%" }} className="react"></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> java
              </p>
              <div className="p-bar">
                <div style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> html,css,js
              </p>
              <div className="p-bar">
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> python
              </p>
              <div className="p-bar">
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            
          </div>
          <div id="third">
            <div className="edu">
              <div className="edu-name">
                <h1 className="tee">
                  <i class="fa-solid fa-circle-dot"></i> Banking Bot-Virtual Assistant for AI
                </h1>
                <p className="time">2022-2023</p>
              </div>
              <h2 className="type">Machine Learning</h2>
            </div>
            <div className="edu">
              <div className="edu-name">
                <h1 className="tee">
                  <i class="fa-solid fa-circle-dot"></i> Portfolio 
                </h1>
                <p className="time">2024-2025</p>
              </div>
              <h2 className="type">Reactjs(html,css,js)</h2>
            </div>
            <div className="edu">
              
             
            </div>
            <div className="edu">
              
              
            </div>
            </div>
             
             
          <div id="fourth">
            <div className="edu">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
