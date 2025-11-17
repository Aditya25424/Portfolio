import React from 'react'
import Navbar from '/src/components/navbar/Navbar'
import './projects.css'
const Projects = () => {
  const user_projects =[{
    project_name :"esper",
    project_image:"src/assets/projects/esper.png",
    project_description:"Social media",
  },
  {
    project_name :"Blood unity",
    project_image:"src/assets/projects/Dronathon.png",
    project_description:"Blood donation app",
  },
  {
    project_name :"Dronathon",
    project_image:"src/assets/projects/Dronathon.png",
    project_description:"Tech-fest side",
  },
  {
    project_name :"more to come soon",
    project_image:"",
    project_description:"good things takes time",
  },
]



  return (
    <div>
     
      <div className='projects-container'>
        <div className='project-top'>
          <Navbar />
        </div>
        <div className='project-mid'>
           {
        user_projects.map((data)=>(
          <div key={data.id}> 
           <h3>{data.project_name}</h3>
            <img src={data.project_image}></img>
          <p>{data.project_description}</p>
          </div>
     )) }
        </div>
        </div>
      </div>

  )
}

export default Projects