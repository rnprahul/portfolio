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
    <nav class={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div class="container nav-container">
        <a href="#hero" class="logo">
          <span class="logo-dot"></span>
          <span>{portfolioData.personal.name}</span>
        </a>

        <ul class={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" class="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" class="nav-link" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" class="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#terminal" class="nav-link" onClick={() => setIsOpen(false)}>CLI Terminal</a></li>
          <li><a href="#contact" class="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        <div class="nav-actions">
          <ThemePicker />
          <button onClick={onOpenModal} class="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
            Hire Me
          </button>
          <button class="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
