import { BUSINESS, PRICES } from '../components/business';
import type { PartialCopy } from './types';

// NEEDS NATIVE CHECK. Machine-quality Italian drafted by an agent.
// Untranslated keys fall back to English (see index.ts).
// Crisis numbers: verify before launch (I18N-SITE-01). Italy has no single
// national suicide line; Telefono Amico is not 24/7.

const it: PartialCopy = {
  needsNativeCheck: true,
  meta: {
    p1Title: 'Seen: guarda i tuoi schemi di stress',
    p1Description:
      'Seen è un software per l’autoriflessione. Un quiz gratuito di 14 domande, brevi check-in quotidiani con un’IA e una riflessione settimanale con le tue parole.',
    p2Title: 'Seen Pratica: uno spazio per esercitarti tra le sedute di terapia',
    p2Description:
      'Per chi è in terapia. Dopo una seduta annota su cosa vuoi lavorare, scegli pratiche da una biblioteca e pianifica quando farle.',
  },
  common: {
    language: 'Lingua',
    login: 'Accedi',
    takeQuiz: 'Fai il quiz',
    free: 'gratis',
    menu: 'Menu',
    crisis: {
      title: 'Se sei in pericolo o pensi di toglierti la vita',
      body: 'Seen non è un servizio di emergenza. Contatta qualcuno adesso.',
      lines: [
        { label: 'Emergenze, in tutta l’UE', number: '112' },
        { label: 'Italia, Telefono Amico', number: '02 2327 2327' },
      ],
      elsewhere: 'Altrove: trova una linea di ascolto su findahelpline.com',
    },
    footer: {
      whatSeenIs: 'Cos’è Seen',
      pricing: 'Prezzi',
      terms: 'Termini',
      refunds: 'Rimborsi',
      privacy: 'Privacy',
      cookies: 'Cookie',
      contact: 'Contatti',
      forTherapy: 'Per chi è in terapia',
      forReflection: 'Quiz e check-in',
      productOf: `Seen è un prodotto di ${BUSINESS.tradingName}, la ditta individuale (eenmanszaak) di ${BUSINESS.owner}.`,
      rights: 'Tutti i diritti riservati.',
      legalNote: 'Per ora le pagine legali sono solo in inglese.',
    },
    notice: {
      pill: 'L’app arriva in italiano a gennaio',
      title: 'L’app arriva in italiano a gennaio',
      body: 'Questo sito è già in italiano. L’app parte in inglese e olandese, e la versione italiana arriva a gennaio 2027. Lasciaci la tua email e ti scriveremo una volta quando sarà pronta.',
      emailLabel: 'Indirizzo email',
      emailPlaceholder: 'tu@esempio.it',
      consent: 'Sì, scrivetemi una volta quando Seen sarà disponibile in italiano. Posso revocare questo consenso in qualsiasi momento.',
      button: 'Avvisami',
      pending: 'La preiscrizione apre a breve.',
    },
  },
  pricing: {
    label: 'Prezzi',
    title: 'Un abbonamento con tutto incluso',
    badge: 'Prezzo per i membri fondatori',
    annual: { name: 'Annuale', period: 'all’anno', note: 'Meno di 5 € al mese, addebitato una volta all’anno.', price: PRICES.founding.annual.replace('.', ',') },
    monthly: { name: 'Mensile', period: 'al mese', note: 'Addebitato ogni mese.', price: PRICES.founding.monthly.replace('.', ',') },
    cta: 'Inizia con il quiz gratuito',
  },
  p1: {
    hero: {
      line1: 'Guarda lo schema.',
      line2: 'Spezza il ciclo.',
      hook: 'Sotto il tuo stress c\u2019è uno schema. Seen ti aiuta a dargli un nome.',
      body: 'Cosa ne fai quando lo vedi, anche spezzare un ciclo, lo decidi tu.',
      scroll: 'Scorri',
    },
    cycle: ['Stress', 'Reagire', 'Rimpianto', 'Ripetere'],
    crossover: {
      label: 'Sei in terapia adesso?',
      title: 'Seen ha uno spazio di pratica a parte per il tempo tra le sedute.',
      cta: 'Scopri Seen per esercitarti tra le sedute',
    },
  },
  p2: {
    tag: 'Pratica',
    hero: {
      label: 'Per chi è in terapia',
      title: 'Fatto in Europa da chi si è seduto sulla poltrona della terapia,',
      accent: 'per le settimane tra una seduta e l\u2019altra.',
      body: 'La terapia avviene in una stanza, un\u2019ora alla volta. Il resto della settimana avviene ovunque.',
      cta: 'Inizia con il quiz',
      ctaNote: 'Indica che sei in terapia e Seen apre il tuo spazio di pratica.',
      secondary: 'Come funziona',
    },
    crossover: {
      label: 'Non sei in terapia adesso?',
      title: 'Seen inizia con un quiz gratuito e brevi check-in quotidiani.',
      cta: 'Scopri Seen per l’autoriflessione',
    },
  },
};

export default it;
