import React from 'react'
// import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = ({ classactive, setclassactive }) => {

  return (
    <div className='navbar'>
        <h1 className='logo'>&lt;varshini/&gt;<span></span></h1>
        <div className="nav">
            <a href="#home">Home</a>
            <a href="#about">About me</a>
            <a href="#resume">Career Summary</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" onClick={() => setclassactive(!classactive)}>
        <div></div>
        <div></div>+
        <div></div>
      </div>
         
    </div>

  )
}

export default Navbar