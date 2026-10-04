import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Check, Info, Award, X } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

const projectsData = [
  {
    id: 'hostel-sys',
    title: 'Hostel Accommodation Management System',
    isMajor: true,
    category: 'python',
    image: '/projects/hostel.png',
    tech: ['Python', 'Tkinter', 'MySQL', 'SQL'],
    shortDesc: 'Desktop-based hostel management system streamlining student registration, room allocation, and database record keeping.',
    fullDesc: 'A comprehensive desktop application engineered to simplify hostel accommodation administration. Features robust database connection to MySQL for real-time CRUD operations, student record management, search indexing, and automated room allocation.',
    features: [
      'Student registration & detailed record management',
      'Add, delete, update, and fast search student records',
      'Automated room allocation & student-room relational mapping',
      'MySQL Relational Database integration for secure data storage',
      'Optimized query performance for scaling up to large student databases',
    ],
    github: 'https://github.com/MohanaVishwa',
    demo: null,
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast Application',
    isMajor: false,
    category: 'python',
    image: '/projects/hostel.png',
    tech: ['Python', 'Tkinter', 'REST APIs', 'Postman'],
    shortDesc: 'Desktop GUI weather application delivering real-time weather, temperature, humidity, and wind metrics.',
    fullDesc: 'A desktop application built using Python and Tkinter that connects to live weather REST APIs. Tested and debugged via Postman API environment to ensure reliable data parsing and accurate live weather metrics.',
    features: [
      'Real-time weather metrics: Temperature, Humidity, Wind speed & direction',
      'Location-based weather search for international cities',
      'REST API integration with json response parsing',
      'API endpoint testing & debugging using Postman',
    ],
    github: 'https://github.com/MohanaVishwa',
    demo: null,
  },
  {
    id: 'food-tracker',
    title: 'Food Tracker Web Application',
    isMajor: false,
    category: 'web',
    image: '/projects/hostel.png',
    tech: ['Python', 'Flask', 'HTML5', 'CSS3'],
    shortDesc: 'A Flask web application for logging, tracking, and monitoring daily food items and nutritional entries.',
    fullDesc: 'A beginner-friendly Flask web application designed to demonstrate server-side routing, request handling, form validation, and web data persistence.',
    features: [
      'Web-based tracking interface with dynamic form handling',
      'Flask backend routes for adding and viewing entries',
      'Clean CSS dashboard layout for daily logs',
    ],
    github: 'https://github.com/MohanaVishwa',
    demo: null,
  },
  {
    id: 'menstrual-tracker',
    title: 'Menstrual Tracking System',
    isMajor: false,
    category: 'python',
    image: '/projects/hostel.png',
    tech: ['Python', 'Datetime Lib', 'Algorithms'],
    shortDesc: 'Python application utilizing date/time mathematical algorithms for cycle calculation and tracking.',
    fullDesc: 'A Python-based utility script engineered to calculate cycle intervals, estimate future dates, and present organized tracking summaries utilizing core datetime modules.',
    features: [
      'Date/Time mathematical calculations & cycle projection',
      'Structured command-line / visual output',
      'Exception handling for invalid date formats',
    ],
    github: 'https://github.com/MohanaVishwa',
    demo: null,
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Developer Portfolio',
    isMajor: false,
    category: 'web',
    image: '/projects/hostel.png',
    tech: ['React', 'HTML5', 'CSS3', 'Vite'],
    shortDesc: 'Modern, highly responsive developer portfolio showcasing projects, skills, education, and career journey.',
    fullDesc: 'A ultra-responsive single page web application built with React, modular CSS design system, dark/light theme persistence, interactive terminal previews, and SEO optimization.',
    features: [
      'Component-based clean architecture',
      'Dark / Light mode smooth transition toggle',
      'Interactive project modal, skill filters & resume viewer',
      'Fully responsive across mobile, tablet, and desktop viewports',
    ],
    github: 'https://github.com/MohanaVishwa',
    demo: 'https://github.com/MohanaVishwa',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} /> Software Portfolio
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of practical desktop applications, web systems, database integrations, and software solutions.
          </p>
        </div>

        {/* Project Filters */}
        <div className="skill-filter-tabs">
          <button
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            className={`filter-tab ${activeFilter === 'python' ? 'active' : ''}`}
            onClick={() => setActiveFilter('python')}
          >
            Python &amp; Desktop
          </button>
          <button
            className={`filter-tab ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web &amp; Flask
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                {project.isMajor && (
                  <span className="project-badge-top">⭐ Major Project</span>
                )}
                {project.isAward && (
                  <span className="project-badge-top" style={{ color: '#F59E0B', borderColor: '#F59E0B' }}>
                    🏆 2nd Place Winner
                  </span>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>

                <div className="project-tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div className="project-footer-btns">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-card-action"
                  >
                    <Info size={15} /> Details
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-action"
                  >
                    <Github size={15} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail View */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <span className="section-tag">
                {selectedProject.tech[0]} Project
              </span>
              {selectedProject.isAward && (
                <span className="trophy-badge" style={{ margin: 0 }}>🏆 2nd Place Award</span>
              )}
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              {selectedProject.title}
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selectedProject.fullDesc}
            </p>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              Key Features &amp; Technical Scope:
            </h4>

            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
              {selectedProject.features.map((feat, fIdx) => (
                <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                  <Check size={16} color="var(--accent-cyan)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={18} />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
