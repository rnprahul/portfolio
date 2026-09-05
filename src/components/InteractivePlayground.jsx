import React from 'react';
import { 
  Gamepad2, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Cpu, 
  Zap, 
  Radio, 
  Flame, 
  Sparkles,
  ShieldAlert,
  Play
} from 'lucide-react';
import { playgroundData } from '../data/portfolioData';

// Map icon names to Lucide icon components
const FEATURE_ICONS = {
  Cpu,
  Zap,
  Radio,
  Flame
};

export function InteractivePlayground() {
  const project = playgroundData;
  const liveUrl = project.liveDemo;
  const githubUrl = project.github;

  return (
    <section className="section interactive-playground-section" id="interactive-playground" aria-labelledby="playground-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">{project.subtitle}</span>
          <h2 className="section-title" id="playground-heading">{project.heading}</h2>
          <p className="section-header-lead">
            {project.lead}
          </p>
        </div>

        {/* Cinematic Playground Showcase Card */}
        <div className="playground-showcase-card">
          {/* Cyber Ambient Glow Behind Card */}
          <div className="playground-glow-backdrop" aria-hidden="true" />

          {/* Card Top HUD Bar */}
          <div className="playground-hud-header">
            <div className="playground-badge-cluster">
              <span className="playground-badge-pill">
                <Sparkles size={13} className="badge-sparkle-icon" />
                {project.badge}
              </span>
              <span className="playground-category-tag">
                {project.category}
              </span>
            </div>

            <div className="playground-status-cluster">
              <span className="playground-live-indicator">
                <span className="neon-pulse-dot" aria-hidden="true" />
                PLAYABLE IN BROWSER
              </span>
              <span className="playground-project-index">
                {project.projectNumber}
              </span>
            </div>
          </div>

          {/* Project Title & Tagline Banner */}
          <div className="playground-title-row">
            <h3 className="playground-project-title">
              <span className="title-neon-cyan">{project.name.split(' ')[0]}</span>{' '}
              <span className="title-neon-purple">{project.name.split(' ')[1]}</span>
            </h3>
            <p className="playground-tagline">
              {project.tagline}
            </p>
          </div>

          {/* 16:9 Cinematic Interactive Preview Frame */}
          <div className="playground-preview-stage">
            <div className="playground-browser-frame">
              {/* Browser / HUD Terminal Bar */}
              <div className="playground-frame-bar">
                <div className="frame-dots">
                  <span className="frame-dot dot-red" />
                  <span className="frame-dot dot-yellow" />
                  <span className="frame-dot dot-green" />
                </div>

                <div className="playground-url-pill" title={liveUrl}>
                  <span className="url-secure-icon" aria-hidden="true">🔒</span>
                  <span className="url-address">neon-drift-drab.vercel.app</span>
                </div>

                <div className="playground-fps-badge">
                  <span className="fps-indicator" />
                  60 FPS CANVAS
                </div>
              </div>

              {/* Preview Image Container with Cyber Brackets and Subtle Scanlines */}
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="playground-preview-container"
                aria-label="Launch Neon Drift live playable arcade game in new tab"
                id="playground-preview-link"
              >
                {/* Cyber Corner HUD Brackets */}
                <div className="cyber-bracket bracket-tl" aria-hidden="true" />
                <div className="cyber-bracket bracket-tr" aria-hidden="true" />
                <div className="cyber-bracket bracket-bl" aria-hidden="true" />
                <div className="cyber-bracket bracket-br" aria-hidden="true" />

                {/* Ambient Scanline Overlay */}
                <div className="playground-scanline" aria-hidden="true" />

                {/* Preview Image */}
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="playground-preview-image"
                  loading="lazy"
                  width="1280"
                  height="720"
                />

                {/* Hover Action Overlay */}
                <div className="playground-hover-overlay">
                  <div className="hover-play-trigger">
                    <div className="play-trigger-icon-wrap">
                      <Gamepad2 size={28} className="play-trigger-icon" />
                    </div>
                    <span className="play-trigger-label">LAUNCH ARCADE GAME</span>
                    <span className="play-trigger-subtext">Click to play directly in browser</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Content & Details Panel */}
          <div className="playground-details-panel">
            {/* Description & Controls */}
            <div className="playground-body-block">
              <p className="playground-description-text">
                {project.description}
              </p>

              <div className="playground-controls-pill">
                <span className="controls-icon" aria-hidden="true">🎮</span>
                <span className="controls-text">{project.controlHint}</span>
              </div>
            </div>

            {/* Tech Stack Strip */}
            <div className="playground-tech-strip">
              <span className="tech-strip-label">ARCHITECTURE:</span>
              <div className="tech-strip-tags">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tag-pill playground-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Feature Strip */}
            <div className="playground-features-grid">
              {project.featureStrip.map((feature, idx) => {
                const IconComponent = FEATURE_ICONS[feature.icon] || Cpu;
                return (
                  <div key={idx} className="playground-feature-item">
                    <div className="feature-icon-wrapper">
                      <IconComponent size={18} className="feature-icon" />
                    </div>
                    <div className="feature-text-group">
                      <h4 className="feature-title">{feature.label}</h4>
                      <p className="feature-desc">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons Row */}
            <div className="playground-actions-row">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary playground-btn-play"
                id="playground-cta-play"
                aria-label="Play Neon Drift in browser (opens in new tab)"
              >
                <Gamepad2 size={18} />
                <span>PLAY NEON DRIFT</span>
                <ArrowUpRight size={17} className="btn-arrow-icon" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary playground-btn-source"
                id="playground-cta-source"
                aria-label="View Neon Drift source code on GitHub (opens in new tab)"
              >
                <Github size={17} />
                <span>VIEW SOURCE</span>
                <ExternalLink size={15} className="btn-external-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractivePlayground;
