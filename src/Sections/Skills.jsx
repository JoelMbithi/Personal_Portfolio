import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaGitAlt, FaDocker, FaFigma, FaCloud,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiExpress, SiDjango, SiMongodb,
  SiPostgresql, SiFirebase, SiTypescript, SiRedis, SiVercel,
  SiNetlify, SiJest, SiCypress,
} from 'react-icons/si';

/* ─── DATA ───────────────────────────────────────────── */
const CATEGORIES = [
  {
    name: 'Frontend',
    desc: 'Responsive, interactive interfaces built with modern frameworks.',
    items: [
      { name: 'HTML5',       icon: <FaHtml5 />,       level: 95, color: '#e34f26' },
      { name: 'CSS3',        icon: <FaCss3Alt />,      level: 90, color: '#264de4' },
      { name: 'JavaScript',  icon: <FaJs />,           level: 92, color: '#f7df1e' },
      { name: 'TypeScript',  icon: <SiTypescript />,   level: 85, color: '#3178c6' },
      { name: 'React',       icon: <FaReact />,        level: 90, color: '#61dafb' },
      { name: 'Next.js',     icon: <SiNextdotjs />,    level: 88, color: '#ffffff' },
      { name: 'Tailwind CSS',icon: <SiTailwindcss />,  level: 94, color: '#38bdf8' },
    ],
  },
  {
    name: 'Backend',
    desc: 'Robust server-side logic and RESTful API design.',
    items: [
      { name: 'Node.js',  icon: <FaNodeJs />,   level: 88, color: '#68a063' },
      { name: 'Express',  icon: <SiExpress />,  level: 86, color: '#aaaaaa' },
      { name: 'Python',   icon: <FaPython />,   level: 82, color: '#3776ab' },
      { name: 'Django',   icon: <SiDjango />,   level: 80, color: '#092e20' },
      { name: 'Redis',    icon: <SiRedis />,    level: 75, color: '#dc382d' },
    ],
  },
  {
    name: 'Database',
    desc: 'Efficient data modelling and storage across SQL and NoSQL.',
    items: [
      { name: 'MongoDB',    icon: <SiMongodb />,    level: 85, color: '#47a248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 83, color: '#336791' },
      { name: 'Firebase',   icon: <SiFirebase />,   level: 78, color: '#ffca28' },
    ],
  },
  {
    name: 'DevOps',
    desc: 'Streamlined deployment pipelines and development tooling.',
    items: [
      { name: 'Git',     icon: <FaGitAlt />,  level: 92, color: '#f05032' },
      { name: 'Docker',  icon: <FaDocker />,  level: 80, color: '#2496ed' },
      { name: 'Figma',   icon: <FaFigma />,   level: 85, color: '#f24e1e' },
      { name: 'AWS',     icon: <FaCloud />,   level: 70, color: '#ff9900' },
      { name: 'Vercel',  icon: <SiVercel />,  level: 88, color: '#ffffff' },
      { name: 'Netlify', icon: <SiNetlify />, level: 85, color: '#00c7b7' },
    ],
  },
  {
    name: 'Testing',
    desc: 'Code quality and confidence through automated testing.',
    items: [
      { name: 'Jest',    icon: <SiJest />,    level: 82, color: '#c21325' },
      { name: 'Cypress', icon: <SiCypress />, level: 78, color: '#17202c' },
    ],
  },
];

const STATS = [
  { value: '15+', label: 'Technologies' },
  { value: '50+', label: 'Projects' },
  { value: '4+',  label: 'Years Exp.' },
  { value: '10+', label: 'Certs' },
];

/* ─── SKILL BAR ──────────────────────────────────────── */
function Bar({ level, color, delay }) {
  const [w, setW] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setW(level), delay); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="s-track">
      <div
        className="s-fill"
        style={{ width: `${w}%`, background: color, transition: 'width 0.9s cubic-bezier(0.25,1,0.5,1)' }}
      />
    </div>
  );
}

