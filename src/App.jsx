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
    // Robust, fail-safe Scroll Reveal Observer for all screen sizes
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.section, .stats-grid').forEach(el => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        // Trigger as soon as the element top approaches or enters the viewport
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          entry.target.classList.add('reveal-visible');
          // Once revealed, unobserve to prevent flickering or disappearing on mobile
          observer.unobserve(entry.target);
        }
      });
    };

    // Use a lightweight threshold and positive root margin for responsive reliability
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 100px 0px',
      threshold: 0.01
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = document.querySelectorAll('.section, .stats-grid');
    targets.forEach(target => {
      // Check if already in/near viewport on initial load
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > -50) {
        target.classList.add('reveal-visible');
      } else {
        target.classList.add('scroll-reveal');
        observer.observe(target);
      }
    });

    // Fail-safe timeout to ensure all sections are revealed regardless of scroll position or network latency
    const fallbackTimer = setTimeout(() => {
      targets.forEach(target => {
        target.classList.add('reveal-visible');
      });
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
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

