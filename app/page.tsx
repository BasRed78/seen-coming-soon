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

      <div className="max-w-lg w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <StarIcon size={28} />
          <span className="text-4xl font-black tracking-tight" style={{ color: colors.cream }}>Seen</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.cream }}>
          See the pattern. Break the cycle.
        </h1>

        <p className="text-lg mb-4 leading-relaxed" style={{ color: colors.cream, opacity: 0.7 }}>
          When life gets hard, your brain has a go-to move. Seen helps you understand why — so you can finally do something about it.
        </p>

        <p className="text-base mb-10 leading-relaxed" style={{ color: colors.cream, opacity: 0.5 }}>
          I'm building something I wish had existed for me — a way to see what's really driving your behavior, before things fall apart.
        </p>

        {status === 'success' ? (
          <div className="p-6 rounded-2xl" style={{ backgroundColor: colors.darkLight }}>
            <p className="text-lg font-medium" style={{ color: colors.coral }}>You're on the list ✓</p>
            <p className="text-sm mt-2" style={{ color: colors.cream, opacity: 0.6 }}>I'll let you know when Seen is ready.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                {status === 'loading' ? 'Joining...' : 'Keep me posted'}
              </button>
            </div>
          </form>
        )}

        <p className="mt-12 text-base italic" style={{ color: colors.cream, opacity: 0.4 }}>— Bas</p>
      </div>
    </div>
  );
}
