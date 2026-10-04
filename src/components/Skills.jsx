import React, { useState } from 'react';
import { Code2, Database, Globe, Cpu, Wrench, Terminal, Layers } from 'lucide-react';

const skillCategories = [
  {
    id: 'programming',
    name: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', tag: 'Core Language / Scripts' },
      { name: 'Basic Java', tag: 'OOP / Syntax Fundamentals' },
    ],
  },
  {
    id: 'database',
    name: 'Database Management',
    icon: Database,
    skills: [
      { name: 'MySQL', tag: 'Relational DB' },
      { name: 'SQL Queries', tag: 'Joins, Aggregates & Subqueries' },
      { name: 'CRUD Operations', tag: 'Data Operations' },
    ],
  },
  {
    id: 'web',
    name: 'Web Technologies',
    icon: Globe,
    skills: [
      { name: 'HTML5', tag: 'Semantic Layouts' },
      { name: 'CSS3', tag: 'Responsive Design & Styling' },
      { name: 'Flask', tag: 'Python Web Framework' },
    ],
  },
  {
    id: 'cs',
    name: 'Computer Science Core',
    icon: Cpu,
    skills: [
      { name: 'Data Structures & Algorithms', tag: 'Arrays, Strings, Searching' },
      { name: 'Object-Oriented Programming (OOP)', tag: 'Classes & Inheritance' },
      { name: 'Problem Solving', tag: 'Logical Analytical Thinking' },
      { name: 'Database Systems (DBMS)', tag: 'Design & Normalization' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Version Control',
    icon: Wrench,
    skills: [
      { name: 'Git', tag: 'Version Control System' },
      { name: 'GitHub', tag: 'Repo Hosting & Collaboration' },
      { name: 'VS Code', tag: 'Primary IDE' },
      { name: 'Postman', tag: 'API Testing & Debugging' },
    ],
  },
  {
    id: 'other',
    name: 'Libraries & Frameworks',
    icon: Terminal,
    skills: [
      { name: 'API Integration', tag: 'RESTful API Consumption' },
      { name: 'Tkinter', tag: 'Python Desktop GUIs' },
      { name: 'Basic Linux', tag: 'CLI Commands & Utilities' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" style={{ background: 'var(--bg-card)' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} /> Technical Arsenal
          </span>
          <h2 className="section-title">Technical Skills &amp; Competencies</h2>
          <p className="section-subtitle">
            Categorized technical capabilities, languages, tools, and computer science fundamentals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skill-filter-tabs">
          <button
            className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </button>
          <button
            className={`filter-tab ${activeTab === 'programming' ? 'active' : ''}`}
            onClick={() => setActiveTab('programming')}
          >
            Languages
          </button>
          <button
            className={`filter-tab ${activeTab === 'database' ? 'active' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            Database
          </button>
          <button
            className={`filter-tab ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            Web Tech
          </button>
          <button
            className={`filter-tab ${activeTab === 'cs' ? 'active' : ''}`}
            onClick={() => setActiveTab('cs')}
          >
            CS Core
          </button>
          <button
            className={`filter-tab ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="glass-card skill-card">
                <div className="skill-card-header">
                  <div className="skill-icon-box">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="skill-category-title">{category.name}</h3>
                </div>

                <div className="skill-tags">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-tag">
                      <span style={{ fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', background: 'var(--bg-card)', padding: '1px 6px', borderRadius: '4px' }}>
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
