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
    // Scroll Reveal Observer with smooth 1.4s transition
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.18
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = document.querySelectorAll('.section, .stats-grid');
    targets.forEach(target => {
      target.classList.add('scroll-reveal');
      observer.observe(target);
    });

    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []);

  return (
    <div id="app-root">
      {/* Background Particle Canvas */}
      <ParticlesBg />

      {/* Ambient Background Glow Orbs */}
      <div class="ambient-orb orb-1"></div>
      <div class="ambient-orb orb-2"></div>

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
