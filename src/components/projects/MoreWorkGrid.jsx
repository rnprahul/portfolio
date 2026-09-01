import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export function MoreWorkGrid({ projects = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageAnimating, setIsPageAnimating] = useState(false);

  const totalProjects = projects.length;
  const totalPages = Math.max(1, Math.ceil(totalProjects / ITEMS_PER_PAGE));

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setIsPageAnimating(true);
    setCurrentPage(newPage);
    setTimeout(() => {
      setIsPageAnimating(false);
    }, 350);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="more-work-section" id="more-work">
      <div className="more-work-header">
        <div className="more-work-title-wrap">
          <span className="section-subtitle">PROJECT ARCHIVE</span>
          <h3 className="more-work-title">More Selected Works</h3>
          <p className="more-work-subtitle">
            Explore additional deployed full-stack web applications, developer utilities, and interactive platforms.
          </p>
        </div>

        {/* Page status info */}
        <div className="more-work-page-info">
          Showing <strong>{startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, totalProjects)}</strong> of <strong>{totalProjects}</strong> applications
        </div>
      </div>

      {/* 3 Columns × 2 Rows Compact Grid */}
      <div className={`more-work-grid ${isPageAnimating ? 'animating-page' : ''}`}>
        {currentProjects.map((project, idx) => {
          const liveUrl = project.liveDemo;
          const displayUrl = liveUrl 
            ? liveUrl.replace('https://', '').replace(/\/$/, '') 
            : (project.github ? project.github.replace('https://github.com/', 'github.com/') : 'rahul-np.dev');

          const globalProjectNumber = String(startIndex + idx + 5).padStart(2, '0');

          return (
            <article 
              key={project.id || idx} 
              className="glass-card more-work-card"
            >
              {/* Card Preview Window */}
              <div className="more-card-mockup">
                <div className="preview-window-bar compact-bar">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>

                  <span className="more-card-num-pill">
                    #{globalProjectNumber}
                  </span>
                </div>

                <a 
                  href={liveUrl || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-card-img-wrap"
                  aria-label={`Open live demo for ${project.name}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview thumbnail`}
                    className="more-card-img"
                    loading="lazy"
                  />
                </a>
              </div>

              {/* Card Content Header */}
              <div className="more-card-content">
                <div className="more-card-badge-row">
                  <span className="project-category-badge compact-badge">
                    <Sparkles size={11} /> {project.badge || 'WEB APP'}
                  </span>
                  {project.category && (
                    <span className="more-card-category">
                      {project.category}
                    </span>
                  )}
                </div>

                <h4 className="more-card-title">
                  <a
                    href={liveUrl || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    {project.name}
                  </a>
                </h4>

                {project.tagline && (
                  <p className="more-card-tagline">
                    {project.tagline}
                  </p>
                )}

                <p className="more-card-desc">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="more-card-tech-list">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="tag-pill more-tech-pill">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="more-tech-count" title={project.techStack.slice(4).join(', ')}>
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="more-card-actions">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary compact-btn"
                      id={`more-live-${project.id}`}
                    >
                      Demo <ExternalLink size={13} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary compact-btn"
                      id={`more-github-${project.id}`}
                    >
                      Code <Github size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Numbered Pagination Navigation */}
      {totalPages > 1 && (
        <nav 
          className="more-work-pagination" 
          aria-label="Project archive pagination"
        >
          <button
            className="pagination-arrow-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page of projects"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                className={`pagination-num-btn ${pageNum === currentPage ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNum)}
                aria-current={pageNum === currentPage ? 'page' : undefined}
                aria-label={`Page ${pageNum}`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            className="pagination-arrow-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page of projects"
          >
            <ChevronRight size={18} />
          </button>
        </nav>
      )}
    </div>
  );
}

export default MoreWorkGrid;
