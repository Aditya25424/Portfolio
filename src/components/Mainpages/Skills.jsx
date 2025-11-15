import React from 'react'
import "./Skills.css"
import Navbar from '/src/components/navbar/Navbar'
const Skills = () => {
  return (
    <div>
      <div className='Skills-container'>
        <div className='Skills-top'>
          <Navbar />
        </div>
        <div className='Skills-bottom'>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum excepturi mollitia quas atque, enim, 
            sed tempore labore pariatur molestias illum molestiae eius? Enim nam nobis quasi libero ipsa recusandae minus?</p>
        </div>
      </div>
    </div>
  )
}

export default Skills