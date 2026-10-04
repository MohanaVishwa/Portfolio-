import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    degree: 'B.E. Computer Science Engineering',
    institution: 'University College of Engineering, Dindigul',
    university: 'Anna University',
    location: 'Dindigul, Tamil Nadu',
    period: '2024 – 2027',
    status: 'Final Year Student',
    isCurrent: true,
    highlights: [
      'Focus on Data Structures, Database Systems (MySQL), Object-Oriented Programming, and Web Tech.',
      'Active participant in technical project competitions & team software leadership.',
      'Building practical software solutions alongside coursework.'
    ]
  },
  {
    degree: 'Diploma in Plastic Mould Technology (DPMT)',
    institution: 'Central Institute of Petrochemicals Engineering & Technology (CIPET)',
    university: 'CIPET Chennai',
    location: 'Chennai, Tamil Nadu',
    period: '2021 – 2024',
    status: 'Completed (3-Year Diploma)',
    isCurrent: false,
    highlights: [
      'Developed strong practical problem-solving mindset and design discipline.',
      'Gained deep technical exposure to engineering materials, precision design, and structured processes.',
      'Laid foundation for logical thinking and systematic troubleshooting.'
    ]
  },
  {
    degree: 'Higher Secondary Education (HSC)',
    institution: 'State Board Schooling',
    university: 'State Board of Higher Secondary Education',
    location: 'Tamil Nadu, India',
    period: '2019 – 2021',
    status: 'Completed',
    isCurrent: false,
    highlights: [
      'Strong foundation in Mathematics, Physics, and Science fundamentals.'
    ]
  }
];

export default function Education() {
  return (
    <section id="education">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} /> Academic Timeline
          </span>
          <h2 className="section-title">Education &amp; Credentials</h2>
          <p className="section-subtitle">
            My formal technical education spanning Computer Science Engineering and practical engineering diploma studies.
          </p>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="glass-card timeline-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className={`timeline-badge ${item.isCurrent ? 'current' : ''}`}>
                    {item.status}
                  </span>

                  <span className="timeline-year">
                    <Calendar size={14} /> {item.period}
                  </span>
                </div>

                <h3 className="timeline-title">{item.degree}</h3>
                <div className="timeline-institution">
                  {item.institution} — <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{item.university}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  <MapPin size={13} /> {item.location}
                </div>

                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
