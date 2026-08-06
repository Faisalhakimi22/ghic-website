import './_group.css';
import { useState, useEffect } from 'react';
import { ArrowRight, Github, CheckCircle2, Tag, AlertCircle, BarChart3, Zap, Shield, Clock, GitPullRequest } from 'lucide-react';

const metrics = [
  { value: '96.2%', label: 'AI Accuracy', icon: BarChart3, accent: '#3b82f6', delay: '0.9s' },
  { value: '2.3m',  label: 'Avg Triage',  icon: Clock,    accent: '#10b981', delay: '1.0s' },
  { value: '↓ 18%', label: 'Duplicates',  icon: Shield,   accent: '#8b5cf6', delay: '1.1s' },
];

const issueLabels = [
  { text: 'bug',          bg: 'rgba(239,68,68,0.12)',   fg: '#ef4444', border: 'rgba(239,68,68,0.25)' },
  { text: 'authentication', bg: 'rgba(59,130,246,0.12)', fg: '#60a5fa', border: 'rgba(59,130,246,0.25)' },
  { text: 'P1 · Critical', bg: 'rgba(245,158,11,0.12)', fg: '#f59e0b', border: 'rgba(245,158,11,0.25)' },
];

const avatars = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Bex',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Cal',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Dani',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Eve',
];

