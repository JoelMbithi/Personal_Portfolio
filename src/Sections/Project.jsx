import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiSearch, FiX, FiArrowUpRight, FiLayers, FiMonitor, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import buildEstateImg  from '../assets/buildEstateImg.jpeg';
import joeGigsImg      from '../assets/joeGigsImg.jpeg';
import quickCartImg    from '../assets/quickCartImg.jpeg';
import Blog            from '../assets/Blog.png';
import Employee        from '../assets/Employee.jpeg';
import posSystemImg    from '../assets/POS.png';
import cityConnectImg  from '../assets/city-connect.jpeg';
import socialSphereImg from '../assets/social-media.jpeg';
import KazilinkImg     from '../assets/kazilink.jpeg';
import AutorentproImg  from '../assets/autorentpro.png';
import ImaraSaccoImg   from '../assets/imara-sacco.jpeg';

import psDesign1 from '../assets/insta Poster.png';
import design2   from '../assets/JoeBusinessCard.png';
import design3   from '../assets/tri fold Brochure.png';
import design4   from '../assets/salon.png';
import design5   from '../assets/WebBanner.png';
import design6   from '../assets/travelposter.png';
import design7 from '../assets/PoliticalPoster1.png';
import design8 from '../assets/ecard.png';
import design9 from '../assets/PoliticalPoster2.png';
import design10 from '../assets/TOPMODEL.png';
import design11 from '../assets/weddingcard.png';
import design12 from '../assets/marchedince.png';
import design13 from '../assets/modelposter.png';

/* ─── WEB PROJECTS ─────────────────────────────────────── */
const PROJECTS = [
  { index:'01', title:'Scribe Blog',   desc:'Clean Django blog platform for writing and managing posts with a minimal editorial interface.',                   tags:['Python','Django','Tailwind'],              live:'',                                        github:'https://github.com/JoelMbithi/scribe-django.git',     image:Blog,           featured:false },
  { index:'02', title:'Joe Website',   desc:'Freelance gig platform with features for managing jobs, clients, and payments end-to-end.',                       tags:['React','MongoDB','Tailwind'],              live:'https://full-stack-dev-jx3r.vercel.app/', github:'https://github.com/JoelMbithi/Joe-Gig-Web',           image:joeGigsImg,     featured:true  },
  { index:'03', title:'Build Estate',  desc:'Full-stack real estate reservation platform with property listings, filters, and booking flow.',                   tags:['React','Node.js','PostgreSQL','Tailwind'], live:'#',                                       github:'https://github.com/JoelMbithi/Build-Estate-Website', image:buildEstateImg,  featured:true  },
  { index:'04', title:'QuickCart',     desc:'Modern responsive e-commerce store with product management and a PostgreSQL backend.',                            tags:['React','Node.js','PostgreSQL'],            live:'https://joe-devhub-xl5x.vercel.app/',     github:'https://github.com/JoelMbithi/QuickCart',             image:quickCartImg,   featured:false },
  { index:'05', title:'Employee Mgr',  desc:'Full-featured Django app for managing employees with CRUD operations and role-based access.',                     tags:['Python','Django','PostgreSQL','Tailwind'], live:'',                                        github:'https://github.com/JoelMbithi/scribe-django',         image:Employee,       featured:false },
  { index:'06', title:'POS System',    desc:'Point-of-sale solution with inventory tracking, sales reports, and customer management.',                         tags:['React','TypeScript','Node.js','Laravel'],  live:'',                                        github:'https://github.com/JoelMbithi/ts-starter-kit',        image:posSystemImg,   featured:false },
  { index:'07', title:'CityConnect',   desc:'County-level networking platform connecting people and local businesses in a single hub.',                        tags:['React','Node.js','PostgreSQL','Tailwind'], live:'',                                        github:'https://github.com/JoelMbithi/ts-starter-kit',        image:cityConnectImg, featured:false },
  { index:'08', title:'SocialSphere',  desc:'Modern social media platform for posting, reacting, and connecting with friends, built with TypeScript.',         tags:['React','TypeScript','Tailwind'],           live:'',                                        github:'https://github.com/JoelMbithi/ts-starter-kit',        image:socialSphereImg,featured:false },
  { index:'09', title:'Kazilink',      desc:'Freelance marketplace connecting Kenyan freelancers with local clients, featuring secure payments and escrow.',    tags:['React','Node.js','Prisma','Tailwind'],    live:'',                                        github:'https://github.com/JoelMbithi/KaziLink_Kenya.git',    image:KazilinkImg,    featured:true  },
  { index:'10', title:'Autorentpro',   desc:'Car rental platform with vehicle listings, booking system, and automated payment processing.',                     tags:['React','Node.js','Prisma','PostgreSQL','Tailwind','TypeScript'], live:'https://auto-rent-pro-car-hire-8qb8.vercel.app/', github:'https://github.com/JoelMbithi/AutoRentPro-CarHire', image:AutorentproImg, featured:true  },
  { index:'11', title:'Imara Sacco',   desc:'Premium financial cooperative platform with member management, loan processing, and secure transactions.',          tags:['React','Node.js','PostgreSQL','Tailwind','TypeScript'], live:'', github:'https://github.com/JoelMbithi/Imara_Sacco', image:ImaraSaccoImg, featured:true },
];

