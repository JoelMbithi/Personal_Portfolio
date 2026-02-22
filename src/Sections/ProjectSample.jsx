import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import buildEstateImg from "../assets/buildEstateImg.jpeg";
import joeGigsImg from "../assets/joeGigsImg.jpeg";
import quickCartImg from "../assets/quickCartImg.jpeg";
import Blog from "../assets/Blog.png";
import Employee from "../assets/Employee.jpeg";

const ACCENT = '#4ade80';

const PROJECTS = [
  {
    index: "01",
    title: "Build Estate",
    desc: "Full-stack real estate reservation platform with property listings, filters, and booking flow.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    live: "#",
    github: "https://github.com/JoelMbithi/Build-Estate-Website",
    image: buildEstateImg,
  },
  {
    index: "02",
    title: "Scribe Blog",
    desc: "Clean Django blog platform for writing and managing posts with a minimal editorial interface.",
    tags: ["Python", "Django", "Tailwind"],
    live: "",
    github: "https://github.com/JoelMbithi/scribe-django.git",
    image: Blog,
  },
  {
    index: "03",
    title: "Joe Website",
    desc: "Freelance gig platform with features for managing jobs, clients, and payments end-to-end.",
    tags: ["React", "MongoDB", "Tailwind"],
    live: "https://full-stack-dev-jx3r.vercel.app/",
    github: "https://github.com/JoelMbithi/Joe-Gig-Web",
    image: joeGigsImg,
  },
  {
    index: "04",
    title: "QuickCart",
    desc: "Modern responsive e-commerce store with product management and a PostgreSQL backend.",
    tags: ["React", "Node.js", "PostgreSQL"],
    live: "https://joe-devhub-xl5x.vercel.app/",
    github: "https://github.com/JoelMbithi/QuickCart",
    image: quickCartImg,
  },
  {
    index: "05",
    title: "Employee Manager",
    desc: "Full-featured Django app for managing employees with CRUD operations and role-based access.",
    tags: ["Python", "Django", "PostgreSQL", "Tailwind"],
    live: "",
    github: "https://github.com/JoelMbithi/scribe-django",
    image: Employee,
  },
];

