import React from 'react';
import { Compass, BookOpen, Code, Database, Server, Speech, FileCheck } from 'lucide-react';

const roadmapSteps = [
  {
    step: '01',
    title: 'Data Structures & Algorithms',
    icon: Code,
    desc: 'Solving problem sets on arrays, strings, searching, sorting, and algorithmic complexity analysis.',
    status: 'Active Daily Focus'
  },
  {
    step: '02',
    title: 'Python & SQL Mastery',
    icon: Database,
    desc: 'Deepening Python OOP concepts, database schema design, indexing, joins, and query optimization.',
    status: 'Ongoing Practice'
  },
  {
    step: '03',
    title: 'Backend & Web Development',
    icon: Server,
    desc: 'Expanding Flask backend skills, REST API structure, routing, request parsing, and database integration.',
    status: 'Practical Projects'
  },
  {
    step: '04',
    title: 'Technical Interview Prep',
    icon: FileCheck,
    desc: 'Practicing core CS fundamentals (OOP, DBMS, OS concepts), mock coding questions, and resume reviews.',
    status: 'Placement Ready'
  },
  {
    step: '05',
    title: 'Communication & English Skills',
    icon: Speech,
    desc: 'Active preparation for professional interviews, group discussions, and technical presentation skills.',
    status: 'Soft Skills'
  },
];

export default function LearningRoadmap() {
  return (
    <section id="learning">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} /> Continuous Improvement
          </span>
          <h2 className="section-title">What I Am Currently Learning</h2>
          <p className="section-subtitle">
            A visual roadmap of technical topics, backend skill building, and professional interview preparation.
          </p>
        </div>

        <div className="learning-roadmap">
          {roadmapSteps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="glass-card learning-card">
                <div className="learning-card-number">{item.step}</div>

                <div className="skill-icon-box" style={{ marginBottom: '1.2rem' }}>
                  <IconComponent size={22} />
                </div>

                <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.status}
                </span>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.4rem 0 0.6rem 0' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
