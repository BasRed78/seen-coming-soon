'use client';

// Phase 1 public landing page. Structure, motion and styling are ported from the
// app's own landing page behind the tester login (seen2: src/app/page.tsx):
// sticky hero with the rotating cycle, cards that slide over it, the cream
// founder panel and the coral-on-dark identity. Copy follows ops/CONTEXT.md.

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Lock, Server, EyeOff, Trash2, MessageCircle, ListChecks, NotebookPen } from 'lucide-react';
import { LINKS } from '../business';
import { FadeIn, GradientBlur, LanguageSwitcher, Logo, Rich, SlideIn, StarIcon, useScrollNav, usePrefersReducedMotion } from '../ui';
import { FaqSection, LanguageNoticeSection, NoticePill, PricingSection, SafetySection, SectionLabel, SiteFooterBlock } from '../sections';
import { appSpeaks, localePath, type Copy, type Locale } from '../../i18n';
import { PatternGlyph } from './PatternGlyph';

const c = {
  coral: '#ff6b5b',
  bg: '#0f0f1a',
  dark: '#1a1a2e',
  darkMid: '#1f1f38',
  darkLight: '#252542',
  cream: '#faf8f5',
  lightCream: '#F5F0E8',
  cyan: '#4ECDC4',
};

function CycleDiagram({ labels, className = '' }: { labels: Copy['p1']['cycle']; className?: string }) {
  const [rotation, setRotation] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setRotation((r) => r + 90), 2000);
    return () => clearInterval(id);
  }, [reduced]);
  const active = Math.floor((rotation / 90) % 4);
  const positions = [
    { top: '4%', left: '50%', transform: 'translateX(-50%)' },
    { top: '50%', left: '100%', transform: 'translate(-20%, -50%)' },
    { bottom: '4%', left: '50%', transform: 'translateX(-50%)' },
    { top: '50%', right: '100%', transform: 'translate(20%, -50%)' },
  ];
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="70" fill="none" stroke={c.darkLight} strokeWidth="2" opacity="0.5" />
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke={c.coral}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="110 330"
          style={{ transform: `rotate(${-90 + rotation}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.8s ease-in-out' }}
        />
        {[0, 1, 2, 3].map((i) => {
          const a = (i * 90 - 45) * (Math.PI / 180);
          return <circle key={i} cx={100 + 70 * Math.cos(a)} cy={100 + 70 * Math.sin(a)} r="4" fill={i === active ? c.coral : c.darkLight} style={{ transition: 'fill 0.3s ease' }} />;
        })}
      </svg>
      {labels.map((label, idx) => (
        <span
          key={label}
          className="absolute text-base font-semibold transition-all duration-300 whitespace-nowrap"
          style={{
            ...positions[idx],
            color: idx === active && idx % 2 === 0 ? c.coral : c.cream,
            opacity: idx === active ? 1 : 0.4,
            transform: `${positions[idx].transform} scale(${idx === active ? 1.15 : 1})`,
          }}
        >
          {label}
        </span>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <StarIcon size={28} style={{ color: c.coral }} />
      </div>
    </div>
  );
}

function StaggeredQuote({ lines, accentLine, className = '' }: { lines: string[]; accentLine: number; className?: string }) {
  const [visible, setVisible] = useState(0);
  const [started, setStarted] = useState(false);
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setStarted(true), { threshold: 0.3 });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => {
      setVisible((v) => {
        if (v < lines.length) return v + 1;
        clearInterval(id);
        return v;
      });
    }, 600);
    return () => clearInterval(id);
  }, [started, lines.length]);
  return (
    <p ref={ref} className={className}>
      {lines.map((line, idx) => (
        <span key={idx} style={{ color: idx === accentLine ? c.coral : c.dark, opacity: reduced || idx < visible ? 1 : 0, transition: 'opacity 0.5s ease-out' }}>
          {line}{' '}
        </span>
      ))}
    </p>
  );
}

function ChatSample({ copy }: { copy: Copy['p1']['how'] }) {
  return (
    <div className="rounded-[2rem] p-5 md:p-6" style={{ backgroundColor: c.bg, border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 80px rgba(0,0,0,0.45)' }}>
      <div className="flex items-center justify-between pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,107,91,0.14)' }}>
            <StarIcon size={14} style={{ color: c.coral }} />
          </span>
          <span className="font-semibold text-sm" style={{ color: c.cream }}>
            {copy.sampleLabel}
          </span>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-md" style={{ backgroundColor: 'rgba(78,205,196,0.14)', color: c.cyan }}>
          AI
        </span>
      </div>
      <div className="space-y-3">
        {copy.sample.map((m, i) => (
          <FadeIn key={i} delay={0.15 * i}>
            <div className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <p
                className="px-4 py-3 text-[15px] leading-relaxed max-w-[86%]"
                style={
                  m.from === 'user'
                    ? { backgroundColor: c.coral, color: c.cream, borderRadius: '18px 18px 4px 18px' }
                    : { backgroundColor: c.darkLight, color: c.cream, borderRadius: '18px 18px 18px 4px' }
                }
              >
                {m.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      <p className="text-xs mt-5" style={{ color: 'rgba(250,248,245,0.45)' }}>
        {copy.sampleNote}
      </p>
    </div>
  );
}

function Waitlist({ copy }: { copy: Copy['p1']['waitlist'] }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim() }) });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: c.bg }}>
      <GradientBlur color={c.coral} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.18} size={520} blur={90} />
      <FadeIn className="relative max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: c.cream }}>
          {copy.title}
        </h2>
        <p className="text-lg mb-8" style={{ color: 'rgba(250,248,245,0.7)' }}>
          {copy.text}
        </p>
        {status === 'success' ? (
          <div className="rounded-2xl p-6" style={{ backgroundColor: c.dark }}>
            <p className="text-lg font-semibold" style={{ color: c.cyan }}>
              {copy.success}
            </p>
            <p className="text-sm mt-2" style={{ color: 'rgba(250,248,245,0.6)' }}>
              {copy.successText}
            </p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="waitlist-email" className="sr-only">
                Email
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={copy.placeholder}
                className="flex-1 px-5 py-4 rounded-2xl text-base outline-none focus:ring-2 focus:ring-[#ff6b5b]/60"
                style={{ backgroundColor: c.dark, color: c.cream, border: `1px solid ${c.darkLight}` }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-4 rounded-2xl font-bold whitespace-nowrap transition-all hover:scale-[1.02] disabled:opacity-60"
                style={{ backgroundColor: c.coral, color: c.cream }}
              >
                {status === 'loading' ? copy.loading : copy.button}
              </button>
            </div>
            <p className="text-sm mt-4" style={{ color: 'rgba(250,248,245,0.5)' }}>
              {copy.consent}{' '}
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy
              </Link>
            </p>
            {status === 'error' && (
              <p className="text-sm mt-3" style={{ color: c.coral }}>
                {copy.error}
              </p>
            )}
          </form>
        )}
      </FadeIn>
    </section>
  );
}

export default function Phase1Landing({ copy, locale }: { copy: Copy; locale: Locale }) {
  const { scrolled, progress } = useScrollNav();
  const p = copy.p1;
  const privacyIcons = [Server, EyeOff, Lock, Trash2];
  const stepIcons = [ListChecks, MessageCircle, NotebookPen];

  return (
    <div className="min-h-screen" style={{ backgroundColor: c.bg, overflowX: 'clip' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#1a1a2e]/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
        <div className="absolute bottom-0 left-0 h-0.5 transition-all" style={{ width: `${progress}%`, backgroundColor: c.coral, opacity: scrolled ? 1 : 0 }} />
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-5 md:px-6 py-4">
          <Link href={localePath(locale, '/')} aria-label="Seen">
            <Logo textColor={c.cream} />
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium" style={{ color: 'rgba(250,248,245,0.7)' }}>
            <a href="#how" className="hover:text-white transition-colors">{p.nav.how}</a>
            <a href="#patterns" className="hover:text-white transition-colors">{p.nav.patterns}</a>
            <a href="#pricing" className="hover:text-white transition-colors">{p.nav.pricing}</a>
            <a href="#faq" className="hover:text-white transition-colors">{p.nav.faq}</a>
          </div>
          <div className="flex items-center gap-1.5 md:gap-3">
            <LanguageSwitcher locale={locale} path="/" label={copy.common.language} color={c.cream} menuBg={c.dark} menuText="rgba(250,248,245,0.8)" menuBorder="rgba(255,255,255,0.1)" activeColor={c.coral} />
            <a href={LINKS.login} className="hidden sm:inline-block px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105" style={{ color: c.cream, border: `1px solid ${c.cream}30` }}>
              {copy.common.login}
            </a>
            <a href={LINKS.quiz} className="px-4 md:px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all hover:scale-105" style={{ backgroundColor: c.coral, color: c.cream }}>
              {copy.common.takeQuiz}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero: sticky, so the next sections slide over it */}
      <section className="min-h-screen flex items-center relative px-6 sticky top-0 z-0" style={{ backgroundColor: c.bg }}>
        <GradientBlur color={c.coral} className="-top-40 -right-40" opacity={0.5} blur={100} size={500} />
        <GradientBlur color={c.cyan} className="bottom-0 -left-40" opacity={0.3} blur={80} size={400} />
        <div className="max-w-6xl mx-auto w-full pt-24 pb-24 lg:pt-16 lg:pb-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SlideIn direction="left" delay={0}>
                <NoticePill copy={copy} tone="p1" />
              </SlideIn>
              <SlideIn direction="left" delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-7 leading-[1.05] tracking-tight" style={{ color: c.cream }}>
                  {p.hero.line1}
                  <br />
                  <span style={{ color: c.coral }}>{p.hero.line2}</span>
                </h1>
              </SlideIn>
              <SlideIn direction="left" delay={0.3}>
                <p className="text-2xl md:text-3xl font-light mb-4 leading-snug max-w-xl" style={{ color: c.cream }}>
                  {p.hero.hook}
                </p>
                <p className="text-base md:text-lg mb-9 leading-relaxed max-w-xl" style={{ color: c.cream, opacity: 0.65 }}>
                  {p.hero.body}
                </p>
              </SlideIn>
              <SlideIn direction="left" delay={0.5}>
                <a
                  href={LINKS.quiz}
                  className="px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: c.coral, color: c.cream, boxShadow: `0 8px 30px ${c.coral}50` }}
                >
                  {copy.common.takeQuiz} <span className="text-sm opacity-70">({copy.common.free})</span>
                  <ArrowRight size={20} aria-hidden="true" />
                </a>
              </SlideIn>
            </div>
            <SlideIn direction="right" delay={0.4} className="hidden lg:flex flex-col items-center justify-center">
              <CycleDiagram labels={p.cycle} className="w-80 h-80" />
            </SlideIn>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <ChevronDown size={24} className="animate-bounce" style={{ color: c.cream, opacity: 0.4 }} />
          <span className="text-xs" style={{ color: c.cream, opacity: 0.4 }}>
            {p.hero.scroll}
          </span>
        </div>
      </section>

      {/* Why patterns are hard to see: slides over the hero */}
      <section
        className="relative z-10 min-h-screen flex items-center py-24 px-6 rounded-t-[2rem] sticky top-0"
        style={{ backgroundColor: c.dark, boxShadow: '0 -20px 60px rgba(0,0,0,0.5)' }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <FadeIn>
            <SectionLabel color={c.coral} className="mb-10">{p.problem.label}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-4xl lg:text-5xl leading-snug font-light" style={{ color: c.cream }}>
              {p.problem.lines[0]}
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-2xl md:text-4xl lg:text-5xl leading-snug font-light mt-10 md:text-right" style={{ color: c.coral }}>
              {p.problem.lines[1]}
            </p>
          </FadeIn>
          <FadeIn delay={0.9}>
            <p className="text-2xl md:text-4xl lg:text-5xl leading-snug font-light mt-10" style={{ color: c.cream }}>
              {p.problem.lines[2]}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What Seen is */}
      <section className="relative z-20 min-h-screen flex items-center py-24 px-6 rounded-t-[2rem]" style={{ backgroundColor: c.darkMid, boxShadow: '0 -20px 60px rgba(0,0,0,0.45)' }}>
        <GradientBlur color={c.cyan} className="-top-40 -right-60" opacity={0.15} size={500} />
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel color={c.cyan} className="mb-8">{p.what.label}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-4xl lg:text-5xl leading-snug font-light" style={{ color: c.cream }}>
              {p.what.lead}
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-2xl md:text-4xl lg:text-5xl leading-snug font-light mt-8" style={{ color: c.cream }}>
              <Rich text={p.what.body} accent={c.cyan} />
            </p>
          </FadeIn>
          <FadeIn delay={0.9}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-snug font-light mt-12" style={{ color: c.cream, opacity: 0.7 }}>
              {p.what.note}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The six patterns */}
      <section id="patterns" className="relative z-20 py-24 px-6" style={{ backgroundColor: c.bg }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="max-w-3xl">
            <SectionLabel color={c.coral} className="mb-6">{p.patterns.label}</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: c.cream }}>
              {p.patterns.title}
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: 'rgba(250,248,245,0.7)' }}>
              {p.patterns.intro}
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {p.patterns.items.map((item, idx) => (
              <FadeIn key={item.title} delay={(idx % 3) * 0.12}>
                <div
                  className="group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <PatternGlyph index={idx} />
                  <h3 className="font-bold text-xl mt-6 mb-2" style={{ color: c.cream }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(250,248,245,0.62)' }}>
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-30 py-24 px-6 rounded-t-[2rem] overflow-hidden" style={{ backgroundColor: c.darkLight, boxShadow: '0 -20px 60px rgba(0,0,0,0.5)' }}>
        <GradientBlur color={c.coral} className="top-1/2 right-0 -translate-y-1/2" opacity={0.12} size={500} />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          <div>
            <FadeIn>
              <SectionLabel color={c.coral} className="mb-6">{p.how.label}</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight leading-tight" style={{ color: c.cream }}>
                {p.how.title}
              </h2>
            </FadeIn>
            <ol className="space-y-8">
              {p.how.steps.map((step, idx) => {
                const Icon = stepIcons[idx];
                return (
                  <FadeIn key={step.title} delay={0.15 * idx}>
                    <li className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <span className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,107,91,0.12)' }}>
                          <Icon size={22} style={{ color: c.coral }} aria-hidden="true" />
                        </span>
                        {idx < p.how.steps.length - 1 && <span className="w-px flex-1 mt-3" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />}
                      </div>
                      <div className="pb-2">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: 'rgba(250,248,245,0.4)' }}>
                          0{idx + 1}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: c.cream }}>
                          {step.title}
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(250,248,245,0.7)' }}>
                          {step.text}
                        </p>
                      </div>
                    </li>
                  </FadeIn>
                );
              })}
            </ol>
          </div>
          <SlideIn direction="right" delay={0.2}>
            <ChatSample copy={p.how} />
          </SlideIn>
        </div>
      </section>

      {/* Founder */}
      <section className="relative z-40 min-h-[80vh] flex items-center py-24 px-6 rounded-t-[2rem]" style={{ backgroundColor: c.lightCream, boxShadow: '0 -20px 60px rgba(0,0,0,0.3)' }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <StarIcon size={24} style={{ color: c.coral }} />
              <SectionLabel color={c.coral}>{p.founder.label}</SectionLabel>
            </div>
          </FadeIn>
          <StaggeredQuote lines={p.founder.lines} accentLine={p.founder.accentLine} className="text-2xl md:text-4xl lg:text-5xl leading-snug font-light" />
          <FadeIn delay={2.4}>
            <div className="flex items-center gap-4 mt-12 justify-end">
              <div className="text-right">
                <p className="font-bold text-xl" style={{ color: c.dark }}>
                  {p.founder.name}
                </p>
                <p style={{ color: c.dark, opacity: 0.6 }}>{p.founder.role}</p>
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${c.coral}15` }}>
                <StarIcon size={28} style={{ color: c.coral }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Privacy */}
      <section className="relative z-50 py-24 px-6" style={{ backgroundColor: c.dark }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: `${c.cyan}20` }}>
              <Lock size={36} style={{ color: c.cyan }} aria-hidden="true" />
            </div>
            <SectionLabel color={c.cyan} className="mb-4">{p.privacy.label}</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight" style={{ color: c.cream }}>
              {p.privacy.title}
            </h2>
            <p className="text-xl md:text-2xl font-light" style={{ color: c.cream, opacity: 0.7 }}>
              {p.privacy.intro}
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {p.privacy.items.map((item, idx) => {
              const Icon = privacyIcons[idx];
              return (
                <FadeIn key={item.title} delay={idx * 0.12}>
                  <div className="h-full p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.1)' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${c.cyan}15` }}>
                        <Icon size={22} style={{ color: c.cyan }} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1" style={{ color: c.cream }}>
                          {item.title}
                        </h3>
                        <p className="text-base leading-relaxed" style={{ color: c.cream, opacity: 0.62 }}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="text-center mt-10">
            <Link href="/privacy" className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3" style={{ color: c.cyan }}>
              {p.privacy.link} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Crossover to Phase 2: a glimpse of its light identity */}
      <section className="relative z-50 px-6 pb-24" style={{ backgroundColor: c.dark }}>
        <FadeIn className="max-w-4xl mx-auto">
          <Link
            href={localePath(locale, '/practice')}
            className="group relative block overflow-hidden rounded-[2rem] p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1"
            style={{ backgroundColor: '#faf8f5' }}
          >
            <div aria-hidden="true" className="absolute -top-24 -right-16 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(78,205,196,0.35) 0%, transparent 70%)', filter: 'blur(30px)' }} />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] mb-3" style={{ color: '#1d6f6a' }}>
                  {p.crossover.label}
                </p>
                <p className="text-2xl md:text-3xl font-bold leading-snug" style={{ color: '#1a1a2e' }}>
                  {p.crossover.title}
                </p>
              </div>
              <span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-center md:whitespace-nowrap transition-all group-hover:gap-3" style={{ backgroundColor: '#4ECDC4', color: '#1a1a2e' }}>
                {p.crossover.cta} <ArrowRight size={18} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </FadeIn>
      </section>

      <div className="relative z-[60]">
        <PricingSection copy={copy} tone="p1" intro={copy.pricing.intro} />
        <SafetySection copy={copy} tone="p1" />
        <FaqSection copy={copy} tone="p1" items={p.faq.items} title={p.faq.title} />
        {appSpeaks(locale) ? <Waitlist copy={p.waitlist} /> : <LanguageNoticeSection copy={copy} tone="p1" />}
        <SiteFooterBlock copy={copy} tone="p1" locale={locale} />
      </div>
    </div>
  );
}
