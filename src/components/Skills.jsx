import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layout, Server, Wrench, Terminal } from 'lucide-react';

export function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend': return <Layout size={20} style={{ color: 'var(--accent-color)' }} />;
      case 'Backend / Cloud': return <Server size={20} style={{ color: 'var(--accent-color)' }} />;
      case 'Development Tools': return <Wrench size={20} style={{ color: 'var(--accent-color)' }} />;
      case 'Programming': return <Terminal size={20} style={{ color: 'var(--accent-color)' }} />;
      default: return <Layout size={20} />;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Capabilities</span>
          <h2 className="section-title">Current Tech Stack</h2>
        </div>

        <div className="skills-grid">
          {portfolioData.skills.map((group, idx) => (
            <div key={idx} className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.4rem' }}>
                {getCategoryIcon(group.category)}
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700' }}>{group.category}</h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.4rem' }}>{group.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {group.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

