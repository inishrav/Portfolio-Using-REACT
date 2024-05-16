import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#project">Projects</a>
        <a href="#contact">ContactMe</a>
      </div>
    </div>
  );
}

export default Sidebar;
