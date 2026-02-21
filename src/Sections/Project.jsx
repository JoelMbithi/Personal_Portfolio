import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiSearch, FiX, FiArrowUpRight } from 'react-icons/fi';

import buildEstateImg  from '../assets/buildEstateImg.jpeg';
import joeGigsImg      from '../assets/joeGigsImg.jpeg';
import quickCartImg    from '../assets/quickCartImg.jpeg';
import Blog            from '../assets/Blog.png';
import Employee        from '../assets/Employee.jpeg';
import posSystemImg    from '../assets/POS.png';
import cityConnectImg  from '../assets/city-connect.jpeg';
import socialSphereImg from '../assets/social-media.jpeg';

/* ─── DATA ───────────────────────────────────────────── */
const PROJECTS = [
  
  { index:'01', title:'Scribe Blog',   desc:'Clean Django blog platform for writing and managing posts with a minimal editorial interface.',                   tags:['Python','Django','Tailwind'],              live:'',                                        github:'https://github.com/JoelMbithi/scribe-django.git',     image:Blog,           featured:false },
  { index:'02', title:'Joe Website',   desc:'Freelance gig platform with features for managing jobs, clients, and payments end-to-end.',                       tags:['React','MongoDB','Tailwind'],              live:'https://full-stack-dev-jx3r.vercel.app/', github:'https://github.com/JoelMbithi/Joe-Gig-Web',           image:joeGigsImg,     featured:true  },
  { index:'03', title:'Build Estate',  desc:'Full-stack real estate reservation platform with property listings, filters, and booking flow.',                   tags:['React','Node.js','PostgreSQL','Tailwind'], live:'#',                                       github:'https://github.com/JoelMbithi/Build-Estate-Website', image:buildEstateImg,  featured:true  },
  { index:'04', title:'QuickCart',     desc:'Modern responsive e-commerce store with product management and a PostgreSQL backend.',                            tags:['React','Node.js','PostgreSQL'],            live:'https://joe-devhub-xl5x.vercel.app/',     github:'https://github.com/JoelMbithi/QuickCart',             image:quickCartImg,   featured:false },
  { index:'05', title:'Employee Mgr', desc:'Full-featured Django app for managing employees with CRUD operations and role-based access.',                     tags:['Python','Django','PostgreSQL','Tailwind'], live:'',                                        github:'https://github.com/JoelMbithi/scribe-django',         image:Employee,       featured:false },
  { index:'06', title:'POS System',   desc:'Point-of-sale solution with inventory tracking, sales reports, and customer management.',                         tags:['React','TypeScript','Node.js','Laravel'],  live:'',                                        github:'https://github.com/JoelMbithi/ts-starter-kit',        image:posSystemImg,   featured:false },
  { index:'07', title:'CityConnect',  desc:'County-level networking platform connecting people and local businesses in a single hub.',                        tags:['React','Node.js','PostgreSQL','Tailwind'], live:'',                                        github:'https://github.com/JoelMbithi/ts-starter-kit',        image:cityConnectImg, featured:false },
  { index:'08', title:'SocialSphere', desc:'Modern social media platform for posting, reacting, and connecting with friends, built with TypeScript.',         tags:['React','TypeScript','Tailwind'],           live:'',                                        github:'https://github.com/JoelMbithi/ts-starter-kit',        image:socialSphereImg,featured:false },
];

const ALL_TAGS = [...new Set(PROJECTS.flatMap(p => p.tags))].sort();
const ACCENT   = '#4ade80';

