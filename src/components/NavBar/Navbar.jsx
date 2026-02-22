import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/logo3.png";

const LINKS = [
  { name: 'Home',       href: '/' },
  { name: 'About',      href: '/about' },
  { name: 'Projects',   href: '/projects' },
  { name: 'Skills',     href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact',    href: '/contact' },
];

const ACCENT = '#4ade80';

export const Navbar = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        /* ── NAV ROOT ── */
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 50;
          font-family: 'Epilogue', sans-serif;
          border-bottom: 1px solid rgba(200, 240, 77, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(10, 25, 35, 0.7);
          transition: border-color .3s, box-shadow .3s, background .3s;
          animation: nav-drop .5s ease both;
        }
        .nav-root.scrolled {
          border-bottom-color: #455;
          background: rgba(8, 20, 30, 0.85);
          box-shadow: 0 4px 30px rgba(0, 20, 30, 0.5);
        }
        @keyframes nav-drop {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }

        .nav-inner {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media(max-width:640px){ .nav-inner { padding: 0 20px; } }

        /* ── LOGO ── */
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none;
          
          flex-shrink: 0;
         
        }
        .nav-logo img {
          width: 100px; height: 100px;
          
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.9;
          transition: opacity .2s, transform .2s;
        }
        .nav-logo:hover img { opacity: 1; transform: scale(1.05); }
        .nav-logo-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px; font-weight: 500;
          letter-spacing: 0.04em;
          color: #e0e0e0;
          transition: color .2s;
          white-space: nowrap;
        }
        .nav-logo-text span { color: ${ACCENT}; }
        .nav-logo:hover .nav-logo-text { color: #ffffff; }

        /* ── DESKTOP LINKS ── */
        .nav-links {
          display: flex; align-items: center; gap: 0;
          list-style: none; margin: 0; padding: 0;
        }
        @media(max-width:768px){ .nav-links { display: none; } }

        .nav-link-item { position: relative; }

        .nav-link {
          display: block;
          padding: 0 18px;
          height: 64px; line-height: 64px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b0b0b0;
          text-decoration: none;
          transition: color .2s;
          white-space: nowrap;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 16px; left: 18px; right: 18px;
          height: 1px;
          background: ${ACCENT};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }
        .nav-link:hover { color: #ffffff; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active { color: ${ACCENT}; }
        .nav-link.active::after { 
          transform: scaleX(1);
          background: ${ACCENT};
        }

        /* staggered fade in for links */
        .nav-link-item:nth-child(1) .nav-link { animation: nav-link-in .4s .2s ease both; }
        .nav-link-item:nth-child(2) .nav-link { animation: nav-link-in .4s .27s ease both; }
        .nav-link-item:nth-child(3) .nav-link { animation: nav-link-in .4s .34s ease both; }
        .nav-link-item:nth-child(4) .nav-link { animation: nav-link-in .4s .41s ease both; }
        .nav-link-item:nth-child(5) .nav-link { animation: nav-link-in .4s .48s ease both; }
        .nav-link-item:nth-child(6) .nav-link { animation: nav-link-in .4s .55s ease both; }
        @keyframes nav-link-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── MOBILE TOGGLE ── */
        .nav-mobile-btn {
          display: none;
          background: transparent;
          border: 1px solid rgba(200, 240, 77, 0.3);
          color: #b0b0b0;
          padding: 8px 10px;
          cursor: pointer;
          transition: color .2s, border-color .2s;
          border-radius: 2px;
        }
        .nav-mobile-btn:hover { color: ${ACCENT}; border-color: ${ACCENT}; }
        @media(max-width:768px){ .nav-mobile-btn { display: flex; align-items: center; } }

        /* ── MOBILE MENU ── */
        .nav-mobile {
          display: none;
          flex-direction: column;
          border-top: 1px solid rgba(200, 240, 77, 0.15);
          overflow: hidden;
          max-height: 0;
          transition: max-height .35s ease;
          background: rgba(8, 20, 30, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .nav-mobile.open { max-height: 400px; }
        @media(max-width:768px){ .nav-mobile { display: flex; } }

        .nav-mobile-link {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid rgba(200, 240, 77, 0.1);
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b0b0b0;
          text-decoration: none;
          transition: color .2s, background .2s;
        }
        .nav-mobile-link:hover {
          color: #ffffff;
          background: rgba(200, 240, 77, 0.1);
        }
        .nav-mobile-link.active {
          color: ${ACCENT};
          background: rgba(200, 240, 77, 0.1);
        }
        .nav-mobile-link.active .nav-mobile-dot {
          background: ${ACCENT};
        }
        .nav-mobile-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(200, 240, 77, 0.3);
          transition: background .2s;
        }
        .nav-mobile-link:hover .nav-mobile-dot { background: ${ACCENT}; }
      `}</style>

      <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Joel Mbithi logo" />
            <span className="nav-logo-text">
              Joel<span>Mbithi</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {LINKS.map(link => (
              <li key={link.name} className="nav-link-item">
                <Link
                  to={link.href}
                  className={`nav-link${location.pathname === link.href ? ' active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="nav-mobile-btn"
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile${isOpen ? ' open' : ''}`}>
          {LINKS.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`nav-mobile-link${location.pathname === link.href ? ' active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="nav-mobile-dot" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;