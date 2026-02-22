import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import image from '../assets/image.jpeg';

export const Hero = () => {
  const navigate = useNavigate();
  const ACCENT = '#4ade80';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .hero-root {
          font-family: 'Epilogue', sans-serif;
          color: #e5e5e5;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 40px;
          position: relative;
          overflow: hidden;
        }
        @media(max-width:640px){ .hero-root { padding: 96px 20px 60px; } }

          /* subtle grid texture */
          /* floating hexagons */
.hero-root::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L47.5 17.5 L47.5 42.5 L30 55 L12.5 42.5 L12.5 17.5 L30 5' fill='none' stroke='%23c8f04d' stroke-width='0.5' stroke-opacity='0.1' /%3E%3C/svg%3E");
  background-size: 80px 80px;
  opacity: 0.4;
  pointer-events: none;
  animation: floatHexagons 40s linear infinite;
}

@keyframes floatHexagons {
  0% { background-position: 0 0; }
  100% { background-position: 80px 80px; }
}
        .hero-inner {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
          padding: 120px 0 100px;
        }
        @media(max-width:900px){
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 56px;
            padding: 80px 0 80px;
          }
        }

        /* ── LEFT ── */
        .hero-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
        }
        .hero-eyebrow-line { width: 32px; height: 1px; background: ${ACCENT}; }
        .hero-eyebrow-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${ACCENT};
        }

        .hero-name {
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800; line-height: 0.95;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .hero-name span {
          color: ${ACCENT};
          display: block;
        }

        .hero-role {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px; letter-spacing: 0.1em;
          color: #888; margin-bottom: 28px;
          text-transform: uppercase;
        }

        .hero-desc {
          font-size: 15px; font-weight: 300;
          line-height: 1.85; color: #b0b0b0;
          max-width: 460px; margin-bottom: 48px;
          border-left: 2px solid #404040;
          padding-left: 20px;
        }

        /* ── BUTTONS ── */
        .hero-actions { display: flex; gap: 10px; flex-wrap: wrap; }

        .btn-primary {
          padding: 13px 28px;
          background: ${ACCENT}; color: #0b0b0b;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          border: none; cursor: pointer; text-decoration: none;
          display: inline-block;
          transition: opacity .2s, transform .2s;
        }
        .btn-primary:hover { opacity: .85; transform: translateY(-1px); }

        .btn-outline {
          padding: 13px 28px;
          background: transparent; color: #b0b0b0;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1px solid #404040; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: color .15s, border-color .15s, transform .2s;
        }
        .btn-outline:hover { color: #ffffff; border-color: #666; transform: translateY(-1px); }

        .btn-cv {
          padding: 13px 28px;
          background: transparent; color: #888;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1px solid #404040; cursor: pointer;
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
          transition: color .15s, border-color .15s, transform .2s;
        }
        .btn-cv:hover { color: ${ACCENT}; border-color: #666; transform: translateY(-1px); }

        /* ── RIGHT: PHOTO ── */
        .hero-photo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* outer border frame */
        .hero-frame {
          position: relative;
          width: 340px; height: 360px;
          flex-shrink: 0;
        }
        @media(max-width:900px){ .hero-frame { width: 220px; height: 220px; } }

        /* corner brackets */
        .hero-frame::before,
        .hero-frame::after {
          content: '';
          position: absolute;
          width: 32px; height: 32px;
          z-index: 2;
        }
        .hero-frame::before {
          top: -8px; left: -8px;
          border-top: 2px solid ${ACCENT};
          border-left: 2px solid ${ACCENT};
        }
        .hero-frame::after {
          bottom: -8px; right: -8px;
          border-bottom: 2px solid ${ACCENT};
          border-right: 2px solid ${ACCENT};
        }

        .hero-frame-inner {
          position: relative;
          width: 100%; height: 100%;
          overflow: hidden;
        }
        /* two more corners via a child */
        .hero-frame-inner::before,
        .hero-frame-inner::after {
          content: '';
          position: absolute;
          width: 32px; height: 32px;
          z-index: 2;
        }
        .hero-frame-inner::before {
          top: -8px; right: -8px;
          border-top: 2px solid ${ACCENT};
          border-right: 2px solid ${ACCENT};
        }
        .hero-frame-inner::after {
          bottom: -8px; left: -8px;
          border-bottom: 2px solid ${ACCENT};
          border-left: 2px solid ${ACCENT};
        }

        .hero-img {
          width: 100%; height: 140%;
          object-fit: cover;
          display: block;
          filter: grayscale(30%);
          transition: filter .3s;
        }
        .hero-frame:hover .hero-img { filter: grayscale(0%); }

        /* label tag */
        .hero-tag {
          position: absolute;
          bottom: -20px; left: -16px;
          background: rgba(10, 25, 35, 0.7);
  backdrop-filter: blur(4px);;
          border: 1px solid #404040;
          padding: 8px 14px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.14em;
          text-transform: uppercase; color: #b0b0b0;
          white-space: nowrap;
          z-index: 3;
        }
        .hero-tag span { color: ${ACCENT}; margin-right: 4px; }

        /* ── SCROLL HINT ── */
        .hero-scroll {
          position: absolute;
          bottom: 36px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column;
          align-items: center; gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #555;
          z-index: 1;
        }
        .hero-scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, #666, transparent);
          animation: scroll-drop 2s ease-in-out infinite;
        }
        @keyframes scroll-drop {
          0%,100% { opacity: .3; transform: scaleY(1); }
          50%      { opacity: 1;  transform: scaleY(0.6) translateY(8px); }
        }
      `}</style>

      <section id="home" className="hero-root">
        <div className="hero-inner">

          {/* Left */}
          <div>
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">Full Stack Developer</span>
            </div>

            <h1 className="hero-name">
              Joel<span>Mbithi.</span>
            </h1>

            <div className="hero-role">Build · Solve · Deliver</div>

            <p className="hero-desc">
              Specialising in scalable web applications with the MERN and PERN stacks.
              Clean interfaces, robust backends, and a relentless focus on performance
              and user experience.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/contact')}>Contact Me</button>
              <button className="btn-outline" onClick={() => navigate('/projects')}>View Work</button>
              <a href="/JOEL MBITHI MUTUKU.pdf" download className="btn-cv">
                <FiDownload size={12} /> Download CV
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hero-photo-wrap">
            <div className="hero-frame">
              <div className="hero-frame-inner">
                <img src={image} alt="Joel Mbithi" className="hero-img" />
              </div>
              <div className="hero-tag">
                <span>✦</span> Available for work
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <span>FullStack Developer</span>
          <div className="hero-scroll-line" />
        </div>
      </section>
    </>
  );
};

export default Hero;