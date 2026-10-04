import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, X } from 'lucide-react';

const certificationsData = [
  {
    title: 'Python (Basic) Certificate',
    org: 'HackerRank',
    category: 'Programming',
    year: 'Certified',
    desc: 'Verified understanding of Python syntax, data types, conditional statements, loops, functions, and string operations.',
  },
  {
    title: 'Cybersecurity 101',
    org: 'Udemy',
    category: 'Security',
    year: 'Completed',
    desc: 'Foundational training covering network security fundamentals, threat landscape, encryption basics, and system hygiene.',
  },
  {
    title: 'HackerDNA Certification',
    org: 'HackerDNA',
    category: 'Coding Assessment',
    year: 'Verified',
    desc: 'Technical programming assessment evaluating logical reasoning, syntax proficiency, and problem-solving execution.',
  },
  {
    title: 'Defensive Security Introduction',
    org: 'TryHackMe',
    category: 'Cybersecurity',
    year: 'Completed',
    desc: 'Practical lab exposure to security monitoring, incident response basics, network defense concepts, and threat awareness.',
  },
  {
    title: 'Mastercard Phishing Simulation',
    org: 'Forage',
    category: 'Virtual Experience',
    year: 'Completed',
    desc: 'Practical enterprise security simulation evaluating email phishing indicators, threat identification, and reporting protocol.',
  },
  {
    title: 'Web Development with VS Code',
    org: 'Microsoft Learn',
    category: 'Web Development',
    year: 'Completed',
    desc: 'Hands-on module covering modern HTML/CSS structures, debugging tools, extensions, and workflow optimization in VS Code.',
  },
  {
    title: 'CodeRush Coding Challenge',
    org: 'Unstop',
    category: 'Competitive Coding',
    year: 'Participated',
    desc: 'Competitive coding event testing algorithmic thinking, speed, and clean code logic under timed constraints.',
  },
  {
    title: 'Python Completion Certificate',
    org: 'GUVI + HCL',
    category: 'Programming',
    year: 'Completed',
    desc: 'Comprehensive Python training covering structured programming, data structures, module management, and practical exercises.',
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} /> Verified Qualifications
          </span>
          <h2 className="section-title">Certifications &amp; Training</h2>
          <p className="section-subtitle">
            Industry &amp; platform certifications validating technical skills, security awareness, and coding competencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="glass-card cert-card">
              <div className="cert-icon">
                <ShieldCheck size={24} />
              </div>

              <h3 className="cert-name">{cert.title}</h3>
              <div className="cert-org">{cert.org}</div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                {cert.desc}
              </p>

              <div className="cert-footer">
                <span className="tech-pill">{cert.category}</span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cert Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <button className="modal-close-btn" onClick={() => setSelectedCert(null)}>
              <X size={20} />
            </button>

            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--accent-cyan-glow)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Award size={30} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
              {selectedCert.title}
            </h3>

            <div style={{ fontSize: '1rem', color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '1rem' }}>
              Issued by {selectedCert.org}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedCert.desc}
            </p>

            <div style={{ padding: '0.8rem 1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Credential status: <strong>{selectedCert.year}</strong> (Verified Certificate)
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
