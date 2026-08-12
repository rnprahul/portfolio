import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function StatsRow() {
  return (
    <div class="container">
      <div class="stats-grid">
        {portfolioData.stats.map((stat, idx) => (
          <div key={idx} class="glass-card stat-card">
            <div class="stat-number gradient-text">{stat.value}{stat.suffix}</div>
            <div class="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
