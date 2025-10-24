import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import InternshipTimeline from './components/InternshipTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/SectionStyles.css';
import './App.css';

const TITLES = [
  'Aspiring Software Engineer',
  'Full Stack Web-developer',
  'UI/UX Designer'
];

function App() {
  const [nameTyped, setNameTyped] = useState(false);

  return (
    <>
      <section className="landing-section">
        <a
          href="https://github.com/jyothinadh025"
          className="github-corner-abs"
          aria-label="View source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="22" fill="#181717" />
            <path
              fill="#fff"
              d="M22 12.2c-5.81 0-10.5 4.69-10.5 10.5 0 4.65 3 8.52 7.3 9.78.52.1.7-.23.7-.47v-1.77c-2.97.65-3.58-1.43-3.58-1.43-.48-1.25-1.15-1.58-1.15-1.58-.95-.65.08-.65.08-.65 1.06.09 1.61 1.11 1.61 1.11.95 1.61 2.48 1.16 3.09.89.1-.7.37-1.16.67-1.43-2.41-.28-4.93-1.21-4.93-5.34 0-1.17.41-2.14 1.08-2.87-.1-.27-.46-1.4.11-2.92 0 0 .89-.29 2.92 1.08.83-.24 1.72-.36 2.6-.36s1.77.12 2.6.36c2.02-1.37 2.91-1.08 2.91-1.08.58 1.52.22 2.65.11 2.92.67.73 1.08 1.7 1.08 2.87 0 4.14-2.52 5.05-4.93 5.34.39.34.72.98.72 2v2.97c0 .26.18.57.71.47C29.5 31.22 32.5 27.35 32.5 22.7c0-5.81-4.7-10.5-10.5-10.5Z"
            />
          </svg>
        </a>
        <div className="landing-content">
          <div className="landing-icon landing-computer-big">
            <svg width="150" height="150" viewBox="0 0 104 104" fill="none">
              <rect x="14" y="22" width="76" height="44" rx="12" stroke="#181717" strokeWidth="7"/>
              <rect x="26" y="71" width="52" height="12" rx="3.8" fill="#181717"/>
              <path d="M40 46 H64" stroke="#181717" strokeWidth="4.5" strokeLinecap="round"/>
              <path d="M40 59 H64" stroke="#181717" strokeWidth="4.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="landing-name standout-title">
            {!nameTyped ? (
              <Typewriter
                options={{
                  delay: 61,
                  cursor: ''
                }}
                onInit={typewriter => {
                  typewriter
                    .typeString('Arikuti Jyothinadh')
                    .callFunction(() => setNameTyped(true))
                    .start();
                }}
              />
            ) : (
              'Arikuti Jyothinadh'
            )}
          </h1>
          <h2 className="landing-role big-typewriter">
            <Typewriter
              options={{
                strings: TITLES,
                autoStart: true,
                loop: true,
                delay: 48,
                deleteSpeed: 33,
                pauseFor: 1300,
                cursor: '|'
              }}
            />
          </h2>
        </div>
      </section>

      <section className="about-full" id="about"><About /></section>
      <section className="education-full" id="education"><Education /></section>
      <section className="skills-full" id="skills"><Skills /></section>
      <section ClassName="internshiptimeline-full" id="internshiptimeline"><InternshipTimeline /></section>
      <section className="projects-full" id="projects"><Projects /></section>
      <section className="contact-full" id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
