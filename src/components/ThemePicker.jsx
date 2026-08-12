import React, { useEffect, useState } from 'react';

export function ThemePicker() {
  const [activeTheme, setActiveTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('rahul-portfolio-theme') || 'default';
    setTheme(savedTheme);
  }, []);

  const setTheme = (theme) => {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    setActiveTheme(theme);
    localStorage.setItem('rahul-portfolio-theme', theme);
  };

  return (
    <div className="theme-picker" title="Switch Theme Accent Palette">
      <button 
        className={`theme-btn ${activeTheme === 'default' ? 'active' : ''}`} 
        data-theme-val="default" 
        onClick={() => setTheme('default')}
        title="Neon Indigo"
      ></button>
      <button 
        className={`theme-btn ${activeTheme === 'emerald' ? 'active' : ''}`} 
        data-theme-val="emerald" 
        onClick={() => setTheme('emerald')}
        title="Cyber Emerald"
      ></button>
      <button 
        className={`theme-btn ${activeTheme === 'amber' ? 'active' : ''}`} 
        data-theme-val="amber" 
        onClick={() => setTheme('amber')}
        title="Solar Amber"
      ></button>
      <button 
        className={`theme-btn ${activeTheme === 'rose' ? 'active' : ''}`} 
        data-theme-val="rose" 
        onClick={() => setTheme('rose')}
        title="Rose Glow"
      ></button>
    </div>
  );
}

