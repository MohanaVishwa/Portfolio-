import React from 'react';
import { X, Download, Mail, Phone, MapPin, ExternalLink, Printer } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px', padding: '2.5rem', background: '#FFFFFF', color: '#0F172A' }}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          style={{ background: '#F1F5F9', color: '#0F172A' }}
        >
          <X size={20} />
        </button>

        {/* Action Buttons Top */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }} className="no-print">
          <button
            onClick={handlePrint}
            className="btn-primary"
            style={{ background: '#0284C7', color: '#FFF' }}
          >
            <Printer size={18} /> Print / Save as PDF
          </button>
          <a
            href="mailto:amohanavishwa@gmail.com?subject=Requesting%20Mohana%20Vishwa%27s%20Resume"
            className="btn-secondary"
            style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
          >
            <Mail size={18} /> Request PDF via Email
          </a>
        </div>

        {/* Printable Resume Document Container */}
        <div id="printable-resume" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.6 }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0284C7', paddingBottom: '1.2rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Mohana Vishwa
            </h1>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0284C7', margin: '4px 0 10px 0' }}>
              Final-Year B.E. Computer Science Engineering Student | Aspiring Software Engineer
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', fontSize: '13px', color: '#475569' }}>
              <span>📍 Dindigul, Tamil Nadu, India</span>
              <span>📧 amohanavishwa@gmail.com</span>
              <span>🔗 linkedin.com/in/mohanavishwa</span>
              <span>💻 github.com/MohanaVishwa</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '8px' }}>
              Professional Summary
            </h3>
            <p style={{ margin: 0, color: '#334155' }}>
              Final-year Computer Science Engineering student with a strong analytical foundation combining a 3-Year Diploma in Plastic Mould Technology (CIPET Chennai) and a B.E. in CSE. Proficient in Python, SQL, database management, and web technologies. Experienced in developing desktop GUI tools and building RESTful weather and accommodation applications. Seeking entry-level software developer, graduate trainee, or IT roles.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '8px' }}>
              Education
            </h3>

            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                <span>B.E. Computer Science Engineering (Final Year)</span>
                <span>2024 – 2027</span>
              </div>
              <div style={{ color: '#0284C7', fontWeight: 600 }}>
                University College of Engineering, Dindigul (Anna University)
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                <span>Diploma in Plastic Mould Technology (DPMT)</span>
                <span>2021 – 2024</span>
              </div>
              <div style={{ color: '#0284C7', fontWeight: 600 }}>
                CIPET Chennai (Central Institute of Petrochemicals Engineering &amp; Technology)
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '8px' }}>
              Technical Skills
            </h3>
            <div style={{ color: '#334155' }}>
              <p style={{ margin: '3px 0' }}><strong>Languages:</strong> Python, Basic Java, SQL, HTML5, CSS3</p>
              <p style={{ margin: '3px 0' }}><strong>Frameworks &amp; Libraries:</strong> Flask, Tkinter, Datetime API</p>
              <p style={{ margin: '3px 0' }}><strong>Databases &amp; Tools:</strong> MySQL, Git, GitHub, VS Code, Postman</p>
              <p style={{ margin: '3px 0' }}><strong>Core CS Concepts:</strong> Data Structures &amp; Algorithms, OOP, Database Management Systems (DBMS)</p>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '8px' }}>
              Key Projects
            </h3>

            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontWeight: 700, color: '#0F172A' }}>
                Hostel Accommodation Management System <span style={{ fontWeight: 400, color: '#64748B' }}>| Python, Tkinter, MySQL</span>
              </div>
              <ul style={{ margin: '4px 0 0 18px', padding: 0, color: '#334155' }}>
                <li>Built a desktop software suite for student registration, room allocation, and MySQL database record management.</li>
                <li>Designed indexed SQL tables supporting rapid search, record updates, and scalable data persistence.</li>
              </ul>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: '#0F172A' }}>
                Weather Forecast Application <span style={{ fontWeight: 400, color: '#64748B' }}>| Python, Tkinter, REST API, Postman</span>
              </div>
              <ul style={{ margin: '4px 0 0 18px', padding: 0, color: '#334155' }}>
                <li>Integrated live weather REST APIs with Postman testing to display real-time temperature, humidity, and wind metrics.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '8px' }}>
              Certifications &amp; Achievements
            </h3>
            <p style={{ margin: 0, color: '#334155' }}>
              HackerRank Python Basic | Udemy Cybersecurity 101 | TryHackMe Defensive Security Intro | Microsoft Learn Web Dev | Mastercard Phishing Simulation (Forage) | GUVI + HCL Python Certificate | 40+ LeetCode Solved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