/* ─── PHOTOSHOP PROJECTS ───────────────────────────────── */
const PS_PROJECTS = [
  {
    index: 'D01',
    title: 'Political Campaign Posters',
    desc: 'Two powerful political campaign posters featuring bold typography, patriotic colours, and message-driven designs that command attention and inspire voter engagement.',
    category: 'Print',
    tags: ['Political', 'Poster', 'Campaign', 'Typography', 'Branding'],
    images: [design7, design9],
    count: 2,
  },
  {
    index: 'D02',
    title: 'Model & Fashion Posters',
    desc: 'High-fashion collection including a model competition poster and a professional model portfolio poster with striking imagery and sophisticated typography.',
    category: 'Print',
    tags: ['Fashion', 'Poster', 'Model', 'Typography', 'Portfolio'],
    images: [design10, design13],
    count: 2,
  },
  {
    index: 'D03',
    title: 'Instagram Poster Design',
    desc: 'Bold social media poster designed for maximum scroll-stopping impact — strong type hierarchy, vivid colour, and a layout built for the 1:1 feed format.',
    category: 'Social Media',
    tags: ['Instagram', 'Poster', 'Typography', 'Social'],
    images: [psDesign1],
    count: 1,
  },
  {
    index: 'D04',
    title: 'Business Card — Joe',
    desc: 'Sleek two-sided business card for a freelance professional. Clean grid layout balances whitespace and contact details for instant legibility.',
    category: 'Branding',
    tags: ['Business Card', 'Print', 'Brand', 'Typography'],
    images: [design2],
    count: 1,
  },
  {
    index: 'D05',
    title: 'Tri-Fold Brochure',
    desc: 'Three-panel marketing brochure with structured column layout, consistent iconography, and a professional colour system for print production.',
    category: 'Print',
    tags: ['Brochure', 'Print', 'Layout', 'Corporate'],
    images: [design3],
    count: 1,
  },
  {
    index: 'D06',
    title: 'Salon Promo Design',
    desc: 'Promotional graphic for a beauty and salon brand — warm tones, elegant type, and imagery treatment that conveys luxury and care.',
    category: 'Branding',
    tags: ['Salon', 'Promo', 'Beauty', 'Elegant'],
    images: [design4],
    count: 1,
  },
  {
    index: 'D07',
    title: 'Web Banner Design',
    desc: 'Hero banner designed for digital display — optimised proportions, CTA placement, and contrast ratios tailored for web conversion.',
    category: 'Digital',
    tags: ['Banner', 'Web', 'Digital', 'Marketing'],
    images: [design5],
    count: 1,
  },
  {
    index: 'D08',
    title: 'Travel Poster Collection',
    desc: 'Destination travel poster with cinematic composition, atmospheric colour grading, and expressive typography evoking wanderlust.',
    category: 'Print',
    tags: ['Travel', 'Poster', 'Cinematic', 'Typography'],
    images: [design6],
    count: 1,
  },
  {
    index: 'D09',
    title: 'E-Card Design',
    desc: 'Digital greeting card design with elegant typography, warm colour palette, and thoughtful composition for special occasions.',
    category: 'Digital',
    tags: ['E-Card', 'Greeting', 'Digital', 'Typography'],
    images: [design8],
    count: 1,
  },
  {
    index: 'D10',
    title: 'Wedding Card Design',
    desc: 'Elegant wedding invitation card with refined typography, delicate ornamentation, and a romantic colour scheme for special celebrations.',
    category: 'Branding',
    tags: ['Wedding', 'Card', 'Elegant', 'Typography'],
    images: [design11],
    count: 1,
  },
  {
    index: 'D11',
    title: 'Marching Band Event Poster',
    desc: 'Energetic event poster for a marching band performance with dynamic composition, vibrant colours, and rhythmic typography.',
    category: 'Print',
    tags: ['Music', 'Poster', 'Event', 'Typography'],
    images: [design12],
    count: 1,
  },
];

// Flatten for lightbox navigation
const FLATTENED_PS = PS_PROJECTS.flatMap(p => p.images.map(img => ({
  ...p,
  image: img,
})));

const ALL_TAGS  = [...new Set(PROJECTS.flatMap(p => p.tags))].sort();
const PS_CATS   = ['All', ...new Set(PS_PROJECTS.map(p => p.category))];
const ACCENT    = '#4ade80';
const PS_ACCENT = '#a78bfa';

/* ─── SCROLL REVEAL ─────────────────────────────────────── */
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

