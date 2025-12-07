// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from '/src/components/navbar/Navbar'

import bloodunity from "../../assets/projects/Bloodunity.png";
import esper from "../../assets/projects/esper.png";
import dronathon from "../../assets/projects/Dronathon.png";
import "./Projects.css";



const projects = [
  {
    title: "BloodUnity App",
    description: "A blood donation app connecting donors with hospitals in real-time.",
    tech: ["Android studio", "Firebase", "Tailwind"],
    image: bloodunity,
    live: "#",
    github: "https://github.com/Aditya25424/Bloodunity",
  },
  {
    title: "Esper App",
    description: "Full stack application to interact anonymously.",
    tech: ["React Js", "SpringBoot", "MySQL"],
    image: esper,
    live: "#",
    github: "https://github.com/Aditya25424/Esper_Application",
  },
  {
    title: "Dronathon Website",
    description: "Official college tech fest website with event registration.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: dronathon,
    live: "#",
    github: "https://github.com/Aditya25424/drona-thon2024",
  },
];

const Projects = () => {
  return (
    <div>
     < Navbar />
<section id="projects" className="projects-section">
  <div className="projects-container">

    <h2 className="projects-title">
      My <span>Projects</span>
    </h2>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div key={index} className="project-card">

          <img src={project.image} className="project-image" />

          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.live} className="btn-live">Live Demo</a>
              <a href={project.github} className="btn-github">GitHub</a>
            </div>

          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>
    </div>
  );
};

export default Projects;
