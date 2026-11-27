'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiteFooter, colors } from './components/SiteShell';
import { PRICES } from './components/business';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0f0f1a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient blur decoration - coral "sun" */}
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 107, 91, 0.35) 0%, rgba(255, 107, 91, 0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top navigation */}
      <nav
        aria-label="Site"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '20px',
          padding: '20px 24px',
          fontSize: '0.9rem',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/what-seen-is" style={{ color: colors.muted, textDecoration: 'none' }}>What Seen is</Link>
        <Link href="/pricing" style={{ color: colors.muted, textDecoration: 'none' }}>Pricing</Link>
        <Link href="/contact" style={{ color: colors.muted, textDecoration: 'none' }}>Contact</Link>
      </nav>

      {/* Main content */}
      <main 
        style={{ 
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 24px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: '512px', width: '100%', textAlign: 'center' }}>
          {/* Logo - ONE coral star on left + Seen */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '48px',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff6b5b">
              <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
            </svg>
            <span 
              style={{ 
                fontSize: '2.25rem',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: '#faf8f5',
              }}
            >
              Seen
            </span>
          </div>

          {/* Tagline */}
          <p 
            style={{ 
              fontSize: '1.125rem',
              marginBottom: '24px',
              fontWeight: 500,
              color: '#ff6b5b',
            }}
          >
            See the pattern. Break the cycle.
          </p>

          {/* Main copy */}
          <p 
            style={{ 
              fontSize: '1.125rem',
              marginBottom: '16px',
              lineHeight: 1.7,
              color: 'rgba(250, 248, 245, 0.85)',
            }}
          >
            When life gets hard, your brain has a go-to move. Seen helps you understand why, so you can finally do something about it.
          </p>

          <p 
            style={{ 
              fontSize: '1rem',
              marginBottom: '40px',
              lineHeight: 1.7,
              color: 'rgba(250, 248, 245, 0.6)',
            }}
          >
            I&apos;m building something I wish had existed for me: a way to see what&apos;s really driving your behaviour, before things fall apart.
          </p>

          {/* Email form */}
          {status === 'success' ? (
            <div 
              style={{ 
                backgroundColor: '#1a1a2e',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <p style={{ fontSize: '1.125rem', fontWeight: 500, color: '#5B8F8F' }}>
                You&apos;re in.
              </p>
              <p style={{ fontSize: '0.875rem', marginTop: '8px', color: 'rgba(250, 248, 245, 0.6)' }}>
                I&apos;ll let you know when Seen is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '12px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{ 
                    flex: '1 1 250px',
                    minWidth: '200px',
                    maxWidth: '300px',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    backgroundColor: '#1a1a2e',
                    color: '#faf8f5',
                    border: '1px solid #252542',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{ 
                    padding: '16px 24px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    backgroundColor: '#ff6b5b',
                    color: '#faf8f5',
                    border: 'none',
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                    opacity: status === 'loading' ? 0.5 : 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {status === 'loading' ? 'Joining...' : 'Keep me posted'}
                </button>
              </div>
              {status === 'error' && (
                <p style={{ fontSize: '0.875rem', marginTop: '16px', color: '#ff6b5b' }}>
                  Something went wrong. Try again?
                </p>
              )}
            </form>
          )}

          {/* Signature */}
          <p 
            style={{ 
              marginTop: '48px',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(250, 248, 245, 0.4)',
            }}
          >
            Bas, founder
          </p>
        </div>
      </main>

      <ProductSections />

      <SiteFooter />
    </div>
  );
}

const features = [
  {
    title: 'A free pattern quiz',
    text: 'Fourteen questions about how you react when life gets hard. Your result names which of six stress-response patterns your answers fit most: Withdrawal & Avoidance, Approval Chasing, Substance Soothing, Achievement Hiding, Intimacy Seeking or Compulsive Spending. A pattern describes behaviour. It is never a diagnosis.',
  },
  {
    title: 'Short daily check-ins',
    text: 'A few minutes a day with an AI that asks open questions and reflects your own words back to you. You always know you are talking to software.',
  },
  {
    title: 'Weekly reflections',
    text: 'Once a week Seen summarises what you wrote, so you can see what keeps coming back. The summary is for you alone.',
  },
  {
    title: 'A practice space if you are in therapy',
    text: 'If you already see a therapist, you can choose what you want to practise, plan short exercises, set intentions and write a reflection after a session. We encourage you to tell your therapist you use Seen.',
  },
];

function ProductSections() {
  const sectionTitle = { fontSize: '1.5rem', fontWeight: 700, color: colors.cream, margin: '0 0 24px' } as const;
  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '24px 24px 72px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h2 style={sectionTitle}>What you get with Seen</h2>
        <p style={{ color: colors.body, lineHeight: 1.7, margin: '0 0 24px' }}>
          Seen is self-reflection software for your phone or computer. It helps you notice how you tend to cope with stress, in
          your own words and at your own pace.
        </p>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {features.map((f) => (
            <div key={f.title} style={{ backgroundColor: colors.surface, borderRadius: '12px', padding: '20px 24px' }}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: colors.cream, margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ color: colors.muted, lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{f.text}</p>
            </div>
          ))}
        </div>

        <h2 style={{ ...sectionTitle, marginTop: '56px' }}>What Seen is and is not</h2>
        <div style={{ backgroundColor: colors.surface, borderLeft: `4px solid ${colors.cyan}`, borderRadius: '12px', padding: '20px 24px' }}>
          <p style={{ color: colors.body, lineHeight: 1.7, margin: '0 0 12px' }}>
            Seen is a mirror for self-reflection. It gives no medical, psychological or health advice, and it does not diagnose or
            treat anything. It is no substitute for a doctor, therapist or other professional, and it is not a crisis service.
          </p>
          <p style={{ color: colors.body, lineHeight: 1.7, margin: 0 }}>
            In an emergency, call 112 (EU) or 999 (UK). In the Netherlands you can call 113 or 0800-0113, free and 24/7.{' '}
            <Link href="/what-seen-is" style={{ color: colors.coral }}>Read the full statement</Link>
          </p>
        </div>

        <h2 style={{ ...sectionTitle, marginTop: '56px' }}>Pricing</h2>
        <p style={{ color: colors.body, lineHeight: 1.7, margin: '0 0 8px' }}>
          The quiz is free. Founding members pay <strong style={{ color: colors.cream }}>{PRICES.founding.annual} a year</strong> or{' '}
          <strong style={{ color: colors.cream }}>{PRICES.founding.monthly} a month</strong>, VAT included, and keep that price for
          as long as they stay subscribed. Full refund within {PRICES.refundDays} days, no questions asked.
        </p>
        <Link href="/pricing" style={{ color: colors.coral }}>See plans and what is included</Link>
      </div>
    </section>
  );
}
