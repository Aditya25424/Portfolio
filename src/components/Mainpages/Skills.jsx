import React from 'react'
import "./Skills.css"
import Navbar from '/src/components/navbar/Navbar'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaAndroid } from 'react-icons/fa';
import {SiMysql, SiSpringboot,SiNetlify, SiHtml5, SiCss3, SiImessage, SiCanva } from 'react-icons/si';
const Skills = () => {
  return (
    <div>
      <div className='Skills-container'>
        <div className='Skills-top'>
          <Navbar />
        </div>
        <div className='Skills-bottom'>
           <div>
            <button>SPRING BOOT<SiSpringboot /></button>
            <button>REACT JS<FaReact /></button>
            <button>MYSQL <SiMysql /></button>
            <button>JAVA <FaJava /></button>
            <button>Github <FaGitAlt /></button>
            <button>Netlify <SiNetlify /></button>
            <button>HTML5 <SiHtml5 /></button>
             <button>CSS <SiCss3 /></button>
              <button>canva <SiCanva /></button>
              <button>Android <FaAndroid /></button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Skills