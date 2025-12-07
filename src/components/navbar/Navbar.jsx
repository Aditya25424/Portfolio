import React from 'react'

import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


import './Navbar.css'
const Navbar = () => {
      const location = useLocation();
  const userImage = location.state.userImage ;

    const navigate = useNavigate();
      const goToHome = () => {
        navigate("/Homepage");
    };

    const goToSkills = () => {
        navigate("/Skills");
    }; 
    const goToProfessional = () => {
        navigate("/Professional");
    }; 
    const goToProjects = () => {
        navigate("/Projects");
    }; 
    const goToHireMe = () => {
        navigate("/HireMe");
    }; 
      const goTostart = () => {
        navigate("/");
    }; 
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-left'  style={{cursor : " pointer"}}>
                    <h2 onClick={goTostart}>ADITYA <span>SHARMA</span></h2>
                    <a onClick={goToHome}>Home</a>
                    <a onClick={goToSkills}>Skills</a>
                    <a onClick={goToProfessional} >Professional</a>
                    <a onClick={goToProjects} >Projects</a>
                    <a onClick={goToHireMe} >Hire Me</a>
                </div>
        
                <div className='navbar-right'>
            <img src={userImage} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Navbar