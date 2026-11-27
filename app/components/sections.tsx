'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Check, ChevronDown, Bot, Info, Phone } from 'lucide-react';
import { BUSINESS, LINKS } from './business';
import { FadeIn, Logo } from './ui';
import { localePath, type Copy, type Locale } from '../i18n';

export type Tone = 'p1' | 'p2';

/** Palettes per identity. p1 follows seen2 src/app/page.tsx, p2 follows src/lib/theme.ts (lightTheme). */
export const TONES = {
  p1: {
    bg: '#0f0f1a',
    alt: '#1a1a2e',
    raised: '#252542',
    card: 'rgba(255,255,255,0.03)',
    border: 'rgba(255,255,255,0.1)',
    text: '#faf8f5',
    muted: 'rgba(250,248,245,0.68)',
    faint: 'rgba(250,248,245,0.45)',
    accent: '#ff6b5b',
    accentText: '#ff6b5b',
    onAccent: '#faf8f5',
    soft: '#4ECDC4',
    shadow: 'none',
  },
  p2: {
    bg: '#faf8f5',
    alt: '#f3ede4',
    raised: '#ffffff',
    card: '#ffffff',
    border: 'rgba(26,26,46,0.08)',
    text: '#1a1a2e',
    muted: 'rgba(26,26,46,0.66)',
    faint: 'rgba(26,26,46,0.48)',
    accent: '#4ECDC4',
    accentText: '#1d6f6a',
    onAccent: '#1a1a2e',
    soft: '#2BA39B',
    shadow: '0 2px 8px rgba(26,26,46,0.04), 0 12px 32px rgba(26,26,46,0.05)',
  },
} as const;

export function SectionLabel({ children, color, className = '' }: { children: React.ReactNode; color: string; className?: string }) {
  return (
    <p className={`text-sm md:text-base font-bold uppercase tracking-[0.18em] ${className}`} style={{ color }}>
      {children}
    </p>
  );
}

