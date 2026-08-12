import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, Phone, MapPin, Check, Sparkles, Twitter, Instagram, Facebook } from 'lucide-react';

export function Contact({ onOpenModal }) {
  const { personal } = portfolioData;
  const { socialLinks } = personal;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormState({ name: '', email: '', message: '' });
    }
  };

  const socialIconList = [
    { name: 'GitHub', icon: <Github size={20} />, url: socialLinks.github },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: socialLinks.linkedin },
    { name: 'X (Twitter)', icon: <Twitter size={20} />, url: socialLinks.twitter },
    { name: 'Instagram', icon: <Instagram size={20} />, url: socialLinks.instagram },
    { name: 'Facebook', icon: <Facebook size={20} />, url: socialLinks.facebook }
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Communication</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Details Glass Card */}
          <div className="glass-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              Direct Contact & Connect
            </h3>

            {/* Email Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.4rem' }}>
              <div style={{ width: '42px', height: '42px', background: 'rgba(99, 102, 241, 0.12)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Email Address</div>
                <a href={`mailto:${socialLinks.email}`} style={{ color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'underline', fontSize: '0.98rem', wordBreak: 'break-all' }}>
                  {socialLinks.email}
                </a>
              </div>
            </div>

            {/* Phone Number */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.4rem' }}>
              <div style={{ width: '42px', height: '42px', background: 'rgba(99, 102, 241, 0.12)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', flexShrink: 0 }}>
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Phone Number</div>
                <a href={`tel:${personal.phone}`} style={{ color: 'var(--text-main)', fontWeight: '600', fontSize: '0.98rem' }}>
                  {personal.phone}
                </a>
              </div>
            </div>

            {/* Primary Location */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.8rem' }}>
              <div style={{ width: '42px', height: '42px', background: 'rgba(99, 102, 241, 0.12)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', flexShrink: 0 }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Primary Location</div>
                <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.98rem' }}>{personal.location}</div>
              </div>
            </div>

            {/* Social Media App Icons Grid */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.4rem', marginBottom: '1.8rem' }}>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '0.8rem', fontWeight: '500' }}>
                Connect on Social Networks:
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
                {socialIconList.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-main)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                    title={`Navigate to ${social.name}`}
                  >
                    <span style={{ color: 'var(--accent-color)', display: 'inline-flex' }}>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <button onClick={onOpenModal} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              <Sparkles size={16} /> Open Fast-Track Priority Modal
            </button>
          </div>

          {/* Contact Message Form */}
          <div className="glass-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.2rem' }}>
              Send Message
            </h3>

            {submitted ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.5rem', borderRadius: '8px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Check size={24} />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '1rem' }}>Message Received!</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Thank you for reaching out. Rahul will respond to you shortly at {socialLinks.email}!</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder="e.g. Hiring Manager / Recruiter"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    placeholder="e.g. recruiter@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    className="form-textarea" 
                    rows={4}
                    placeholder="Write your message or software development role inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

