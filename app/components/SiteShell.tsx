import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { BUSINESS } from './business';

// Shared pages (pricing, refunds, terms, privacy, cookies, contact, what Seen is)
// serve visitors from both phases, so they use a neutral frame: the brand's
// dark chrome around a cream reading surface, with ink text. Phase 1 coral
// appears only in the logo star.

export const colors = {
  chrome: '#0f0f1a',
  chromeText: '#faf8f5',
  chromeMuted: 'rgba(250, 248, 245, 0.6)',
  page: '#faf8f5',
  card: '#ffffff',
  line: 'rgba(26, 26, 46, 0.1)',
  heading: '#1a1a2e',
  body: 'rgba(26, 26, 46, 0.8)',
  muted: 'rgba(26, 26, 46, 0.62)',
  faint: 'rgba(26, 26, 46, 0.5)',
  accent: '#1d6f6a',
  coral: '#ff6b5b',
  crisis: '#c2453a',
};

export function Logo() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg width={20} height={20} viewBox="0 0 24 24" fill={colors.coral} aria-hidden="true">
        <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
      </svg>
      <span style={{ fontSize: '1.375rem', fontWeight: 900, letterSpacing: '-0.025em', color: colors.chromeText }}>Seen</span>
    </span>
  );
}

const navLink: CSSProperties = { color: colors.chromeMuted, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 };

export function SiteHeader() {
  return (
    <header style={{ backgroundColor: colors.chrome, position: 'relative', zIndex: 10 }}>
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
        <Link href="/" style={{ textDecoration: 'none' }} aria-label="Seen home">
          <Logo />
        </Link>
        <nav className="flex gap-x-6 gap-y-2 flex-wrap" aria-label="Site">
          <Link href="/" style={navLink} className="hover:text-white!">Pattern quiz</Link>
          <Link href="/practice" style={navLink} className="hover:text-white!">For people in therapy</Link>
          <Link href="/pricing" style={navLink} className="hover:text-white!">Pricing</Link>
          <Link href="/contact" style={navLink} className="hover:text-white!">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

const footLink: CSSProperties = { color: colors.chromeMuted, textDecoration: 'none' };

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: colors.chrome, padding: '40px 24px 32px', position: 'relative', zIndex: 10 }}>
      <div className="max-w-5xl mx-auto">
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Legal">
          <Link href="/what-seen-is" style={footLink} className="hover:text-white!">What Seen is</Link>
          <Link href="/pricing" style={footLink} className="hover:text-white!">Pricing</Link>
          <Link href="/terms" style={footLink} className="hover:text-white!">Terms</Link>
          <Link href="/refunds" style={footLink} className="hover:text-white!">Refunds</Link>
          <Link href="/privacy" style={footLink} className="hover:text-white!">Privacy</Link>
          <Link href="/cookies" style={footLink} className="hover:text-white!">Cookies</Link>
          <Link href="/contact" style={footLink} className="hover:text-white!">Contact</Link>
        </nav>
        <p style={{ fontSize: '0.75rem', marginTop: '20px', lineHeight: 1.7, color: 'rgba(250, 248, 245, 0.42)' }}>
          Seen is a product of {BUSINESS.tradingName}, the {BUSINESS.legalForm} of {BUSINESS.owner}.
          <br />
          KvK {BUSINESS.kvk} · btw-id {BUSINESS.vatId} · {BUSINESS.address}
          <br />© {new Date().getFullYear()} {BUSINESS.tradingName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/** Page frame for every shared page: header, readable column, footer. */
export function ContentPage({
  title,
  intro,
  lastUpdated,
  children,
}: {
  title: string;
  intro?: ReactNode;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: colors.page }}>
      <SiteHeader />
      <div aria-hidden="true" style={{ height: '120px', backgroundColor: colors.chrome, marginBottom: '-120px' }} />
      <main style={{ flex: 1, padding: '0 16px 88px', position: 'relative' }}>
        <article
          className="mx-auto rounded-[28px] px-6 py-10 sm:px-12 sm:py-14"
          style={{
            maxWidth: '800px',
            backgroundColor: colors.card,
            color: colors.body,
            lineHeight: 1.7,
            fontSize: '1rem',
            boxShadow: '0 2px 8px rgba(26,26,46,0.04), 0 24px 60px rgba(26,26,46,0.08)',
          }}
        >
          <h1 className="font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.15, color: colors.heading, margin: 0 }}>
            {title}
          </h1>
          {lastUpdated && <p style={{ color: colors.faint, fontSize: '0.875rem', marginTop: '10px' }}>Last updated: {lastUpdated}</p>}
          {intro && <div style={{ marginTop: '24px', fontSize: '1.125rem', color: colors.body }}>{intro}</div>}
          <div style={{ marginTop: '36px' }}>{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} style={{ fontSize: '1.375rem', fontWeight: 700, letterSpacing: '-0.01em', color: colors.heading, margin: '44px 0 12px' }}>
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 style={{ fontSize: '1.0625rem', fontWeight: 650, color: colors.heading, margin: '24px 0 8px' }}>{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p style={{ margin: '0 0 12px' }}>{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul style={{ margin: '0 0 16px', paddingLeft: '22px', listStyle: 'disc' }} className="space-y-1.5 marker:text-[#2BA39B]">{children}</ul>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      style={{ color: colors.accent, textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: 'rgba(29,111,106,0.35)' }}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export function Callout({ label, children, tone = 'neutral' }: { label?: string; children: ReactNode; tone?: 'neutral' | 'coral' }) {
  return (
    <div
      style={{
        backgroundColor: tone === 'coral' ? 'rgba(232, 90, 79, 0.06)' : '#f5f0e8',
        borderLeft: `4px solid ${tone === 'coral' ? colors.crisis : '#2BA39B'}`,
        borderRadius: '14px',
        padding: '20px 24px',
        margin: '24px 0',
      }}
    >
      {label && <p style={{ margin: '0 0 8px', fontWeight: 700, color: colors.heading }}>{label}</p>}
      {children}
    </div>
  );
}

/** Crisis contacts, shown wherever Seen explains what it is not. */
export function CrisisContacts() {
  return (
    <Callout label="If you are in danger or thinking about ending your life" tone="coral">
      <P>Seen cannot help in an emergency. Please contact someone now:</P>
      <UL>
        <li>Anywhere in the EU: emergency number <strong>112</strong></li>
        <li>Netherlands: 113 Zelfmoordpreventie, <strong>113</strong> or <strong>0800-0113</strong> (free, 24/7)</li>
        <li>United Kingdom: emergency <strong>999</strong>, Samaritans <strong>116 123</strong> (free, 24/7)</li>
        <li>Elsewhere: find a local helpline at <A href="https://findahelpline.com">findahelpline.com</A></li>
      </UL>
    </Callout>
  );
}

export function BusinessBlock() {
  return (
    <P>
      <strong style={{ color: colors.heading }}>{BUSINESS.tradingName}</strong> ({BUSINESS.legalForm} of {BUSINESS.owner})
      <br />
      {BUSINESS.address}
      <br />
      KvK (Dutch Chamber of Commerce): {BUSINESS.kvk}
      <br />
      VAT (btw-id): {BUSINESS.vatId}
      <br />
      Email: <A href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</A>
    </P>
  );
}
