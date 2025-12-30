'use client';

import React, { useState } from 'react';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#1a1a2e',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        width: 600,
        height: 600,
        top: '-20%',
        right: '-10%',
        background: 'radial-gradient(circle, #ff6b5b 0%, transparent 70%)',
        filter: 'blur(100px)',
        opacity: 0.15,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 600,
        width: '100%',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Seen logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 40,
        }}>
          <svg width={28} height={28} viewBox="0 0 24 24" fill="#ff6b5b">
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
          </svg>
          <span style={{
            fontSize: 28,
            fontWeight: 800,
            color: '#faf8f5',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}>Seen</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 64px)',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: 24,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}>
          <span style={{ color: '#faf8f5', display: 'block' }}>See the pattern.</span>
          <span style={{ color: '#ff6b5b', display: 'block' }}>Break the cycle.</span>
        </h1>

        <p style={{
          fontSize: 18,
          lineHeight: 1.6,
          marginBottom: 24,
          color: 'rgba(250, 248, 245, 0.7)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}>
          Everyone develops ways to cope when life gets hard. Some work for a while. Some never did. Seen helps you understand what's really going on — so you can choose, instead of just react.
        </p>

        <p style={{
          fontSize: 16,
          lineHeight: 1.6,
          marginBottom: 32,
          color: 'rgba(250, 248, 245, 0.5)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}>
          Coming soon. Join the waitlist to be first to know.
        </p>

        {status === 'success' ? (
          <div style={{
            padding: 24,
            borderRadius: 16,
            backgroundColor: '#252542',
            maxWidth: 400,
          }}>
            <p style={{ fontSize: 18, fontWeight: 600, color: '#ff6b5b' }}>You're on the list ✓</p>
            <p style={{ fontSize: 14, marginTop: 8, color: 'rgba(250, 248, 245, 0.6)' }}>I'll let you know when Seen is ready.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: 12,
                  fontSize: 16,
                  backgroundColor: '#252542',
                  color: '#faf8f5',
                  border: '1px solid rgba(255,255,255,0.1)',
                  outline: 'none',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  boxSizing: 'border-box',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 700,
                  backgroundColor: '#ff6b5b',
                  color: '#faf8f5',
                  border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.5 : 1,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  boxSizing: 'border-box',
                }}
              >
                {status === 'loading' ? 'Joining...' : 'Notify me'}
              </button>
            </div>
          </form>
        )}

        <p style={{
          marginTop: 64,
          fontSize: 16,
          fontStyle: 'italic',
          color: 'rgba(250, 248, 245, 0.4)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}>— Bas</p>
      </div>
    </div>
  );
}
