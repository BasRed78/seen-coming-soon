import { BUSINESS, PRICES } from '../components/business';
import type { PartialCopy } from './types';

// NEEDS NATIVE CHECK. Machine-quality German drafted by an agent.
// Untranslated keys fall back to English (see index.ts).
// Crisis numbers: verify before launch (I18N-SITE-01).

const de: PartialCopy = {
  needsNativeCheck: true,
  meta: {
    p1Title: 'Seen: Erkenne deine Stressmuster',
    p1Description:
      'Seen ist eine Software zur Selbstreflexion. Ein kostenloses Muster-Quiz mit 14 Fragen, kurze tägliche Check-ins mit einer KI und eine wöchentliche Reflexion in deinen eigenen Worten.',
    p2Title: 'Seen Üben: ein Ort zum Üben zwischen deinen Therapiesitzungen',
    p2Description:
      'Für Menschen in Therapie. Halte nach einer Sitzung fest, woran du arbeiten willst, wähle Übungen aus einer Bibliothek und plane, wann du sie machst.',
  },
  common: {
    language: 'Sprache',
    login: 'Anmelden',
    takeQuiz: 'Zum Quiz',
    free: 'kostenlos',
    menu: 'Menü',
    crisis: {
      title: 'Wenn du in Gefahr bist oder daran denkst, dir das Leben zu nehmen',
      body: 'Seen ist kein Notdienst. Bitte wende dich jetzt an jemanden.',
      lines: [
        { label: 'Notruf, überall in der EU', number: '112' },
        { label: 'Deutschland, TelefonSeelsorge, kostenlos und rund um die Uhr', number: '0800 111 0 111' },
        { label: 'Österreich, TelefonSeelsorge', number: '142' },
        { label: 'Schweiz, Die Dargebotene Hand', number: '143' },
      ],
      elsewhere: 'Anderswo: eine Hilfe-Hotline findest du auf findahelpline.com',
    },
    footer: {
      whatSeenIs: 'Was Seen ist',
      pricing: 'Preise',
      terms: 'AGB',
      refunds: 'Erstattung',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      contact: 'Kontakt',
      forTherapy: 'Für Menschen in Therapie',
      forReflection: 'Muster-Quiz und Check-ins',
      productOf: `Seen ist ein Produkt von ${BUSINESS.tradingName}, dem Einzelunternehmen (eenmanszaak) von ${BUSINESS.owner}.`,
      rights: 'Alle Rechte vorbehalten.',
      legalNote: 'Die rechtlichen Seiten gibt es vorerst nur auf Englisch.',
    },
    notice: {
      pill: 'Die App startet im Januar auf Deutsch',
      title: 'Die App startet im Januar auf Deutsch',
      body: 'Diese Website gibt es schon auf Deutsch. Die App startet auf Englisch und Niederländisch, die deutsche Version folgt im Januar 2027. Trag dich ein, dann schreiben wir dir einmal, sobald sie bereit ist.',
      emailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'du@beispiel.de',
      consent: 'Ja, schreibt mir einmal, sobald Seen auf Deutsch verfügbar ist. Ich kann diese Einwilligung jederzeit widerrufen.',
      button: 'Benachrichtige mich',
      pending: 'Die Voranmeldung öffnet in Kürze.',
    },
  },
  pricing: {
    label: 'Preise',
    title: 'Ein Abo mit allem',
    badge: 'Preis für Gründungsmitglieder',
    annual: { name: 'Jährlich', period: 'pro Jahr', note: 'Unter 5 € im Monat, einmal im Jahr abgerechnet.', price: PRICES.founding.annual.replace('.', ',') },
    monthly: { name: 'Monatlich', period: 'pro Monat', note: 'Monatlich abgerechnet.', price: PRICES.founding.monthly.replace('.', ',') },
    cta: 'Mit dem kostenlosen Quiz starten',
  },
  p1: {
    hero: {
      line1: 'Erkenne das Muster.',
      line2: 'Durchbrich den Kreislauf.',
      hook: 'Unter deinem Stress liegt ein Muster. Seen hilft dir, es zu benennen.',
      body: 'Was du damit machst, sobald du es siehst, auch einen Kreislauf zu durchbrechen, entscheidest du selbst.',
      scroll: 'Weiterscrollen',
    },
    cycle: ['Stress', 'Bewältigen', 'Reue', 'Wiederholen'],
    crossover: {
      label: 'Gerade in Therapie?',
      title: 'Seen hat einen eigenen Übungsraum für die Zeit zwischen den Sitzungen.',
      cta: 'Seen zum Üben zwischen Sitzungen ansehen',
    },
  },
  p2: {
    tag: 'Üben',
    hero: {
      label: 'Für Menschen in Therapie',
      title: 'Gemacht in Europa von jemandem, der selbst im Therapiesessel saß,',
      accent: 'für die Wochen zwischen den Sitzungen.',
      body: 'Therapie findet in einem Raum statt, eine Stunde nach der anderen. Der Rest der Woche findet überall sonst statt.',
      cta: 'Mit dem Quiz starten',
      ctaNote: 'Gib an, dass du in Therapie bist, dann öffnet Seen deinen Übungsraum.',
      secondary: 'So funktioniert es',
    },
    crossover: {
      label: 'Gerade nicht in Therapie?',
      title: 'Seen beginnt mit einem kostenlosen Muster-Quiz und kurzen täglichen Check-ins.',
      cta: 'Seen zur Selbstreflexion ansehen',
    },
  },
};

export default de;
