'use client';

// Phase 2 public landing page: the practice space for people in therapy.
// Identity follows the app's Phase 2 light theme (seen2: src/lib/theme.ts
// lightTheme, src/components/home/PracticeHome.tsx, src/app/pitch/phase2-light):
// cream ground, white cards with soft shadows, teal accent, gold for "planned".
// Library framing follows ops/drafts/2026-11-27-exercise-library-design-principles.md.

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Check, ChevronRight, Copy as CopyIcon, MessageCircle, NotebookPen, Plus, Target, X } from 'lucide-react';
import { LINKS } from '../business';
import { FadeIn, GradientBlur, LanguageSwitcher, Logo, SlideIn, StarIcon, useScrollNav, usePrefersReducedMotion } from '../ui';
import { FaqSection, LanguageNoticeSection, NoticePill, PricingSection, SafetySection, SectionLabel, SiteFooterBlock, TONES } from '../sections';
import { localePath, type Copy, type Locale } from '../../i18n';

const t = {
  ...TONES.p2,
  teal: '#4ECDC4',
  tealLight: '#7EDED6',
  tealDeep: '#2BA39B',
  tealInk: '#1d6f6a',
  ink: '#1a1a2e',
  sand: '#f3ede4',
  gold: '#F2B800',
};

function PhoneMock({ p }: { p: Copy['p2']['phone'] }) {
  const card = { backgroundColor: '#fff', border: `1px solid ${t.border}`, boxShadow: '0 2px 8px rgba(26,26,46,0.04)' };
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]" aria-hidden="true">
      <div className="rounded-[48px] p-3" style={{ backgroundColor: '#1c1c1e', boxShadow: '0 40px 80px -20px rgba(26,26,46,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)' }}>
        <div className="relative overflow-hidden rounded-[36px] h-[640px]" style={{ backgroundColor: t.bg }}>
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[100px] h-7 rounded-full bg-black z-10" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at 30% 8%, ${t.teal}22 0%, transparent 45%)` }} />
          <div className="relative px-5 pt-14">
            <p className="text-[1.35rem] font-extrabold leading-tight" style={{ color: t.ink }}>
              {p.greeting}
            </p>
            <p className="text-[0.82rem] mt-0.5" style={{ color: t.muted }}>
              {p.sub}
            </p>

            <div className="mt-5 rounded-2xl p-3.5 flex items-center justify-between" style={card}>
              <div className="flex items-center gap-2.5">
                <MessageCircle size={16} style={{ color: t.tealDeep }} />
                <div>
                  <p className="text-[0.82rem] font-semibold" style={{ color: t.ink }}>{p.checkin}</p>
                  <p className="text-[0.68rem]" style={{ color: t.muted }}>{p.checkinSub}</p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-[10px] text-[0.72rem] font-semibold" style={{ backgroundColor: t.teal, color: t.ink }}>
                {p.start}
              </span>
            </div>

            <div className="mt-3 rounded-2xl p-4 relative overflow-hidden" style={{ backgroundColor: t.teal, boxShadow: '0 6px 18px rgba(78,205,196,0.3)' }}>
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.45) 0%, transparent 70%)', filter: 'blur(16px)' }} />
              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-base" style={{ color: t.ink }}>{p.session}</p>
                  <p className="text-[0.72rem] mt-0.5" style={{ color: 'rgba(26,26,46,0.75)' }}>{p.sessionSub}</p>
                </div>
                <ArrowRight size={18} style={{ color: t.ink }} />
              </div>
            </div>

            <div className="mt-3 rounded-2xl p-3.5" style={card}>
              <div className="flex items-center gap-1.5 mb-2">
                <Target size={11} style={{ color: t.tealDeep }} />
                <p className="text-[0.64rem] font-bold uppercase tracking-wider" style={{ color: t.tealDeep }}>{p.intentionLabel}</p>
              </div>
              <p className="text-[0.82rem] leading-snug" style={{ color: t.ink }}>{p.intention}</p>
              <p className="text-[0.66rem] mt-1.5" style={{ color: t.faint }}>{p.intentionDate}</p>
            </div>

            <div className="mt-3 rounded-2xl p-3.5" style={card}>
              <div className="flex items-center gap-1.5 mb-2.5">
                <Calendar size={11} style={{ color: '#b88a00' }} />
                <p className="text-[0.64rem] font-bold uppercase tracking-wider" style={{ color: '#b88a00' }}>{p.plannedLabel}</p>
              </div>
              <div className="rounded-xl p-2.5 flex items-center justify-between" style={{ backgroundColor: `${t.gold}14`, border: `1px solid ${t.gold}55` }}>
                <div>
                  <p className="text-[0.78rem] font-medium" style={{ color: t.ink }}>{p.plannedTitle}</p>
                  <p className="text-[0.66rem]" style={{ color: t.muted }}>{p.plannedTime}</p>
                </div>
                <StarIcon size={12} style={{ color: t.gold }} />
              </div>
            </div>

            <div className="mt-3 rounded-2xl p-3.5 flex items-center justify-between" style={card}>
              <div className="flex items-center gap-2.5">
                <NotebookPen size={15} style={{ color: t.tealDeep }} />
                <div>
                  <p className="text-[0.8rem] font-semibold" style={{ color: t.ink }}>{p.prepare}</p>
                  <p className="text-[0.66rem]" style={{ color: t.muted }}>{p.prepareSub}</p>
                </div>
              </div>
              <ChevronRight size={14} style={{ color: t.faint }} />
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[110px] h-1 rounded-full" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
        </div>
      </div>
    </div>
  );
}

