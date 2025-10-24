import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import myPhoto from '../assets/myphoto.JPG';
import "./Contact.css";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/a-jyothinadh",
    styleClass: "li",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Jyothinadh025",
    styleClass: "gh",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/mr.bachelor__45/",
    styleClass: "ig",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:ajyothinadh@gmail.com",
    styleClass: "em",
  },
];

const inputVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.14, type: "spring", stiffness: 110 },
  }),
};

const buttonVariants = {
  idle: { scale: 1 },
  pulse: {
    scale: 1.09,
    boxShadow: "0 0 18px #7e57c2",
    transition: { yoyo: Infinity, duration: 1.18 },
  },
};

const Contact = () => (
  <section className="contact-area">
    <div className="gradient-orb" />
    <motion.div
      className="contact-outer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ 
        visible: { transition: { staggerChildren: 0.24 } } 
      }}
    >
      {/* Left Column */}
      <motion.div
        className="contact-col profile-col"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: {duration: 0.7} }
        }}
      >
        <div className="profile-pic-wrap">
          <img
            src={myPhoto}
            alt="Arikuti Jyothinadh"
            className="profile-pic"
          />
        </div>
        <h2 className="profile-name">Arikuti Jyothinadh</h2>
        <p className="profile-intro">
          Full Stack Developer <br /> Bengaluru, Karnataka, India
        </p>
        <div className="profile-contact-details">
          <div className="profile-detail">
            <FaEnvelope className="profile-detail-icon" />
            <span>ajyothinadh@gmail.com</span>
          </div>
          <div className="profile-detail">
            <FaPhoneAlt className="profile-detail-icon" />
            <span>+91 93910 74331</span>
          </div>
          <div className="profile-detail">
            <FaMapMarkerAlt className="profile-detail-icon" />
            <span>Bengaluru, KA, India</span>
          </div>
        </div>
        <div className="profile-socials">
          {socialLinks.map(({ name, icon, url, styleClass }, i) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon-3d ${styleClass}`}
              whileHover={{ rotate: 16, scale: 1.2, boxShadow: "0 0 16px #7e57c2aa" }}
              whileTap={{ scale: 0.93 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 + i*0.14, type: "spring" }}
              aria-label={name}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="contact-col form-col glass-glow"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: {duration: 0.7} }
        }}
      >
        <h3 className="form-title">Send a Message</h3>
        <form
          className="contactform"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! Message submitted.");
            e.currentTarget.reset();
          }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="inputglass"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inputVariants}
            required
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="inputglass"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inputVariants}
            required
          />
          <motion.textarea
            placeholder="Your Message"
            className="inputglass"
            rows={5}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inputVariants}
            required
          />
          <motion.button
            type="submit"
            className="contact-form-btn"
            initial="idle"
            whileHover="pulse"
            variants={buttonVariants}
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  </section>
);

export default Contact;
