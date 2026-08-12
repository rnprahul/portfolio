import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const { socialLinks } = portfolioData.personal;

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div style={{ marginBottom: '0.8rem' }}>
          © 2026 {portfolioData.personal.name}. Built with React & Vite.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} title="GitHub">
            <Github size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} title="X (Twitter)">
            <Twitter size={18} />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} title="Instagram">
            <Instagram size={18} />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} title="Facebook">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