function IssueCard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="animate-card-drift"
      style={{
        background: 'rgba(13,15,20,0.85)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '14px',
        padding: '22px 24px',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
        width: '100%',
        maxWidth: '420px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginLeft: '4px', fontFamily: 'IBM Plex Mono, monospace' }}>
          github.com / acme / backend
        </span>
        {step >= 1 && (
          <div style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '10px',
            color: '#3b82f6',
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: '20px',
            padding: '3px 10px',
            fontWeight: 600,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6', animation: 'pulse 1.5s ease-in-out infinite' }} />
            GHIC Active
          </div>
        )}
      </div>

      {/* Issue title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <GitPullRequest size={16} style={{ color: '#3b82f6', flexShrink: 0 }} />
        <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.92)', lineHeight: 1.3 }}>
          API returns 500 on token refresh
        </span>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginLeft: 'auto', flexShrink: 0 }}>#1247</span>
      </div>

      {/* Body snippet */}
      <div style={{
        fontSize: '12px',
        color: 'rgba(255,255,255,0.45)',
        fontFamily: 'IBM Plex Mono, monospace',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '8px',
        padding: '10px 12px',
        marginBottom: '16px',
        lineHeight: 1.6,
      }}>
        <span style={{ color: '#60a5fa' }}>Redis race condition</span> on session store<br/>
        intermittently causing 500 during token refresh.<br/>
        Affects ~30% of requests under load.
      </div>

      {/* AI labels row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', minHeight: '26px' }}>
        {issueLabels.map((lbl, i) => (
          step >= i + 1 ? (
            <span
              key={lbl.text}
              className="animate-label-pop"
              style={{
                animationDelay: `${i * 0.15}s`,
                fontSize: '11px',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: '20px',
                background: lbl.bg,
                color: lbl.fg,
                border: `1px solid ${lbl.border}`,
                letterSpacing: '0.01em',
              }}
            >
              {lbl.text}
            </span>
          ) : null
        ))}
      </div>

      {/* AI reasoning footer */}
      {step >= 3 && (
        <div style={{
          marginTop: '14px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <Zap size={12} style={{ color: '#3b82f6' }} />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontFamily: 'IBM Plex Mono, monospace' }}>
            Classified in <span style={{ color: '#10b981' }}>0.4s</span> · Confidence <span style={{ color: '#3b82f6' }}>96%</span>
          </span>
          <CheckCircle2 size={12} style={{ color: '#10b981', marginLeft: 'auto' }} />
        </div>
      )}
    </div>
  );
}

function MetricPill({ value, label, icon: Icon, accent, delay }: typeof metrics[0]) {
  return (
    <div
      className="animate-float-up"
      style={{
        animationDelay: delay,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: '12px 16px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '8px',
        background: `${accent}18`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={15} style={{ color: accent }} />
      </div>
      <div>
        <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          {value}
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '1px', letterSpacing: '0.02em' }}>
          {label}
        </div>
      </div>
    </div>
  );
}

export function Premium() {
  return (
    <div
      className="hero-root"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
    >
      {/* ── Background layers ── */}

      {/* Dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Blue aurora orb */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-100px',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      {/* Purple accent orb */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Narrow top gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 40%, rgba(139,92,246,0.4) 60%, transparent 100%)',
        zIndex: 1,
      }} />

      {/* ── Navbar ── */}
      <nav style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(59,130,246,0.4)',
          }}>
            <Zap size={16} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: '17px', letterSpacing: '-0.03em', color: '#fff' }}>GHIC</span>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['Features', 'Demo', 'Pricing', 'Docs'].map(link => (
            <a key={link} href="#" style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.55)',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#" style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            fontWeight: 500,
          }}>Sign in</a>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 18px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(59,130,246,0.3)',
            fontFamily: 'Inter, sans-serif',
          }}>
            <Github size={14} />
            Get started free
          </button>
        </div>
      </nav>

      {/* ── Hero Body ── */}
      <main style={{
        flex: 1,
        position: 'relative',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '80px 48px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
      }}>

        {/* Badge */}
        <div
          className="badge-shimmer animate-float-up"
          style={{
            animationDelay: '0.1s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px 6px 10px',
            borderRadius: '100px',
            border: '1px solid rgba(59,130,246,0.3)',
            background: 'rgba(59,130,246,0.07)',
            marginBottom: '40px',
            cursor: 'default',
          }}
        >
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#3b82f6',
            background: 'rgba(59,130,246,0.15)',
            padding: '2px 8px',
            borderRadius: '100px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>New</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#3b82f6',
              boxShadow: '0 0 6px #3b82f6',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
              Available on GitHub Marketplace
            </span>
          </div>
          <ArrowRight size={13} style={{ color: 'rgba(255,255,255,0.4)' }} />
        </div>

        {/* Headline */}
        <h1
          className="animate-float-up"
          style={{
            animationDelay: '0.25s',
            fontSize: 'clamp(44px, 5.5vw, 76px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            marginBottom: '0',
            color: '#ffffff',
          }}
        >
          Stop triaging.<br />
          <span className="shimmer-text">Start shipping.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-float-up"
          style={{
            animationDelay: '0.4s',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 400,
            lineHeight: 1.65,
            maxWidth: '560px',
            marginTop: '28px',
            marginBottom: '48px',
          }}
        >
          GHIC uses AI to instantly classify, deduplicate, and prioritize every GitHub issue — so your team ships features, not spreadsheets.
        </p>

        {/* CTAs */}
        <div
          className="animate-float-up"
          style={{
            animationDelay: '0.55s',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          <button
            className="glow-primary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#3b82f6',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              padding: '13px 28px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            <Github size={17} />
            Install on GitHub
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            padding: '13px 24px',
            fontSize: '15px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.01em',
          }}>
            See live demo
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Social proof */}
        <div
          className="animate-float-up"
          style={{
            animationDelay: '0.7s',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '72px',
          }}
        >
          <div style={{ display: 'flex' }}>
            {avatars.map((src, i) => (
              <div key={i} style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: '2px solid rgba(10,12,18,1)',
                marginLeft: i === 0 ? 0 : '-8px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.08)',
              }}>
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
              Trusted by <span style={{ color: 'rgba(255,255,255,0.7)' }}>2,400+</span> engineering teams
            </span>
          </div>
        </div>

        {/* ── Live Issue card + Metrics row ── */}
        <div
          className="animate-float-up"
          style={{
            animationDelay: '0.8s',
            width: '100%',
            maxWidth: '860px',
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
          }}
        >
          {/* Issue card */}
          <div style={{ flex: 1 }}>
            <IssueCard />
          </div>

          {/* Metrics column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '180px', flexShrink: 0 }}>
            {metrics.map(m => (
              <MetricPill key={m.label} {...m} />
            ))}

            {/* AI badge card */}
            <div
              className="animate-card-drift-2"
              style={{
                marginTop: '4px',
                background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 100%)',
                border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: '12px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: 'rgba(59,130,246,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Zap size={15} style={{ color: '#60a5fa' }} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>
                  AI Engine
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Mono, monospace' }}>
                  GPT-4o · Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
