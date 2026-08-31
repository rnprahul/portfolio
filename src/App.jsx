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

  // Smooth, Velocity-Controlled Scrolling (Reduced Scroll Speed & Fluid Momentum)
  useEffect(() => {
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let rafId = null;
    let isRunning = false;

    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const onWheel = (e) => {
      // Allow inner scrollable elements (e.g. terminal body, modals, code blocks) to scroll naturally
      let el = e.target;
      while (el && el !== document.body && el !== document.documentElement) {
        const hasOverflow = el.scrollHeight > el.clientHeight;
        const overflowStyle = window.getComputedStyle(el).overflowY;
        if (hasOverflow && (overflowStyle === 'auto' || overflowStyle === 'scroll')) {
          return;
        }
        el = el.parentElement;
      }

      // If inquiry modal is open, don't intercept body scrolling
      if (document.querySelector('.modal-overlay.active')) return;

      e.preventDefault();

      // Damped scroll speed multiplier (0.55x) for a more controlled, relaxed scrolling pace
      const scrollSpeedMultiplier = 0.55;
      targetY += e.deltaY * scrollSpeedMultiplier;
      targetY = Math.max(0, Math.min(targetY, maxScroll()));

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(animateScroll);
      }
    };

    const animateScroll = () => {
      const diff = targetY - currentY;
      // Fluid linear interpolation with smooth easing damping
      currentY += diff * 0.085;

      if (Math.abs(diff) > 0.4) {
        window.scrollTo(0, currentY);
        rafId = requestAnimationFrame(animateScroll);
      } else {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isRunning = false;
      }
    };

    const onSyncScroll = () => {
      if (!isRunning) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    // Controlled smooth scrolling for anchor link jumps
    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href === '#' || !href) return;
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 75;
        const targetPos = Math.max(0, Math.min(
          targetElement.getBoundingClientRect().top + window.scrollY - headerOffset,
          maxScroll()
        ));
        
        targetY = targetPos;
        if (!isRunning) {
          isRunning = true;
          rafId = requestAnimationFrame(animateScroll);
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onSyncScroll, { passive: true });
    document.addEventListener('click', onAnchorClick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onSyncScroll);
      document.removeEventListener('click', onAnchorClick);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

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
