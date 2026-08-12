import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const { personal } = portfolioData;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Background</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="glass-card" style={{ maxWidth: '1020px', margin: '0 auto' }}>
          <div className="about-grid">
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-hover)', boxShadow: '0 15px 40px -10px var(--accent-glow)' }}>
              <img 
                src={personal.aboutImage} 
                alt={`${personal.name} - Software Developer`} 
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-md)' }} 
              />
            </div>

            <div>
              <p style={{ fontSize: '1.12rem', color: 'var(--text-main)', marginBottom: '1.2rem', lineHeight: '1.75' }}>
                Rahul is a BCA graduate and software developer interested in building practical, user-focused web applications.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.8rem', lineHeight: '1.7' }}>
                He enjoys turning ideas into functional software solutions using React, Python, SQL, MongoDB, and Firebase—continuously improving his engineering skills through hands-on project building and practical software development workflows.
              </p>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.4rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-color)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-code)' }}>
                  Current Primary Development Focus
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {personal.focusList.map((item, idx) => (
                    <span key={idx} className="tag-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--accent-color)' }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

