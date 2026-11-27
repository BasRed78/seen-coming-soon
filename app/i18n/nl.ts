import { BUSINESS, PRICES } from '../components/business';
import type { Copy } from './types';

// Dutch: informal "je", and "je wil" rather than "je wilt" (ops/CONTEXT.md).
// Pattern names and practice titles are Dutch drafts; the app's own nl.ts
// (I18N-APP-01) must use the same names once it exists.

const nlPrice = (p: string) => p.replace('.', ',');

const nl: Copy = {
  meta: {
    p1Title: 'Seen: zie je stresspatronen',
    p1Description:
      'Seen is software voor zelfreflectie. Een gratis patroonquiz van 14 vragen, korte dagelijkse check-ins met een AI en een wekelijkse reflectie in je eigen woorden.',
    p2Title: 'Seen Oefenen: een plek om te oefenen tussen je therapiesessies',
    p2Description:
      'Voor mensen in therapie. Schrijf na een sessie op waar je aan wil werken, kies oefeningen uit een bibliotheek, plan wanneer je ze doet en verzamel je aantekeningen voor de volgende keer.',
  },
  common: {
    language: 'Taal',
    login: 'Inloggen',
    takeQuiz: 'Doe de quiz',
    free: 'gratis',
    menu: 'Menu',
    ai: {
      label: 'Over de AI',
      text: 'Check-ins worden geschreven door een AI-model (Claude, van Anthropic). Er leest geen mens mee, en de AI kan zich vergissen.',
    },
    notTherapy: {
      label: 'Wat Seen is en wat niet',
      text: 'Seen is software voor zelfreflectie voor volwassenen. Seen geeft geen medisch of psychologisch advies, stelt geen diagnose, behandelt niets en vervangt geen arts of therapeut.',
      link: 'Lees de volledige verklaring (Engels)',
    },
    crisis: {
      title: 'Als je in gevaar bent of aan zelfdoding denkt',
      body: 'Seen is geen noodhulpdienst. Neem nu contact op met iemand.',
      lines: [
        { label: 'Noodnummer, overal in de EU', number: '112' },
        { label: '113 Zelfmoordpreventie, gratis en dag en nacht', number: '113 of 0800-0113' },
        { label: 'België, Zelfmoordlijn', number: '1813' },
      ],
      elsewhere: 'Ergens anders: zoek een hulplijn op findahelpline.com',
    },
    faqLabel: 'Vragen',
    footer: {
      whatSeenIs: 'Wat Seen is',
      pricing: 'Prijzen',
      terms: 'Voorwaarden',
      refunds: 'Terugbetaling',
      privacy: 'Privacy',
      cookies: 'Cookies',
      contact: 'Contact',
      forTherapy: 'Voor mensen in therapie',
      forReflection: 'Patroonquiz en check-ins',
      productOf: `Seen is een product van ${BUSINESS.tradingName}, de eenmanszaak van ${BUSINESS.owner}.`,
      rights: 'Alle rechten voorbehouden.',
      legalNote: 'De juridische pagina’s zijn voorlopig alleen in het Engels.',
    },
  },
  pricing: {
    label: 'Prijzen',
    title: 'Eén abonnement met alles erin',
    intro: 'De quiz is gratis. Founding members betalen minder en houden hun prijs zolang hun abonnement doorloopt.',
    badge: 'Prijs voor founding members',
    annual: { name: 'Jaarlijks', period: 'per jaar', note: 'Minder dan €5 per maand, één keer per jaar betaald.', price: nlPrice(PRICES.founding.annual) },
    monthly: { name: 'Maandelijks', period: 'per maand', note: 'Elke maand betaald.', price: nlPrice(PRICES.founding.monthly) },
    window: `Founding-prijzen gelden voor de eerste 500 betalende leden, of tot 31 maart 2027 als dat eerder is. Daarna betalen nieuwe leden ${nlPrice(PRICES.regular.annual)} per jaar of ${nlPrice(PRICES.regular.monthly)} per maand.`,
    terms: `Prijzen zijn inclusief btw. Je kunt altijd opzeggen. Binnen ${PRICES.refundDays} dagen krijg je je geld volledig terug, zonder vragen. Er is geen gratis proefperiode.`,
    includedLabel: 'Inbegrepen',
    included: [
      'Dagelijkse check-ins',
      'Een wekelijkse reflectie',
      'De oefenruimte voor mensen in therapie',
      'Herinneringen op tijden die jij kiest',
      'Crisiscontacten in de app',
    ],
    cta: 'Begin met de gratis quiz',
    details: 'Alle prijsdetails (Engels)',
  },
  p1: {
    nav: { how: 'Hoe het werkt', patterns: 'Patronen', pricing: 'Prijzen', faq: 'Vragen' },
    hero: {
      line1: 'Zie het patroon.',
      line2: 'Doorbreek de cirkel.',
      hook: 'Onder je stress zit een patroon. Seen helpt je het een naam te geven.',
      body: 'Wat je doet als je het ziet, ook het doorbreken van een cirkel, bepaal je zelf.',
      scroll: 'Scroll verder',
    },
    cycle: ['Stress', 'Coping', 'Spijt', 'Herhaling'],
    problem: {
      label: 'Waarom je patronen lastig ziet',
      lines: [
        'Het patroon gaat vanzelf. Tegen de tijd dat je het merkt, heb je het al gedaan.',
        'Je scrolt, drinkt, appt iemand die je beter niet kunt appen, shopt of sluit je af.',
        'Meestal zit er geen pauze tussen. Er is het gedrag, en daarna de nasleep.',
      ],
    },
    what: {
      label: 'Wat Seen is',
      lead: 'Software voor zelfreflectie die je helpt jezelf te begrijpen.',
      body: 'Seen checkt bij je in, *onthoudt* wat je hebt gedeeld en stelt er open vragen over.',
      note: 'Seen spiegelt je eigen woorden terug en laat de conclusies aan jou.',
    },
    patterns: {
      label: 'De zes patronen',
      title: 'Zes manieren waarop mensen met stress omgaan',
      intro:
        'De quiz stelt 14 vragen over hoe je reageert als het leven zwaar wordt en laat zien bij welk patroon je antwoorden het best passen. Elk patroon beschrijft gedrag. Geen ervan is een diagnose.',
      items: [
        { title: 'Terugtrekken & vermijden', text: 'Stil worden, afspraken afzeggen of dichtklappen als alles zich opstapelt.' },
        { title: 'Goedkeuring zoeken', text: 'Op de reacties van anderen leunen om weer grond onder je voeten te voelen.' },
        { title: 'Troost in middelen', text: 'Naar een drankje, een sigaret of iets anders grijpen om de scherpe randjes eraf te halen.' },
        { title: 'Verstoppen in presteren', text: 'Langer en harder werken, zodat er geen ruimte overblijft om de rest te voelen.' },
        { title: 'Intimiteit zoeken', text: 'Romantische of seksuele aandacht zoeken als de spanning oploopt.' },
        { title: 'Compulsief kopen', text: 'Kopen of door webshops scrollen om het moment anders te laten voelen.' },
      ],
    },
    how: {
      label: 'Hoe het werkt',
      title: 'Een paar minuten per dag, in je eigen tempo',
      steps: [
        { title: 'Doe de gratis quiz', text: 'Veertien vragen over hoe je reageert op stress. Je hebt geen account en geen betaalgegevens nodig.' },
        {
          title: 'Check elke dag een paar minuten in',
          text: 'Seen stuurt een herinnering op een tijd die jij kiest. Een AI stelt open vragen en spiegelt je woorden terug. Je weet altijd dat je met software praat.',
        },
        {
          title: 'Lees je wekelijkse reflectie',
          text: 'Eén keer per week vat Seen in woorden samen wat je schreef, zodat je ziet wat steeds terugkomt. Die samenvatting is alleen voor jou.',
        },
      ],
      sampleLabel: 'Zo kan een check-in gaan',
      sample: [
        { from: 'ai', text: 'Goedenavond. Je zei dat werk zwaar was deze week. Hoe ging het vandaag?' },
        { from: 'user', text: 'Lang. Ik heb de borrel met Sam weer afgezegd en ben thuisgebleven.' },
        { from: 'ai', text: 'Je hebt deze week vaker afspraken afgezegd. Wat gebeurde er vlak voordat je afzei?' },
        { from: 'user', text: 'Ik had het gevoel dat ik niks meer te geven had.' },
        { from: 'ai', text: 'Dat klinkt vermoeiend. Wil je even bij dat gevoel blijven, of wil je het over iets anders hebben?' },
      ],
      sampleNote: 'Voorbeeldgesprek. Seen is een AI en kan zich vergissen.',
    },
    founder: {
      label: 'Gebouwd vanuit ervaring',
      lines: [
        '“Ik heb jarenlang vastgezeten in een patroon dat ik niet kon zien.',
        'Tegen de tijd dat ik het begreep, had het me al veel gekost.',
        'Ik heb Seen gebouwd omdat ik wou dat het er voor mij was geweest:',
        'een plek om te zien wat er speelt, zonder oordeel.”',
      ],
      accentLine: 2,
      name: 'Bas Redhead',
      role: 'Oprichter',
    },
    privacy: {
      label: 'Privacy',
      title: 'Zo gaat Seen om met wat je schrijft',
      intro: 'Wat je deelt is persoonlijk. Dit betekent dat in de praktijk.',
      items: [
        {
          title: 'Elk bedrijf bij naam',
          text: 'Het privacybeleid noemt elk bedrijf dat je gegevens verwerkt en het land van waaruit het werkt.',
        },
        { title: 'Nooit verkocht', text: 'Seen heeft geen advertenties en verkoopt nooit je gegevens.' },
        { title: 'Een bijnaam is genoeg', text: 'Elke naam en elk e-mailadres is goed.' },
        { title: 'Alles verwijderen', text: 'Vraag het ons en we verwijderen je account met alles erin.' },
      ],
      link: 'Lees het privacybeleid (Engels)',
    },
    crossover: {
      label: 'Zit je nu in therapie?',
      title: 'Seen heeft een aparte oefenruimte voor de tijd tussen je sessies.',
      cta: 'Bekijk Seen voor oefenen tussen sessies',
    },
    faq: {
      title: 'Veelgestelde vragen',
      items: [
        {
          q: 'Is Seen therapie?',
          a: 'Nee. Seen is software voor zelfreflectie. Seen geeft geen medisch of psychologisch advies en stelt geen diagnose en behandelt niets. Maak je je zorgen, praat dan met een huisarts of therapeut.',
        },
        {
          q: 'Wie schrijft de antwoorden in een check-in?',
          a: 'Een AI-model, Claude, van Anthropic. Er leest geen mens mee. De AI kan zich vergissen, dus zie wat hij zegt als iets om zelf over na te denken.',
        },
        {
          q: 'Wat vertelt de quiz me?',
          a: 'Bij welk van de zes stresspatronen je antwoorden het best passen. Een patroon beschrijft gedrag. Het is nooit een diagnose.',
        },
        {
          q: 'Voor wie is Seen?',
          a: 'Voor volwassenen vanaf 18 jaar die willen begrijpen hoe ze omgaan met zware momenten.',
        },
        {
          q: 'In welke talen is de app?',
          a: 'De app start in het Nederlands en het Engels. Duits, Frans, Spaans en Italiaans volgen in januari 2027.',
        },
        {
          q: 'Wat als ik in crisis ben?',
          a: 'Seen is geen noodhulpdienst. Ben je in gevaar, bel dan 112. De nummers verderop op deze pagina zijn gratis, en de app toont ze ook.',
        },
      ],
    },
    waitlist: {
      title: 'Krijg een mail als Seen opengaat',
      text: 'Laat je e-mailadres achter, dan laat ik je weten wanneer Seen voor iedereen open is.',
      placeholder: 'jij@email.nl',
      button: 'Hou me op de hoogte',
      loading: 'Even geduld...',
      success: 'Je staat op de lijst.',
      successText: 'Ik laat je weten wanneer Seen klaar is.',
      error: 'Er ging iets mis. Probeer het nog eens.',
      consent: 'Ik gebruik je e-mailadres alleen voor dit bericht. Je kunt je altijd afmelden.',
    },
  },
  p2: {
    tag: 'Oefenen',
    nav: { how: 'Hoe het werkt', library: 'Bibliotheek', therapist: 'Je therapeut', pricing: 'Prijzen', faq: 'Vragen', start: 'Start' },
    hero: {
      label: 'Voor mensen in therapie',
      title: 'Gemaakt in Europa door iemand die zelf in de therapiestoel heeft gezeten,',
      accent: 'voor de weken tussen je sessies.',
      body: 'Therapie gebeurt in één kamer, een uur per keer. De rest van de week gebeurt overal daarbuiten.',
      cta: 'Begin met de quiz',
      ctaNote: 'Geef aan dat je in therapie bent, dan opent Seen je oefenruimte.',
      secondary: 'Hoe het werkt',
    },
    phone: {
      greeting: 'Goedenavond, Sam',
      sub: 'Jouw oefenruimte',
      checkin: 'Dagelijkse check-in',
      checkinSub: 'Een paar minuten reflectie',
      start: 'Start',
      session: 'Ik had een sessie',
      sessionSub: 'Hoe kwam het binnen, wat wil je oefenen?',
      intentionLabel: 'Intentie voor deze week',
      intention: 'Eén verzoek afslaan zonder uit te leggen waarom',
      intentionDate: 'Voor vrijdag',
      plannedLabel: 'Gepland',
      plannedTitle: 'Vijf zintuigen check-in',
      plannedTime: 'Woensdag, 08:30',
      prepare: 'Bereid je volgende sessie voor',
      prepareSub: 'Je aantekeningen van deze week',
    },
    cycle: ['Sessie', 'Reflecteren', 'Oefenen', 'Voorbereiden'],
    week: {
      label: 'Hoe het werkt',
      title: 'Een week met Seen, van de ene sessie naar de volgende',
      steps: [
        {
          when: 'Direct na een sessie',
          title: 'Schrijf op hoe het binnenkwam',
          text: 'Seen vraagt hoe je terugkijkt op de sessie van vandaag en wat je deze week wil oefenen. Je antwoordt in je eigen woorden, of je slaat het over.',
        },
        {
          when: 'Tijdens de week',
          title: 'Oefen wanneer je het had gepland',
          text: 'Kies oefeningen uit de bibliotheek, zet ze in je agenda en krijg een herinnering op het tijdstip dat je koos. Korte check-ins onthouden je intentie voor de week.',
        },
        {
          when: 'Voor de volgende sessie',
          title: 'Verzamel wat je wil inbrengen',
          text: 'Eén pagina met je intentie, de oefeningen die je deed en je eigen aantekeningen, zodat je zelf kiest wat je met je therapeut bespreekt.',
        },
      ],
    },
    asks: {
      label: 'Jij bepaalt het kader',
      title: 'Wat Seen vraagt, en waar Seen vanaf blijft',
      asksLabel: 'Seen vraagt',
      asks: ['Hoe kijk je terug op de sessie van vandaag?', 'Is er iets wat je deze week wil oefenen?', 'Wat merkte je op?'],
      neverLabel: 'Seen vraagt nooit',
      never: ['Wat zei je therapeut?', 'Wat is je diagnose?'],
      note: 'Niets wat je in Seen schrijft wordt met je therapeut gedeeld. Wekelijkse samenvattingen zijn alleen voor jou.',
    },
    therapist: {
      label: 'Je therapeut',
      title: 'Vertel je therapeut dat je Seen gebruikt',
      body: 'Seen is bedoeld om te gebruiken terwijl je therapeut ervan weet. Je therapeut leidt je therapie, en in Seen oefen je met wat je zelf hebt gekozen. Laat je therapeut deze pagina zien, of de korte samenvatting voor therapeuten.',
      cardTitle: 'Voor therapeuten: Seen in het kort',
      points: [
        'Software voor zelfreflectie voor volwassenen. Seen geeft geen medisch advies, stelt geen diagnose en behandelt niets.',
        'Je cliënt kiest zelf wat er geoefend wordt. Seen vraagt nooit wat er in een sessie is gezegd.',
        'Oefeningen komen uit een bibliotheek met bronvermelding, zoals CGT (Beck), ACT (Hayes), DGT (Linehan) en mindfulness (Kabat-Zinn). Seen doet geen uitspraken over hun effect.',
        'Er wordt niets met jou of met anderen gedeeld. Je cliënt kan zelf aantekeningen meenemen naar een sessie.',
        'Check-ins zijn met een AI. Seen toont crisiscontacten en is geen noodhulpdienst.',
      ],
      contact: `Vragen over Seen: ${BUSINESS.email}`,
      share: 'Kopieer een link naar deze samenvatting',
      copied: 'Link gekopieerd',
    },
    library: {
      label: 'De oefenbibliotheek',
      title: 'Een bibliotheek die je doorbladert als een boek',
      intro:
        'Alle oefeningen staan in één bibliotheek, op alfabetische volgorde. Jij kiest wat je probeert. Seen zet oefeningen niet in een ranglijst, kiest ze niet voor je, en er zit niets op slot.',
      topicsLabel: 'Jouw onderwerpen',
      topics: ['nee zeggen', 'werkdruk'],
      showing: 'Oefeningen voor jouw onderwerpen',
      browseAll: 'Bekijk alles',
      minutes: 'min',
      entries: [
        { title: 'Aankomen in het nu', source: 'Mindfulness (Kabat-Zinn)', minutes: 7 },
        { title: 'Keuzemoment', source: 'ACT (Hayes)', minutes: 8 },
        { title: 'Vijf zintuigen check-in', source: 'Mindfulness (Kabat-Zinn)', minutes: 5 },
        { title: 'Brief aan jezelf', source: 'Reflectief schrijven', minutes: 10 },
        { title: 'Je gedachten opmerken', source: 'ACT (Hayes)', minutes: 8 },
        { title: 'Troost via je zintuigen', source: 'DGT (Linehan)', minutes: 8 },
        { title: 'Een aanname toetsen', source: 'CGT (Beck)', minutes: 10 },
        { title: 'Gedachtendagboek', source: 'CGT (Beck)', minutes: 10 },
        { title: 'Drie cirkels', source: '12-stappentradities', minutes: 15 },
        { title: 'Wat het meest telt', source: 'ACT (Hayes)', minutes: 12 },
      ],
      ownTitle: 'Je eigen oefening',
      ownText: 'Voeg iets toe wat je therapeut voorstelde, in je eigen woorden.',
      afterTitle: 'Na een oefening',
      afterText: 'Seen vraagt wat je opmerkte en geeft je ruimte om te schrijven. Er zijn geen scores en geen beoordelingen.',
      credits:
        'Oefeningen zijn gebaseerd op bestaande benaderingen en vermelden hun bron: cognitieve gedragstherapie (Aaron Beck), Acceptance and Commitment Therapy (Steven Hayes), dialectische gedragstherapie (Marsha Linehan), Mindfulness-Based Stress Reduction (Jon Kabat-Zinn) en het Drie Cirkels-model uit 12-stappentradities. Seen voegt de structuur, het ritme en de herinneringen toe.',
    },
    pricingIntro: 'De oefenruimte hoort bij het ene Seen-abonnement. Founding members houden hun prijs zolang hun abonnement doorloopt.',
    faq: {
      title: 'Veelgestelde vragen',
      items: [
        {
          q: 'Moet ik in therapie zijn?',
          a: 'De oefenruimte is gemaakt voor mensen die bij een therapeut of counselor lopen. Zit je niet in therapie, dan begint Seen met de gratis patroonquiz en dagelijkse check-ins.',
        },
        {
          q: 'Ziet mijn therapeut wat ik schrijf?',
          a: 'Nee. Er wordt niets met je therapeut of met anderen gedeeld. We raden je wel aan om je therapeut te vertellen dat je Seen gebruikt.',
        },
        {
          q: 'Vraagt Seen naar mijn sessies?',
          a: 'Seen vraagt hoe je terugkijkt op een sessie en wat je wil oefenen, in je eigen woorden. Seen vraagt nooit wat je therapeut zei.',
        },
        {
          q: 'Waar komen de oefeningen vandaan?',
          a: 'Uit bestaande benaderingen zoals CGT, ACT, DGT en mindfulness, steeds met bronvermelding. Je kunt ook je eigen oefeningen toevoegen.',
        },
        {
          q: 'Is Seen therapie?',
          a: 'Nee. Seen is software voor zelfreflectie. Seen geeft geen medisch of psychologisch advies en stelt geen diagnose en behandelt niets.',
        },
        {
          q: 'Wie schrijft de antwoorden in een check-in?',
          a: 'Een AI-model, Claude, van Anthropic. Er leest geen mens mee, en de AI kan zich vergissen.',
        },
        {
          q: 'Wat als ik in crisis ben?',
          a: 'Seen is geen noodhulpdienst. Ben je in gevaar, bel dan 112 of gebruik de gratis nummers verderop op deze pagina. Ook je therapeut of huisarts kan helpen.',
        },
      ],
    },
    crossover: {
      label: 'Zit je nu niet in therapie?',
      title: 'Seen begint met een gratis patroonquiz en korte dagelijkse check-ins.',
      cta: 'Bekijk Seen voor zelfreflectie',
    },
  },
};

export default nl;
