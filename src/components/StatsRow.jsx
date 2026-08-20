import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Code2, 
  Atom, 
  Cloud, 
  Boxes, 
  Sparkles,
  Layers
} from 'lucide-react';

export function StatsRow() {
  const [hoveredId, setHoveredId] = useState(null);
  const signals = portfolioData.journeySignals || [];

  const getSignalIcon = (iconName) => {
    const iconSize = 18;
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={iconSize} className="signal-icon" />;
      case 'Code2':
        return <Code2 size={iconSize} className="signal-icon" />;
      case 'Atom':
        return <Atom size={iconSize} className="signal-icon atom-spin" />;
      case 'Cloud':
        return <Cloud size={iconSize} className="signal-icon" />;
      case 'Boxes':
        return <Boxes size={iconSize} className="signal-icon" />;
      case 'Sparkles':
        return <Sparkles size={iconSize} className="signal-icon sparkle-pulse" />;
      default:
        return <Layers size={iconSize} className="signal-icon" />;
    }
  };

  // Duplicated list for seamless, continuous floating marquee motion
  const marqueeItems = [...signals, ...signals];

  return (
    <div className="container hero-dock-wrapper">
      <div 
        className="hero-journey-dock" 
        role="region" 
        aria-label="Developer Highlights & Capabilities"
      >
        {/* Ambient Gradient Edge Fades */}
        <div className="dock-fade dock-fade-left"></div>
        <div className="dock-fade dock-fade-right"></div>

        {/* Floating Marquee Signal Track */}
        <div className="journey-dock-track">
          {marqueeItems.map((item, idx) => {
            const isHovered = hoveredId === `${item.id}-${idx}`;
            return (
              <div
                key={`${item.id}-${idx}`}
                className={`journey-signal-chip ${isHovered ? 'active-hover' : ''}`}
                onMouseEnter={() => setHoveredId(`${item.id}-${idx}`)}
                onMouseLeave={() => setHoveredId(null)}
                tabIndex={0}
                role="button"
                aria-label={`${item.title}: ${item.secondaryText}`}
              >
                <div className="signal-icon-box">
                  {getSignalIcon(item.icon)}
                  {item.statusDot && <span className="signal-live-dot"></span>}
                </div>

                <div className="signal-text-block">
                  <div className="signal-title-row">
                    <span className="signal-title">{item.title}</span>
                  </div>
                  <span className="signal-secondary">{item.secondaryText}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StatsRow;
