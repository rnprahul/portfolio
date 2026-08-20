import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Github, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export function Projects() {
  const projects = portfolioData.projects || [];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio & Deployed Applications</span>
          <h2 className="section-title">Projects Showcase</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '680px', margin: '0.75rem auto 0', lineHeight: '1.6' }}>
            Production-deployed web applications and software solutions. Click any project preview to launch the live application directly.
          </p>
        </div>

        <div className="unified-projects-grid">
          {projects.map((project, index) => {
            const liveUrl = project.liveDemo;
            const displayUrl = liveUrl 
              ? liveUrl.replace('https://', '') 
              : (project.github ? project.github.replace('https://github.com/', 'github.com/') : 'rahul-portfolio.dev');

            return (
              <article key={project.id || index} className="glass-card unified-project-card">
                {/* Visual Column / Interactive Browser Window Preview */}
                <div className="project-visual-col">
                  <a
                    href={liveUrl || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-preview-link"
                    aria-label={`Open live demo for ${project.name}`}
                  >
                    <div className="preview-window-frame">
                      {/* Browser Header Bar */}
                      <div className="preview-window-bar">
                        <div className="window-dots">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        
                        <div className="preview-url-bar" title={liveUrl || project.github}>
                          <span className="url-lock-icon">🔒</span>
                          <span className="url-text">{displayUrl}</span>
                        </div>

                        {liveUrl ? (
                          <div className="live-status-pill">
                            <span className="live-pulse-dot"></span>
                            LIVE DEMO
                          </div>
                        ) : (
                          <div className="live-status-pill github-status-pill">
                            GITHUB
                          </div>
                        )}
                      </div>

                      {/* Image Preview Container with Hover Launch Prompt */}
                      <div className="preview-img-wrapper">
                        <img
                          src={project.image}
                          alt={`${project.name} preview`}
                          className="preview-img"
                          loading="lazy"
                        />
                        <div className="preview-hover-glow"></div>
                        <div className="preview-hover-overlay">
                          <span className="launch-badge">
                            Launch Website <ExternalLink size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Project Info Column */}
                <div className="project-info-col">
                  <div className="project-info-header">
                    <div className="project-badge-row">
                      <span className="project-category-badge">
                        <Sparkles size={12} /> {project.badge || 'PROJECT'}
                      </span>
                      {project.category && (
                        <span className="project-category-sub">
                          {project.category}
                        </span>
                      )}
                    </div>

                    <h3 className="project-card-title">
                      <a
                        href={liveUrl || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-title-link"
                      >
                        {project.name}
                      </a>
                    </h3>

                    {project.tagline && (
                      <p className="project-card-tagline">
                        {project.tagline}
                      </p>
                    )}
                  </div>

                  <p className="project-card-description">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="project-highlights-box">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="highlight-item">
                          <span className="highlight-bullet">✦</span>
                          <span className="highlight-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="project-tech-stack">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tag-pill project-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: GitHub only since image directly opens the live app */}
                  <div className="project-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        id={`project-github-${project.id}`}
                      >
                        GitHub Repository <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

