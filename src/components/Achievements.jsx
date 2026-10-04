import React from 'react';
import { Award, Trophy, Star, CheckCircle2, Code2, ShieldCheck } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: 'var(--bg-card)' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <Trophy size={14} /> Recognition
          </span>
          <h2 className="section-title">Achievements &amp; Highlights</h2>
          <p className="section-subtitle">
            Academic milestones, technical problem solving practice, and verified certification accomplishments.
          </p>
        </div>

        <div className="achievement-spotlight">
          <div>
            <div className="trophy-badge">
              <Star size={16} /> TECHNICAL EXCELLENCE &amp; PROBLEM SOLVING
            </div>

            <h3 className="spotlight-title">
              Algorithmic Problem Solving &amp; Project Execution
            </h3>

            <p className="spotlight-desc">
              Demonstrated consistent commitment to technical learning, database software design, and practical computer science fundamentals.
            </p>

            <ul className="spotlight-list">
              <li className="spotlight-item">
                <CheckCircle2 size={18} color="var(--accent-purple)" />
                <span><strong>40+ Algorithmic Problems Solved:</strong> Active practice across LeetCode &amp; HackerRank focusing on arrays, strings, and searching.</span>
              </li>
              <li className="spotlight-item">
                <CheckCircle2 size={18} color="var(--accent-purple)" />
                <span><strong>Desktop System Engineering:</strong> Built end-to-end Hostel Management System with Python Tkinter and MySQL database integration.</span>
              </li>
              <li className="spotlight-item">
                <CheckCircle2 size={18} color="var(--accent-purple)" />
                <span><strong>8+ Technical Certifications:</strong> Verified certifications from HackerRank, Udemy, Microsoft Learn, GUVI, and TryHackMe.</span>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', marginBottom: '1rem', boxShadow: 'var(--shadow-glow)' }}>
              <Award size={42} />
            </div>

            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Final-Year CSE
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
              University College of Engineering, Dindigul
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', marginTop: '0.8rem', fontWeight: 600 }}>
              Practical Software Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
