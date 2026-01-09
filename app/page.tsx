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
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ backgroundColor: '#0f0f1a' }}
    >
      {/* Gradient blur decoration - coral "sun" */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 107, 91, 0.35) 0%, rgba(255, 107, 91, 0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16 relative z-10">
        <div className="max-w-lg w-full text-center">
          {/* Logo - ONE coral star on left + Seen */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff6b5b">
              <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
            </svg>
            <span 
              className="text-4xl font-bold tracking-tight"
              style={{ color: '#faf8f5' }}
            >
              Seen
            </span>
          </div>

          {/* Tagline */}
          <p 
            className="text-lg mb-6 font-medium"
            style={{ color: '#ff6b5b' }}
          >
            See the pattern. Break the cycle.
          </p>

          {/* Main copy */}
          <p 
            className="text-lg mb-4 leading-relaxed"
            style={{ color: 'rgba(250, 248, 245, 0.85)' }}
          >
            When life gets hard, your brain has a go-to move. Seen helps you understand why — so you can finally do something about it.
          </p>

          <p 
            className="text-base mb-10 leading-relaxed"
            style={{ color: 'rgba(250, 248, 245, 0.6)' }}
          >
            I'm building something I wish had existed for me — a way to see what's really driving your behavior, before things fall apart.
          </p>

          {/* Email form */}
          {status === 'success' ? (
            <div 
              className="rounded-xl p-6"
              style={{ backgroundColor: '#1a1a2e' }}
            >
              <p 
                className="text-lg font-medium"
                style={{ color: '#5B8F8F' }}
              >
                You're in.
              </p>
              <p 
                className="text-sm mt-2"
                style={{ color: 'rgba(250, 248, 245, 0.6)' }}
              >
                I'll let you know when Seen is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-4 rounded-xl text-base focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    backgroundColor: '#1a1a2e',
                    color: '#faf8f5',
                    border: '1px solid #252542',
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ 
                    backgroundColor: '#ff6b5b',
                    color: '#faf8f5',
                    border: 'none',
                  }}
                >
                  {status === 'loading' ? 'Joining...' : 'Keep me posted'}
                </button>
              </div>
              {status === 'error' && (
                <p className="text-sm mt-4" style={{ color: '#ff6b5b' }}>
                  Something went wrong. Try again?
                </p>
              )}
            </form>
          )}

          {/* Signature */}
          <p 
            className="mt-12 text-base italic"
            style={{ color: 'rgba(250, 248, 245, 0.4)' }}
          >
            — Bas
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="py-8 px-6 text-center relative z-10"
        style={{ borderTop: '1px solid #252542' }}
      >
        <div className="flex items-center justify-center gap-6 text-sm">
          <Link 
            href="/terms" 
            className="transition-opacity hover:opacity-100"
            style={{ color: 'rgba(250, 248, 245, 0.4)' }}
          >
            Terms
          </Link>
          <Link 
            href="/privacy" 
            className="transition-opacity hover:opacity-100"
            style={{ color: 'rgba(250, 248, 245, 0.4)' }}
          >
            Privacy
          </Link>
          <Link 
            href="/cookies" 
            className="transition-opacity hover:opacity-100"
            style={{ color: 'rgba(250, 248, 245, 0.4)' }}
          >
            Cookies
          </Link>
        </div>
        <p 
          className="text-xs mt-4"
          style={{ color: 'rgba(250, 248, 245, 0.25)' }}
        >
          © 2025 Seen. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
