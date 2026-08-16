import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  Star, 
  Brain, 
  Sparkles, 
  FileText, 
  Users, 
  Activity, 
  ClipboardList 
} from 'lucide-react';

export function Projects() {
  const { featuredProject, secondaryProjects } = portfolioData;

  const getCapabilityIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain size={18} style={{ color: 'var(--accent-color)' }} />;
      case 'Sparkles': return <Sparkles size={18} style={{ color: '#a855f7' }} />;
      case 'FileText': return <FileText size={18} style={{ color: '#3b82f6' }} />;
      case 'Users': return <Users size={18} style={{ color: '#10b981' }} />;
      case 'Activity': return <Activity size={18} style={{ color: '#f59e0b' }} />;
      case 'ClipboardList': return <ClipboardList size={18} style={{ color: '#ec4899' }} />;
      default: return <Brain size={18} style={{ color: 'var(--accent-color)' }} />;
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Practical Applications</span>
          <h2 className="section-title">Projects Showcase</h2>
        </div>

        {/* FEATURED SPOTLIGHT: NEXAMIND */}
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
              {featuredProject.github && (
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub Repository <Github size={16} />
                </a>
              )}
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
            {featuredProject.description}
          </p>

          {/* Core Capabilities Breakdown */}
          {featuredProject.capabilities && (
            <>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                Core Capabilities
              </h4>
              <div className="capabilities-grid">
                {featuredProject.capabilities.map((cap, idx) => (
                  <div key={idx} className="capability-card">
                    <div className="capability-title">
                      {getCapabilityIcon(cap.icon)}
                      {cap.title}
                    </div>
                    <ul className="capability-list">
                      {cap.points.map((pt, ptIdx) => (
                        <li key={ptIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

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
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {project.name}
                  </h4>
                  {project.tagline && (
                    <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontFamily: 'var(--font-code)', marginBottom: '0.6rem' }}>
                      {project.tagline}
                    </p>
                  )}
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1.4rem' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.techStack.map((t, tIdx) => (
                      <span key={tIdx} className="tag-pill">{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  {project.liveDemo ? (
                    <>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                        Live Demo <ExternalLink size={16} />
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                        GitHub <Github size={16} />
                      </a>
                    </>
                  ) : (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                      View Code on GitHub <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

