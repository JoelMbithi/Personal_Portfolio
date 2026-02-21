import React, { useState } from 'react';
import { FaRocket, FaLaptopCode, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

/* ─── DATA ───────────────────────────────────────────── */
const EXPERIENCES = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    type: 'Full-time · Remote',
    duration: 'Jan 2022 – Present',
    years: '3 yrs',
    description:
      'Built and delivered web applications for clients across multiple industries. Handled frontend, backend, third-party API integrations, database design, and cloud deployment end-to-end.',
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express', 'Vercel', 'Render'],
    achievements: [
      'Delivered 50+ full-stack applications on time and within scope',
      'Maintained a 95% client satisfaction rate across all engagements',
      'Reduced average page load time by 40% through performance optimisation',
    ],
    icon: <FaRocket />,
    index: '01',
  },
  {
    role: 'Junior Web Developer',
    company: 'Independent Projects',
    type: 'Freelance · Remote',
    duration: 'Mar 2020 – Dec 2021',
    years: '1 yr 9 mo',
    description:
      'Focused on building hands-on experience through personal and client projects. Created responsive interfaces, RESTful APIs, and contributed to open-source repositories while adopting modern development practices.',
    technologies: ['JavaScript', 'React', 'Node.js', 'REST APIs', 'Git'],
    achievements: [
      'Built 20+ personal and client projects from scratch',
      'Contributed to 5+ open-source projects on GitHub',
      'Established consistent code review and Git workflow habits',
    ],
    icon: <FaLaptopCode />,
    index: '02',
  },
];

const STATS = [
  { value: '50+', label: 'Projects' },
  { value: '95%', label: 'Satisfaction' },
  { value: '15+', label: 'Technologies' },
  { value: '4+',  label: 'Years Exp.' },
];

