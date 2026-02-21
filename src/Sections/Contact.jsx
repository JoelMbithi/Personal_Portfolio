import React, { useState, useCallback } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaCheck } from 'react-icons/fa';

/* ─── DATA ───────────────────────────────────────────── */
const CONTACT_INFO = [
  { icon: <FaMapMarkerAlt />, label: 'Location',  value: 'Nairobi, Kenya',          note: 'Available for remote work worldwide' },
  { icon: <FaEnvelope />,     label: 'Email',     value: 'joellembithi@gmail.com',  note: 'Responds within 24 hours' },
  { icon: <FaPhone />,        label: 'Phone',     value: '+254 743 861 565',         note: 'Mon – Fri, 8am – 6pm EAT' },
];

const SOCIALS = [
  { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/joelmbithi' },
  { icon: <FaGithub />,   label: 'GitHub',   url: 'https://github.com/joelmbithi' },
  { icon: <FaTwitter />,  label: 'Twitter',  url: 'https://twitter.com/joelmbithi' },
];

/* ─── FIELD ──────────────────────────────────────────── */
const Field = ({ label, name, type = 'text', textarea = false, value, onChange, required = true }) => (
  <div className="cf-field">
    <label htmlFor={name} className="cf-label">
      {label}{required && <span className="cf-req"> *</span>}
    </label>
    {textarea
      ? <textarea id={name} name={name} rows={5} required={required} value={value} onChange={onChange} placeholder={`Your ${label.toLowerCase()}…`} className="cf-input cf-textarea" />
      : <input id={name} name={name} type={type} required={required} value={value} onChange={onChange} placeholder={`Your ${label.toLowerCase()}…`} className="cf-input" />
    }
  </div>
);

/* ─── MAIN ───────────────────────────────────────────── */
export const Contact = () => {
  const ACCENT = '#4ade80';

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus]     = useState(''); // '' | 'sending' | 'success' | 'error'

  const handleChange = useCallback(e => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));
    try {
      const res = await fetch('https://formspree.io/f/myzjpoyl', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .ct-root {
          font-family: 'Epilogue', sans-serif;
          color: #e5e5e5;
          min-height: 100vh;
          padding: 96px 0 120px;
        }
        .ct-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media(max-width:640px){ .ct-inner { padding: 0 20px; } }

        /* ── HEADER ── */
        .ct-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
        }
        .ct-eyebrow-line { width: 32px; height: 1px; background: ${ACCENT}; }
        .ct-eyebrow-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${ACCENT};
        }
        .ct-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800; line-height: 1;
          letter-spacing: -0.03em; color: #ffffff;
          margin-bottom: 16px;
        }
        .ct-title span { color: ${ACCENT}; }
        .ct-subtitle {
          font-size: 15px; color: #b0b0b0;
          line-height: 1.7; max-width: 460px;
          margin-bottom: 64px;
        }

        /* ── GRID ── */
        .ct-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 0;
          border: 1px solid #455;
        }
        @media(max-width:860px){ .ct-grid { grid-template-columns: 1fr; } }

        /* ── LEFT PANEL ── */
        .ct-left {
          border-right: 1px solid #455;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        @media(max-width:860px){ .ct-left { border-right: none; border-bottom: 1px solid #455; } }

        .ct-info-title {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #666; margin-bottom: 20px;
        }

        /* contact rows */
        .ct-info-row {
          display: flex; gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #2a2a2a;
        }
        .ct-info-row:last-child { border-bottom: none; }
        .ct-info-icon {
          font-size: 13px; color: ${ACCENT};
          margin-top: 2px; flex-shrink: 0;
        }
        .ct-info-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em;
          text-transform: uppercase; color: #888;
          margin-bottom: 4px;
        }
        .ct-info-value {
          font-size: 13px; font-weight: 500;
          color: #ffffff; margin-bottom: 2px;
        }
        .ct-info-note { font-size: 11px; color: #888; }

        /* socials */
        .ct-socials { display: flex; gap: 8px; flex-wrap: wrap; }
        .ct-social-link {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 14px;
          border: 1px solid #404040;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.08em;
          color: #b0b0b0; text-decoration: none;
          transition: color .15s, border-color .15s;
        }
        .ct-social-link:hover { color: ${ACCENT}; border-color: #666; }
        .ct-social-link svg { font-size: 13px; }

        /* status badge */
        .ct-status-badge {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: #b0b0b0;
          font-family: 'IBM Plex Mono', monospace;
          letter-spacing: 0.08em;
        }
        .ct-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${ACCENT};
          box-shadow: 0 0 8px ${ACCENT};
          animation: ct-pulse 2s ease-in-out infinite;
        }
        @keyframes ct-pulse {
          0%,100% { opacity:1; } 50% { opacity:.4; }
        }

        /* ── RIGHT: FORM ── */
        .ct-form-wrap { padding: 40px 48px; }
        @media(max-width:640px){ .ct-form-wrap { padding: 28px 20px; } }

        .cf-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media(max-width:580px){ .cf-grid-2 { grid-template-columns: 1fr; } }

        .cf-field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
        .cf-field:last-of-type { margin-bottom: 0; }

        .cf-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: #b0b0b0;
        }
        .cf-req { color: ${ACCENT}; }

        .cf-input {
          background: transparent;
          border: 1px solid #404040;
          color: #ffffff;
          font-family: 'Epilogue', sans-serif;
          font-size: 14px;
          padding: 12px 16px;
          outline: none;
          transition: border-color .2s;
          width: 100%;
        }
        .cf-input::placeholder { color: #666; }
        .cf-input:focus { border-color: ${ACCENT}; }
        .cf-textarea { resize: vertical; min-height: 120px; }

        .cf-submit {
          margin-top: 28px;
          display: flex; align-items: center; gap: 10px;
          padding: 14px 28px;
          background: ${ACCENT}; color: #0b0b0b;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: opacity .2s, transform .2s;
        }
        .cf-submit:hover:not(:disabled) { opacity: .85; transform: translateY(-1px); }
        .cf-submit:disabled { opacity: .4; cursor: not-allowed; }

        .cf-error {
          margin-top: 16px;
          padding: 12px 16px;
          border: 1px solid #c0392b;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.08em;
          color: #ff6b6b;
          background: rgba(192,57,43,0.1);
        }

        /* ── SUCCESS OVERLAY ── */
        .ct-success-overlay {
          position: fixed; inset: 0;
          background: rgba(11,11,11,0.95);
          display: flex; align-items: center; justify-content: center;
          z-index: 50; padding: 20px;
          animation: ct-fade-in .25s ease;
        }
        @keyframes ct-fade-in { from { opacity:0; } to { opacity:1; } }

        .ct-success-box {
          background: #1a1a1a;
          border: 1px solid #404040;
          padding: 56px 48px;
          max-width: 440px; width: 100%;
          text-align: center;
          animation: ct-slide-up .3s ease;
        }
        @keyframes ct-slide-up {
          from { opacity:0; transform: translateY(16px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .ct-check-wrap {
          width: 48px; height: 48px;
          border: 1px solid ${ACCENT};
          display: flex; align-items: center; justify-content: center;
          color: ${ACCENT}; font-size: 18px;
          margin: 0 auto 28px;
        }
        .ct-success-title {
          font-size: 20px; font-weight: 700;
          color: #ffffff; margin-bottom: 12px;
        }
        .ct-success-body {
          font-size: 13px; color: #b0b0b0;
          line-height: 1.75; margin-bottom: 32px;
        }
        .ct-success-btn {
          padding: 11px 28px;
          background: transparent;
          border: 1px solid #404040;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase; color: #b0b0b0;
          cursor: pointer;
          transition: color .15s, border-color .15s;
        }
        .ct-success-btn:hover { color: ${ACCENT}; border-color: #666; }
      `}</style>

      <section id="contact" className="ct-root">
        <div className="ct-inner">

          {/* Header */}
          <div className="ct-eyebrow">
            <div className="ct-eyebrow-line" />
            <span className="ct-eyebrow-text">Contact</span>
          </div>
          <h2 className="ct-title">Let's <span>talk.</span></h2>
          <p className="ct-subtitle">
            Have a project in mind or want to explore a collaboration? Send a message — I read every one.
          </p>

          {/* Panel */}
          <div className="ct-grid">

            {/* Left */}
            <div className="ct-left">
              <div>
                <div className="ct-info-title">Contact Info</div>
                {CONTACT_INFO.map(c => (
                  <div className="ct-info-row" key={c.label}>
                    <span className="ct-info-icon">{c.icon}</span>
                    <div>
                      <div className="ct-info-label">{c.label}</div>
                      <div className="ct-info-value">{c.value}</div>
                      <div className="ct-info-note">{c.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="ct-info-title">Elsewhere</div>
                <div className="ct-socials">
                  {SOCIALS.map(s => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="ct-social-link">
                      {s.icon}{s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="ct-status-badge">
                <div className="ct-status-dot" />
                Available for new projects
              </div>
            </div>

            {/* Right: Form */}
            <div className="ct-form-wrap">
              <form onSubmit={handleSubmit} noValidate>
                <div className="cf-grid-2">
                  <Field label="Name"    name="name"    value={formData.name}    onChange={handleChange} />
                  <Field label="Email"   name="email"   type="email" value={formData.email}   onChange={handleChange} />
                </div>
                <Field label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                <Field label="Message" name="message" textarea value={formData.message} onChange={handleChange} />

                <button type="submit" disabled={status === 'sending'} className="cf-submit">
                  <FaPaperPlane />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                {status === 'error' && (
                  <div className="cf-error">Something went wrong. Please try again.</div>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Success overlay */}
      {status === 'success' && (
        <div className="ct-success-overlay" onClick={() => setStatus('')}>
          <div className="ct-success-box" onClick={e => e.stopPropagation()}>
            <div className="ct-check-wrap"><FaCheck /></div>
            <div className="ct-success-title">Message sent.</div>
            <p className="ct-success-body">
              Thanks for reaching out. I'll get back to you within 24 hours.
            </p>
            <button className="ct-success-btn" onClick={() => setStatus('')}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;