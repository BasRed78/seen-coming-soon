import { BUSINESS, PRICES } from '../components/business';
import type { PartialCopy } from './types';

// NEEDS NATIVE CHECK. Machine-quality French drafted by an agent.
// Untranslated keys fall back to English (see index.ts).
// Crisis numbers: verify before launch (I18N-SITE-01).

const fr: PartialCopy = {
  needsNativeCheck: true,
  meta: {
    p1Title: 'Seen : vois tes schémas de stress',
    p1Description:
      'Seen est un logiciel de réflexion personnelle. Un quiz gratuit de 14 questions, de courts check-ins quotidiens avec une IA et une réflexion hebdomadaire avec tes propres mots.',
    p2Title: 'Seen Pratique : un espace pour pratiquer entre tes séances de thérapie',
    p2Description:
      'Pour les personnes en thérapie. Après une séance, note ce sur quoi tu veux travailler, choisis des pratiques dans une bibliothèque et planifie quand les faire.',
  },
  common: {
    language: 'Langue',
    login: 'Se connecter',
    takeQuiz: 'Faire le quiz',
    free: 'gratuit',
    menu: 'Menu',
    crisis: {
      title: 'Si tu es en danger ou si tu penses à mettre fin à tes jours',
      body: 'Seen n’est pas un service d’urgence. Contacte quelqu’un maintenant.',
      lines: [
        { label: 'Urgences, partout dans l’UE', number: '112' },
        { label: 'France, numéro national de prévention du suicide, gratuit, 24 h/24', number: '3114' },
        { label: 'Belgique, Centre de Prévention du Suicide', number: '0800 32 123' },
      ],
      elsewhere: 'Ailleurs : trouve une ligne d’écoute sur findahelpline.com',
    },
    footer: {
      whatSeenIs: 'Ce qu’est Seen',
      pricing: 'Tarifs',
      terms: 'Conditions',
      refunds: 'Remboursements',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      contact: 'Contact',
      forTherapy: 'Pour les personnes en thérapie',
      forReflection: 'Quiz et check-ins',
      productOf: `Seen est un produit de ${BUSINESS.tradingName}, l’entreprise individuelle (eenmanszaak) de ${BUSINESS.owner}.`,
      rights: 'Tous droits réservés.',
      legalNote: 'Les pages juridiques sont pour l’instant uniquement en anglais.',
    },
    notice: {
      pill: 'L’application arrive en français en janvier',
      title: 'L’application arrive en français en janvier',
      body: 'Ce site est déjà en français. L’application démarre en anglais et en néerlandais, et la version française suit en janvier 2027. Laisse ton e-mail et nous t’écrirons une fois quand elle sera prête.',
      emailLabel: 'Adresse e-mail',
      emailPlaceholder: 'toi@exemple.fr',
      consent: 'Oui, écrivez-moi une fois quand Seen sera disponible en français. Je peux retirer ce consentement à tout moment.',
      button: 'Me prévenir',
      pending: 'La préinscription ouvre bientôt.',
    },
  },
  pricing: {
    label: 'Tarifs',
    title: 'Un seul abonnement, tout compris',
    badge: 'Prix membre fondateur',
    annual: { name: 'Annuel', period: 'par an', note: 'Moins de 5 € par mois, facturé une fois par an.', price: PRICES.founding.annual.replace('.', ',') },
    monthly: { name: 'Mensuel', period: 'par mois', note: 'Facturé chaque mois.', price: PRICES.founding.monthly.replace('.', ',') },
    cta: 'Commencer par le quiz gratuit',
  },
  p1: {
    hero: {
      line1: 'Vois le schéma.',
      line2: 'Brise le cercle.',
      hook: 'Sous ton stress, il y a un schéma. Seen t\u2019aide à le nommer.',
      body: 'Ce que tu en fais une fois que tu le vois, y compris briser un cercle, c\u2019est ton choix.',
      scroll: 'Fais défiler',
    },
    cycle: ['Stress', 'Faire face', 'Regret', 'Répéter'],
    crossover: {
      label: 'En thérapie en ce moment ?',
      title: 'Seen a un espace de pratique à part pour le temps entre les séances.',
      cta: 'Voir Seen pour pratiquer entre les séances',
    },
  },
  p2: {
    tag: 'Pratique',
    hero: {
      label: 'Pour les personnes en thérapie',
      title: 'Conçu en Europe par quelqu\u2019un qui s\u2019est assis dans le fauteuil de thérapie,',
      accent: 'pour les semaines entre les séances.',
      body: 'La thérapie se passe dans une pièce, une heure à la fois. Le reste de la semaine se passe partout ailleurs.',
      cta: 'Commencer par le quiz',
      ctaNote: 'Indique que tu es en thérapie et Seen ouvre ton espace de pratique.',
      secondary: 'Comment ça marche',
    },
    crossover: {
      label: 'Pas en thérapie en ce moment ?',
      title: 'Seen commence par un quiz gratuit et de courts check-ins quotidiens.',
      cta: 'Voir Seen pour la réflexion personnelle',
    },
  },
};

export default fr;
