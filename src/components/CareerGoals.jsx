import React from 'react';
import { Target, Briefcase, CheckCircle, Sparkles } from 'lucide-react';

const targetRoles = [
  { title: 'Software Engineer (Entry-Level)', type: 'Full-Time / Campus' },
  { title: 'Graduate Trainee Engineer', type: 'Technology Program' },
  { title: 'Python Developer (Junior)', type: 'Backend / Scripting' },
  { title: 'Entry-Level IT Specialist', type: 'Software & Systems' },
];

export default function CareerGoals() {
  return (
    <section id="career" style={{ background: 'var(--bg-card)' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <Target size={14} /> Future Perspective
          </span>
          <h2 className="section-title">Career Goals &amp; Objectives</h2>
          <p className="section-subtitle">
            Target entry-level roles and professional alignment as a graduating Computer Science engineer.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Open for Entry-Level Engineering Roles
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                As a graduating Computer Science student with a strong practical foundation in Python, database engineering, and problem solving, I am eager to launch my career in a growth-oriented tech organization.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="var(--accent-cyan)" />
                  <span>Ready to adapt to team tech stacks &amp; enterprise frameworks.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="var(--accent-cyan)" />
                  <span>Strong problem-solving ethics with analytical diploma background.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="var(--accent-cyan)" />
                  <span>Dedicated team player with demonstrated project leadership.</span>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={18} /> Target Roles &amp; Opportunities
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {targetRoles.map((role, rIdx) => (
                  <div key={rIdx} style={{ padding: '0.75rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>{role.title}</span>
                    <span className="tech-pill" style={{ fontSize: '0.75rem' }}>{role.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
