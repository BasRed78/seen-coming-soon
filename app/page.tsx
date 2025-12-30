'use client';

import React, { useState } from 'react';

const colors = {
  bg: '#0f0f1a',
  dark: '#1a1a2e',
  darkLight: '#252542',
  coral: '#ff6b5b',
  cream: '#faf8f5',
};

const StarIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color: colors.coral }}>
    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
  </svg>
);

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
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      <div 
        className="absolute pointer-events-none"
        style={{ 
          width: 600, height: 600, top: '-20%', right: '-10%',
          background: `radial-gradient(circle, ${colors.coral} 0%, transparent 70%)`, 
          filter: 'blur(100px)', opacity: 0.12 
        }} 
      />

      <div className="max-w-2xl w-full relative z-10">
        {/* Seen logo - larger */}
        <div className="flex items-center gap-3 mb-10">
          <StarIcon size={32} />
          <span className="text-3xl font-black tracking-tight" style={{ color: colors.cream }}>Seen</span>
        </div>

        {/* Two-line headline matching homepage */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          <span style={{ color: colors.cream }}>See the pattern.</span>
          <br />
          <span style={{ color: colors.coral }}>Break the cycle.</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl" style={{ color: colors.cream, opacity: 0.7 }}>
          Everyone develops ways to cope when life gets hard. Some work for a while. Some never did. Seen helps you understand what's really going on — so you can choose, instead of just react.
        </p>

        <p className="text-base mb-10 leading-relaxed max-w-xl" style={{ color: colors.cream, opacity: 0.5 }}>
          Coming soon. Join the waitlist to be first to know.
        </p>

        {status === 'success' ? (
          <div className="p-6 rounded-2xl max-w-md" style={{ backgroundColor: colors.darkLight }}>
            <p className="text-lg font-medium" style={{ color: colors.coral }}>You're on the list ✓</p>
            <p className="text-sm mt-2" style={{ color: colors.cream, opacity: 0.6 }}>I'll let you know when Seen is ready.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 rounded-xl text-base outline-none"
                style={{ backgroundColor: colors.darkLight, color: colors.cream, border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 disabled:opacity-50"
                style={{ backgroundColor: colors.coral, color: colors.cream }}
              >
                {status === 'loading' ? 'Joining...' : 'Notify me'}
              </button>
            </div>
          </form>
        )}

        <p className="mt-16 text-base italic" style={{ color: colors.cream, opacity: 0.4 }}>— Bas</p>
      </div>
    </div>
  );
}