/** The Phase 1 cycle, redrawn for Phase 2: a calm ring through the week. */
function PracticeRing({ labels }: { labels: Copy['p2']['cycle'] }) {
  const [step, setStep] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setStep((s) => s + 1), 2200);
    return () => clearInterval(id);
  }, [reduced]);
  const active = step % 4;
  const angles = [-90, 0, 90, 180];
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(26,26,46,0.08)" strokeWidth="2" />
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke={t.teal}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="113 340"
          style={{ transform: `rotate(${-135 + step * 90}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.9s ease-in-out' }}
        />
        {angles.map((a, i) => {
          const r = (a * Math.PI) / 180;
          return <circle key={i} cx={100 + 72 * Math.cos(r)} cy={100 + 72 * Math.sin(r)} r={i === active ? 6 : 4} fill={i === active ? t.teal : '#fff'} stroke={i === active ? t.teal : 'rgba(26,26,46,0.18)'} strokeWidth="1.5" style={{ transition: 'all 0.4s ease' }} />;
        })}
      </svg>
      {labels.map((label, i) => {
        const pos = [
          { top: '-4%', left: '50%', transform: 'translateX(-50%)' },
          { top: '50%', left: '100%', transform: 'translate(-30%, -50%)' },
          { bottom: '-4%', left: '50%', transform: 'translateX(-50%)' },
          { top: '50%', right: '100%', transform: 'translate(30%, -50%)' },
        ][i];
        return (
          <span
            key={label}
            className="absolute text-sm md:text-base font-semibold px-3 py-1 rounded-full whitespace-nowrap transition-all duration-300"
            style={{ ...pos, color: i === active ? t.ink : t.faint, backgroundColor: i === active ? `${t.teal}33` : 'transparent' }}
          >
            {label}
          </span>
        );
      })}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full flex items-center justify-center bg-white" style={{ boxShadow: '0 8px 24px rgba(26,26,46,0.08)' }}>
          <StarIcon size={24} style={{ color: '#ff6b5b' }} />
        </span>
      </div>
    </div>
  );
}

function TherapistCard({ copy }: { copy: Copy['p2']['therapist'] }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}#for-your-therapist`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.hash = 'for-your-therapist';
    }
  };
  return (
    <div className="relative rounded-[2rem] p-8 md:p-10 bg-white" style={{ border: `1px solid ${t.border}`, boxShadow: '0 30px 70px rgba(26,26,46,0.08)' }}>
      <div className="absolute top-0 left-10 right-10 h-1 rounded-b-full" style={{ backgroundColor: t.teal }} />
      <h3 className="font-serif text-2xl md:text-[1.7rem] leading-snug mb-6" style={{ color: t.ink }}>
        {copy.cardTitle}
      </h3>
      <ul className="space-y-4">
        {copy.points.map((point) => (
          <li key={point} className="flex gap-3.5 leading-relaxed" style={{ color: 'rgba(26,26,46,0.78)' }}>
            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: t.tealDeep }} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderTop: `1px solid ${t.border}` }}>
        <p className="text-sm" style={{ color: t.muted }}>
          {copy.contact}
        </p>
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full whitespace-nowrap transition-all hover:scale-[1.02]"
          style={{ backgroundColor: t.sand, color: t.tealInk }}
        >
          {copied ? <Check size={16} aria-hidden="true" /> : <CopyIcon size={16} aria-hidden="true" />}
          <span aria-live="polite">{copied ? copy.copied : copy.share}</span>
        </button>
      </div>
    </div>
  );
}

