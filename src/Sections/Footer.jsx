import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ACCENT = '#4ade80';

const SOCIALS = [
  { icon: <FiGithub size={15}/>,   label: 'GitHub',   url: 'https://github.com/JoelMbithi' },
  { icon: <FiLinkedin size={15}/>, label: 'LinkedIn', url: 'https://www.linkedin.com/in/joel-mbithi-84bab9278/' },
  { icon: <FiTwitter size={15}/>,  label: 'Twitter',  url: 'https://twitter.com/yourusername' },
  { icon: <FiMail size={15}/>,     label: 'Email',    url: 'mailto:joellembithi@gmail.com' },
];

const NAV = [
  { name: 'Home',       href: '/' },
  { name: 'About',      href: '/about' },
  { name: 'Projects',   href: '/projects' },
  { name: 'Skills',     href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact',    href: '/contact' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .ft-root {
          font-family: 'Epilogue', sans-serif;
          border-top: 1px solid #455;
          background: rgba(10, 25, 35, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* ── TOP ROW ── */
        .ft-top {
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 40px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
          border-bottom: 1px solid #455;
        }
        @media(max-width:860px){ .ft-top{ grid-template-columns:1fr 1fr; gap:36px; } }
        @media(max-width:560px){ .ft-top{ grid-template-columns:1fr; padding:40px 20px 36px; } }

        /* brand col */
        .ft-brand {}
        .ft-logo {
          font-family: 'Epilogue', sans-serif;
          font-size: 22px; font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 12px;
          display: block;
          text-decoration: none;
        }
        .ft-logo span { color: ${ACCENT}; }
        .ft-tagline {
          font-size: 13px; color: #b0b0b0;
          line-height: 1.7; max-width: 220px;
          margin-bottom: 24px;
        }

        /* availability */
        .ft-avail {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase; color: #888;
        }
        .ft-avail-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${ACCENT};
          box-shadow: 0 0 8px ${ACCENT};
          animation: ft-pulse 2s ease-in-out infinite;
        }
        @keyframes ft-pulse {
          0%,100%{ opacity:1; } 50%{ opacity:0.4; }
        }

        /* nav col */
        .ft-col-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #4ade80;
          margin-bottom: 20px;
          display: block;
        }
        .ft-nav-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .ft-nav-link {
          font-size: 13px; color: #b0b0b0;
          text-decoration: none;
          transition: color .18s;
          display: inline-block;
        }
        .ft-nav-link:hover { color: #ffffff; }

        /* socials col */
        .ft-social-list { display: flex; flex-direction: column; gap: 10px; }
        .ft-social-link {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 13px; color: #b0b0b0;
          text-decoration: none;
          transition: color .18s;
        }
        .ft-social-link:hover { color: ${ACCENT}; }
        .ft-social-icon { flex-shrink: 0; }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
          flex-wrap: wrap;
        }
        @media(max-width:560px){ .ft-bottom{ padding: 20px; flex-direction:column; align-items:flex-start; gap:8px; } }

        .ft-copy {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: #888;
        }
        .ft-copy span { color: ${ACCENT}; }

        .ft-credit {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.08em;
          color: #666;
        }
        .ft-credit strong { color: #b0b0b0; font-weight: 500; }
      `}</style>

      <footer className="ft-root">
        <div className="ft-top">

          {/* Brand */}
          <div className="ft-brand">
            <Link to="/" className="ft-logo">
              Joel<span>Mbithi</span>
            </Link>
            <p className="ft-tagline">
              Full-stack developer building clean, scalable web applications.
            </p>
            <div className="ft-avail">
             <div className="ft-avail-dot" />
  Open for opportunities
</div>
          </div>

          {/* Nav */}
          <div>
            <span className="ft-col-label">Navigation</span>
            <ul className="ft-nav-list">
              {NAV.map(n => (
                <li key={n.name}>
                  <Link to={n.href} className="ft-nav-link">{n.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <span className="ft-col-label">Connect</span>
            <div className="ft-social-list">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-link"
                >
                  <span className="ft-social-icon">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="ft-bottom">
          <span className="ft-copy">
            © {year} Joel<span>Mbithi</span>. All rights reserved.
          </span>
          <span className="ft-credit">
            Built with <strong>React</strong> · Designed & developed by <strong>Joel Mbithi</strong>
          </span>
        </div>

      </footer>
    </>
  );
};

export default Footer;