/* ─── SCROLL REVEAL HOOK ─────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── CARD ───────────────────────────────────────────── */
const Card = ({ p, i }) => {
  const [hov, setHov]      = useState(false);
  const [ref, visible]     = useReveal();

  return (
    <div
      ref={ref}
      className="pc-card"
      style={{ transitionDelay: visible ? `${i * 65}ms` : '0ms' }}
      data-visible={visible}
      data-featured={p.featured}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* image */}
      <div className="pc-img-wrap">
        <img src={p.image} alt={p.title} className="pc-img" />

        {/* gradient scrim — always visible, deepens on hover */}
        <div className="pc-scrim" />

        {/* featured pill */}
        {p.featured && <span className="pc-featured-pill">Featured</span>}

        {/* hover overlay — icon links */}
        <div className={`pc-overlay${hov ? ' show' : ''}`}>
          <div className="pc-overlay-links">
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="pc-ol">
                <FiExternalLink size={14}/><span>Live</span>
              </a>
            )}
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="pc-ol">
              <FiGithub size={14}/><span>Code</span>
            </a>
          </div>
        </div>

        {/* index — bottom left of image */}
        <span className={`pc-badge${hov ? ' show' : ''}`}>{p.index}</span>
      </div>

      {/* body */}
      <div className="pc-body">
        <div className="pc-title-row">
          <h3 className="pc-title">{p.title}</h3>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className={`pc-arrow${hov ? ' show' : ''}`}>
            <FiArrowUpRight size={16}/>
          </a>
        </div>

        <p className="pc-desc">{p.desc}</p>

        <div className="pc-tags">
          {p.tags.map(t => <span key={t} className="pc-tag">{t}</span>)}
        </div>
      </div>

      {/* bottom sweep */}
      <div className={`pc-sweep${hov ? ' on' : ''}`} />
    </div>
  );
};