function Library({ copy, locale }: { copy: Copy['p2']['library']; locale: Locale }) {
  // Neutral ordering: alphabetical in the visitor's language (design principle 4).
  const entries = [...copy.entries].sort((a, b) => a.title.localeCompare(b.title, locale));
  return (
    <div className="rounded-[2rem] bg-white overflow-hidden" style={{ border: `1px solid ${t.border}`, boxShadow: '0 30px 70px rgba(26,26,46,0.07)' }}>
      <div className="px-6 md:px-9 pt-7 pb-5 flex flex-wrap items-center justify-between gap-4" style={{ borderBottom: `1px solid ${t.border}` }}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.14em] mr-1" style={{ color: t.faint }}>
            {copy.topicsLabel}
          </span>
          {copy.topics.map((topic) => (
            <span key={topic} className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${t.teal}26`, color: t.tealInk }}>
              {topic}
              <X size={12} aria-hidden="true" />
            </span>
          ))}
        </div>
        <span className="inline-flex rounded-full p-1 text-xs font-semibold" style={{ backgroundColor: t.sand }}>
          <span className="px-3 py-1.5 rounded-full" style={{ color: t.muted }}>
            {copy.showing}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white" style={{ color: t.tealInk, boxShadow: '0 1px 3px rgba(26,26,46,0.1)' }}>
            {copy.browseAll}
          </span>
        </span>
      </div>
      <ol className="px-6 md:px-9 py-4">
        {entries.map((e) => (
          <li key={e.title} className="flex items-baseline gap-3 py-3.5" style={{ borderBottom: `1px dashed rgba(26,26,46,0.1)` }}>
            <span className="font-serif text-lg md:text-xl" style={{ color: t.ink }}>
              {e.title}
            </span>
            <span className="flex-1 border-b border-dotted min-w-6 translate-y-[-4px]" style={{ borderColor: 'rgba(26,26,46,0.2)' }} aria-hidden="true" />
            <span className="text-sm text-right hidden sm:inline" style={{ color: t.muted }}>
              {e.source}
            </span>
            <span className="text-sm font-semibold tabular-nums whitespace-nowrap" style={{ color: t.tealInk }}>
              {e.minutes} {copy.minutes}
            </span>
          </li>
        ))}
        <li className="flex items-center gap-3 pt-5 pb-3">
          <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: `1.5px dashed ${t.tealDeep}` }}>
            <Plus size={16} style={{ color: t.tealInk }} aria-hidden="true" />
          </span>
          <span>
            <span className="font-serif text-lg block" style={{ color: t.ink }}>
              {copy.ownTitle}
            </span>
            <span className="text-sm" style={{ color: t.muted }}>
              {copy.ownText}
            </span>
          </span>
        </li>
      </ol>
    </div>
  );
}

export default function Phase2Landing({ copy, locale }: { copy: Copy; locale: Locale }) {
  const { scrolled, progress } = useScrollNav();
  const p = copy.p2;

  return (
    <div className="phase2 min-h-screen" style={{ backgroundColor: t.bg, color: t.ink, overflowX: 'clip' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#faf8f5]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(26,26,46,0.06)]' : 'bg-transparent'}`}>
        <div className="absolute bottom-0 left-0 h-0.5 transition-all" style={{ width: `${progress}%`, backgroundColor: t.teal, opacity: scrolled ? 1 : 0 }} />
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-5 md:px-6 py-4">
          <Link href={localePath(locale, '/practice')} aria-label="Seen Practice">
            <Logo textColor={t.ink} tag={p.tag} tagColor={t.tealInk} />
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium" style={{ color: t.muted }}>
            <a href="#how" className="hover:text-[#1a1a2e] transition-colors">{p.nav.how}</a>
            <a href="#library" className="hover:text-[#1a1a2e] transition-colors">{p.nav.library}</a>
            <a href="#for-your-therapist" className="hover:text-[#1a1a2e] transition-colors">{p.nav.therapist}</a>
            <a href="#pricing" className="hover:text-[#1a1a2e] transition-colors">{p.nav.pricing}</a>
            <a href="#faq" className="hover:text-[#1a1a2e] transition-colors">{p.nav.faq}</a>
          </div>
          <div className="flex items-center gap-1.5 md:gap-3">
            <LanguageSwitcher locale={locale} path="/practice" label={copy.common.language} color={t.ink} menuBg="#ffffff" menuText="rgba(26,26,46,0.75)" menuBorder={t.border} activeColor={t.tealInk} />
            <a href={LINKS.login} className="hidden sm:inline-block px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105" style={{ color: t.ink, border: '1px solid rgba(26,26,46,0.18)' }}>
              {copy.common.login}
            </a>
            <a href={LINKS.quiz} className="px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all hover:scale-105" style={{ backgroundColor: t.teal, color: t.ink }}>
              {p.nav.start}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-28 pb-20 lg:pt-24">
        <GradientBlur color={t.teal} className="-top-40 -right-32" opacity={0.35} blur={90} size={560} />
        <GradientBlur color={t.tealLight} className="bottom-0 -left-48" opacity={0.25} blur={90} size={460} />
        <StarIcon size={14} className="absolute top-[22%] left-[8%] animate-twinkle" style={{ color: t.tealDeep }} />
        <StarIcon size={10} className="absolute top-[70%] left-[46%] animate-twinkle" style={{ color: t.tealDeep, animationDelay: '1.2s' }} />
        <StarIcon size={12} className="absolute top-[16%] right-[40%] animate-twinkle" style={{ color: t.gold, animationDelay: '2s' }} />
        <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <div>
            <SlideIn direction="left" delay={0}>
              <NoticePill copy={copy} tone="p2" />
            </SlideIn>
            <SlideIn direction="left" delay={0.05}>
              <SectionLabel color={t.tealInk} className="mb-5">{p.hero.label}</SectionLabel>
            </SlideIn>
            <SlideIn direction="left" delay={0.15}>
              <h1 className="text-[2.35rem] md:text-5xl lg:text-[3.5rem] font-black leading-[1.08] tracking-tight mb-7" style={{ color: t.ink }}>
                {p.hero.title}{' '}
                <span className="block mt-2 font-serif font-normal italic" style={{ color: t.tealDeep }}>
                  {p.hero.accent}
                </span>
              </h1>
            </SlideIn>
            <SlideIn direction="left" delay={0.3}>
              <p className="text-xl md:text-2xl font-light leading-snug max-w-xl mb-9" style={{ color: 'rgba(26,26,46,0.75)' }}>
                {p.hero.body}
              </p>
            </SlideIn>
            <SlideIn direction="left" delay={0.45}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={LINKS.quiz}
                  className="px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all hover:scale-105"
                  style={{ backgroundColor: t.teal, color: t.ink, boxShadow: '0 10px 30px rgba(78,205,196,0.4)' }}
                >
                  {p.hero.cta} <ArrowRight size={20} aria-hidden="true" />
                </a>
                <a href="#how" className="px-6 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all hover:gap-3" style={{ color: t.ink }}>
                  {p.hero.secondary} <ChevronRight size={18} aria-hidden="true" />
                </a>
              </div>
              <p className="text-sm mt-4" style={{ color: t.faint }}>
                {p.hero.ctaNote}
              </p>
            </SlideIn>
          </div>
          <SlideIn direction="right" delay={0.3}>
            <div className="animate-float">
              <PhoneMock p={p.phone} />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* How a week works */}
      <section id="how" className="relative py-24 px-6 bg-white rounded-t-[2.5rem]" style={{ boxShadow: '0 -20px 60px rgba(26,26,46,0.05)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
            <FadeIn>
              <SectionLabel color={t.tealInk} className="mb-6">{p.week.label}</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12" style={{ color: t.ink }}>
                {p.week.title}
              </h2>
              <PracticeRing labels={p.cycle} />
            </FadeIn>
            <ol className="space-y-5">
              {p.week.steps.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.15}>
                  <li className="relative rounded-3xl p-7 md:p-8" style={{ backgroundColor: t.bg, border: `1px solid ${t.border}` }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: t.teal, color: t.ink }}>
                        {i + 1}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: t.tealInk }}>
                        {s.when}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: t.ink }}>
                      {s.title}
                    </h3>
                    <p className="leading-relaxed md:text-lg" style={{ color: t.muted }}>
                      {s.text}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What Seen asks */}
      <section className="relative py-24 px-6" style={{ backgroundColor: t.bg }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="max-w-3xl">
            <SectionLabel color={t.tealInk} className="mb-6">{p.asks.label}</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12" style={{ color: t.ink }}>
              {p.asks.title}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-[1.25fr_1fr] gap-5">
            <FadeIn>
              <div className="h-full rounded-3xl p-7 md:p-9 bg-white" style={{ border: `1px solid ${t.teal}55`, boxShadow: t.shadow }}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] mb-6" style={{ color: t.tealInk }}>
                  {p.asks.asksLabel}
                </p>
                <div className="space-y-3">
                  {p.asks.asks.map((q) => (
                    <p key={q} className="inline-block mr-2 px-5 py-3.5 text-lg leading-snug" style={{ backgroundColor: `${t.teal}1f`, color: t.ink, borderRadius: '20px 20px 20px 6px' }}>
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="h-full rounded-3xl p-7 md:p-9" style={{ backgroundColor: t.sand }}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] mb-6" style={{ color: t.faint }}>
                  {p.asks.neverLabel}
                </p>
                <div className="space-y-4">
                  {p.asks.never.map((q) => (
                    <p key={q} className="flex items-center gap-3 text-lg">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(26,26,46,0.08)' }}>
                        <X size={14} style={{ color: t.muted }} aria-hidden="true" />
                      </span>
                      <span className="line-through decoration-1" style={{ color: t.muted }}>
                        {q}
                      </span>
                    </p>
                  ))}
                </div>
                <p className="mt-8 leading-relaxed" style={{ color: t.ink }}>
                  {p.asks.note}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Library */}
      <section id="library" className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: t.sand }}>
        <GradientBlur color={t.teal} className="top-10 -right-40" opacity={0.18} size={480} />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.25fr] gap-14 items-start">
          <FadeIn>
            <SectionLabel color={t.tealInk} className="mb-6">{p.library.label}</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: t.ink }}>
              {p.library.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'rgba(26,26,46,0.72)' }}>
              {p.library.intro}
            </p>
            <div className="rounded-2xl p-6 bg-white/70 mb-6" style={{ border: `1px solid ${t.border}` }}>
              <p className="font-bold mb-1.5" style={{ color: t.ink }}>
                {p.library.afterTitle}
              </p>
              <p className="leading-relaxed" style={{ color: t.muted }}>
                {p.library.afterText}
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: t.faint }}>
              {p.library.credits}
            </p>
          </FadeIn>
          <SlideIn direction="right" delay={0.15}>
            <Library copy={p.library} locale={locale} />
          </SlideIn>
        </div>
      </section>

      {/* Therapist awareness */}
      <section id="for-your-therapist" className="relative py-24 px-6" style={{ backgroundColor: t.bg }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-14 items-center">
          <FadeIn>
            <SectionLabel color={t.tealInk} className="mb-6">{p.therapist.label}</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: t.ink }}>
              {p.therapist.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(26,26,46,0.72)' }}>
              {p.therapist.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <TherapistCard copy={p.therapist} />
          </FadeIn>
        </div>
      </section>

      <PricingSection copy={copy} tone="p2" intro={p.pricingIntro} />
      <SafetySection copy={copy} tone="p2" />
      <FaqSection copy={copy} tone="p2" items={p.faq.items} title={p.faq.title} />

      {/* Crossover to Phase 1: a glimpse of its dark identity */}
      <section className="px-6 pb-24" style={{ backgroundColor: t.bg }}>
        <FadeIn className="max-w-4xl mx-auto">
          <Link
            href={localePath(locale, '/')}
            className="group relative block overflow-hidden rounded-[2rem] p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1"
            style={{ backgroundColor: '#0f0f1a' }}
          >
            <div aria-hidden="true" className="absolute -top-24 -right-16 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,107,91,0.45) 0%, transparent 70%)', filter: 'blur(30px)' }} />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] mb-3" style={{ color: '#ff6b5b' }}>
                  {p.crossover.label}
                </p>
                <p className="text-2xl md:text-3xl font-bold leading-snug" style={{ color: '#faf8f5' }}>
                  {p.crossover.title}
                </p>
              </div>
              <span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-center md:whitespace-nowrap transition-all group-hover:gap-3" style={{ backgroundColor: '#ff6b5b', color: '#faf8f5' }}>
                {p.crossover.cta} <ArrowRight size={18} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </FadeIn>
      </section>

      <LanguageNoticeSection copy={copy} tone="p2" />
      <SiteFooterBlock copy={copy} tone="p2" locale={locale} />
    </div>
  );
}
