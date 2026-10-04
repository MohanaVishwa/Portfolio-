import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amohanavishwa@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}

    // Fallback mailto trigger
    const mailtoUrl = `mailto:amohanavishwa@gmail.com?subject=Contact%20Form%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} /> Get In Touch
          </span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have an opportunity, project idea, or just want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                Mohana Vishwa
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Final-Year B.E. Computer Science Engineering Student | Aspiring Software Engineer
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>LOCATION</div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Dindigul, Tamil Nadu, India</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>EMAIL ADDRESS</div>
                <a
                  href="mailto:amohanavishwa@gmail.com"
                  style={{ fontWeight: 700, color: 'var(--accent-cyan)', textDecoration: 'none' }}
                >
                  amohanavishwa@gmail.com
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn-card-action"
                style={{ flex: 'initial', padding: '0.5rem 0.8rem' }}
                title="Copy Email"
              >
                {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
              </button>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.8rem' }}>
                CONNECT ON SOCIAL MEDIA
              </div>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
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
                  title="Direct Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--accent-cyan-glow)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  Message Ready!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thank you for reaching out, {formData.name}. Opening your email client to send message to <strong>amohanavishwa@gmail.com</strong>...
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Send a Direct Message
                </h3>

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. John Doe / Recruiter"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. john@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Hello Mohana Vishwa, we would love to discuss an entry-level software development opportunity..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
