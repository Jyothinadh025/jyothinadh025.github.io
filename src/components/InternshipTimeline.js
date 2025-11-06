import React from "react";
import { FaLaptopCode, FaDatabase, FaRobot } from "react-icons/fa";
import "./InternshipTimeline.css";

const internships = [
  {
    company: "KodNest",
    title: "Full Stack Java & Python Intern",
    duration: "Feb 2025 – oct 2025",
    icon: <FaLaptopCode />,
    color: "#43ad90",
    skills: ["Java", "Spring Boot", "SQL", "HTML", "CSS", "JavaScript", "Python", "MongoDB"],
    highlights: [
      "Gained structured training in core full-stack technologies.",
      "Enhanced skills in problem-solving, debugging, and collaborative development."
    ],
    side: "left"
  },
  {
    company: "Codtech IT Solutions",
    title: "Full Stack Web Development",
    duration: "Jan 2025 – Feb 2025",
    icon: <FaDatabase />,
    color: "#ffb74d",
    skills: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Engineered responsive web pages and interactive applications.",
      "Collaborated on client projects and received mentor feedback."
    ],
    side: "right"
  },
  {
    company: "Edu Phoenix Solutions",
    title: "Machine Learning Python Intern",
    duration: "Jun 2024 – Jul 2024",
    icon: <FaRobot />,
    color: "#ca78ad",
    skills: ["Python", "Machine Learning", "Pandas", "NumPy"],
    highlights: [
      "Developed and optimized ML models for real-world datasets.",
      "Handled preprocessing, feature selection, and model evaluation."
    ],
    side: "left"
  }
];

export default function InternshipTimeline() {
  return (
    <section className="timeline-section" id="internship">
      <h2 className="timeline-title">Internship Experience</h2>
      <div className="timeline">
        {internships.map((exp, idx) => (
          <div
            className={`timeline-item ${exp.side}`}
            key={idx}
            style={{ top: `${idx * 175}px` }}
          >
            <div className="timeline-icon" style={{ background: exp.color }}>
              {exp.icon}
            </div>
            <div className="timeline-content shadow" style={{ borderColor: exp.color }}>
              <div
                className="timeline-badge"
                style={{
                  background: exp.color + "22",
                  color: exp.color
                }}
              >
                {exp.title}
              </div>
              <h3
                className="exp-company"
                style={{
                  color: exp.color,
                  fontSize: "1.14em",
                  fontWeight: 700,
                  margin: "0 0 3px 0",
                  letterSpacing: ".02em",
                  textShadow: "0 1px 7px #fff7"
                }}
              >
                {exp.company}
              </h3>
              <div className="exp-dates">{exp.duration}</div>
              <div className="exp-skills">
                {exp.skills.map(skill => (
                  <span
                    className="exp-skill"
                    style={{ background: exp.color + "14", color: exp.color }}
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <ul className="exp-points">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
}
