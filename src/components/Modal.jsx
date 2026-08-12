import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';

export function Modal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', details: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', details: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="glass-card modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.4rem' }} className="gradient-text">
          Fast-Track Inquiry
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Schedule a direct opportunity discussion or project inquiry with Rahul N P.
        </p>

        {submitted ? (
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.5rem', borderRadius: '8px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Check size={24} />
            <div>
              <div style={{ fontWeight: '600' }}>Inquiry Received!</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Thank you! Rahul will get back to you promptly.</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Recruiter / Hiring Manager" 
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="company.email@domain.com" 
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Role or Project Details</label>
              <textarea 
                className="form-textarea" 
                rows={3}
                placeholder="Briefly describe the software development role or contract..." 
                value={formState.details}
                onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Priority Request <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

