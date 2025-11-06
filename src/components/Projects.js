import React, { useState } from "react";
import ppeHelmetImg from '../assets/ppe-detection-smart-helmet.jpg';
import studentResultsImg from '../assets/student-result-management.jpg';
import communityServiceImg from '../assets/communityServiceImg.jpg';
import portfolioImg from '../assets/portfolioImg.jpg';
import weatherAppImg from '../assets/weatherAppImg.jpg';
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "PPE Detection & Smart Helmet Monitoring Using Yolov8 and Sensors",
    year: "2025",
    imageUrl: ppeHelmetImg,
    description: "Implemented a real-time Personal Protective Equipment detection system using YOLOv8 for helmets, vests, and masks, combined with smart helmet sensor integration for gas, temperature, and worker alerting via GSM. Built with Python, OpenCV, embedded systems, and Flask,"
  },
  {
    id: 2,
    title: "Web-Based Student Result Management",
    year: "2023",
    imageUrl: studentResultsImg,
    description: "Developed a secure full-stack system for managing student results with React, Node.js, Express, and MongoDB. It features user authentication, roles, bulk data uploads, and responsive UI.",
  },
  {
    id: 3,
    title: "Community Service Project",
    year: "2022",
    imageUrl: communityServiceImg,
    description: "Led community-driven environmental awareness and plantation programs among various Rural areas.Distrubuted plants to many people socially to bring awareness and importance of plants.",
  },
  {
    id: 4,
    title: "Portfolio Website",
    year: "2025",
    imageUrl: portfolioImg,
    description: "Built a clean, modern portfolio site with React and Framer Motion. Features smooth animations, responsive layout, and showcases projects with live demo.",
  },
  {
    id: 5,
    title: "Weather Now",
    year: "2024",
    imageUrl: weatherAppImg,
    description: "Created a real-time weather app fetching data from OpenWeatherMap API using React hooks and axios, featuring city-based queries and responsive design.",
  },
];

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section className="polaroid-section">
      <h2 className="polaroid-title">PROJECTS</h2>
      <div className="polaroid-grid">
        {projects.map(project => (
          <div
            className="polaroid-card"
            key={project.id}
            onClick={() => setOpenProject(project)}
            tabIndex={0}
            style={{ cursor: "pointer" }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="polaroid-img"
              loading="lazy"
            />
            <div className="polaroid-year">{project.year}</div>
            <div className="polaroid-label">{project.title}</div>
          </div>
        ))}
      </div>
      {openProject && (
        <div className="modal-backdrop" onClick={() => setOpenProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setOpenProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="modal-image-bar">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <img
              src={openProject.imageUrl}
              alt={openProject.title}
              className="modal-img"
            />
            <div className="modal-label">{openProject.title}</div>
            <div className="modal-desc">{openProject.description}</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