/* ─── MAIN ───────────────────────────────────────────── */
export const Experience = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const exp = EXPERIENCES[active];
  const ACCENT = '#4ade80'; // matching lime accent from Skills

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .exp-root {
          font-family: 'Epilogue', sans-serif;
          color: #e5e5e5;
          min-height: 100vh;
          padding: 96px 0 120px;
        }
        .exp-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media(max-width:640px){ .exp-inner { padding: 0 20px; } }

        /* ── HEADER ── */
        .exp-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
        }
        .exp-eyebrow-line { width: 32px; height: 1px; background: ${ACCENT}; }
        .exp-eyebrow-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${ACCENT};
        }
        .exp-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800; line-height: 1;
          letter-spacing: -0.03em; color: #ffffff;
          margin-bottom: 16px;
        }
        .exp-title span { color: ${ACCENT}; }
        .exp-subtitle {
          font-size: 15px; color: #b0b0b0;
          line-height: 1.7; max-width: 460px;
          margin-bottom: 64px;
        }

        /* ── BODY ── */
        .exp-body {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 0;
          border: 1px solid #455;
        }
        @media(max-width:800px){
          .exp-body { grid-template-columns: 1fr; }
        }

        /* ── LEFT NAV ── */
        .exp-nav { border-right: 1px solid #455; }
        .exp-nav-item {
          padding: 28px 24px;
          border-bottom: 1px solid #2a2a2a;
          cursor: pointer;
          transition: background .15s;
          position: relative;
        }
        .exp-nav-item:last-child { border-bottom: none; }
        .exp-nav-item:hover { background: #1a1a1a; }
        .exp-nav-item.active { background: #1a1a1a; }
        .exp-nav-item.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: ${ACCENT};
        }
        .nav-index {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: #555; margin-bottom: 8px;
          transition: color .15s;
        }
        .exp-nav-item.active .nav-index,
        .exp-nav-item:hover .nav-index { color: ${ACCENT}; }
        .nav-company {
          font-size: 14px; font-weight: 600;
          color: #b0b0b0; transition: color .15s;
          margin-bottom: 4px;
        }
        .exp-nav-item.active .nav-company,
        .exp-nav-item:hover .nav-company { color: #ffffff; }
        .nav-date {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; color: #666;
        }

        /* ── RIGHT PANEL ── */
        .exp-panel {
          padding: 48px;
          animation: fadePanel .3s ease;
        }
        @keyframes fadePanel {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media(max-width:640px){ .exp-panel { padding: 28px 20px; } }

        /* role row */
        .exp-role-row {
          display: flex; align-items: flex-start;
          gap: 16px; margin-bottom: 32px;
        }
        .exp-icon-wrap {
          width: 42px; height: 42px; flex-shrink: 0;
          border: 1px solid #404040;
          display: flex; align-items: center; justify-content: center;
          color: ${ACCENT}; font-size: 16px;
          margin-top: 3px;
        }
        .exp-role {
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700; color: #ffffff;
          line-height: 1.1; margin-bottom: 10px;
        }
        .exp-meta {
          display: flex; flex-wrap: wrap; gap: 16px;
          font-size: 12px; color: #b0b0b0;
          font-family: 'IBM Plex Mono', monospace;
        }
        .exp-meta span { display: flex; align-items: center; gap: 6px; }
        .exp-meta svg { color: ${ACCENT}; font-size: 10px; }

        /* description */
        .exp-desc {
          font-size: 14px; line-height: 1.85;
          color: #b0b0b0; margin-bottom: 36px;
          border-left: 2px solid #455;
          padding-left: 20px;
        }

        /* section label */
        .exp-sec-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.18em;
          text-transform: uppercase; color: #666;
          margin-bottom: 16px;
        }

        /* tech tags */
        .tech-wrap { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 36px; }
        .tech-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.08em;
          color: #b0b0b0; padding: 5px 12px;
          border: 1px solid #404040;
          transition: color .15s, border-color .15s;
        }
        .tech-tag:hover { color: ${ACCENT}; border-color: #666; }

        /* achievements */
        .ach-list { list-style: none; padding: 0; margin: 0; }
        .ach-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 13px; color: #b0b0b0; line-height: 1.7;
          padding: 10px 0;
          border-bottom: 1px solid #2a2a2a;
        }
        .ach-item:last-child { border-bottom: none; }
        .ach-num {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; color: #666;
          flex-shrink: 0; padding-top: 2px;
          min-width: 20px;
        }

        /* ── STATS ── */
        .exp-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid #455;
          border-top: 1px solid #455;
          margin-top: 0;
        }
        @media(max-width:640px){ .exp-stats { grid-template-columns: repeat(2,1fr); } }
        .exp-stat {
          padding: 32px 24px;
          border-right: 1px solid #455;
          border-bottom: 1px solid #455;
          text-align: center;
        }
        .exp-stat-val {
          font-family: 'Epilogue', sans-serif;
          font-size: 28px; font-weight: 800;
          color: #ffffff; letter-spacing: -0.02em;
          display: block; margin-bottom: 4px;
        }
        .exp-stat-lbl {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.14em;
          text-transform: uppercase; color: #b0b0b0;
        }

        /* ── CTA ── */
        .exp-cta {
          border: 1px solid #455;
          border-top: none;
          padding: 40px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          flex-wrap: wrap;
        }
        .exp-cta-text {}
        .exp-cta-title {
          font-size: 18px; font-weight: 700;
          color: #ffffff; margin-bottom: 6px;
        }
        .exp-cta-sub { font-size: 13px; color: #b0b0b0; }
        .exp-cta-btn {
          padding: 12px 28px;
          background: ${ACCENT}; color: #0b0b0b;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          border: none; cursor: pointer; flex-shrink: 0;
          transition: opacity .2s, transform .2s;
        }
        .exp-cta-btn:hover { opacity: .85; transform: translateY(-1px); }
      `}</style>

      <section id="experience" className="exp-root">
        <div className="exp-inner">

          {/* Header */}
          <div className="exp-eyebrow">
            <div className="exp-eyebrow-line" />
            <span className="exp-eyebrow-text">Experience</span>
          </div>
          <h2 className="exp-title">Where I've <span>worked.</span></h2>
          <p className="exp-subtitle">
            A record of the roles and projects that shaped how I think about building software.
          </p>

          {/* Main panel */}
          <div className="exp-body">

            {/* Nav */}
            <div className="exp-nav">
              {EXPERIENCES.map((e, i) => (
                <div
                  key={i}
                  className={`exp-nav-item ${active === i ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="nav-index">{e.index}</div>
                  <div className="nav-company">{e.company}</div>
                  <div className="nav-date">{e.years}</div>
                </div>
              ))}
            </div>

            {/* Detail */}
            <div className="exp-panel" key={active}>
              <div className="exp-role-row">
                <div className="exp-icon-wrap">{exp.icon}</div>
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-meta">
                    <span><FaCalendarAlt />{exp.duration}</span>
                    <span><FaMapMarkerAlt />{exp.type}</span>
                  </div>
                </div>
              </div>

              <p className="exp-desc">{exp.description}</p>

              <div className="exp-sec-label">Technologies</div>
              <div className="tech-wrap">
                {exp.technologies.map(t => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="exp-sec-label">Key Achievements</div>
              <ul className="ach-list">
                {exp.achievements.map((a, i) => (
                  <li className="ach-item" key={i}>
                    <span className="ach-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="exp-stats">
            {STATS.map(s => (
              <div className="exp-stat" key={s.label}>
                <span className="exp-stat-val">{s.value}</span>
                <span className="exp-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="exp-cta">
            <div className="exp-cta-text">
              <div className="exp-cta-title">Ready to work together?</div>
              <div className="exp-cta-sub">Let's discuss your next project.</div>
            </div>
            <button className="exp-cta-btn" onClick={() => navigate('/contact')}>
              Start a conversation
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Experience;