/* ─── FULLSCREEN LIGHTBOX ──────────────────────────────────────────── */
const Lightbox = ({ items, startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);
  const item = items[idx];

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape')       onClose();
      if (e.key === 'ArrowRight')   setIdx(i => (i + 1) % items.length);
      if (e.key === 'ArrowLeft')    setIdx(i => (i - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { 
      window.removeEventListener('keydown', handler); 
      document.body.style.overflow = '';
    };
  }, [items.length, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="lb-backdrop" onClick={handleBackdropClick}>
      <div className="lb-shell" onClick={e => e.stopPropagation()}>
        {/* Close button - NOW WITH HIGHEST Z-INDEX */}
        <button className="lb-close" onClick={onClose} aria-label="Close lightbox">
          <FiX size={28}/>
        </button>

        {/* Navigation */}
        <button className="lb-nav lb-prev" onClick={() => setIdx(i => (i - 1 + items.length) % items.length)} aria-label="Previous">
          <FiChevronLeft size={32}/>
        </button>

        {/* Image - FULL SCREEN */}
        <div className="lb-img-frame">
          <img src={item.image} alt={item.title} className="lb-img" />
          <div className="lb-counter">{idx + 1} / {items.length}</div>
        </div>

        <button className="lb-nav lb-next" onClick={() => setIdx(i => (i + 1) % items.length)} aria-label="Next">
          <FiChevronRight size={32}/>
        </button>

        {/* Info overlay at bottom */}
        <div className="lb-info">
          <div className="lb-info-left">
            <span className="lb-info-index">{item.index}</span>
            <div>
              <div className="lb-info-title">{item.title}</div>
              <div className="lb-info-desc">{item.desc}</div>
            </div>
          </div>
          <div className="lb-info-right">
            <span className="lb-info-cat">{item.category}</span>
            <div className="lb-info-tags">
              {item.tags.map(t => <span key={t} className="lb-info-tag">{t}</span>)}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="lb-dots-container">
          {items.map((_, i) => (
            <button 
              key={i} 
              className={`lb-dot${i === idx ? ' on' : ''}`} 
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── WEB CARD ───────────────────────────────────────────── */
const Card = ({ p, i }) => {
  const [hov, setHov]  = useState(false);
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className="pc-card"
      style={{ transitionDelay: visible ? `${i * 65}ms` : '0ms' }}
      data-visible={visible} data-featured={p.featured}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div className="pc-img-wrap">
        <img src={p.image} alt={p.title} className="pc-img" loading="lazy" />
        <div className="pc-scrim" />
        {p.featured && <span className="pc-featured-pill">Featured</span>}
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
        <span className={`pc-badge${hov ? ' show' : ''}`}>{p.index}</span>
      </div>
      <div className="pc-body">
        <div className="pc-title-row">
          <h3 className="pc-title">{p.title}</h3>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className={`pc-arrow${hov ? ' show' : ''}`}>
            <FiArrowUpRight size={16}/>
          </a>
        </div>
        <p className="pc-desc">{p.desc}</p>
        <div className="pc-tags">{p.tags.map(t => <span key={t} className="pc-tag">{t}</span>)}</div>
      </div>
      <div className={`pc-sweep${hov ? ' on' : ''}`} />
    </div>
  );
};

/* ─── DESIGN CARD ────────────────────────────────────────── */
const DesignCard = ({ p, i, onOpen, startIndex }) => {
  const [hov, setHov]  = useState(false);
  const [ref, visible] = useReveal(0.08);
  const hasMultiple = p.images.length > 1;

  return (
    <div ref={ref} className="ds-card"
      style={{ '--delay': `${i * 80}ms` }}
      data-visible={visible}
      onMouseEnter={() => setHov(true)} 
      onMouseLeave={() => setHov(false)}
    >
      <div className="ds-img-wrap">
        <img src={p.images[0]} alt={p.title} className="ds-img" loading="lazy" />
        
        {hasMultiple && (
          <div className="ds-multi-indicator">
            <span>+{p.images.length - 1} more</span>
          </div>
        )}
        
        <div className="ds-vignette" />
        <span className="ds-cat-pill">{p.category}</span>
        <span className="ds-watermark">{p.index}</span>
        <div className={`ds-overlay${hov ? ' show' : ''}`}>
          <button className="ds-zoom-btn" onClick={() => onOpen(startIndex)}>
            <FiZoomIn size={18}/>
            <span>View {hasMultiple ? `${p.images.length} Designs` : 'Full'}</span>
          </button>
        </div>
        <div className={`ds-bar${hov ? ' on' : ''}`} />
      </div>

      <div className="ds-body">
        <div className="ds-title-row">
          <h3 className="ds-title">{p.title}</h3>
          <button className="ds-expand-btn" onClick={() => onOpen(startIndex)} aria-label="View full design">
            <FiZoomIn size={14}/>
          </button>
        </div>
        <p className="ds-desc">{p.desc}</p>
        <div className="ds-tags">{p.tags.map(t => <span key={t} className="ds-tag">{t}</span>)}</div>
        {hasMultiple && (
          <div className="ds-count-badge">{p.images.length} designs</div>
        )}
      </div>
    </div>
  );
};

/* ─── MAIN ───────────────────────────────────────────────── */
export const Projects = () => {
  const navigate = useNavigate();
  const [tab,       setTab]       = useState('web');
  const [search,    setSearch]    = useState('');
  const [activeTag, setActiveTag] = useState('');
  const [psCat,     setPsCat]     = useState('All');
  const [lightbox,  setLightbox]  = useState(null);
  const [ctaRef, ctaVisible]      = useReveal();

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  useEffect(() => { setSearch(''); setActiveTag(''); setPsCat('All'); }, [tab]);

  const filteredWeb = PROJECTS.filter(p => {
    const ms = !search    || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const mt = !activeTag || p.tags.includes(activeTag);
    return ms && mt;
  });
  
  const filteredPs = PS_PROJECTS.filter(p => psCat === 'All' || p.category === psCat);
  
  const flattenedItems = filteredPs.flatMap(p => p.images.map(img => ({
    ...p,
    image: img,
  })));

  let startIdx = 0;
  const startIndices = {};
  filteredPs.forEach((p, i) => {
    startIndices[i] = startIdx;
    startIdx += p.images.length;
  });

  const handleOpenLightbox = (cardIndex) => {
    const start = startIndices[cardIndex] || 0;
    setLightbox(start);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .pr-root{ font-family:'Epilogue',sans-serif; color:#e5e5e5; min-height:100vh; padding:120px 40px 140px; }
        @media(max-width:640px){ .pr-root{ padding:100px 20px 100px; } }
        .pr-inner{ max-width:1100px; margin:0 auto; }

        .pr-eyebrow{ display:flex; align-items:center; gap:12px; margin-bottom:22px; animation:pr-up .6s ease both; }
        .pr-eyebrow-line{ height:1px; background:${ACCENT}; width:0; animation:pr-line .9s .25s ease forwards; }
        @keyframes pr-line{ to{ width:32px; } }
        .pr-eyebrow-text{ font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:${ACCENT}; }
        .pr-title{ font-size:clamp(38px,5.5vw,72px); font-weight:800; line-height:.95; letter-spacing:-0.04em; color:#fff; margin-bottom:18px; animation:pr-up .7s .1s ease both; }
        .pr-title span{ color:${ACCENT}; }
        .pr-subtitle{ font-size:15px; color:#b0b0b0; line-height:1.75; max-width:460px; margin-bottom:0; border-left:2px solid #404040; padding-left:18px; animation:pr-up .7s .2s ease both; }

        .pr-meta-row{ display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; margin:40px 0 0; padding:20px 0; border-top:1px solid #455; border-bottom:1px solid #455; animation:pr-up .6s .28s ease both; }
        .pr-count-group{ display:flex; gap:32px; }
        .pr-count-val{ font-size:26px; font-weight:800; color:#fff; letter-spacing:-0.03em; line-height:1; display:block; }
        .pr-count-lbl{ font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:0.16em; text-transform:uppercase; color:#888; margin-top:3px; display:block; }

        .pr-tab-bar{ display:flex; align-items:stretch; border:1px solid #455; border-top:none; margin-bottom:40px; animation:pr-up .6s .3s ease both; overflow:hidden; }
        .pr-tab{ flex:1; display:flex; align-items:center; justify-content:center; gap:10px; padding:18px 24px; background:transparent; border:none; cursor:pointer; font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#888; transition:color .2s, background .2s; position:relative; }
        .pr-tab + .pr-tab{ border-left:1px solid #455; }
        .pr-tab:hover{ color:#ccc; background:#161616; }
        .pr-tab.active-web{ color:${ACCENT}; background:#0d1f0d; }
        .pr-tab.active-design{ color:${PS_ACCENT}; background:#150d2e; }
        .pr-tab-underline{ position:absolute; bottom:0; left:0; right:0; height:2px; transform:scaleX(0); transform-origin:left; transition:transform .3s ease; }
        .pr-tab.active-web .pr-tab-underline{ background:${ACCENT}; transform:scaleX(1); }
        .pr-tab.active-design .pr-tab-underline{ background:${PS_ACCENT}; transform:scaleX(1); }
        .pr-tab-count{ font-size:9px; padding:2px 7px; border-radius:20px; }
        .pr-tab.active-web .pr-tab-count{ background:${ACCENT}22; color:${ACCENT}; }
        .pr-tab.active-design .pr-tab-count{ background:${PS_ACCENT}22; color:${PS_ACCENT}; }
        .pr-tab:not(.active-web):not(.active-design) .pr-tab-count{ background:#2a2a2a; color:#888; }

        .pr-controls{ display:flex; flex-wrap:wrap; align-items:flex-start; gap:12px; margin-bottom:40px; }
        .pr-search-wrap{ position:relative; min-width:220px; max-width:320px; flex:1; }
        .pr-search-icon{ position:absolute; left:14px; top:50%; transform:translateY(-50%); color:#888; font-size:13px; pointer-events:none; transition:color .2s; }
        .pr-search-wrap:focus-within .pr-search-icon{ color:${ACCENT}; }
        .pr-search{ width:100%; padding:11px 36px 11px 40px; background:#1a1a1a; border:1px solid #404040; color:#e5e5e5; font-family:'Epilogue',sans-serif; font-size:13px; outline:none; transition:border-color .25s; border-radius:0; }
        .pr-search::placeholder{ color:#666; }
        .pr-search:focus{ border-color:${ACCENT}; }
        .pr-clear{ position:absolute; right:12px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#888; font-size:12px; transition:color .2s; padding:0; display:flex; align-items:center; justify-content:center; }
        .pr-clear:hover{ color:${ACCENT}; }
        .pr-filters{ display:flex; flex-wrap:wrap; gap:6px; }
        .pr-filter{ font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; padding:7px 13px; border:1px solid #455; background:transparent; color:#888; cursor:pointer; transition:color .15s, border-color .15s, background .15s, transform .15s; border-radius:0; }
        .pr-filter:hover{ color:#fff; border-color:#666; transform:translateY(-1px); }
        .pr-filter.on{ color:#0b0b0b; background:${ACCENT}; border-color:${ACCENT}; transform:translateY(-1px); }

        .ps-filter-row{ display:flex; gap:6px; flex-wrap:wrap; margin-bottom:32px; }
        .ps-cat-btn{ font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; padding:7px 16px; border:1px solid #455; background:transparent; color:#888; cursor:pointer; transition:color .15s, border-color .15s, background .15s, transform .15s; border-radius:0; }
        .ps-cat-btn:hover{ color:#fff; border-color:#666; transform:translateY(-1px); }
        .ps-cat-btn.ps-on{ color:#0b0b0b; background:${PS_ACCENT}; border-color:${PS_ACCENT}; transform:translateY(-1px); }

        .pr-grid{ display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid #455; border-left:1px solid #455; }
        @media(max-width:960px){ .pr-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:560px){ .pr-grid{ grid-template-columns:1fr; } }

        .pc-card{ border-right:1px solid #455; border-bottom:1px solid #455; display:flex; flex-direction:column; position:relative; overflow:hidden; opacity:0; transform:translateY(18px); transition:opacity .5s ease, transform .5s ease, background .2s; background:#111; }
        .pc-card[data-visible="true"]{ opacity:1; transform:translateY(0); }
        .pc-card:hover{ background:#1a1a1a; }
        .pc-img-wrap{ position:relative; height:190px; overflow:hidden; flex-shrink:0; background:#0a0a0a; }
        .pc-img{ width:100%; height:100%; object-fit:cover; transition:transform .55s ease; }
        .pc-card:hover .pc-img{ transform:scale(1.07); }
        .pc-scrim{ position:absolute; inset:0; background:linear-gradient(to top,rgba(10,25,35,0.5) 0%,transparent 70%); pointer-events:none; }
        .pc-featured-pill{ position:absolute; top:12px; left:12px; font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:0.14em; text-transform:uppercase; padding:4px 10px; background:${ACCENT}; color:#0b0b0b; font-weight:500; z-index:2; }
        .pc-overlay{ position:absolute; inset:0; background:rgba(10,25,35,0.7); backdrop-filter:blur(3px); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity .3s ease; z-index:3; }
        .pc-overlay.show{ opacity:1; }
        .pc-overlay-links{ display:flex; gap:10px; }
        .pc-ol{ display:inline-flex; align-items:center; gap:6px; padding:9px 16px; border:1px solid #404040; background:#1a1a1a; color:#b0b0b0; text-decoration:none; font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; opacity:0; transform:translateY(10px); transition:color .2s, border-color .2s, opacity .3s ease, transform .3s ease; }
        .pc-overlay.show .pc-ol{ opacity:1; transform:translateY(0); }
        .pc-overlay.show .pc-ol:nth-child(1){ transition-delay:.04s; }
        .pc-overlay.show .pc-ol:nth-child(2){ transition-delay:.10s; }
        .pc-ol:hover{ color:${ACCENT}; border-color:#666; }
        .pc-badge{ position:absolute; bottom:10px; left:12px; font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.1em; color:${ACCENT}; opacity:0; transform:translateY(6px); transition:opacity .25s ease, transform .25s ease; z-index:2; }
        .pc-badge.show{ opacity:1; transform:translateY(0); }
        .pc-body{ padding:24px 24px 28px; flex:1; display:flex; flex-direction:column; border-top:1px solid #2a2a2a; }
        .pc-title-row{ display:flex; align-items:flex-start; justify-content:space-between; gap:8px; margin-bottom:10px; }
        .pc-title{ font-size:16px; font-weight:700; color:#e0e0e0; letter-spacing:-0.01em; transition:color .25s; flex:1; }
        .pc-card:hover .pc-title{ color:#fff; }
        .pc-arrow{ color:#666; flex-shrink:0; margin-top:2px; text-decoration:none; opacity:0; transform:translate(-4px,4px); transition:color .2s, opacity .25s ease, transform .25s ease; }
        .pc-arrow.show{ opacity:1; transform:translate(0,0); }
        .pc-arrow:hover{ color:${ACCENT}; }
        .pc-desc{ font-size:12.5px; line-height:1.8; color:#888; margin-bottom:20px; flex:1; transition:color .25s; }
        .pc-card:hover .pc-desc{ color:#b0b0b0; }
        .pc-tags{ display:flex; flex-wrap:wrap; gap:6px; }
        .pc-tag{ font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:0.1em; text-transform:uppercase; padding:4px 10px; border:1px solid #555; color:#c8b89a; transition:color .2s, border-color .2s; }
        .pc-card:hover .pc-tag{ color:#b0b0b0; border-color:#666; }
        .pc-sweep{ position:absolute; bottom:0; left:0; height:2px; width:0; background:${ACCENT}; transition:width .35s ease; }
        .pc-sweep.on{ width:100%; }

        /* ─── DESIGN SECTION ─── */
        .ds-section-header{ margin-bottom:28px; display:flex; align-items:flex-end; justify-content:space-between; flex-wrap:wrap; gap:12px; }
        .ds-section-title{ font-size:22px; font-weight:800; color:#fff; letter-spacing:-0.03em; }
        .ds-section-title span{ color:${PS_ACCENT}; }
        .ds-section-sub{ font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:#555; margin-top:6px; }

        .ds-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media(max-width:960px){ .ds-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:560px){ .ds-grid{ grid-template-columns:1fr; } }

        .ds-card{ position:relative; overflow:hidden; display:flex; flex-direction:column; background:#111; opacity:0; transform:translateY(22px) scale(0.97); transition: opacity .55s ease var(--delay,0ms), transform .55s ease var(--delay,0ms), box-shadow .3s ease, border-color .3s ease; cursor:pointer; border:1px solid transparent; }
        .ds-card[data-visible="true"]{ opacity:1; transform:translateY(0) scale(1); }
        .ds-card:hover{ border-color:${PS_ACCENT}44; box-shadow: 0 8px 32px rgba(167, 139, 250, 0.15); }

        .ds-img-wrap{ position:relative; height:320px; overflow:hidden; flex-shrink:0; background:#0a0a0a; display:flex; align-items:center; justify-content:center; }
        .ds-img{ width:100%; height:100%; object-fit:contain; transition:transform .65s cubic-bezier(.25,.46,.45,.94); display:block; background:#0a0a0a; }
        .ds-card:hover .ds-img{ transform:scale(1.02); }

        .ds-multi-indicator{ position:absolute; bottom:16px; right:16px; z-index:4; background:rgba(167, 139, 250, 0.9); color:#0b0b0b; font-family:'IBM Plex Mono',monospace; font-size:9px; padding:4px 12px; font-weight:700; letter-spacing:0.1em; }

        .ds-vignette{ position:absolute; inset:0; pointer-events:none; background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%), linear-gradient(to bottom,rgba(0,0,0,0.15) 0%, transparent 30%); }

        .ds-cat-pill{ position:absolute; top:14px; right:14px; font-family:'IBM Plex Mono',monospace; font-size:8px; letter-spacing:0.16em; text-transform:uppercase; padding:4px 12px; background:${PS_ACCENT}; color:#0b0b0b; font-weight:700; z-index:4; box-shadow: 0 2px 12px rgba(167, 139, 250, 0.3); }

        .ds-watermark{ position:absolute; bottom:12px; left:14px; font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.1em; color:rgba(255,255,255,0.3); z-index:3; transition:color .25s; background:rgba(0,0,0,0.3); padding:2px 10px; }
        .ds-card:hover .ds-watermark{ color:${PS_ACCENT}; }

        .ds-overlay{ position:absolute; inset:0; z-index:5; background:rgba(15,8,35,0.8); backdrop-filter:blur(5px); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity .35s ease; }
        .ds-overlay.show{ opacity:1; }

        .ds-zoom-btn{ display:inline-flex; align-items:center; gap:10px; padding:14px 28px; background:rgba(167, 139, 250, 0.15); border:1.5px solid ${PS_ACCENT}; color:${PS_ACCENT}; font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer; opacity:0; transform:translateY(10px) scale(0.95); transition:opacity .35s .08s ease, transform .35s .08s ease, background .25s, color .25s; border-radius:0; }
        .ds-overlay.show .ds-zoom-btn{ opacity:1; transform:translateY(0) scale(1); }
        .ds-zoom-btn:hover{ background:${PS_ACCENT}; color:#0b0b0b; }

        .ds-bar{ position:absolute; bottom:0; left:0; right:0; height:3px; background:${PS_ACCENT}; transform:scaleX(0); transform-origin:left; transition:transform .4s ease; z-index:6; }
        .ds-bar.on{ transform:scaleX(1); }

        .ds-body{ padding:20px 22px 24px; flex:1; display:flex; flex-direction:column; border-top:1px solid #1e1e1e; background:#111; transition:background .25s; }
        .ds-card:hover .ds-body{ background:#161616; }

        .ds-title-row{ display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:8px; }
        .ds-title{ font-size:15px; font-weight:700; color:#ddd; letter-spacing:-0.01em; transition:color .25s; }
        .ds-card:hover .ds-title{ color:#fff; }

        .ds-expand-btn{ background:none; border:none; cursor:pointer; color:#555; transition:color .25s, transform .25s; padding:4px; line-height:1; flex-shrink:0; }
        .ds-expand-btn:hover{ transform:scale(1.1); }
        .ds-card:hover .ds-expand-btn{ color:${PS_ACCENT}; }

        .ds-desc{ font-size:12px; line-height:1.8; color:#666; margin-bottom:14px; flex:1; transition:color .25s; }
        .ds-card:hover .ds-desc{ color:#999; }

        .ds-tags{ display:flex; flex-wrap:wrap; gap:5px; }
        .ds-tag{ font-family:'IBM Plex Mono',monospace; font-size:8px; letter-spacing:0.1em; text-transform:uppercase; padding:3px 10px; border:1px solid ${PS_ACCENT}28; color:${PS_ACCENT}88; transition:color .2s, border-color .2s, background .2s; }
        .ds-card:hover .ds-tag{ color:${PS_ACCENT}; border-color:${PS_ACCENT}55; background:${PS_ACCENT}0a; }

        .ds-count-badge{ margin-top:10px; font-family:'IBM Plex Mono',monospace; font-size:8px; letter-spacing:0.1em; text-transform:uppercase; color:${PS_ACCENT}; border-top:1px solid #2a2a2a; padding-top:10px; }

        /* ═══ FULLSCREEN LIGHTBOX ═══ */
        .lb-backdrop{ 
          position:fixed; 
          inset:0; 
          z-index:99999; 
          background:rgba(0,0,0,0.98); 
          backdrop-filter:blur(8px); 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          animation:lb-in .25s ease; 
        }
        @keyframes lb-in{ from{ opacity:0; } to{ opacity:1; } }

        .lb-shell{ 
          position:relative; 
          width:100vw; 
          height:100vh; 
          display:flex; 
          flex-direction:column; 
          align-items:center; 
          justify-content:center; 
          padding:80px; 
        }
        @media(max-width:768px){ .lb-shell{ padding:60px 20px; } }

        /* CLOSE BUTTON - HIGHEST Z-INDEX TO BE ABOVE EVERYTHING */
        .lb-close{ 
          position:fixed !important; 
          top:24px !important; 
          right:32px !important; 
          background:rgba(0,0,0,0.85) !important; 
          border:2px solid rgba(255,255,255,0.25) !important; 
          color:#fff !important; 
          width:56px !important; 
          height:56px !important; 
          cursor:pointer !important; 
          display:flex !important; 
          align-items:center !important; 
          justify-content:center !important; 
          transition:all .3s ease !important; 
          z-index:999999 !important; 
          border-radius:50% !important;
          backdrop-filter:blur(12px) !important;
          box-shadow: 0 4px 30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05) !important;
          font-size:26px !important;
          padding:0 !important;
        }
        .lb-close:hover{ 
          background:rgba(167, 139, 250, 0.25) !important; 
          border-color:${PS_ACCENT} !important; 
          transform:rotate(90deg) scale(1.08) !important;
          box-shadow: 0 4px 40px rgba(167, 139, 250, 0.4), 0 0 0 1px ${PS_ACCENT} !important;
        }

        .lb-img-frame { width:100%; height:100%; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
        .lb-img{ max-width:100%; max-height:100%; object-fit:contain; display:block; animation:lb-img-in .4s ease; }
        @keyframes lb-img-in{ from{ transform:scale(0.95); opacity:0; } to{ transform:scale(1); opacity:1; } }

        .lb-counter{ position:absolute; bottom:100px; right:32px; font-family:'IBM Plex Mono',monospace; font-size:13px; color:rgba(255,255,255,0.3); background:rgba(0,0,0,0.5); padding:6px 16px; letter-spacing:0.1em; }

        .lb-nav{ position:absolute; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.15); color:#aaa; width:56px; height:56px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .25s; z-index:10; border-radius:50%; backdrop-filter:blur(4px); }
        .lb-nav:hover{ color:#fff; border-color:${PS_ACCENT}; background:rgba(0,0,0,0.8); transform:translateY(-50%) scale(1.05); }
        .lb-prev{ left:24px; }
        .lb-next{ right:24px; }
        @media(max-width:768px){ .lb-nav{ width:44px; height:44px; } .lb-prev{ left:12px; } .lb-next{ right:12px; } }

        /* Info overlay at bottom */
        .lb-info{ position:absolute; bottom:0; left:0; right:0; padding:24px 40px 80px; background:linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%); display:flex; align-items:flex-end; justify-content:space-between; gap:20px; flex-wrap:wrap; z-index:5; }
        @media(max-width:768px){ .lb-info{ padding:20px 24px 60px; } }

        .lb-info-left{ display:flex; align-items:flex-start; gap:16px; }
        .lb-info-index{ font-family:'IBM Plex Mono',monospace; font-size:14px; color:${PS_ACCENT}; letter-spacing:0.1em; margin-top:2px; flex-shrink:0; }
        .lb-info-title{ font-size:18px; font-weight:700; color:#fff; margin-bottom:4px; letter-spacing:-0.01em; }
        .lb-info-desc{ font-size:13px; color:#999; line-height:1.6; max-width:500px; }

        .lb-info-right{ display:flex; flex-direction:column; align-items:flex-end; gap:8px; flex-shrink:0; }
        .lb-info-cat{ font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:0.16em; text-transform:uppercase; padding:4px 14px; background:${PS_ACCENT}; color:#0b0b0b; font-weight:700; }
        .lb-info-tags{ display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end; }
        .lb-info-tag{ font-family:'IBM Plex Mono',monospace; font-size:8px; letter-spacing:0.1em; text-transform:uppercase; padding:3px 10px; border:1px solid ${PS_ACCENT}44; color:${PS_ACCENT}88; }

        /* Dots */
        .lb-dots-container{ position:absolute; bottom:32px; left:50%; transform:translateX(-50%); display:flex; gap:10px; align-items:center; z-index:15; }
        .lb-dot{ width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,0.2); border:none; cursor:pointer; padding:0; transition:all .25s; }
        .lb-dot:hover{ background:rgba(255,255,255,0.4); transform:scale(1.2); }
        .lb-dot.on{ background:${PS_ACCENT}; transform:scale(1.3); box-shadow: 0 0 16px rgba(167, 139, 250, 0.4); }

        .pr-empty{ grid-column:1/-1; padding:60px; text-align:center; font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#555; border:1px solid #2a2a2a; background:#111; }

        .pr-cta{ border:1px solid #455; border-top:none; padding:44px 40px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; opacity:0; transform:translateY(14px); transition:opacity .55s ease, transform .55s ease; margin-top:3px; background:#111; }
        .pr-cta.visible{ opacity:1; transform:translateY(0); }
        .pr-cta-title{ font-size:18px; font-weight:700; color:#fff; margin-bottom:5px; }
        .pr-cta-sub{ font-size:13px; color:#b0b0b0; line-height:1.6; }
        .pr-cta-btns{ display:flex; gap:10px; flex-wrap:wrap; }
        .pr-cta-btn{ padding:13px 30px; background:${ACCENT}; color:#0b0b0b; font-family:'IBM Plex Mono',monospace; font-size:11px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; border:none; cursor:pointer; transition:opacity .2s, transform .2s; border-radius:0; }
        .pr-cta-btn:hover{ opacity:.85; transform:translateY(-2px); }
        .pr-cta-btn-ghost{ padding:13px 30px; background:transparent; color:#b0b0b0; font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; border:1px solid #404040; cursor:pointer; transition:color .15s, border-color .15s, transform .2s; text-decoration:none; display:inline-block; border-radius:0; }
        .pr-cta-btn-ghost:hover{ color:${ACCENT}; border-color:#666; transform:translateY(-2px); }

        @keyframes pr-up{ from{ opacity:0; transform:translateY(10px); } to{ opacity:1; transform:translateY(0); } }
      `}</style>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <Lightbox
          items={flattenedItems}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}

      <section id="projects" className="pr-root">
        <div className="pr-inner">

          {/* Header */}
          <div className="pr-eyebrow">
            <div className="pr-eyebrow-line" />
            <span className="pr-eyebrow-text">Selected Work</span>
          </div>
          <h2 className="pr-title">Things I've <span>built.</span></h2>
          <p className="pr-subtitle">
            Real-world projects spanning e-commerce, SaaS, social platforms, management tools, and visual design — built end-to-end.
          </p>

          {/* Meta */}
          <div className="pr-meta-row">
            <div className="pr-count-group">
              <div className="pr-count-item">
                <span className="pr-count-val">{PROJECTS.length}</span>
                <span className="pr-count-lbl">Web Projects</span>
              </div>
              <div className="pr-count-item">
                <span className="pr-count-val">{PS_PROJECTS.length}</span>
                <span className="pr-count-lbl">Design Collections</span>
              </div>
              <div className="pr-count-item">
                <span className="pr-count-val">{PROJECTS.filter(p=>p.live).length}</span>
                <span className="pr-count-lbl">Live Sites</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="pr-tab-bar">
            <button className={`pr-tab${tab === 'web' ? ' active-web' : ''}`} onClick={() => setTab('web')}>
              <FiMonitor size={14} />
              Web Development
              <span className="pr-tab-count">{PROJECTS.length}</span>
              <span className="pr-tab-underline" />
            </button>
            <button className={`pr-tab${tab === 'design' ? ' active-design' : ''}`} onClick={() => setTab('design')}>
              <FiLayers size={14} />
              Photoshop / Design
              <span className="pr-tab-count">{PS_PROJECTS.length}</span>
              <span className="pr-tab-underline" />
            </button>
          </div>

          {/* ── WEB ── */}
          {tab === 'web' && (
            <>
              <div className="pr-controls">
                <div className="pr-search-wrap">
                  <FiSearch className="pr-search-icon" />
                  <input className="pr-search" placeholder="Search title or tech…" value={search} onChange={e => setSearch(e.target.value)} />
                  {search && <button className="pr-clear" onClick={() => setSearch('')}><FiX /></button>}
                </div>
                <div className="pr-filters">
                  {ALL_TAGS.map(tag => (
                    <button key={tag} className={`pr-filter${activeTag === tag ? ' on' : ''}`} onClick={() => setActiveTag(t => t === tag ? '' : tag)}>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pr-grid">
                {filteredWeb.length > 0
                  ? filteredWeb.map((p, i) => <Card key={p.index} p={p} i={i} />)
                  : <div className="pr-empty">No projects match — try a different search.</div>}
              </div>
            </>
          )}

          {/* ── DESIGN ── */}
          {tab === 'design' && (
            <>
              <div className="ds-section-header">
                <div>
                  <div className="ds-section-title">Photoshop &amp; <span>Design Work</span></div>
                  <div className="ds-section-sub">Branding · Print · Social Media · Digital</div>
                </div>
                <div style={{ fontSize: '12px', color: '#555', fontFamily: "'IBM Plex Mono', monospace" }}>
                  {filteredPs.length} collections · {flattenedItems.length} designs
                </div>
              </div>

              <div className="ps-filter-row">
                {PS_CATS.map(cat => (
                  <button key={cat} className={`ps-cat-btn${psCat === cat ? ' ps-on' : ''}`} onClick={() => setPsCat(cat)}>
                    {cat}
                  </button>
                ))}
              </div>

              <div className="ds-grid">
                {filteredPs.length > 0
                  ? filteredPs.map((p, i) => (
                      <DesignCard 
                        key={p.index} 
                        p={p} 
                        i={i} 
                        onOpen={handleOpenLightbox}
                        startIndex={startIndices[i]}
                      />
                    ))
                  : <div className="pr-empty">No designs in this category.</div>}
              </div>
            </>
          )}

          {/* CTA */}
          <div ref={ctaRef} className={`pr-cta${ctaVisible ? ' visible' : ''}`}>
            <div>
              <div className="pr-cta-title">Have a project in mind?</div>
              <div className="pr-cta-sub">Let's discuss scope, stack, and timeline.</div>
            </div>
            <div className="pr-cta-btns">
              <button className="pr-cta-btn" onClick={() => navigate('/contact')}>Start a project</button>
              <a href="https://github.com/JoelMbithi" target="_blank" rel="noopener noreferrer" className="pr-cta-btn-ghost">GitHub Profile</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;