import React, { useState, useEffect } from 'react';
import { ParticlesBg } from './components/ParticlesBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsRow } from './components/StatsRow';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TerminalWidget } from './components/TerminalWidget';
import { Contact } from './components/Contact';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Dynamic bidirectional Scroll Reveal Observer
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        } else {
          // When scrolled past or back up, smoothly re-enable transition when leaving viewport
          const rect = entry.target.getBoundingClientRect();
          if (rect.top > window.innerHeight * 0.95 || rect.bottom < 0) {
            entry.target.classList.remove('reveal-visible');
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40px 0px -60px 0px',
      threshold: [0, 0.15, 0.3]
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target all major content sections, project cards, and interactive widgets
    const targets = document.querySelectorAll(
      '.section:not(#hero), .section-header, .unified-project-card, .skill-cloud-stage, .about-grid, .terminal-window, .contact-grid, .hero-dock-wrapper'
    );

    targets.forEach(target => {
      target.classList.add('scroll-reveal');
      // If already in top viewport on initial page load, immediately mark visible
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && rect.bottom > 80) {
        target.classList.add('reveal-visible');
      }
      observer.observe(target);
    });

    return () => {
      targets.forEach(target => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);

  return (
    <div id="app-root">
      {/* Background Particle Canvas */}
      <ParticlesBg />

      {/* Ambient Background Glow Orbs */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>

      {/* Sticky Glass Navbar */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <StatsRow />
        <About />
        <Skills />
        <Projects />
        <TerminalWidget onOpenModal={() => setIsModalOpen(true)} />
        <Contact onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer />

      {/* Fast-Track Inquiry Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;

