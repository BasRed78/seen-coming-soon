import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';
import nl from './nl';
import { APP_LOCALES, DEFAULT_LOCALE, LOCALES, type Copy, type Locale, type PartialCopy } from './types';

export * from './types';

/** Deep merge: objects merge key by key, arrays and strings replace. */
function mergeCopy<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base) || typeof base !== 'object' || base === null) return override as T;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
    out[key] = mergeCopy((base as Record<string, unknown>)[key], value);
  }
  return out as T;
}

const partials: Record<Locale, PartialCopy | Copy> = { en, nl, de, fr, es, it };

export function getCopy(locale: Locale): Copy {
  if (locale === DEFAULT_LOCALE) return en;
  return mergeCopy(en, partials[locale]);
}

export function appSpeaks(locale: Locale): boolean {
  return APP_LOCALES.includes(locale);
}

/** Path for a page in a language. English lives at the root, the rest under /<locale>. */
export function localePath(locale: Locale, path: '/' | '/practice'): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/** hreflang map for page metadata. */
export function alternates(locale: Locale, path: '/' | '/practice') {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = localePath(l, path);
  languages['x-default'] = localePath(DEFAULT_LOCALE, path);
  return { canonical: localePath(locale, path), languages };
}

/** Locales that get their own /<locale> route. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);