/* ─── SKILL ROW ──────────────────────────────────────── */
function SkillRow({ item, index, accentColor }) {
  return (
    <div className="sk-row" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="sk-left">
        <span className="sk-icon" style={{ color: item.color }}>{item.icon}</span>
        <span className="sk-name">{item.name}</span>
      </div>
      <div className="sk-right">
        <Bar level={item.level} color={accentColor} delay={index * 60} />
        <span className="sk-pct">{item.level}</span>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────── */
export const Skills = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('Frontend');
  const cat = CATEGORIES.find(c => c.name === active);
  const ACCENT = '#4ade80'; 

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        /* ── BASE (no background - inherits from App) ── */
        .skills-root {
          font-family: 'Epilogue', sans-serif;
          color: #e5e5e5;
          min-height: 100vh;
          padding: 96px 0 120px;
        }
        .skills-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media(max-width:640px){ .skills-inner{ padding: 0 20px; } }

        /* ── HEADER ── */
        .sk-header { margin-bottom: 72px; }
        .sk-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
        }
        .sk-eyebrow-line { width: 32px; height: 1px; background: ${ACCENT}; }
        .sk-eyebrow-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${ACCENT};
        }
        .sk-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800; line-height: 1;
          letter-spacing: -0.03em; color: #ffffff;
          margin-bottom: 16px;
        }
        .sk-title span { color: ${ACCENT}; }
        .sk-subtitle {
          font-size: 15px; font-weight: 400;
          color: #b0b0b0; max-width: 480px; line-height: 1.7;
        }

        /* ── TABS ── */
        .sk-tabs {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 56px;
        }
        .sk-tab {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 8px 18px;
          border: 1px solid #404040;
          background: transparent; color: #b0b0b0;
          cursor: pointer;
          transition: color .2s, border-color .2s, background .2s;
        }
        .sk-tab:hover { color: #ffffff; border-color: #666; }
        .sk-tab.active {
          color: #0b0b0b;
          background: ${ACCENT};
          border-color: ${ACCENT};
        }

        /* ── BODY GRID ── */
        .sk-body {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 64px;
          align-items: start;
        }
        @media(max-width:860px){ .sk-body{ grid-template-columns:1fr; gap:48px; } }

        /* ── CATEGORY TITLE ── */
        .sk-cat-title {
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #b0b0b0; margin-bottom: 28px;
        }

        /* ── SKILL ROWS ── */
        .sk-row {
          display: flex; align-items: center;
          gap: 16px; padding: 14px 0;
          border-bottom: 1px solid #455;
          opacity: 0; animation: fadeUp .4s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(10px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .sk-left {
          display: flex; align-items: center; gap: 10px;
          width: 160px; flex-shrink: 0;
        }
        .sk-icon { font-size: 18px; flex-shrink: 0; }
        .sk-name {
          font-size: 14px; font-weight: 500; color: #e0e0e0;
          white-space: nowrap;
        }
        .sk-right {
          flex: 1; display: flex; align-items: center; gap: 12px;
        }
        .s-track {
          flex: 1; height: 2px; background: #455; overflow: hidden;
        }
        .s-fill { height: 100%; }
        .sk-pct {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; color: #b0b0b0;
          width: 26px; text-align: right; flex-shrink: 0;
        }

        /* ── SIDEBAR ── */
        .sk-sidebar { display: flex; flex-direction: column; gap: 24px; }

        .sk-card {
          border: 1px solid #455;
          padding: 24px;
        }
        .sk-card-title {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: #b0b0b0; margin-bottom: 20px;
        }

        /* Proficiency blocks */
        .prof-row {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .prof-row:last-child { margin-bottom: 0; }
        .prof-label { font-size: 13px; color: #b0b0b0; }
        .prof-right {
          display: flex; align-items: center; gap: 10px;
        }
        .prof-bar-track {
          width: 64px; height: 2px; background: #455; overflow: hidden;
        }
        .prof-bar-fill {
          height: 100%;
          transition: width 1.2s ease;
        }
        .prof-count {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; color: #b0b0b0; width: 12px; text-align: right;
        }

        /* Focus list */
        .focus-list { list-style: none; padding: 0; margin: 0; }
        .focus-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: #b0b0b0;
          padding: 7px 0; border-bottom: 1px solid #455;
        }
        .focus-item:last-child { border-bottom: none; }
        .focus-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: ${ACCENT}; flex-shrink: 0;
        }

        /* CTA */
        .sk-cta {
          text-align: center; padding: 28px 24px;
          border: 1px solid #455;
        }
        .sk-cta-title {
          font-size: 16px; font-weight: 700; color: #ffffff;
          margin-bottom: 6px;
        }
        .sk-cta-sub { font-size: 13px; color: #b0b0b0; margin-bottom: 20px; }
        .sk-cta-btn {
          display: inline-block;
          padding: 11px 24px;
          background: ${ACCENT}; color: #0b0b0b;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: opacity .2s, transform .2s;
        }
        .sk-cta-btn:hover { opacity: .85; transform: translateY(-1px); }

        /* ── BOTTOM STATS ── */
        .sk-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0; margin-top: 80px;
          border-top: 1px solid #455;
          border-left: 1px solid #455;
        }
        @media(max-width:640px){ .sk-stats{ grid-template-columns: repeat(2,1fr); } }
        .sk-stat {
          padding: 36px 24px;
          border-right: 1px solid #455;
          border-bottom: 1px solid #455;
          text-align: center;
        }
        .sk-stat-val {
          font-family: 'Epilogue', sans-serif;
          font-size: 32px; font-weight: 800;
          color: #ffffff; letter-spacing: -0.02em;
          display: block; margin-bottom: 4px;
        }
        .sk-stat-lbl {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: #b0b0b0;
        }
      `}</style>

      <section id="skills" className="skills-root">
        <div className="skills-inner">

          {/* Header */}
          <div className="sk-header">
            <div className="sk-eyebrow">
              <div className="sk-eyebrow-line" />
              <span className="sk-eyebrow-text">Technical Skills</span>
            </div>
            <h2 className="sk-title">
              What I <span>work with.</span>
            </h2>
            <p className="sk-subtitle">
              A focused set of technologies I use to ship fast, clean, and maintainable software.
            </p>
          </div>

          {/* Tabs */}
          <div className="sk-tabs">
            {CATEGORIES.map(c => (
              <button
                key={c.name}
                className={`sk-tab ${active === c.name ? 'active' : ''}`}
                onClick={() => setActive(c.name)}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="sk-body">

            {/* Skill list */}
            <div key={active}>
              <div className="sk-cat-title">{cat.name} — {cat.desc}</div>
              {cat.items.map((item, i) => (
                <SkillRow key={item.name} item={item} index={i} accentColor={ACCENT} />
              ))}
            </div>

            {/* Sidebar */}
            <div className="sk-sidebar">

              {/* Proficiency overview */}
              <div className="sk-card">
                <div className="sk-card-title">Proficiency</div>
                {[
                  { label: 'Expert (85%+)',      min: 85, color: ACCENT },
                  { label: 'Advanced (75–84%)',  min: 75, max: 85, color: '#6ab4ff' },
                  { label: 'Intermediate (<75%)',min: 0,  max: 75, color: '#888' },
                ].map(tier => {
                  const count = cat.items.filter(s =>
                    tier.max ? s.level >= tier.min && s.level < tier.max : s.level >= tier.min
                  ).length;
                  const pct = cat.items.length ? (count / cat.items.length) * 100 : 0;
                  return (
                    <div className="prof-row" key={tier.label}>
                      <span className="prof-label">{tier.label}</span>
                      <div className="prof-right">
                        <div className="prof-bar-track">
                          <div className="prof-bar-fill" style={{ width: `${pct}%`, background: tier.color }} />
                        </div>
                        <span className="prof-count">{count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Focus list */}
              <div className="sk-card">
                <div className="sk-card-title">Focus Areas</div>
                <ul className="focus-list">
                  {[
                    'Responsive Web Design',
                    'RESTful API Development',
                    'Database Optimisation',
                    'Performance Tuning',
                    'Clean Code Architecture',
                    'Agile Development',
                  ].map(f => (
                    <li className="focus-item" key={f}>
                      <div className="focus-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="sk-cta">
                <div className="sk-cta-title">Ready to collaborate?</div>
                <div className="sk-cta-sub">Let's build something together.</div>
                <button className="sk-cta-btn" onClick={() => navigate('/contact')}>
                  Start a project
                </button>
              </div>

            </div>
          </div>

          {/* Stats strip */}
          <div className="sk-stats">
            {STATS.map(s => (
              <div className="sk-stat" key={s.label}>
                <span className="sk-stat-val">{s.value}</span>
                <span className="sk-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;