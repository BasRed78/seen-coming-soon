import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { BUSINESS } from './business';

export const colors = {
  bg: '#0f0f1a',
  surface: '#1a1a2e',
  surfaceLight: '#252542',
  coral: '#ff6b5b',
  cyan: '#5B8F8F',
  cream: '#faf8f5',
  body: 'rgba(250, 248, 245, 0.82)',
  muted: 'rgba(250, 248, 245, 0.55)',
  faint: 'rgba(250, 248, 245, 0.4)',
};

export function Logo({ size = 'small' }: { size?: 'small' | 'large' }) {
  const star = size === 'large' ? 20 : 14;
  const text = size === 'large' ? '2.25rem' : '1.25rem';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size === 'large' ? '12px' : '8px' }}>
      <svg width={star} height={star} viewBox="0 0 24 24" fill={colors.coral} aria-hidden="true">
        <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
      </svg>
      <span style={{ fontSize: text, fontWeight: 700, letterSpacing: '-0.025em', color: colors.cream }}>Seen</span>
    </span>
  );
}

const navLink: CSSProperties = { color: colors.muted, textDecoration: 'none', fontSize: '0.9rem' };
const footLink: CSSProperties = { color: colors.faint, textDecoration: 'none' };

export function SiteHeader() {
  return (
    <header style={{ borderBottom: `1px solid ${colors.surfaceLight}`, position: 'relative', zIndex: 10 }}>
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }} aria-label="Seen home">
          <Logo />
        </Link>
        <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link href="/what-seen-is" style={navLink}>What Seen is</Link>
          <Link href="/pricing" style={navLink}>Pricing</Link>
          <Link href="/contact" style={navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      style={{
        padding: '32px 24px',
        textAlign: 'center',
        borderTop: `1px solid ${colors.surfaceLight}`,
        position: 'relative',
        zIndex: 10,
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          fontSize: '0.875rem',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/what-seen-is" style={footLink}>What Seen is</Link>
        <Link href="/pricing" style={footLink}>Pricing</Link>
        <Link href="/terms" style={footLink}>Terms</Link>
        <Link href="/refunds" style={footLink}>Refunds</Link>
        <Link href="/privacy" style={footLink}>Privacy</Link>
        <Link href="/cookies" style={footLink}>Cookies</Link>
        <Link href="/contact" style={footLink}>Contact</Link>
      </nav>
      <p style={{ fontSize: '0.75rem', marginTop: '16px', lineHeight: 1.6, color: 'rgba(250, 248, 245, 0.3)' }}>
        Seen is a product of {BUSINESS.tradingName}, the {BUSINESS.legalForm} of {BUSINESS.owner}.
        <br />
        KvK {BUSINESS.kvk} · btw-id {BUSINESS.vatId} · {BUSINESS.address}
        <br />© {new Date().getFullYear()} {BUSINESS.tradingName}. All rights reserved.
      </p>
    </footer>
  );
}

/** Page frame for every content page: header, readable column, footer. */
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: colors.bg }}>
      <SiteHeader />
      <main style={{ flex: 1, padding: '56px 24px 80px' }}>
        <article style={{ maxWidth: '720px', margin: '0 auto', color: colors.body, lineHeight: 1.7, fontSize: '1rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: colors.cream, margin: 0 }}>
            {title}
          </h1>
          {lastUpdated && (
            <p style={{ color: colors.faint, fontSize: '0.875rem', marginTop: '8px' }}>Last updated: {lastUpdated}</p>
          )}
          {intro && <div style={{ marginTop: '24px', fontSize: '1.125rem', color: colors.body }}>{intro}</div>}
          <div style={{ marginTop: '40px' }}>{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} style={{ fontSize: '1.375rem', fontWeight: 700, color: colors.cream, margin: '40px 0 12px' }}>
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: colors.cream, margin: '24px 0 8px' }}>{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p style={{ margin: '0 0 12px' }}>{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul style={{ margin: '0 0 16px', paddingLeft: '20px' }}>{children}</ul>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      style={{ color: colors.coral }}
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
        backgroundColor: colors.surface,
        borderLeft: `4px solid ${tone === 'coral' ? colors.coral : colors.cyan}`,
        borderRadius: '12px',
        padding: '20px 24px',
        margin: '24px 0',
      }}
    >
      {label && <p style={{ margin: '0 0 8px', fontWeight: 700, color: colors.cream }}>{label}</p>}
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
      <strong style={{ color: colors.cream }}>{BUSINESS.tradingName}</strong> ({BUSINESS.legalForm} of {BUSINESS.owner})
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
