import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Layers, Cpu, Server, Wrench } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const technologies = portfolioData.technologies || [];

  // Filter Categories
  const categories = [
    { id: 'all', label: 'All Technologies', count: technologies.length, icon: Layers },
    { id: 'frontend', label: 'Frontend', count: technologies.filter(t => t.category === 'frontend').length, icon: Cpu },
    { id: 'backend', label: 'Backend & Cloud', count: technologies.filter(t => t.category === 'backend').length, icon: Server },
    { id: 'tools', label: 'Dev & Deployment', count: technologies.filter(t => t.category === 'tools').length, icon: Wrench }
  ];

  // Mouse Parallax Effect for Desktop (smooth & lightweight)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      // Check if user prefers reduced motion or window is small
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) {
        return;
      }
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setParallax({ x, y });
    };

    const handleMouseLeave = () => {
      setParallax({ x: 0, y: 0 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Seeded deterministic animation styles for consistent, organic floating movement
  const getAnimationProps = (index) => {
    const durations = [6.2, 7.8, 5.5, 8.4, 6.9, 7.2, 5.8, 8.0];
    const delays = [0, 1.2, 2.4, 0.6, 1.8, 3.0, 0.9, 2.1];
    const animTypes = ['float-a', 'float-b', 'float-c', 'float-d', 'float-e'];
    
    return {
      animationName: animTypes[index % animTypes.length],
      animationDuration: `${durations[index % durations.length]}s`,
      animationDelay: `-${delays[index % delays.length]}s`
    };
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Technical Capabilities</span>
          <h2 className="section-title">Technologies I Work With</h2>
        </div>

        {/* Category Filter Pills */}
        <div className="skill-cloud-filters" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`skill-filter-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={14} className="filter-icon" />
                <span>{cat.label}</span>
                <span className="filter-count">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cloud Constellation */}
        <div 
          className="skill-cloud-stage glass-card"
          ref={containerRef}
        >
          {/* Ambient Background Glows */}
          <div className="skill-cloud-ambient ambient-left"></div>
          <div className="skill-cloud-ambient ambient-right"></div>
          <div className="skill-cloud-ambient ambient-center"></div>

          {/* Central Animated Floating Constellation */}
          <div 
            className="skill-cloud-container"
            style={{
              transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
            }}
          >
            {technologies.map((tech, idx) => {
              const isMatch = activeCategory === 'all' || tech.category === activeCategory;
              const isHovered = hoveredSkill === tech.name;
              const animProps = getAnimationProps(idx);

              return (
                <div
                  key={tech.name}
                  className={`skill-bubble tier-${tech.tier} cat-${tech.category} ${isMatch ? 'match' : 'dimmed'} ${isHovered ? 'hovered' : ''}`}
                  style={{
                    animationName: animProps.animationName,
                    animationDuration: animProps.animationDuration,
                    animationDelay: animProps.animationDelay
                  }}
                  onMouseEnter={() => setHoveredSkill(tech.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${tech.name} (${tech.category})`}
                >
                  {/* Subtle Primary Glow Core */}
                  {tech.tier === 'primary' && (
                    <span className="primary-sparkle-dot">
                      <Sparkles size={11} />
                    </span>
                  )}
                  
                  <span className="skill-bubble-name">{tech.name}</span>
                </div>
              );
            })}
          </div>

          {/* Cloud Legend & Bottom Hint */}
          <div className="skill-cloud-footer">
            <div className="skill-legend">
              <span className="legend-item">
                <span className="legend-dot primary"></span> Core Specialization
              </span>
              <span className="legend-item">
                <span className="legend-dot secondary"></span> Advanced Stack
              </span>
              <span className="legend-item">
                <span className="legend-dot tertiary"></span> Ecosystem & Tools
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
