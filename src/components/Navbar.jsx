import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemePicker } from './ThemePicker';
import { portfolioData } from '../data/portfolioData';

export function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`nav-backdrop ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="logo">
            <span className="logo-dot"></span>
            <span>{portfolioData.personal.name}</span>
          </a>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#terminal" className="nav-link" onClick={() => setIsOpen(false)}>CLI Terminal</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <ThemePicker />
            <button onClick={onOpenModal} className="btn btn-primary nav-hire-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
              Hire Me
            </button>
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

