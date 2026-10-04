import React from 'react';
import { User, Target, Award, Code, BookOpen, Layers } from 'lucide-react';

const statsData = [
  { label: 'Status', value: 'Final-Year', subtitle: 'B.E. CSE Student' },
  { label: 'Projects Built', value: '6+', subtitle: 'Desktop & Web Apps' },
  { label: 'LeetCode Solved', value: '40+', subtitle: 'Data Structures & Algorithms' },
  { label: 'Certifications', value: '8', subtitle: 'Technical & Domain Badges' },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-card)' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <User size={14} /> About Me
          </span>
          <h2 className="section-title">My Journey &amp; Background</h2>
          <p className="section-subtitle">
            A practical, hands-on engineering mindset honed through technical diploma and computer science degree studies.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Card */}
          <div className="glass-card about-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Engineering Student &amp; Aspiring Software Developer
            </h3>

            <p className="about-text">
              I am a final-year B.E. Computer Science Engineering student based in Dindigul, Tamil Nadu. 
              My passion lies in practical software development, structured problem solving, database management, and building clean functional applications using Python, SQL, and web technologies.
            </p>

            <div className="about-highlight-box">
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} color="var(--accent-cyan)" /> A Unique Educational Path
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Unlike a traditional linear path, my journey began with Higher Secondary education followed by a 
                <strong> 3-Year Diploma in Plastic Mould Technology from CIPET Chennai</strong>, and subsequently my 
                <strong> B.E. in Computer Science Engineering</strong>. This background provided me with strong mechanical precision, structural thinking, and hands-on analytical troubleshooting skills before diving into software engineering.
              </p>
            </div>

            <p className="about-text">
              I focus on authentic, steady growth—building real-world software like desktop management systems, REST API applications, and Flask web platforms. As a fresher, I bring dedicated focus, enthusiasm to learn modern tech stacks, and a solid work ethic to entry-level software engineering and graduate trainee roles.
            </p>
          </div>

          {/* Right Column: Dynamic Quick Stats Cards */}
          <div className="stats-grid">
            {statsData.map((stat, idx) => (
              <div key={idx} className="glass-card stat-card">
                <div className="stat-number">{stat.value}</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                  {stat.label}
                </div>
                <div className="stat-label">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