/* ── PROJECT CARD ─────────────────────────────────────── */
const ProjectCard = ({ project, i }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="proj-card"
      style={{ animationDelay: `${i * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="proj-img-wrap">
        <img src={project.image} alt={project.title} className="proj-img" />
        <div className={`proj-img-overlay${hovered ? ' visible' : ''}`}>
          <div className="proj-img-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-icon-link">
                <FiExternalLink size={16} />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-icon-link">
              <FiGithub size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="proj-body">
        <div className="proj-top">
          <span className="proj-index">{project.index}</span>
          <div className="proj-actions">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-text-link">
                Live <FiExternalLink size={10} />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-text-link">
              GitHub <FiGithub size={10} />
            </a>
          </div>
        </div>

        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.desc}</p>

        <div className="proj-tags">
          {project.tags.map(t => (
            <span key={t} className="proj-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* bottom sweep */}
      <div className={`proj-sweep${hovered ? ' active' : ''}`} />
    </div>
  );
};

/* ── MAIN ─────────────────────────────────────────────── */
export const ProjectSample = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .proj-root {
          font-family: 'Epilogue', sans-serif;
          color: #e5e5e5;
          padding: 96px 40px 120px;
        }
        @media(max-width:640px){ .proj-root { padding: 72px 20px 100px; } }
        .proj-inner { max-width: 1400px; margin: 0 auto; }

        /* ── HEADER ── */
        .proj-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
          animation: proj-up .6s ease both;
        }
        .proj-eyebrow-line {
          height: 1px; background: ${ACCENT};
          width: 0; animation: proj-line .8s .2s ease forwards;
        }
        @keyframes proj-line { to { width: 32px; } }
        .proj-eyebrow-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${ACCENT};
        }
        .proj-title-main {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800; line-height: 1;
          letter-spacing: -0.03em; color: #ffffff;
          margin-bottom: 64px;
          animation: proj-up .7s .1s ease both;
        }
        .proj-title-main span { color: ${ACCENT}; }

        /* ── GRID ── */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #455;
          border-left: 1px solid #455;
        }
        @media(max-width:860px){ .proj-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:540px){ .proj-grid { grid-template-columns: 1fr; } }

        /* ── CARD ── */
        .proj-card {
          border-right: 1px solid #455;
          border-bottom: 1px solid #455;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          transition: background .2s;
          opacity: 0;
          animation: proj-cell-in .45s ease forwards;
        }
        .proj-card:hover { background: rgba(10, 25, 35, 0.7);
  backdrop-filter: blur(4px);; }

        /* image */
        .proj-img-wrap {
          position: relative;
          height: 180px; overflow: hidden;
          border-bottom: 1px solid #455;
        }
        .proj-img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(40%) brightness(0.7);
          transition: filter .4s ease, transform .4s ease;
        }
        .proj-card:hover .proj-img {
          filter: grayscale(0%) brightness(0.9);
          transform: scale(1.04);
        }
        .proj-img-overlay {
          position: absolute; inset: 0;
          background: rgba(10, 25, 35, 0.85);
          backdrop-filter: blur(2px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity .3s ease;
        }
        .proj-img-overlay.visible { opacity: 1; }
        .proj-img-links { display: flex; gap: 12px; }
        .proj-icon-link {
          width: 36px; height: 36px;
          border: 1px solid #404040;
          background: rgba(10, 25, 35, 0.7);
  backdrop-filter: blur(4px);;
          display: flex; align-items: center; justify-content: center;
          color: #b0b0b0; text-decoration: none;
          transition: color .2s, border-color .2s;
        }
        .proj-icon-link:hover { color: ${ACCENT}; border-color: #666; }

        /* body */
        .proj-body { padding: 24px 24px 28px; flex: 1; display: flex; flex-direction: column; }

        .proj-top {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .proj-index {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em; color: #555;
          transition: color .2s;
        }
        .proj-card:hover .proj-index { color: ${ACCENT}; }

        .proj-actions { display: flex; gap: 12px; }
        .proj-text-link {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; letter-spacing: 0.1em;
          text-transform: uppercase; color: #666;
          text-decoration: none;
          display: flex; align-items: center; gap: 4px;
          transition: color .2s;
        }
        .proj-text-link:hover { color: ${ACCENT}; }

        .proj-title {
          font-size: 16px; font-weight: 700;
          color: #e0e0e0; margin-bottom: 10px;
          letter-spacing: -0.01em;
          transition: color .2s;
        }
        .proj-card:hover .proj-title { color: #ffffff; }

        .proj-desc {
          font-size: 13px; line-height: 1.75;
          color: #888; margin-bottom: 20px; flex: 1;
          transition: color .2s;
        }
        .proj-card:hover .proj-desc { color: #b0b0b0; }

        /* tags */
        .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .proj-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 1px solid #404040;
          color: #888;
          transition: color .2s, border-color .2s;
        }
        .proj-card:hover .proj-tag { color: #b0b0b0; border-color: #666; }

        /* bottom sweep */
        .proj-sweep {
          position: absolute; bottom: 0; left: 0;
          height: 2px; width: 0;
          background: ${ACCENT};
          transition: width .35s ease;
        }
        .proj-sweep.active { width: 100%; }

        /* ── FOOTER BAR ── */
        .proj-footer {
          border: 1px solid #455;
          border-top: none;
          padding: 28px 40px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          flex-wrap: wrap;
          animation: proj-up .6s .5s ease both;
        }
        .proj-footer-text {
          font-size: 13px; color: #b0b0b0;
        }
        .proj-footer-text strong { color: #ffffff; font-weight: 500; }

        .proj-see-all {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 12px 28px;
          background: transparent;
          border: 1px solid #404040;
          color: #b0b0b0; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: color .15s, border-color .15s, transform .2s;
        }
        .proj-see-all:hover { color: ${ACCENT}; border-color: #666; transform: translateY(-1px); }

        .proj-show-more {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 12px 28px;
          background: ${ACCENT}; color: #0b0b0b;
          border: none; cursor: pointer;
          transition: opacity .2s, transform .2s;
        }
        .proj-show-more:hover { opacity: .85; transform: translateY(-1px); }

        /* ── KEYFRAMES ── */
        @keyframes proj-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes proj-cell-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="projects" className="proj-root">
        <div className="proj-inner">

          {/* Header */}
          <div className="proj-eyebrow">
            <div className="proj-eyebrow-line" />
            <span className="proj-eyebrow-text">Projects</span>
          </div>
          <h2 className="proj-title-main">
            Things I've <span>built.</span>
          </h2>

          {/* Grid */}
          <div className="proj-grid">
            {displayed.map((p, i) => (
              <ProjectCard key={p.index} project={p} i={i} />
            ))}
          </div>

          {/* Footer bar */}
          <div className="proj-footer">
            <p className="proj-footer-text">
              <strong>{PROJECTS.length} projects</strong> — showing {displayed.length}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {!showAll && (
                <button className="proj-show-more" onClick={() => setShowAll(true)}>
                  Show All
                </button>
              )}
              <Link to="/projects" className="proj-see-all">
                Full Portfolio →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjectSample;