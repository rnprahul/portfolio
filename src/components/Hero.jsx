import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Hero({ onOpenModal }) {
  const { personal } = portfolioData;
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    const roles = [
      "Software Developer",
      "React Developer",
      "Full-Stack Web Developer",
      "BCA Graduate"
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        setTypingText(currentRole.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setTypingText(currentRole.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 40 : 100;

      if (!isDeleting && charIdx === currentRole.length) {
        speed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 400;
      }

      timer = setTimeout(type, speed);
    };

    type();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section hero-section" id="hero">
      <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="status-badge">
          <span className="status-dot"></span>
          {personal.statusBadge}
        </div>

        <h1 className="hero-title" style={{ maxWidth: '900px', margin: '0 auto 1.2rem' }}>
          Hi, I'm <span className="gradient-text">{personal.name}</span><br />
          <span className="typing-container">{typingText}</span>
        </h1>

        <p className="hero-description" style={{ maxWidth: '720px', margin: '0 auto 2.2rem' }}>
          BCA Graduate & Software Developer building practical, user-focused web applications with <strong>React</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, <strong>SQL</strong>, <strong>MongoDB</strong>, and <strong>Firebase</strong>.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
          <button onClick={onOpenModal} className="btn btn-outline">
            <Sparkles size={16} /> Fast Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}