export function PricingSection({ copy, tone, intro, id = 'pricing' }: { copy: Copy; tone: Tone; intro: string; id?: string }) {
  const t = TONES[tone];
  const p = copy.pricing;
  const plans = [
    { ...p.annual, highlight: true },
    { ...p.monthly, highlight: false },
  ];
  return (
    <section id={id} className="relative py-24 px-6" style={{ backgroundColor: tone === 'p1' ? t.raised : t.alt }}>
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <SectionLabel color={tone === 'p1' ? t.soft : t.accentText} className="mb-4">
            {p.label}
          </SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight" style={{ color: t.text }}>
            {p.title}
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: t.muted }}>
            {intro}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {plans.map((plan, idx) => (
            <FadeIn key={plan.name} delay={idx * 0.12}>
              <div
                className="relative h-full rounded-3xl p-8 md:p-10"
                style={{
                  backgroundColor: tone === 'p1' ? (plan.highlight ? 'rgba(255,107,91,0.06)' : t.card) : t.card,
                  border: `1px solid ${plan.highlight ? t.accent : t.border}`,
                  boxShadow: plan.highlight && tone === 'p2' ? '0 20px 50px rgba(78,205,196,0.18)' : t.shadow,
                }}
              >
                {plan.highlight && (
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6"
                    style={{ backgroundColor: tone === 'p1' ? 'rgba(255,107,91,0.15)' : 'rgba(78,205,196,0.18)', color: t.accentText }}
                  >
                    {p.badge}
                  </span>
                )}
                <p className={`font-semibold text-lg ${plan.highlight ? '' : 'md:mt-[46px]'}`} style={{ color: t.text }}>
                  {plan.name}
                </p>
                <p className="mt-3 mb-2">
                  <span className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: t.text }}>
                    {plan.price}
                  </span>
                  <span className="text-lg ml-2" style={{ color: t.faint }}>
                    {plan.period}
                  </span>
                </p>
                <p style={{ color: t.muted }}>{plan.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-6 rounded-3xl p-8 md:p-10 grid md:grid-cols-[1.1fr_1fr] gap-8" style={{ backgroundColor: t.card, border: `1px solid ${t.border}`, boxShadow: t.shadow }}>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] mb-5" style={{ color: t.faint }}>
                {p.includedLabel}
              </p>
              <ul className="space-y-3.5">
                {p.included.map((item) => (
                  <li key={item} className="flex items-center gap-3.5 text-base md:text-lg">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: tone === 'p1' ? 'rgba(78,205,196,0.14)' : 'rgba(78,205,196,0.2)' }}
                    >
                      <Check size={14} style={{ color: tone === 'p1' ? t.soft : t.accentText }} aria-hidden="true" />
                    </span>
                    <span style={{ color: t.text }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: t.muted }}>
                <p>{p.window}</p>
                <p>{p.terms}</p>
              </div>
              <div>
                <a
                  href={LINKS.quiz}
                  className="w-full py-4 rounded-full font-bold text-lg transition-all hover:scale-[1.02] block text-center"
                  style={{ backgroundColor: t.accent, color: t.onAccent }}
                >
                  {p.cta}
                </a>
                <Link href="/pricing" className="block text-center text-sm mt-4 underline underline-offset-4" style={{ color: t.muted }}>
                  {p.details}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/** AI disclosure, what Seen is not, and crisis contacts. Shown on both landing pages. */
export function SafetySection({ copy, tone }: { copy: Copy; tone: Tone }) {
  const t = TONES[tone];
  const c = copy.common;
  return (
    <section id="safety" className="relative py-20 px-6" style={{ backgroundColor: t.bg }}>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-5">
        <div className="grid gap-5">
          <FadeIn>
            <div className="rounded-3xl p-7 h-full" style={{ backgroundColor: t.card, border: `1px solid ${t.border}`, boxShadow: t.shadow }}>
              <div className="flex items-center gap-3 mb-3">
                <Bot size={20} style={{ color: tone === 'p1' ? t.soft : t.accentText }} aria-hidden="true" />
                <h2 className="font-bold text-lg" style={{ color: t.text }}>
                  {c.ai.label}
                </h2>
              </div>
              <p className="leading-relaxed" style={{ color: t.muted }}>
                {c.ai.text}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl p-7 h-full" style={{ backgroundColor: t.card, border: `1px solid ${t.border}`, boxShadow: t.shadow }}>
              <div className="flex items-center gap-3 mb-3">
                <Info size={20} style={{ color: tone === 'p1' ? t.soft : t.accentText }} aria-hidden="true" />
                <h2 className="font-bold text-lg" style={{ color: t.text }}>
                  {c.notTherapy.label}
                </h2>
              </div>
              <p className="leading-relaxed mb-3" style={{ color: t.muted }}>
                {c.notTherapy.text}
              </p>
              <Link href="/what-seen-is" className="font-semibold underline underline-offset-4" style={{ color: t.accentText }}>
                {c.notTherapy.link}
              </Link>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div
            className="rounded-3xl p-7 md:p-9 h-full"
            style={{
              backgroundColor: tone === 'p1' ? 'rgba(255,107,91,0.07)' : '#ffffff',
              border: `1px solid ${tone === 'p1' ? 'rgba(255,107,91,0.45)' : 'rgba(232,90,79,0.35)'}`,
              boxShadow: t.shadow,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Phone size={20} style={{ color: tone === 'p1' ? '#ff6b5b' : '#c2453a' }} aria-hidden="true" />
              <h2 className="font-bold text-lg" style={{ color: t.text }}>
                {c.crisis.title}
              </h2>
            </div>
            <p className="mb-5" style={{ color: t.muted }}>
              {c.crisis.body}
            </p>
            <ul className="space-y-3">
              {c.crisis.lines.map((line) => (
                <li key={line.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-3" style={{ borderBottom: `1px solid ${t.border}` }}>
                  <span style={{ color: t.muted }}>{line.label}</span>
                  <a
                    href={`tel:${line.number.split(/ (or|of) /)[0].replace(/[^0-9+]/g, '')}`}
                    className="font-bold text-xl tracking-tight whitespace-nowrap"
                    style={{ color: t.text }}
                  >
                    {line.number}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: t.muted }}>
                {c.crisis.elsewhere}
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function FaqSection({ copy, tone, items, title }: { copy: Copy; tone: Tone; items: Copy['p1']['faq']['items']; title: string }) {
  const t = TONES[tone];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 px-6" style={{ backgroundColor: tone === 'p1' ? t.alt : t.bg }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel color={tone === 'p1' ? t.accentText : t.accentText} className="mb-4">
            {copy.common.faqLabel}
          </SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight" style={{ color: t.text }}>
            {title}
          </h2>
        </FadeIn>
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <FadeIn key={item.q} delay={Math.min(idx * 0.05, 0.3)}>
                <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: t.card, border: `1px solid ${isOpen ? (tone === 'p1' ? 'rgba(255,107,91,0.4)' : 'rgba(78,205,196,0.55)') : t.border}`, boxShadow: t.shadow }}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-6 text-left px-6 py-5 font-semibold text-lg"
                      style={{ color: t.text }}
                    >
                      {item.q}
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className="flex-shrink-0 transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'none', color: t.faint }}
                      />
                    </button>
                  </h3>
                  <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed" style={{ color: t.muted }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * "The app launches in your language in January" plus a pre-registration form.
 * Placeholder only: nothing is sent or stored until WAIT-01 builds the backend
 * (double opt-in, consent record, deletion after the launch notice).
 */
export function LanguageNoticeSection({ copy, tone }: { copy: Copy; tone: Tone }) {
  const t = TONES[tone];
  const n = copy.common.notice;
  if (!n) return null;
  return (
    <section id="preregister" className="relative py-20 px-6" style={{ backgroundColor: tone === 'p1' ? t.alt : t.alt }}>
      <FadeIn className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: t.text }}>
          {n.title}
        </h2>
        <p className="text-lg leading-relaxed mb-8" style={{ color: t.muted }}>
          {n.body}
        </p>
        <form className="text-left" onSubmit={(e) => e.preventDefault()} data-placeholder="WAIT-01">
          <label htmlFor="prereg-email" className="block text-sm font-semibold mb-2" style={{ color: t.text }}>
            {n.emailLabel}
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="prereg-email"
              type="email"
              placeholder={n.emailPlaceholder}
              disabled
              className="flex-1 px-5 py-4 rounded-2xl text-base outline-none disabled:opacity-70"
              style={{ backgroundColor: t.card, color: t.text, border: `1px solid ${t.border}` }}
            />
            <button type="submit" disabled className="px-6 py-4 rounded-2xl font-bold whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed" style={{ backgroundColor: t.accent, color: t.onAccent }}>
              {n.button}
            </button>
          </div>
          <label className="flex items-start gap-3 mt-4 text-sm leading-relaxed" style={{ color: t.muted }}>
            <input type="checkbox" disabled className="mt-1" />
            <span>{n.consent}</span>
          </label>
          <p className="mt-4 text-sm font-semibold" style={{ color: t.accentText }}>
            {n.pending}
          </p>
        </form>
      </FadeIn>
    </section>
  );
}

/** Shown at the top of the hero for site languages the app does not speak yet. */
export function NoticePill({ copy, tone }: { copy: Copy; tone: Tone }) {
  const t = TONES[tone];
  const n = copy.common.notice;
  if (!n) return null;
  return (
    <a
      href="#preregister"
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-7 transition-all hover:gap-3"
      style={{
        color: t.accentText,
        backgroundColor: tone === 'p1' ? 'rgba(255,107,91,0.12)' : 'rgba(78,205,196,0.16)',
        border: `1px solid ${tone === 'p1' ? 'rgba(255,107,91,0.35)' : 'rgba(78,205,196,0.45)'}`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.accent }} />
      {n.pill}
    </a>
  );
}

export function SiteFooterBlock({ copy, tone, locale }: { copy: Copy; tone: Tone; locale: Locale }) {
  const t = TONES[tone];
  const f = copy.common.footer;
  const legal = [
    { href: '/what-seen-is', label: f.whatSeenIs },
    { href: '/pricing', label: f.pricing },
    { href: '/terms', label: f.terms },
    { href: '/refunds', label: f.refunds },
    { href: '/privacy', label: f.privacy },
    { href: '/cookies', label: f.cookies },
    { href: '/contact', label: f.contact },
  ];
  return (
    <footer className="relative px-6 pt-14 pb-10" style={{ backgroundColor: tone === 'p1' ? t.bg : '#f3ede4', borderTop: `1px solid ${t.border}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <Logo textColor={t.text} tag={tone === 'p2' ? copy.p2.tag : undefined} tagColor={t.accentText} />
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <Link href={localePath(locale, '/')} style={{ color: t.muted }} className="hover:underline underline-offset-4">
                {f.forReflection}
              </Link>
              <Link href={localePath(locale, '/practice')} style={{ color: t.muted }} className="hover:underline underline-offset-4">
                {f.forTherapy}
              </Link>
            </div>
          </div>
          <nav aria-label="Legal" className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-2.5 text-sm">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} style={{ color: t.muted }} className="hover:underline underline-offset-4">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-6 text-xs leading-relaxed" style={{ borderTop: `1px solid ${t.border}`, color: t.faint }}>
          {f.legalNote && <p className="mb-2">{f.legalNote}</p>}
          <p>{f.productOf}</p>
          <p>
            KvK {BUSINESS.kvk} · btw-id {BUSINESS.vatId} · {BUSINESS.address}
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {BUSINESS.tradingName}. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
