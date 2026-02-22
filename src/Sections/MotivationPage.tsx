import React, { useState } from 'react';
import { CodeXml, Rocket, Layers, Smartphone, Search, Cloud, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ─── DATA ───────────────────────────────────────────── */
const SERVICES = [
  {
    icon: <CodeXml size={20} />,
    index: '01',
    title: 'Web Development',
    desc: 'Responsive, fast, and secure websites built with React, Next.js, and modern frontend tooling — tailored to your brand.',
  },
  {
    icon: <Rocket size={20} />,
    index: '02',
    title: 'Digital Marketing',
    desc: 'Strategic campaigns, analytics, and SEO-driven growth techniques that increase reach and convert visitors into customers.',
  },
  {
    icon: <Layers size={20} />,
    index: '03',
    title: 'SaaS Products',
    desc: 'From idea to launch — scalable SaaS platforms with authentication, subscriptions, and real-time dashboards.',
  },
  {
    icon: <Smartphone size={20} />,
    index: '04',
    title: 'App Development',
    desc: 'Cross-platform mobile apps with smooth user experiences, built with React Native and modern mobile frameworks.',
  },
  {
    icon: <Search size={20} />,
    index: '05',
    title: 'SEO Services',
    desc: 'Improve rankings and visibility with technical SEO audits, keyword analysis, and performance optimisation.',
  },
  {
    icon: <Cloud size={20} />,
    index: '06',
    title: 'Deployment',
    desc: 'Deploy and scale web applications on Vercel, AWS, or Docker with CI/CD pipelines and zero-downtime releases.',
  },
  {
    icon: <Palette size={20} />,
    index: '07',
    title: 'UI / UX Design',
    desc: 'Intuitive, visually considered interfaces focused on usability. I turn ideas into smooth, aesthetic digital experiences.',
  },
];

/* ─── MAIN ───────────────────────────────────────────── */
const Services = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const ACCENT = '#4ade80';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .sv-root {
          font-family: 'Epilogue', sans-serif;
          color: #e5e5e5;
          min-height: 100vh;
          padding: 96px 0 120px;
        }
        .sv-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media(max-width:640px){ .sv-inner { padding: 0 20px; } }

        /* ── HEADER ── */
        .sv-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
        }
        .sv-eyebrow-line { width: 32px; height: 1px; background: ${ACCENT}; }
        .sv-eyebrow-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${ACCENT};
        }
        .sv-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800; line-height: 1;
          letter-spacing: -0.03em; color: #ffffff;
          margin-bottom: 16px;
        }
        .sv-title span { color: ${ACCENT}; }
        .sv-subtitle {
          font-size: 15px; color: #b0b0b0;
          line-height: 1.7; max-width: 500px;
          margin-bottom: 72px;
        }

        /* ── GRID ── */
        .sv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #455;
          border-left: 1px solid #455;
        }
        @media(max-width:860px){ .sv-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:540px){ .sv-grid { grid-template-columns: 1fr; } }

        /* ── CARD ── */
        .sv-card {
          border-right: 1px solid #455;
          border-bottom: 1px solid #455;
          padding: 36px 32px;
          cursor: default;
          transition: background .2s;
          position: relative;
          overflow: hidden;
        }
        .sv-card:hover {background: rgba(10, 25, 35, 0.7);
  backdrop-filter: blur(4px);}
        .sv-card::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          height: 2px; width: 0;
          background: ${ACCENT};
          transition: width .35s ease;
        }
        .sv-card:hover::after { width: 100%; }

        /* index */
        .sv-index {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.14em;
          color: #555; margin-bottom: 28px;
          display: block;
          transition: color .2s;
        }
        .sv-card:hover .sv-index { color: ${ACCENT}; }

        /* icon */
        .sv-icon {
          width: 40px; height: 40px;
          border: 1px solid #404040;
          display: flex; align-items: center; justify-content: center;
          color: #888; margin-bottom: 20px;
          transition: color .2s, border-color .2s;
        }
        .sv-card:hover .sv-icon {
          color: ${ACCENT};
          border-color: #666;
        }

        /* title */
        .sv-card-title {
          font-size: 15px; font-weight: 700;
          color: #e0e0e0; margin-bottom: 12px;
          letter-spacing: -0.01em;
          transition: color .2s;
        }
        .sv-card:hover .sv-card-title { color: #ffffff; }

        /* desc */
        .sv-card-desc {
          font-size: 13px; line-height: 1.75;
          color: #888;
          transition: color .2s;
        }
        .sv-card:hover .sv-card-desc { color: #b0b0b0; }

        /* ── BOTTOM BAR ── */
        .sv-bottom {
          border: 1px solid #455;
          border-top: none;
          padding: 32px 40px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          flex-wrap: wrap;
        }
        .sv-bottom-text {
          font-size: 13px; color: #b0b0b0;
          max-width: 400px; line-height: 1.65;
        }
        .sv-bottom-text strong {
          font-weight: 600; color: #ffffff;
        }
        .sv-cta {
          padding: 12px 28px;
          background: ${ACCENT}; color: #0b0b0b;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          border: none; cursor: pointer; flex-shrink: 0;
          transition: opacity .2s, transform .2s;
          text-decoration: none; display: inline-block;
        }
        .sv-cta:hover { opacity: .85; transform: translateY(-1px); }
      `}</style>

      <section id="services" className="sv-root">
        <div className="sv-inner">

          {/* Header */}
          <div className="sv-eyebrow">
            <div className="sv-eyebrow-line" />
            <span className="sv-eyebrow-text">Services</span>
          </div>
          <h2 className="sv-title">What I <span>offer.</span></h2>
          <p className="sv-subtitle">
            End-to-end web development and digital solutions — from crafting responsive
            interfaces to deploying scalable applications that deliver real impact.
          </p>

          {/* Grid */}
          <div className="sv-grid">
            {SERVICES.map((s) => (
              <div
                key={s.index}
                className="sv-card"
                onMouseEnter={() => setHovered(s.index)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="sv-index">{s.index}</span>
                <div className="sv-icon">{s.icon}</div>
                <div className="sv-card-title">{s.title}</div>
                <p className="sv-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="sv-bottom">
            <p className="sv-bottom-text">
              <strong>Not sure what you need?</strong> Let's talk through your project
              and figure out the right approach together.
            </p>
            <button className="sv-cta" onClick={() => navigate('/contact')}>Start a project</button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;