import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─────────────────────────────────────────────
   FONT: Syne (display) + DM Sans (body)
   THEME: Matching your portfolio — Navy/Teal base,
          lime green accent (#4ade80)
───────────────────────────────────────────── */

const SKILLS = [
  { name: 'React',        level: 90 },
  { name: 'TypeScript',   level: 82 },
  { name: 'Node.js',      level: 78 },
  { name: 'PostgreSQL',   level: 72 },
  { name: 'PHP',          level: 68 },
  { name: 'MongoDB',      level: 70 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'JavaScript',   level: 92 },
];

const STATS = [
  { value: '3+',  label: 'Years Building' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '8',   label: 'Technologies' },
];

/* Animate a number upward on mount */
function useCountUp(target, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* Skill bar that animates width on visibility */
function SkillBar({ name, level, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 80}ms` }}
      className={`skill-row ${visible ? 'skill-visible' : ''}`}
    >
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${index * 80 + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}

/* Stat block */
function Stat({ value, label, animate }) {
  const numeric = parseInt(value);
  const suffix = value.replace(String(numeric), '');
  const count = useCountUp(numeric, 1000, animate);
  return (
    <div className="stat-block">
      <span className="stat-value">{animate ? count : 0}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export const About = () => {
  const navigate = useNavigate();
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const ACCENT = '#4ade80'; // lime green to match your portfolio

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        /* ── BASE (no background - inherits from App) ── */
        .about-root {
          font-family: 'DM Sans', sans-serif;
          color: #e5e5e5;
          min-height: 100vh;
          overflow-x: hidden;
          padding: 96px 0 120px;
        }

        /* ── LAYOUT ── */
        .about-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media(max-width:640px){ .about-wrapper { padding: 0 20px; } }

        /* ── SECTION LABEL ── */
        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .eyebrow-line {
          width: 32px;
          height: 1px;
          background: ${ACCENT};
        }
        .eyebrow-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${ACCENT};
        }

        /* ── HEADLINE ── */
        .about-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(42px, 6vw, 64px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 56px;
        }
        .about-headline em {
          font-style: italic;
          font-weight: 600;
          color: ${ACCENT};
        }

        /* ── TWO-COL GRID ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ── LEFT COLUMN ── */
        .about-bio p {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: #b0b0b0;
          margin-bottom: 20px;
        }
        .about-bio p strong {
          font-weight: 500;
          color: #ffffff;
        }

        /* ── STATS ROW ── */
        .stats-row {
          display: flex;
          gap: 48px;
          margin: 40px 0 32px;
          padding: 32px 0 0;
          border-top: 1px solid #455;
        }
        .stat-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }
        .stat-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
        }

        /* ── AVAILABILITY BADGE ── */
        .availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
          padding: 8px 16px;
          border: 1px solid #404040;
          font-size: 12px;
          color: #b0b0b0;
          letter-spacing: 0.08em;
        }
        .avail-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${ACCENT};
          box-shadow: 0 0 8px ${ACCENT};
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── RIGHT COLUMN: SKILLS ── */
        .skills-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 28px;
        }
        .skills-list { display: flex; flex-direction: column; gap: 20px; }

        /* ── SKILL ROW ── */
        .skill-row {
          opacity: 0;
          transform: translateX(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .skill-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }
        .skill-name {
          font-size: 14px;
          font-weight: 400;
          color: #e0e0e0;
          letter-spacing: 0.02em;
        }
        .skill-pct {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #888;
        }
        .bar-track {
          height: 2px;
          background: #455;
          position: relative;
          overflow: hidden;
        }
        .bar-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: ${ACCENT};
          transition: width 1s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* ── DECORATIVE CORNER ── */
        .deco-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          pointer-events: none;
          overflow: hidden;
          opacity: 0.1;
        }

        /* ── BOTTOM MARQUEE ── */
        .marquee-wrap {
          margin-top: 80px;
          border-top: 1px solid #455;
          border-bottom: 1px solid #455;
          padding: 16px 0;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          gap: 0;
          animation: marquee-scroll 22s linear infinite;
          white-space: nowrap;
        }
        .marquee-item {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #555;
          padding: 0 40px;
        }
        .marquee-item span {
          color: ${ACCENT};
          margin-right: 24px;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── CTA BUTTON ── */
        .cta-row {
          display: flex;
          gap: 16px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          background: ${ACCENT};
          color: #0b0b0b;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
          text-decoration: none;
        }
        .btn-primary:hover { opacity: 0.85; transform: translateY(-1px); }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          background: transparent;
          color: #b0b0b0;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1px solid #404040;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
          text-decoration: none;
        }
        .btn-secondary:hover { border-color: #666; color: #ffffff; transform: translateY(-1px); }

        /* ── PHOTO FRAME ── */
        .photo-frame {
          position: relative;
          display: inline-block;
          margin-bottom: 32px;
        }
        .photo-frame::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          width: 60px;
          height: 60px;
          border-top: 2px solid ${ACCENT};
          border-left: 2px solid ${ACCENT};
        }
        .photo-frame::after {
          content: '';
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 60px;
          height: 60px;
          border-bottom: 2px solid ${ACCENT};
          border-right: 2px solid ${ACCENT};
        }
        .photo-placeholder {
          width: 80px;
          height: 80px;
          background: rgba(10, 25, 35, 0.7);
  backdrop-filter: blur(4px);;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: ${ACCENT};
          letter-spacing: -0.02em;
        }
      `}</style>

      <section id="about" className="about-root">
        <div className="about-wrapper">

          {/* Eyebrow */}
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">About Me</span>
          </div>

          {/* Headline */}
          <h1 className="about-headline">
            Crafting digital<br />
            experiences that <em>matter.</em>
          </h1>

          {/* Main 2-col grid */}
          <div className="about-grid">

            {/* LEFT: Bio */}
            <div className="about-bio">
              <div className="photo-frame">
                <div className="photo-placeholder">JM</div>
              </div>

              <p>
                I'm <strong>Joel Mbithi</strong> — a full-stack developer studying 
                Applied Computer Science at Chuka University. I build web applications 
                that are fast, clean, and built to last.
              </p>
              <p>
                My work sits at the intersection of thoughtful engineering and 
                considered design. I care about the details — the ones users feel 
                even when they can't name them.
              </p>
              <p>
                From backend logic in <strong>Node.js and PHP</strong> to reactive 
                frontends in <strong>React and TypeScript</strong>, I work across the 
                full stack. Real projects, real constraints, real results.
              </p>

              {/* Stats */}
              <div className="stats-row" ref={statsRef}>
                {STATS.map(s => (
                  <Stat key={s.label} value={s.value} label={s.label} animate={statsVisible} />
                ))}
              </div>

              {/* Availability */}
              <div className="availability">
                <div className="avail-dot" />
                Available for freelance work
              </div>

              {/* CTAs */}
              <div className="cta-row">
                <button className="btn-primary" onClick={() => navigate('/projects')}>
                  View Work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-secondary" onClick={() => navigate('/contact')}>
                  Get In Touch
                </button>
              </div>
            </div>

            {/* RIGHT: Skills */}
            <div>
              <p className="skills-label">Technical Skills</p>
              <div className="skills-list">
                {SKILLS.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
            </div>

          </div>

          {/* Marquee */}
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...Array(2)].map((_, ri) =>
                ['Full-Stack Dev', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Clean Code', 'UI/UX', 'Open to Work'].map((item) => (
                  <span key={`${ri}-${item}`} className="marquee-item">
                    <span>✦</span>{item}
                  </span>
                ))
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;