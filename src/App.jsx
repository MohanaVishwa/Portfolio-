import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Coding from './components/Coding';
import LearningRoadmap from './components/LearningRoadmap';
import CareerGoals from './components/CareerGoals';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vishwa_portfolio_theme') || 'dark';
  });
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vishwa_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Coding />
        <LearningRoadmap />
        <CareerGoals />

        {/* Dedicated Resume CTA Section */}
        <section id="resume">
          <div className="section-container">
            <div className="resume-box">
              <span className="section-tag" style={{ marginBottom: '1rem' }}>Curriculum Vitae</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
                Professional Resume
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
                View or download my formatted resume detailing education, technical stack, personal projects, achievements, and contact information.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="btn-primary"
                >
                  View Full Web Resume
                </button>
                <a
                  href="mailto:amohanavishwa@gmail.com?subject=Resume%20PDF%20Request"
                  className="btn-secondary"
                >
                  Download / Request PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Resume Modal Dialog */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
