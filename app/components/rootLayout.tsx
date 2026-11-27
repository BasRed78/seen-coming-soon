import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';
import { BUSINESS } from './business';

// Editorial serif for accents (Phase 2 library, therapist summary, shared page titles).
// Self-hosted from @fontsource-variable/newsreader (SIL Open Font License), so the
// build never depends on fetching from Google Fonts.
const newsreader = localFont({
  src: [
    { path: '../../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2', style: 'normal', weight: '200 800' },
    { path: '../../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-italic.woff2', style: 'italic', weight: '200 800' },
  ],
  variable: '--font-newsreader',
  display: 'swap',
});

export const baseMetadata: Metadata = {
  metadataBase: new URL(BUSINESS.site),
  title: 'Seen: see your stress patterns',
  description:
    'Seen is self-reflection software that helps you notice how you cope with stress. A free pattern quiz, short daily check-ins and weekly reflections. No medical advice.',
};

export const baseViewport: Viewport = {
  themeColor: '#0f0f1a',
  width: 'device-width',
  initialScale: 1,
};

/** Shared <html> shell for both root layouts: (en) and [locale]. */
export function HtmlShell({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang} className={newsreader.variable}>
      <body>{children}</body>
    </html>
  );
}
