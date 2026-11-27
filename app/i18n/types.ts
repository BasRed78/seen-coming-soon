// Site copy, one dictionary per language.
//
// EN and NL are complete. DE, FR, ES and IT translate the page chrome, the two
// heroes, the crossover links and the "app launches in January" notice; every
// other key falls back to English through mergeCopy() in index.ts until the
// full translations land (task I18N-SITE-01). All DE/FR/ES/IT text is marked
// NEEDS NATIVE CHECK.

export const LOCALES = ['en', 'nl', 'de', 'fr', 'es', 'it'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** Languages the app itself is available in at launch. Other site languages show the January notice. */
export const APP_LOCALES: readonly Locale[] = ['en', 'nl'];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

export interface QA {
  q: string;
  a: string;
}

export interface Titled {
  title: string;
  text: string;
}

export interface ChatLine {
  from: 'ai' | 'user';
  text: string;
}

export interface CrisisLine {
  label: string;
  number: string;
}

export interface PricingCopy {
  label: string;
  title: string;
  intro: string;
  badge: string;
  annual: { name: string; period: string; note: string; price: string };
  monthly: { name: string; period: string; note: string; price: string };
  window: string;
  terms: string;
  includedLabel: string;
  included: string[];
  cta: string;
  details: string;
}

export interface Copy {
  /** Set on dictionaries that still need a native speaker's review. */
  needsNativeCheck?: boolean;
  meta: {
    p1Title: string;
    p1Description: string;
    p2Title: string;
    p2Description: string;
  };
  common: {
    language: string;
    login: string;
    takeQuiz: string;
    free: string;
    menu: string;
    ai: { label: string; text: string };
    notTherapy: { label: string; text: string; link: string };
    crisis: { title: string; body: string; lines: CrisisLine[]; elsewhere: string };
    faqLabel: string;
    footer: {
      whatSeenIs: string;
      pricing: string;
      terms: string;
      refunds: string;
      privacy: string;
      cookies: string;
      contact: string;
      forTherapy: string;
      forReflection: string;
      productOf: string;
      rights: string;
      /** Shown on non-English sites: the legal pages are English only for now. */
      legalNote?: string;
    };
    /** Only for site languages the app does not support yet. */
    notice?: {
      pill: string;
      title: string;
      body: string;
      emailLabel: string;
      emailPlaceholder: string;
      consent: string;
      button: string;
      pending: string;
    };
  };
  pricing: PricingCopy;
  p1: {
    nav: { how: string; patterns: string; pricing: string; faq: string };
    /** hook: recognition line under the tagline. body: the 'your own choice' line (COPY-01). */
    hero: { line1: string; line2: string; hook: string; body: string; scroll: string };
    cycle: [string, string, string, string];
    problem: { label: string; lines: [string, string, string] };
    what: { label: string; lead: string; body: string; note: string };
    patterns: { label: string; title: string; intro: string; items: Titled[] };
    how: {
      label: string;
      title: string;
      steps: Titled[];
      sampleLabel: string;
      sample: ChatLine[];
      sampleNote: string;
    };
    founder: { label: string; lines: string[]; accentLine: number; name: string; role: string };
    privacy: { label: string; title: string; intro: string; items: Titled[]; link: string };
    crossover: { label: string; title: string; cta: string };
    faq: { title: string; items: QA[] };
    waitlist: {
      title: string;
      text: string;
      placeholder: string;
      button: string;
      loading: string;
      success: string;
      successText: string;
      error: string;
      consent: string;
    };
  };
  p2: {
    tag: string;
    nav: { how: string; library: string; therapist: string; pricing: string; faq: string; start: string };
    hero: { label: string; title: string; accent: string; body: string; cta: string; ctaNote: string; secondary: string };
    phone: {
      greeting: string;
      sub: string;
      checkin: string;
      checkinSub: string;
      start: string;
      session: string;
      sessionSub: string;
      intentionLabel: string;
      intention: string;
      intentionDate: string;
      plannedLabel: string;
      plannedTitle: string;
      plannedTime: string;
      prepare: string;
      prepareSub: string;
    };
    cycle: [string, string, string, string];
    week: { label: string; title: string; steps: { when: string; title: string; text: string }[] };
    asks: { label: string; title: string; asksLabel: string; asks: string[]; neverLabel: string; never: string[]; note: string };
    therapist: {
      label: string;
      title: string;
      body: string;
      cardTitle: string;
      points: string[];
      contact: string;
      share: string;
      copied: string;
    };
    library: {
      label: string;
      title: string;
      intro: string;
      topicsLabel: string;
      topics: string[];
      showing: string;
      browseAll: string;
      minutes: string;
      entries: { title: string; source: string; minutes: number }[];
      ownTitle: string;
      ownText: string;
      afterTitle: string;
      afterText: string;
      credits: string;
    };
    pricingIntro: string;
    faq: { title: string; items: QA[] };
    crossover: { label: string; title: string; cta: string };
  };
}

type DeepPartial<T> = T extends readonly unknown[] ? T : T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;
export type PartialCopy = DeepPartial<Copy>;
