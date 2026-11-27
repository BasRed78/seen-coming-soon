'use client';

// Shared building blocks ported from the app's Phase 1 landing page
// (seen2: src/app/page.tsx): the star, gradient orbs and scroll-in motion.

import Link from 'next/link';
import { Globe, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { LOCALES, LOCALE_NAMES, localePath, type Locale } from '../i18n';

export const STAR_PATH = 'M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z';

export function StarIcon({ size = 24, className = '', style = {} }: { size?: number; className?: string; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d={STAR_PATH} />
    </svg>
  );
}

/** The logo: ONE coral star, then "Seen". Never a star on both sides. */
export function Logo({ size = 'md', textColor, tag, tagColor }: { size?: 'sm' | 'md'; textColor: string; tag?: string; tagColor?: string }) {
  const star = size === 'sm' ? 16 : 26;
  return (
    <span className="inline-flex items-center gap-2.5">
      <StarIcon size={star} style={{ color: '#ff6b5b' }} />
      <span className={size === 'sm' ? 'font-bold text-sm' : 'font-black text-2xl tracking-tight'} style={{ color: textColor }}>
        Seen
      </span>
      {tag && (
        <span
          className="ml-1 hidden sm:inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em]"
          style={{ color: tagColor, backgroundColor: `${tagColor}1f` }}
        >
          {tag}
        </span>
      )}
    </span>
  );
}

export function GradientBlur({ color, className = '', opacity = 0.3, blur = 80, size = 400 }: { color: string; className?: string; opacity?: number; blur?: number; size?: number }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ width: size, height: size, background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, filter: `blur(${blur}px)`, opacity }}
    />
  );
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Read once on mount; the effect is the only place window exists.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

function useReveal(delay: number) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    // Fallback so content never stays hidden if the observer does not fire.
    const timer = setTimeout(() => setVisible(true), delay * 1000 + 1200);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(timer);
        }
      },
      { threshold: 0.1, rootMargin: '50px' },
    );
    if (el) observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);
  return { ref, visible };
}

export function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal(delay);
  const reduced = usePrefersReducedMotion();
  const shown = visible || reduced;
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(30px)',
        transition: reduced ? 'none' : `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function SlideIn({ children, delay = 0, direction = 'left', className = '' }: { children: ReactNode; delay?: number; direction?: 'left' | 'right'; className?: string }) {
  const { ref, visible } = useReveal(delay);
  const reduced = usePrefersReducedMotion();
  const shown = visible || reduced;
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateX(0)' : direction === 'left' ? 'translateX(-60px)' : 'translateX(60px)',
        transition: reduced ? 'none' : `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/** Renders *word* as an accent-coloured span. */
export function Rich({ text, accent }: { text: string; accent: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('*') && part.endsWith('*') ? (
          <span key={i} style={{ color: accent }}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Scroll state for the fixed navigation: solid after 50px, plus a progress bar. */
export function useScrollNav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { scrolled, progress };
}

export function LanguageSwitcher({
  locale,
  path,
  label,
  color,
  menuBg,
  menuText,
  menuBorder,
  activeColor,
}: {
  locale: Locale;
  path: '/' | '/practice';
  label: string;
  color: string;
  menuBg: string;
  menuText: string;
  menuBorder: string;
  activeColor: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={label}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-opacity hover:opacity-100"
        style={{ color, opacity: 0.85 }}
      >
        <Globe size={16} aria-hidden="true" />
        <span className="uppercase">{locale}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      {open && (
        <ul
          className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl py-1.5 shadow-2xl"
          style={{ backgroundColor: menuBg, border: `1px solid ${menuBorder}` }}
        >
          {LOCALES.map((l) => (
            <li key={l}>
              <Link
                href={localePath(l, path)}
                hrefLang={l}
                lang={l}
                aria-current={l === locale ? 'page' : undefined}
                className="flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-black/5"
                style={{ color: l === locale ? activeColor : menuText, fontWeight: l === locale ? 700 : 500 }}
                onClick={() => setOpen(false)}
              >
                {LOCALE_NAMES[l]}
                <span className="text-xs uppercase opacity-50">{l}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
