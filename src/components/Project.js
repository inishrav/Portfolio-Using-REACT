import React from "react";
import './Project.css';

const Project = () => {
  return (
    <div id="project">
      <h1 className="headd">Projects</h1>
      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="m-project">
        <div className="project-box">
          <img src=".png" alt="" />
          <p className="head">Portfolio using React With DevOps</p>
          <p className="desc">
            1.creating the portfolio using react.js<br/>
            <br>
            </br>
            2.creating github action pipeline in .yml for automatically uploading the files of your portfolio files<br/>
            <br>
            </br>
            3.creating the docker pipeline in .yml for uploading the image to the dockerhub<br/>
          </p>
          <div className="p-button">
            <a
              className="github"
              href="https://github.com/inishrav"
            >
              Github
            </a>
           
          </div>
        </div>
        <div className="project-box">
          <img src="images/bot.png" alt="" srcset="" />
          <div className="u-line"></div>
         
          <p className="head"> Banking Bot-Virtual Assistant for AI </p>
          <p className="desc">
            1.As technology has been developing in very vast way, we all are familiar with net banking,mobile banking rater than direct payment processing.
            But still we have more queries related to Banking related stuffs like as follows such as reactivating our bank account etc. 
            
       <br />
       <br></br>
            2. so we are here with a solution Banking Bot users can post any query regarding the banking operations.
            It enables interaction with customers and provide help. <br />

          </p>  

          
        </div>
       
        </div>
      </div>
    // </div>
  );
};

export default Project;
