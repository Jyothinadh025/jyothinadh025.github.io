import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    place:
      "Sreenivasa Institute of Technology Management and Studies, Chittoor, Andhra Pradesh",
    year: "2021 - 2025",
    cgpa: "Cgpa: 7.09",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Board Of Intermediate (MPC)",
    place: "Sri Chaitanya Junior College, Chittoor, Andhra Pradesh",
    year: "2019 - 2021",
    cgpa: "Marks: 764",
    icon: <FaSchool />,
  },
  {
    degree: "Board Of Secondary Education",
    place:
      "Little Flower English Medium School, Chittoor, Andhra Pradesh",
    year: "2018 - 2019",
    cgpa: "Grade: 9.5",
    icon: <FaSchool />,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

const Education = () => (
  <section className="edu-section">
    <motion.h2
      className="edu-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Education
    </motion.h2>
    <motion.div
      className="edu-timeline"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {educationData.map((edu, i) => (
        <motion.div className="edu-card" key={edu.degree} variants={cardVariant}>
          <div className="edu-icon">{edu.icon}</div>
          <div>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-place">{edu.place}</div>
            <div className="edu-details">
              <span className="edu-year">{edu.year}</span>
              <span className="edu-cgpa">{edu.cgpa}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Education;
