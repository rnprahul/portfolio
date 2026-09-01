import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export function FeaturedGallery({ featuredProjects = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' | 'prev'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const galleryRef = useRef(null);

  // Touch tracking for mobile swipe gestures
  const touchStartPos = useRef({ x: 0, y: 0, time: 0 });

  const total = featuredProjects.length;

  const goToPrev = useCallback(() => {
    if (total === 0) return;
    setSlideDirection('prev');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const goToNext = useCallback(() => {
    if (total === 0) return;
    setSlideDirection('next');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const goToIndex = useCallback((idx) => {
    if (idx === currentIndex || idx < 0 || idx >= total) return;
    setSlideDirection(idx > currentIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setCurrentIndex(idx);
  }, [currentIndex, total]);

  // Keyboard navigation (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid intercepting keystrokes when typing in inputs, textareas, etc.
      const activeEl = document.activeElement;
      const isInputActive = activeEl && (
        activeEl.tagName === 'INPUT' || 
        activeEl.tagName === 'TEXTAREA' || 
        activeEl.tagName === 'SELECT' || 
        activeEl.isContentEditable
      );
      
      // Do not trigger if modal is open
      const hasOpenModal = document.querySelector('.modal-overlay.active');
      if (isInputActive || hasOpenModal) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartPos.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartPos.current.x;
    const deltaY = touch.clientY - touchStartPos.current.y;
    const deltaTime = Date.now() - touchStartPos.current.time;

    // Must be predominantly horizontal and sufficiently fast/far
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3 && deltaTime < 600) {
      if (deltaX < 0) {
        goToNext(); // Swiped left -> next
      } else {
        goToPrev(); // Swiped right -> prev
      }
    }
  };

  // Reset transition flag on index change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (!featuredProjects || total === 0) return null;

  const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
  const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;

  const currentProject = featuredProjects[currentIndex];
  const prevProject = featuredProjects[prevIndex];
  const nextProject = featuredProjects[nextIndex];

  const liveUrl = currentProject.liveDemo;
  const displayUrl = liveUrl 
    ? liveUrl.replace('https://', '').replace(/\/$/, '') 
    : (currentProject.github ? currentProject.github.replace('https://github.com/', 'github.com/') : 'featured.dev');

  const formattedNumber = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <div 
      className="featured-gallery-section" 
      ref={galleryRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Featured Projects Gallery"
    >
      {/* Featured Header & Numeric Indicator */}
      <div className="featured-gallery-top-bar">
        <div className="featured-tag-badge">
          <Sparkles size={14} className="sparkle-icon" />
          <span>FEATURED SPOTLIGHT</span>
        </div>

        <div className="featured-counter" aria-live="polite">
          <span className="counter-current">{formattedNumber}</span>
          <span className="counter-divider">/</span>
          <span className="counter-total">{formattedTotal}</span>
        </div>
      </div>

      {/* Main 3-Card Depth Showcase Stage */}
      <div className="featured-showcase-wrapper">
        {/* Navigation Arrow Left */}
        <button
          className="gallery-nav-btn nav-prev"
          onClick={goToPrev}
          aria-label="Previous featured project"
          title="Previous project (ArrowLeft)"
        >
          <ChevronLeft size={24} />
        </button>

        {/* 3D Depth Stage Track */}
        <div className="featured-cards-track">
          {/* Previous Card Preview (Left Depth Flank) */}
          {prevProject && (
            <div 
              className="featured-peek-card peek-left"
              onClick={goToPrev}
              role="button"
              tabIndex={0}
              aria-label={`Previous project: ${prevProject.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  goToPrev();
                }
              }}
            >
              <div className="peek-card-inner">
                <div className="peek-card-top-bar">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="peek-card-badge">{prevProject.badge || 'FEATURED'}</span>
                </div>
                <div className="peek-card-img-box">
                  <img src={prevProject.image} alt={prevProject.name} className="peek-card-img" />
                  <div className="peek-card-overlay"></div>
                </div>
                <div className="peek-card-caption">
                  <span className="peek-card-num">#{String(prevIndex + 1).padStart(2, '0')}</span>
                  <span className="peek-card-name">{prevProject.name}</span>
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Center Active Slide */}
          <div 
            key={currentProject.id || currentIndex}
            className={`featured-project-slide slide-dir-${slideDirection} ${isTransitioning ? 'transitioning' : ''}`}
          >
          {/* Top Info Banner */}
          <div className="featured-slide-header">
            <div className="featured-category-row">
              <span className="featured-badge-pill">
                {currentProject.badge || 'FEATURED'}
              </span>
              {currentProject.category && (
                <span className="featured-category-text">
                  {currentProject.category}
                </span>
              )}
            </div>

            <h3 className="featured-project-title">
              {currentProject.name}
            </h3>

            {currentProject.tagline && (
              <p className="featured-project-tagline">
                {currentProject.tagline}
              </p>
            )}
          </div>

          {/* Large Interactive Project Mockup Window */}
          <div className="featured-mockup-wrapper">
            <div className="featured-browser-frame">
              {/* Browser Header Bar */}
              <div className="preview-window-bar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                
                <div className="preview-url-bar" title={liveUrl || currentProject.github}>
                  <span className="url-lock-icon">🔒</span>
                  <span className="url-text">{displayUrl}</span>
                </div>

                {liveUrl ? (
                  <div className="live-status-pill">
                    <span className="live-pulse-dot"></span>
                    LIVE APP
                  </div>
                ) : (
                  <div className="live-status-pill github-status-pill">
                    GITHUB REPO
                  </div>
                )}
              </div>

              {/* Large Image Preview linking directly to Live Demo */}
              <a 
                href={liveUrl || currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-img-container"
                aria-label={`Open live demo for ${currentProject.name}`}
              >
                <img
                  src={currentProject.image}
                  alt={`${currentProject.name} large showcase preview`}
                  className="featured-main-img"
                  loading="eager"
                />
              </a>
            </div>
          </div>

          {/* Project Details Bottom Info */}
          <div className="featured-details-grid">
            <div className="featured-meta-col">
              {/* Tech Stack Pills */}
              <div className="featured-tech-list">
                {currentProject.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tag-pill featured-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Short Clean Description */}
              <p className="featured-description-text">
                {currentProject.description}
              </p>

              {/* Highlights if present */}
              {currentProject.highlights && currentProject.highlights.length > 0 && (
                <div className="featured-highlights-box">
                  {currentProject.highlights.slice(0, 3).map((item, hIdx) => (
                    <div key={hIdx} className="featured-highlight-item">
                      <CheckCircle2 size={15} className="featured-highlight-bullet" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons Row */}
            <div className="featured-actions-col">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary featured-action-btn"
                  id={`featured-live-${currentProject.id}`}
                >
                  Launch Live Demo <ExternalLink size={16} />
                </a>
              )}
              
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary featured-action-btn"
                  id={`featured-github-${currentProject.id}`}
                >
                  GitHub Repository <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Next Card Preview (Right Depth Flank) */}
          {nextProject && (
            <div 
              className="featured-peek-card peek-right"
              onClick={goToNext}
              role="button"
              tabIndex={0}
              aria-label={`Next project: ${nextProject.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  goToNext();
                }
              }}
            >
              <div className="peek-card-inner">
                <div className="peek-card-top-bar">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="peek-card-badge">{nextProject.badge || 'FEATURED'}</span>
                </div>
                <div className="peek-card-img-box">
                  <img src={nextProject.image} alt={nextProject.name} className="peek-card-img" />
                  <div className="peek-card-overlay"></div>
                </div>
                <div className="peek-card-caption">
                  <span className="peek-card-num">#{String(nextIndex + 1).padStart(2, '0')}</span>
                  <span className="peek-card-name">{nextProject.name}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Arrow Right */}
        <button
          className="gallery-nav-btn nav-next"
          onClick={goToNext}
          aria-label="Next featured project"
          title="Next project (ArrowRight)"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dot/Segment Indicators for Direct Navigation */}
      <div className="featured-dots-nav" role="tablist" aria-label="Featured projects selector">
        {featuredProjects.map((p, idx) => (
          <button
            key={p.id || idx}
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Go to slide ${idx + 1}: ${p.name}`}
            className={`featured-dot-btn ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(idx)}
          >
            <span className="dot-line-indicator"></span>
            <span className="dot-label">{String(idx + 1).padStart(2, '0')} {p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FeaturedGallery;
