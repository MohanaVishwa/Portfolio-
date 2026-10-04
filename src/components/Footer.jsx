import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="section-container" style={{ padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Mohana Vishwa
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Computer Science Engineering Student &bull; Tamil Nadu, India
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/MohanaVishwa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="http://www.linkedin.com/in/mohanavishwa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:amohanavishwa@gmail.com"
              className="social-icon-btn"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            &copy; 2026 Mohana Vishwa. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
