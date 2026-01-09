'use client';

import { useState } from 'react';
import Link from 'next/link';

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
            When life gets hard, your brain has a go-to move. Seen helps you understand why — so you can finally do something about it.
          </p>

          <p 
            style={{ 
              fontSize: '1rem',
              marginBottom: '40px',
              lineHeight: 1.7,
              color: 'rgba(250, 248, 245, 0.6)',
            }}
          >
            I'm building something I wish had existed for me — a way to see what's really driving your behavior, before things fall apart.
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
                You're in.
              </p>
              <p style={{ fontSize: '0.875rem', marginTop: '8px', color: 'rgba(250, 248, 245, 0.6)' }}>
                I'll let you know when Seen is ready.
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
            — Bas
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer 
        style={{ 
          padding: '32px 24px',
          textAlign: 'center',
          borderTop: '1px solid #252542',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '0.875rem',
          }}
        >
          <Link href="/terms" style={{ color: 'rgba(250, 248, 245, 0.4)' }}>
            Terms
          </Link>
          <Link href="/privacy" style={{ color: 'rgba(250, 248, 245, 0.4)' }}>
            Privacy
          </Link>
          <Link href="/cookies" style={{ color: 'rgba(250, 248, 245, 0.4)' }}>
            Cookies
          </Link>
        </div>
        <p style={{ fontSize: '0.75rem', marginTop: '16px', color: 'rgba(250, 248, 245, 0.25)' }}>
          © 2025 Seen. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
