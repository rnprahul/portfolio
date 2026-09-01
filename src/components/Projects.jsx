import React, { useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FeaturedGallery } from './projects/FeaturedGallery';
import { MoreWorkGrid } from './projects/MoreWorkGrid';

// Exactly 4 featured projects in precise required order
const FEATURED_IDS = [
  'nexa-mind',   // 01 - NexaMind
  'quickkart',   // 02 - QuickKart
  'codecanvas',  // 03 - CodeCanvas
  'gitscope'     // 04 - GitScope
];

export function Projects() {
  const allProjects = useMemo(() => portfolioData.projects || [], []);

  // 1. Featured Projects in exact order: NexaMind, QuickKart, CodeCanvas, GitScope
  const featuredProjects = useMemo(() => {
    return FEATURED_IDS.map(id => allProjects.find(p => p.id === id)).filter(Boolean);
  }, [allProjects]);

  // 2. More Work Projects: All other projects (including OMNIVERSE), preserving original sequence
  const moreWorkProjects = useMemo(() => {
    const featuredIdSet = new Set(FEATURED_IDS);
    return allProjects.filter(p => !featuredIdSet.has(p.id));
  }, [allProjects]);

  return (
    <section className="section projects-showcase-section" id="projects">
      <div className="container">
        {/* Section Main Header */}
        <div className="section-header">
          <span className="section-subtitle">PROJECTS & DEPLOYMENTS</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-header-lead">
            A collection of production-ready applications, developer tools, and interactive experiences.
          </p>
        </div>

        {/* 1. Interactive 4-Project Featured Showcase Gallery */}
        <FeaturedGallery 
          featuredProjects={featuredProjects}
        />

        {/* Visual Architectural Divider */}
        <div className="projects-section-divider">
          <div className="divider-line"></div>
          <div className="divider-glow-orb"></div>
          <div className="divider-line"></div>
        </div>

        {/* 2. Paginated 3x2 Grid for Remaining Projects */}
        <MoreWorkGrid 
          projects={moreWorkProjects}
        />
      </div>
    </section>
  );
}

export default Projects;
