import React from 'react'
import Stalker from "/src/assets/userlogo/stalker.jpg";
import { useNavigate } from "react-router-dom";

import './Navbar.css'
const Navbar = () => {
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
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-left'  style={{cursor : " pointer"}}>
                    <h2 onClick={goToHome}>ADITYA <span>SHARMA</span></h2>
                    <a onClick={goToHome}>Home</a>
                    <a onClick={goToSkills}>Skills</a>
                    <a onClick={goToProfessional} >Professional</a>
                    <a onClick={goToProjects} >Projects</a>
                    <a onClick={goToHireMe} >Hire Me</a>
                </div>
        
                <div className='navbar-right'>
            <img src={Stalker} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Navbar