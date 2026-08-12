import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, ShieldCheck, HeartHandshake, ShoppingBag, ArrowRight, Star } from 'lucide-react';

export function Projects() {
  const { featuredProject, secondaryProjects } = portfolioData;

  const getRoleIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={18} style={{ color: 'var(--accent-color)' }} />;
      case 'HeartHandshake': return <HeartHandshake size={18} style={{ color: '#ec4899' }} />;
      case 'ShoppingBag': return <ShoppingBag size={18} style={{ color: '#10b981' }} />;
      default: return <ShieldCheck size={18} />;
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Practical Applications</span>
          <h2 className="section-title">Projects Showcase</h2>
        </div>

        {/* FEATURED SPOTLIGHT: KITCHENCONNECT */}
        <div className="glass-card featured-spotlight">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.2rem' }}>
            <div>
              <span className="cmd-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <Star size={14} fill="currentColor" /> PRIMARY FEATURED PROJECT
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: '800', marginTop: '0.6rem', marginBottom: '0.4rem' }}>
                {featuredProject.name}
              </h3>
              <p style={{ color: 'var(--accent-color)', fontSize: '1.05rem', fontFamily: 'var(--font-code)' }}>
                {featuredProject.tagline}
              </p>
            </div>
            
            <div className="spotlight-header-actions" style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {featuredProject.liveDemo && (
                <a href={featuredProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub Repository <Github size={16} />
              </a>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
            {featuredProject.description}
          </p>

          {/* Workflow Status Pipeline */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem', fontFamily: 'var(--font-code)' }}>
              Request Status Lifecycle
            </h4>
            <div className="workflow-pipeline">
              <span className="workflow-step step-pending">1. Pending</span>
              <ArrowRight size={14} style={{ color: 'var(--text-dim)' }} />
              <span className="workflow-step step-progress">2. Shopping in Progress</span>
              <ArrowRight size={14} style={{ color: 'var(--text-dim)' }} />
              <span className="workflow-step step-completed">3. Purchase Completed</span>
            </div>
          </div>

          {/* User Roles Breakdown */}
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Role-Based Dashboard Workflows
          </h4>
          <div className="roles-grid">
            {featuredProject.roles.map((r, idx) => (
              <div key={idx} className="role-card">
                <div className="role-title">
                  {getRoleIcon(r.icon)}
                  {r.role}
                </div>
                <ul className="role-list">
                  {r.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginTop: '1.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem', fontFamily: 'var(--font-code)' }}>
              Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {featuredProject.techStack.map((tech, techIdx) => (
                <span key={techIdx} className="tag-pill" style={{ background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.25)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SECONDARY PROJECTS */}
        <div style={{ marginTop: '3.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1.2rem' }}>
            Secondary Projects
          </h3>

          <div className="secondary-projects-grid">
            {secondaryProjects.map((project, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
                    {project.name}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1.4rem' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.techStack.map((t, tIdx) => (
                      <span key={tIdx} className="tag-pill">{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                    View Code on GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

