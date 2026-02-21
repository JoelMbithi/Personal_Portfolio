import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaGitAlt, FaDocker, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiExpress,
  SiDjango, SiMongodb, SiPostgresql, SiFirebase,
} from "react-icons/si";

const SKILLS = [
  { icon: FaHtml5,       name: "HTML5",      color: "#e34f26" },
  { icon: FaCss3Alt,     name: "CSS3",       color: "#264de4" },
  { icon: FaJs,          name: "JavaScript", color: "#f7df1e" },
  { icon: FaReact,       name: "React",      color: "#61dafb" },
  { icon: FaNodeJs,      name: "Node.js",    color: "#68a063" },
  { icon: FaPython,      name: "Python",     color: "#3776ab" },
  { icon: FaGitAlt,      name: "Git",        color: "#f05032" },
  { icon: FaDocker,      name: "Docker",     color: "#2496ed" },
  { icon: FaFigma,       name: "Figma",      color: "#f24e1e" },
  { icon: SiTailwindcss, name: "Tailwind",   color: "#38bdf8" },
  { icon: SiNextdotjs,   name: "Next.js",    color: "#ffffff" },
  { icon: SiExpress,     name: "Express",    color: "#aaaaaa" },
  { icon: SiDjango,      name: "Django",     color: "#44b78b" },
  { icon: SiMongodb,     name: "MongoDB",    color: "#47a248" },
  { icon: SiPostgresql,  name: "PostgreSQL", color: "#336791" },
  { icon: SiFirebase,    name: "Firebase",   color: "#ffca28" },
];

const Skills = () => {
  const [hovered, setHovered] = useState(null);
  const ACCENT = '#4ade80'; // Your lime green accent

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .sg-root {
          font-family: 'Epilogue', sans-serif;
          color: #e5e5e5;
          padding: 96px 40px 120px;
        }
        @media(max-width:640px){ .sg-root { padding: 72px 20px 100px; } }
        .sg-inner { max-width: 1400px; margin: 0 auto; }

        /* ── HEADER ── */
        .sg-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
          animation: sg-up .6s ease both;
        }
        .sg-eyebrow-line {
          width: 0; height: 1px; background: ${ACCENT};
          animation: sg-line .8s .2s ease forwards;
        }
        @keyframes sg-line { to { width: 32px; } }

        .sg-eyebrow-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${ACCENT};
        }

        .sg-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800; line-height: 1;
          letter-spacing: -0.03em; color: #ffffff;
          margin-bottom: 64px;
          animation: sg-up .7s .15s ease both;
        }
        .sg-title span { color: ${ACCENT}; }

        /* ── GRID ── */
        .sg-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          border-top: 1px solid #455;
          border-left: 1px solid #455;
        }
        @media(max-width:860px){ .sg-grid { grid-template-columns: repeat(6,1fr); } }
        @media(max-width:600px){ .sg-grid { grid-template-columns: repeat(4,1fr); } }
        @media(max-width:380px){ .sg-grid { grid-template-columns: repeat(3,1fr); } }

        /* ── CELL ── */
        .sg-cell {
          border-right: 1px solid #455;
          border-bottom: 1px solid #455;
          padding: 24px 12px 20px;
          display: flex; flex-direction: column;
          align-items: center; gap: 10px;
          cursor: default;
          transition: background .2s;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: sg-cell-in .45s ease forwards;
        }
        .sg-cell:hover { background: #1a1a1a; }

        /* ── ICON ── */
        .sg-icon {
          font-size: 26px;
          transition: transform .22s ease, filter .22s ease;
          will-change: transform;
        }
        .sg-cell:hover .sg-icon {
          transform: translateY(-5px) scale(1.14);
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
        }

        /* React spin on hover */
        .sg-cell[data-name="React"]:hover .sg-icon {
          animation: sg-spin 2s linear infinite;
        }
        @keyframes sg-spin { 
          to { transform: translateY(-5px) rotate(360deg) scale(1.14); } 
        }

        /* Next.js specific - keep white but add glow */
        .sg-cell[data-name="Next.js"]:hover .sg-icon {
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.5));
        }

        /* Express specific - keep gray but add glow */
        .sg-cell[data-name="Express"]:hover .sg-icon {
          filter: drop-shadow(0 0 8px rgba(170,170,170,0.5));
        }

        /* ── LABEL ── */
        .sg-name {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; letter-spacing: 0.12em;
          text-transform: uppercase; color: #555;
          text-align: center;
          transition: color .22s ease;
        }
        .sg-cell:hover .sg-name { color: #b0b0b0; }

        /* bottom sweep */
        .sg-cell::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 1px; width: 0;
          background: ${ACCENT};
          transition: width .32s ease;
        }
        .sg-cell:hover::after { width: 100%; }

        /* corner dot */
        .sg-cell::before {
          content: '';
          position: absolute;
          top: 7px; right: 7px;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: ${ACCENT};
          opacity: 0;
          transform: scale(0);
          transition: opacity .2s .05s, transform .2s .05s;
        }
        .sg-cell:hover::before { opacity: 1; transform: scale(1); }

        /* ── FOOTER ── */
        .sg-footer {
          border: 1px solid #455;
          border-top: none;
          padding: 20px 28px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
          flex-wrap: wrap;
          animation: sg-up .6s .5s ease both;
        }
        .sg-footer-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: #888;
        }
        .sg-footer-label span { color: ${ACCENT}; margin-right: 4px; }
        .sg-count {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em; color: #888;
        }

        /* ── KEYFRAMES ── */
        @keyframes sg-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sg-cell-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="skills" className="sg-root">
        <div className="sg-inner">

          <div className="sg-eyebrow">
            <div className="sg-eyebrow-line" />
            <span className="sg-eyebrow-text">Stack</span>
          </div>
          <h2 className="sg-title">Tools I <span>know.</span></h2>

          <div className="sg-grid">
            {SKILLS.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  className="sg-cell"
                  data-name={skill.name}
                  style={{ animationDelay: `${i * 38}ms` }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Icon
                    className="sg-icon"
                    style={{ color: skill.color }}
                  />
                  <span className="sg-name">{skill.name}</span>
                </div>
              );
            })}
          </div>

          <div className="sg-footer">
            <span className="sg-footer-label"><span>✦</span> JoeSoftWork</span>
            <span className="sg-count">{SKILLS.length} technologies</span>
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;