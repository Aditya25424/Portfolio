import React from 'react'
import "./Skills.css"

import Navbar from '/src/components/navbar/Navbar'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaAndroid } from 'react-icons/fa';
import { SiMysql, SiSpringboot, SiNetlify, SiHtml5, SiCss3, SiImessage, SiCanva, SiNodedotjs, SiMongodb } from 'react-icons/si';
const Skills = () => {
  return (
    <div>
      <div className='Skills-container'>
        <div className='Skills-top'>
          <div className="page-with-navbar">
          <Navbar />
        </div>
        <div className='Skills-bottom'>
          <div className='mid'>
            <div className='mid-skills'>
              <h2>BACKEND</h2>
              <button>JAVA <FaJava /></button>
              <button>SPRING BOOT<SiSpringboot /></button>
                <button>NODE JS<SiNodedotjs /></button>
            </div>
            <div className='mid-skills'>
              <h2>FRONT-END</h2>
              <button>HTML5 <SiHtml5 /></button>
              <button>CSS <SiCss3 /></button>
              <button>REACT JS<FaReact /></button>
            </div>
             
            <div className='mid-skills'>
              <h2>DATABASES AND HOSTING</h2>
              <button>MYSQL <SiMysql /></button>
              <button>Netlify <SiNetlify /></button>
              <button>MONGODB <SiMongodb/></button>
            </div>
           <div className='mid-skills'>
                <h2>OTHERS TOOLS</h2>
                <button>Github <FaGitAlt /></button>
              <button>canva <SiCanva /></button>
              <button>Android <FaAndroid /></button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills