import React from "react";
import "./About.css";
import profile1 from "../assets/profile1.jpg"; // adjust path as needed

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-title">ABOUT ME</div>
      <div className="about-inner">
        {/* Left Image Card */}
        <div className="about-photo-card">
          <img src={profile1} alt="Profile" className="about-photo" />
        </div>
        {/* Right Info Card */}
        <div className="about-info-card">
          <div className="about-header-bar">
            <span className="about-dot red"></span>
            <span className="about-dot yellow"></span>
            <span className="about-dot green"></span>
          </div>
          <div>
            <strong>Hi :)</strong>
            <br />
            <br />
            <span role="img" aria-label="waving">👋</span> I'm <strong>Jyothinadh</strong>, A Full-Stack Developer skilled in building modern web applications using front-end and Back-end Technologies.<br /><br />
            I love designing clean, interactive, and responsive user interfaces that create a great user experience.<br /><br />
            I’m passionate about continuous learning and turning ideas into beautiful digital products.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
