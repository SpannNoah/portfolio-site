'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">Noah Spann</a>

        <button
          className="navbar-hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={`navbar-hamburger-bar ${isOpen ? 'navbar-hamburger-bar--open-1' : ''}`} />
          <span className={`navbar-hamburger-bar ${isOpen ? 'navbar-hamburger-bar--open-2' : ''}`} />
          <span className={`navbar-hamburger-bar ${isOpen ? 'navbar-hamburger-bar--open-3' : ''}`} />
        </button>

        <div className={`navbar-links ${isOpen ? 'navbar-links--open' : ''}`}>
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/games" onClick={closeMenu}>Games</a>
          <a href="/projects" onClick={closeMenu}>Projects</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-external"
            onClick={closeMenu}
          >
            <span>Resume</span>
            <span className="navbar-external-iconWrap" aria-hidden="true">
              <img
                src="/images/externallink.png"
                alt=""
                className="navbar-external-icon navbar-external-iconDefault"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/externallink-highlighted.png"
                alt=""
                className="navbar-external-icon navbar-external-iconHover"
                loading="lazy"
                decoding="async"
              />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
