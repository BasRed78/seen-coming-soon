import '../globals.css';
import type { ReactNode } from 'react';
import { HtmlShell, baseMetadata, baseViewport } from '../components/rootLayout';
import { PREFIXED_LOCALES, isLocale } from '../i18n';

// Root layout for /nl, /de, /fr, /es and /it. A separate root layout lets
// <html lang> match the page language.
export const metadata = baseMetadata;
export const viewport = baseViewport;
export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleRootLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HtmlShell lang={isLocale(locale) ? locale : 'en'}>{children}</HtmlShell>;
}
