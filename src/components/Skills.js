import React from "react";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "Java", icon: <FaJava />, color: "#e76f00" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "SQL", icon: <FaDatabase />, color: "#00618a" },
  { name: "HTML", icon: <FaHtml5 />, color: "#e44d26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#2965f1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" }
];

const Skills = () => (
  <section className="skills-section">
    <h2 className="skills-title">SKILLS</h2>
    <div className="skills-grid">
      {skills.map(({ name, icon, color }) => (
        <div key={name} className="skill-card">
          <span
            className="icon icon-animated"
            style={{ color }}
            tabIndex={0}
          >
            {icon}
          </span>
          <div className="skill-name">{name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
