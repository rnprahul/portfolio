import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function StatsRow() {
  return (
    <div className="container">
      <div className="stats-grid">
        {portfolioData.stats.map((stat, idx) => (
          <div key={idx} className="glass-card stat-card">
            <div className="stat-number gradient-text">{stat.value}{stat.suffix}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

