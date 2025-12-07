/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./Professional.css";
import Navbar from '/src/components/navbar/Navbar'

const careerData = [
  {
    year: "JUNE 2025 - AUGUST 2025",
    title: "Java & Spring Boot Intern",
    company: "AzureSkynet Pvt. Ltd.",
    description:
      "Worked on backend development using Spring Boot, REST APIs, database integration, and security concepts.",
  },
  {
    year: "JUNE 2024 - JULY 2024",
    title: "Web Developer Intern",
    company: "Oasis Infobyte",
    description:
      "Developed static websites like Starbucks landing page, portfolio website, and a temperature converter app using HTML, CSS, and JavaScript.",
  },
  {
    year: "2022 - 2026",
    title: "B.Tech (CSE)",
    company: "DRONACHARYA COLLEGE OF ENGINEERING",
    description:
      "Studied core subjects including DSA, Java, Web Development, DBMS, Cloud Computing, and Cyber Security.",
  },
];

const Professional = () => {
  return (
    <div >  
      <Navbar />
    <section className="career-section">
      
      <div className="career-container">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="career-title"
        >
          My <span>Career Journey</span>
        </motion.h2>

        <div className="timeline">
          {careerData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="career-skills"
        >
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <span>React</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>AWS</span>
            <span>Tailwind CSS</span>
            <span>Git & GitHub</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="career-cta"
        >
          <h3>Looking for Opportunities</h3>
          <p>I am actively seeking full-time roles and internships in Full Stack & Cloud Development.</p>
          <a href={"/HireMe"}>Hire Me</a>
        </motion.div>

      </div>
    </section>
    </div>
  );
};

export default Professional;
