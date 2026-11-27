import { BUSINESS, PRICES } from '../components/business';
import type { PartialCopy } from './types';

// NEEDS NATIVE CHECK. Machine-quality Spanish drafted by an agent.
// Untranslated keys fall back to English (see index.ts).
// Crisis numbers: verify before launch (I18N-SITE-01).

const es: PartialCopy = {
  needsNativeCheck: true,
  meta: {
    p1Title: 'Seen: ve tus patrones de estrés',
    p1Description:
      'Seen es un software de autorreflexión. Un cuestionario gratuito de 14 preguntas, breves check-ins diarios con una IA y una reflexión semanal con tus propias palabras.',
    p2Title: 'Seen Práctica: un espacio para practicar entre sesiones de terapia',
    p2Description:
      'Para personas en terapia. Después de una sesión, anota en qué quieres trabajar, elige prácticas de una biblioteca y planifica cuándo hacerlas.',
  },
  common: {
    language: 'Idioma',
    login: 'Iniciar sesión',
    takeQuiz: 'Haz el cuestionario',
    free: 'gratis',
    menu: 'Menú',
    crisis: {
      title: 'Si estás en peligro o piensas en quitarte la vida',
      body: 'Seen no es un servicio de emergencias. Por favor, contacta con alguien ahora.',
      lines: [
        { label: 'Emergencias, en toda la UE', number: '112' },
        { label: 'España, Línea 024 de atención a la conducta suicida, gratuita, 24 horas', number: '024' },
      ],
      elsewhere: 'En otro lugar: encuentra una línea de ayuda en findahelpline.com',
    },
    footer: {
      whatSeenIs: 'Qué es Seen',
      pricing: 'Precios',
      terms: 'Condiciones',
      refunds: 'Reembolsos',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      contact: 'Contacto',
      forTherapy: 'Para personas en terapia',
      forReflection: 'Cuestionario y check-ins',
      productOf: `Seen es un producto de ${BUSINESS.tradingName}, la empresa unipersonal (eenmanszaak) de ${BUSINESS.owner}.`,
      rights: 'Todos los derechos reservados.',
      legalNote: 'Por ahora, las páginas legales solo están en inglés.',
    },
    notice: {
      pill: 'La app llega en español en enero',
      title: 'La app llega en español en enero',
      body: 'Este sitio ya está en español. La app empieza en inglés y neerlandés, y la versión en español llega en enero de 2027. Déjanos tu correo y te escribiremos una vez cuando esté lista.',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@ejemplo.es',
      consent: 'Sí, escribidme una vez cuando Seen esté disponible en español. Puedo retirar este consentimiento en cualquier momento.',
      button: 'Avisadme',
      pending: 'La preinscripción abre pronto.',
    },
  },
  pricing: {
    label: 'Precios',
    title: 'Una suscripción con todo incluido',
    badge: 'Precio de miembro fundador',
    annual: { name: 'Anual', period: 'al año', note: 'Menos de 5 € al mes, facturado una vez al año.', price: PRICES.founding.annual.replace('.', ',') },
    monthly: { name: 'Mensual', period: 'al mes', note: 'Facturado cada mes.', price: PRICES.founding.monthly.replace('.', ',') },
    cta: 'Empieza con el cuestionario gratuito',
  },
  p1: {
    hero: {
      line1: 'Ve el patrón.',
      line2: 'Rompe el ciclo.',
      hook: 'Bajo tu estrés hay un patrón. Seen te ayuda a ponerle nombre.',
      body: 'Lo que hagas cuando lo veas, incluido romper un ciclo, lo decides tú.',
      scroll: 'Desplázate',
    },
    cycle: ['Estrés', 'Afrontar', 'Arrepentirse', 'Repetir'],
    crossover: {
      label: '¿Estás en terapia ahora?',
      title: 'Seen tiene un espacio de práctica aparte para el tiempo entre sesiones.',
      cta: 'Ver Seen para practicar entre sesiones',
    },
  },
  p2: {
    tag: 'Práctica',
    hero: {
      label: 'Para personas en terapia',
      title: 'Hecho en Europa por alguien que se ha sentado en la silla de terapia,',
      accent: 'para las semanas entre sesiones.',
      body: 'La terapia ocurre en una sala, una hora cada vez. El resto de la semana ocurre en todas partes.',
      cta: 'Empieza con el cuestionario',
      ctaNote: 'Indica que estás en terapia y Seen abre tu espacio de práctica.',
      secondary: 'Cómo funciona',
    },
    crossover: {
      label: '¿No estás en terapia ahora?',
      title: 'Seen empieza con un cuestionario gratuito y breves check-ins diarios.',
      cta: 'Ver Seen para la autorreflexión',
    },
  },
};

export default es;