/* ─── MAIN ───────────────────────────────────────────── */
export const Projects = () => {
  const navigate = useNavigate();
  const [search,    setSearch]    = useState('');
  const [activeTag, setActiveTag] = useState('');
  const [ctaRef, ctaVisible]      = useReveal();

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const filtered = PROJECTS.filter(p => {
    const ms = !search    || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const mt = !activeTag || p.tags.includes(activeTag);
    return ms && mt;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        /* ── ROOT ── */
        .pr-root{
          font-family:'Epilogue',sans-serif;
          color:#e5e5e5;
          min-height:100vh; padding:120px 40px 140px;
        }
        @media(max-width:640px){ .pr-root{ padding:100px 20px 100px; } }
        .pr-inner{ max-width:1100px; margin:0 auto; }

        /* ── HEADER ── */
        .pr-eyebrow{
          display:flex; align-items:center; gap:12px;
          margin-bottom:22px;
          animation:pr-up .6s ease both;
        }
        .pr-eyebrow-line{
          height:1px; background:${ACCENT};
          width:0; animation:pr-line .9s .25s ease forwards;
        }
        @keyframes pr-line{ to{ width:32px; } }
        .pr-eyebrow-text{
          font-family:'IBM Plex Mono',monospace;
          font-size:11px; letter-spacing:0.2em;
          text-transform:uppercase; color:${ACCENT};
        }

        .pr-title{
          font-size:clamp(38px,5.5vw,72px);
          font-weight:800; line-height:.95;
          letter-spacing:-0.04em; color:#ffffff;
          margin-bottom:18px;
          animation:pr-up .7s .1s ease both;
        }
        .pr-title span{ color:${ACCENT}; }

        .pr-subtitle{
          font-size:15px; color:#b0b0b0; line-height:1.75;
          max-width:460px; margin-bottom:0;
          border-left:2px solid #404040; padding-left:18px;
          animation:pr-up .7s .2s ease both;
        }

        /* ── META ROW ── */
        .pr-meta-row{
          display:flex; align-items:center;
          justify-content:space-between;
          gap:16px; flex-wrap:wrap;
          margin:40px 0 48px;
          padding:20px 0;
          border-top:1px solid #455;
          border-bottom:1px solid #455;
          animation:pr-up .6s .28s ease both;
        }
        .pr-count-group{ display:flex; gap:32px; }
        .pr-count-item{}
        .pr-count-val{
          font-family:'Epilogue',sans-serif;
          font-size:26px; font-weight:800;
          color:#ffffff; letter-spacing:-0.03em;
          line-height:1; display:block;
        }
        .pr-count-lbl{
          font-family:'IBM Plex Mono',monospace;
          font-size:9px; letter-spacing:0.16em;
          text-transform:uppercase; color:#888;
          margin-top:3px; display:block;
        }

        /* ── CONTROLS ── */
        .pr-controls{
          display:flex; flex-wrap:wrap;
          align-items:flex-start; gap:12px;
          margin-bottom:40px;
          animation:pr-up .6s .32s ease both;
        }
        .pr-search-wrap{
          position:relative; min-width:220px; max-width:320px;
        }
        .pr-search-icon{
          position:absolute; left:14px; top:50%;
          transform:translateY(-50%);
          color:#888; font-size:13px; pointer-events:none;
          transition:color .2s;
        }
        .pr-search-wrap:focus-within .pr-search-icon{ color:${ACCENT}; }
        .pr-search{
          width:100%;
          padding:11px 36px 11px 40px;
          background:#1a1a1a;
          border:1px solid #404040;
          color:#e5e5e5;
          font-family:'Epilogue',sans-serif; font-size:13px;
          outline:none;
          transition:border-color .25s;
        }
        .pr-search::placeholder{ color:#666; }
        .pr-search:focus{ border-color:${ACCENT}; }
        .pr-clear{
          position:absolute; right:12px; top:50%;
          transform:translateY(-50%);
          background:none; border:none; cursor:pointer;
          color:#888; font-size:12px;
          transition:color .2s; padding:0;
        }
        .pr-clear:hover{ color:${ACCENT}; }

        .pr-filters{ display:flex; flex-wrap:wrap; gap:6px; }
        .pr-filter{
          font-family:'IBM Plex Mono',monospace;
          font-size:9px; letter-spacing:0.12em;
          text-transform:uppercase;
          padding:7px 13px;
          border:1px solid #455;
          background:transparent; color:#888;
          cursor:pointer;
          transition:color .15s, border-color .15s, background .15s, transform .15s;
        }
        .pr-filter:hover{ color:#ffffff; border-color:#666; transform:translateY(-1px); }
        .pr-filter.on{
          color:#0b0b0b; background:${ACCENT};
          border-color:${ACCENT}; transform:translateY(-1px);
        }

        /* ── GRID ── */
        .pr-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          border-top:1px solid #455;
          border-left:1px solid #455;
        }
        @media(max-width:960px){ .pr-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:560px){ .pr-grid{ grid-template-columns:1fr; } }

        /* featured card spans 2 cols on large screens */
        .pc-card[data-featured="true"]{
          grid-column: span 1;
        }
        @media(min-width:961px){
          .pc-card[data-featured="true"]:first-child{
            grid-column: span 2;
          }
          .pc-card[data-featured="true"]:first-child .pc-img-wrap{
            height:280px;
          }
        }

        /* ── CARD ── */
        .pc-card{
          border-right:1px solid #455;
          border-bottom:1px solid #455;
          display:flex; flex-direction:column;
          position:relative; overflow:hidden;
          transition:background .2s;
          /* scroll reveal */
          opacity:0; transform:translateY(18px);
          transition:opacity .5s ease, transform .5s ease, background .2s;
        }
        .pc-card[data-visible="true"]{ opacity:1; transform:translateY(0); }
        .pc-card:hover{ background:#1a1a1a; }

        /* image - NO MORE GRAYSCALE FILTERS */
        .pc-img-wrap{
          position:relative; height:190px;
          overflow:hidden; flex-shrink:0;
        }
        .pc-img{
          width:100%; height:100%; object-fit:cover;
          transition:transform .55s ease;
        }
        .pc-card:hover .pc-img{
          transform:scale(1.07);
        }

        /* permanent bottom gradient scrim - lighter */
        .pc-scrim{
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(10,25,35,0.4) 0%, transparent 70%);
          pointer-events:none;
        }

        /* featured pill */
        .pc-featured-pill{
          position:absolute; top:12px; left:12px;
          font-family:'IBM Plex Mono',monospace;
          font-size:9px; letter-spacing:0.14em;
          text-transform:uppercase;
          padding:4px 10px;
          background:${ACCENT}; color:#0b0b0b;
          font-weight:500;
          z-index:2;
        }

        /* overlay */
        .pc-overlay{
          position:absolute; inset:0;
          background:rgba(10,25,35,0.6);
          backdrop-filter:blur(2px);
          display:flex; align-items:center; justify-content:center;
          opacity:0; transition:opacity .3s ease;
          z-index:3;
        }
        .pc-overlay.show{ opacity:1; }
        .pc-overlay-links{ display:flex; gap:10px; }
        .pc-ol{
          display:inline-flex; align-items:center; gap:6px;
          padding:9px 16px;
          border:1px solid #404040; background:#1a1a1a;
          color:#b0b0b0; text-decoration:none;
          font-family:'IBM Plex Mono',monospace;
          font-size:10px; letter-spacing:0.1em;
          text-transform:uppercase;
          opacity:0; transform:translateY(10px);
          transition:color .2s, border-color .2s,
                      opacity .3s ease, transform .3s ease;
        }
        .pc-overlay.show .pc-ol{ opacity:1; transform:translateY(0); }
        .pc-overlay.show .pc-ol:nth-child(1){ transition-delay:.04s; }
        .pc-overlay.show .pc-ol:nth-child(2){ transition-delay:.10s; }
        .pc-ol:hover{ color:${ACCENT}; border-color:#666; }

        /* index badge */
        .pc-badge{
          position:absolute; bottom:10px; left:12px;
          font-family:'IBM Plex Mono',monospace;
          font-size:10px; letter-spacing:0.1em;
          color:${ACCENT}; opacity:0;
          transform:translateY(6px);
          transition:opacity .25s ease, transform .25s ease;
          z-index:2;
        }
        .pc-badge.show{ opacity:1; transform:translateY(0); }

        /* body */
        .pc-body{
          padding:24px 24px 28px;
          flex:1; display:flex; flex-direction:column;
          border-top:1px solid #2a2a2a;
        }

        .pc-title-row{
          display:flex; align-items:flex-start;
          justify-content:space-between; gap:8px;
          margin-bottom:10px;
        }
        .pc-title{
          font-size:16px; font-weight:700;
          color:#e0e0e0; letter-spacing:-0.01em;
          transition:color .25s; flex:1;
        }
        .pc-card:hover .pc-title{ color:#ffffff; }

        /* arrow icon */
        .pc-arrow{
          color:#666; flex-shrink:0; margin-top:2px;
          text-decoration:none;
          opacity:0; transform:translate(-4px,4px);
          transition:color .2s, opacity .25s ease, transform .25s ease;
        }
        .pc-arrow.show{ opacity:1; transform:translate(0,0); }
        .pc-arrow:hover{ color:${ACCENT}; }

        .pc-desc{
          font-size:12.5px; line-height:1.8;
          color:#888; margin-bottom:20px; flex:1;
          transition:color .25s;
        }
        .pc-card:hover .pc-desc{ color:#b0b0b0; }

        .pc-tags{ display:flex; flex-wrap:wrap; gap:6px; }
        .pc-tag{
          font-family:'IBM Plex Mono',monospace;
          font-size:9px; letter-spacing:0.1em;
          text-transform:uppercase;
          padding:4px 10px;
          border:1px solid #555; color:#c8b89a;
          transition:color .2s, border-color .2s;
        }
        .pc-card:hover .pc-tag{ color:#b0b0b0; border-color:#666; }

        /* sweep */
        .pc-sweep{
          position:absolute; bottom:0; left:0;
          height:2px; width:0; background:${ACCENT};
          transition:width .35s ease;
        }
        .pc-sweep.on{ width:100%; }

        /* ── EMPTY ── */
        .pr-empty{
          grid-column:1/-1;
          border-right:1px solid #455;
          border-bottom:1px solid #455;
          padding:80px;
          text-align:center;
          font-family:'IBM Plex Mono',monospace;
          font-size:11px; letter-spacing:0.18em;
          text-transform:uppercase; color:#888;
        }

        /* ── CTA ── */
        .pr-cta{
          border:1px solid #455; border-top:none;
          padding:44px 40px;
          display:flex; align-items:center;
          justify-content:space-between; gap:24px; flex-wrap:wrap;
          opacity:0; transform:translateY(14px);
          transition:opacity .55s ease, transform .55s ease;
        }
        .pr-cta.visible{ opacity:1; transform:translateY(0); }

        .pr-cta-title{
          font-size:18px; font-weight:700;
          color:#ffffff; margin-bottom:5px;
        }
        .pr-cta-sub{ font-size:13px; color:#b0b0b0; line-height:1.6; }

        .pr-cta-btns{ display:flex; gap:10px; flex-wrap:wrap; }

        .pr-cta-btn{
          padding:13px 30px;
          background:${ACCENT}; color:#0b0b0b;
          font-family:'IBM Plex Mono',monospace;
          font-size:11px; font-weight:500;
          letter-spacing:0.12em; text-transform:uppercase;
          border:none; cursor:pointer;
          transition:opacity .2s, transform .2s;
        }
        .pr-cta-btn:hover{ opacity:.85; transform:translateY(-2px); }

        .pr-cta-btn-ghost{
          padding:13px 30px;
          background:transparent; color:#b0b0b0;
          font-family:'IBM Plex Mono',monospace;
          font-size:11px; letter-spacing:0.12em;
          text-transform:uppercase;
          border:1px solid #404040; cursor:pointer;
          transition:color .15s, border-color .15s, transform .2s;
          text-decoration:none; display:inline-block;
        }
        .pr-cta-btn-ghost:hover{ color:${ACCENT}; border-color:#666; transform:translateY(-2px); }

        /* ── KEYFRAMES ── */
        @keyframes pr-up{
          from{ opacity:0; transform:translateY(10px); }
          to{   opacity:1; transform:translateY(0); }
        }
      `}</style>

      <section id="projects" className="pr-root">
        <div className="pr-inner">

          {/* Header */}
          <div className="pr-eyebrow">
            <div className="pr-eyebrow-line" />
            <span className="pr-eyebrow-text">Selected Work</span>
          </div>
          <h2 className="pr-title">Things I've <span>built.</span></h2>
          <p className="pr-subtitle">
            Real-world projects spanning e-commerce, SaaS, social platforms, and management tools — each built end-to-end.
          </p>

          {/* Meta row */}
          <div className="pr-meta-row">
            <div className="pr-count-group">
              <div className="pr-count-item">
                <span className="pr-count-val">{PROJECTS.length}</span>
                <span className="pr-count-lbl">Projects</span>
              </div>
              <div className="pr-count-item">
                <span className="pr-count-val">{ALL_TAGS.length}</span>
                <span className="pr-count-lbl">Technologies</span>
              </div>
              <div className="pr-count-item">
                <span className="pr-count-val">{PROJECTS.filter(p=>p.live).length}</span>
                <span className="pr-count-lbl">Live</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="pr-controls">
            <div className="pr-search-wrap">
              <FiSearch className="pr-search-icon" />
              <input
                className="pr-search"
                placeholder="Search title or tech…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && (
                <button className="pr-clear" onClick={() => setSearch('')}><FiX /></button>
              )}
            </div>
            <div className="pr-filters">
              {ALL_TAGS.map(tag => (
                <button
                  key={tag}
                  className={`pr-filter${activeTag === tag ? ' on' : ''}`}
                  onClick={() => setActiveTag(t => t === tag ? '' : tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="pr-grid">
            {filtered.length > 0
              ? filtered.map((p, i) => <Card key={p.index} p={p} i={i} />)
              : <div className="pr-empty">No projects match — try a different search.</div>
            }
          </div>

          {/* CTA */}
          <div ref={ctaRef} className={`pr-cta${ctaVisible ? ' visible' : ''}`}>
            <div>
              <div className="pr-cta-title">Have a project in mind?</div>
              <div className="pr-cta-sub">Let's discuss scope, stack, and timeline.</div>
            </div>
            <div className="pr-cta-btns">
              <button className="pr-cta-btn" onClick={() => navigate('/contact')}>
                Start a project
              </button>
              <a href="https://github.com/JoelMbithi" target="_blank" rel="noopener noreferrer" className="pr-cta-btn-ghost">
                GitHub Profile
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;