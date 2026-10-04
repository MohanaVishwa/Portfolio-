import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Code2, Sparkles, Terminal as TerminalIcon, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('python');

  return (
    <section id="home" className="hero-section">
      <div className="section-container">
        <div className="hero-grid">
          {/* Left Column: Bio & Calls to Action */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Entry-Level & Graduate Trainee Roles</span>
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Mohana Vishwa</span>
            </h1>

            <h2 className="hero-role">
              Final-Year B.E. Computer Science Engineering Student
            </h2>

            <p className="hero-bio">
              Aspiring Software Engineer passionate about developing practical, reliable software solutions. 
              Equipped with solid expertise in <strong>Python</strong>, <strong>MySQL</strong>, <strong>Web Technologies</strong>, 
              and a unique analytical problem-solving foundation.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn-secondary">
                <Download size={18} />
                <span>View / Download Resume</span>
              </button>
            </div>

            <div className="social-links-row">
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Connect with me:
              </span>
              <a
                href="https://github.com/MohanaVishwa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>

              <a
                href="http://www.linkedin.com/in/mohanavishwa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:amohanavishwa@gmail.com"
                className="social-icon-btn"
                title="Email Mohana Vishwa"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Developer Terminal & Avatar */}
          <div className="hero-visual-card">
            <div className="profile-avatar-container">
              <div className="avatar-wrapper">
                <img
                  src="/avatar.png"
                  alt="Mohana Vishwa Profile Avatar"
                  className="avatar-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot dot-red"></span>
                  <span className="terminal-dot dot-yellow"></span>
                  <span className="terminal-dot dot-green"></span>
                </div>
                <div className="terminal-title">developer_profile.py — Python 3.11</div>
                <Code2 size={14} color="#8B949E" />
              </div>

              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="comment"># Mohana Vishwa - Software Developer Profile</span>
                </div>
                <div className="terminal-line">
                  <span className="keyword">class</span> <span className="var">SoftwareEngineer</span>:
                </div>
                <div className="terminal-line" style={{ paddingLeft: '1.2rem' }}>
                  <span className="keyword">def</span> <span className="var">__init__</span>(self):
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2.4rem' }}>
                  self.name = <span className="string">"Mohana Vishwa"</span>
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2.4rem' }}>
                  self.education = <span className="string">"B.E. CSE (Final Year)"</span>
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2.4rem' }}>
                  self.location = <span className="string">"Dindigul, Tamil Nadu, India"</span>
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2.4rem' }}>
                  self.core_skills = [<span className="string">"Python"</span>, <span className="string">"MySQL"</span>, <span className="string">"Flask"</span>, <span className="string">"Tkinter"</span>, <span className="string">"DSA"</span>]
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2.4rem' }}>
                  self.leetcode_solved = <span className="var">40+</span>
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2.4rem' }}>
                  self.seeking = <span className="string">"Entry-Level Software / Trainee Roles"</span>
                </div>

                <div className="terminal-line" style={{ marginTop: '0.8rem', borderTop: '1px dashed #30363D', paddingTop: '0.6rem' }}>
                  <span className="prompt">&gt;&gt;&gt; </span>
                  <span className="string">"Ready to innovate &amp; contribute!"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
