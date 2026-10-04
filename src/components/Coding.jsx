import React from 'react';
import { Terminal, ExternalLink, Code2, Cpu, CheckCircle2, TrendingUp } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

const focusTopics = [
  'Arrays & List Manipulation',
  'String Processing & Parsing',
  'Searching (Linear & Binary Search)',
  'Basic Sorting Algorithms',
  'Data Structures Fundamentals',
  'Object-Oriented Programming (OOP)',
  'Problem Solving Logic',
  'Python Scripting & Operations',
];

export default function Coding() {
  return (
    <section id="coding" style={{ background: 'var(--bg-card)' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <Terminal size={14} /> Practice &amp; Analytics
          </span>
          <h2 className="section-title">Coding &amp; Problem Solving</h2>
          <p className="section-subtitle">
            Active programming practice, algorithmic problem solving, and open source development profile.
          </p>
        </div>

        <div className="coding-grid">
          {/* Left Column: Problem Solving Stats & Focus Areas */}
          <div className="glass-card coding-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
              <span className="section-tag" style={{ margin: 0 }}>LeetCode Analytics</span>
              <TrendingUp size={20} color="var(--accent-cyan)" />
            </div>

            <div className="coding-stat-big">40+</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              LeetCode Problems Solved
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Consistently practicing core algorithmic problem solving with focus on arrays, string manipulation, condition checking, and memory-friendly data structures.
            </p>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              Core DSA &amp; Problem-Solving Focus Areas:
            </h4>

            <div className="topic-pills-grid">
              {focusTopics.map((topic, idx) => (
                <div key={idx} className="topic-pill">
                  <CheckCircle2 size={14} color="var(--accent-cyan)" style={{ display: 'inline', marginRight: '5px' }} />
                  {topic}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://leetcode.com/" // LeetCode profile placeholder
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-action"
                style={{ flex: 1 }}
              >
                <Code2 size={16} /> LeetCode Profile
              </a>
              <a
                href="https://www.hackerrank.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-action"
                style={{ flex: 1 }}
              >
                <Terminal size={16} /> HackerRank Profile
              </a>
            </div>
          </div>

          {/* Right Column: GitHub Profile & Activity Card */}
          <div className="glass-card coding-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Github size={24} color="var(--text-primary)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  GitHub Profile
                </h3>
              </div>

              <a
                href="https://github.com/MohanaVishwa"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}
              >
                @MohanaVishwa <ExternalLink size={14} />
              </a>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Open-source project repositories featuring desktop applications, Python GUI tools, Flask web servers, and technical documentation.
            </p>

            {/* Simulated GitHub Contribution Grid */}
            <div style={{ background: 'var(--bg-tertiary)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>Developer Activity Matrix</span>
                <span>Python &amp; SQL Repos</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(16, 1fr)', gap: '4px' }}>
                {Array.from({ length: 80 }).map((_, i) => {
                  const activeLevels = [
                    'rgba(6, 182, 212, 0.15)',
                    'rgba(6, 182, 212, 0.4)',
                    'rgba(6, 182, 212, 0.7)',
                    '#06B6D4'
                  ];
                  // Deterministic pseudo-random pattern for representation
                  const activeIndex = (i * 7 + 3) % 5;
                  const bg = activeIndex === 0 ? 'var(--bg-card)' : activeLevels[activeIndex - 1];
                  return (
                    <div
                      key={i}
                      style={{
                        aspectRatio: '1',
                        borderRadius: '3px',
                        background: bg,
                        border: '1px solid rgba(255,255,255,0.03)'
                      }}
                      title={`Activity Day ${i + 1}`}
                    />
                  );
                })}
              </div>
            </div>

            <div style={{ marginTop: 'auto' }}>
              <a
                href="https://github.com/MohanaVishwa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Github size={18} />
                <span>Visit MohanaVishwa on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
