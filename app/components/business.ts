// One place for the business, contact and price details shown across the site.
// Change them here and every page follows.

export const BUSINESS = {
  product: 'Seen',
  tradingName: 'Red About Now',
  owner: 'Bas Redhead',
  legalForm: 'eenmanszaak (Dutch sole proprietorship)',
  kvk: '86409530',
  vatId: 'NL004244282B38',
  address: 'Cornelis Roelestraat 16C, 1151 CB Broek in Waterland, Netherlands',
  email: 'bas@redaboutnow.com',
  privacyEmail: 'privacy@seeyourself.today',
  site: 'https://www.seeyourself.today',
  app: 'https://app.seeyourself.today',
} as const;

// Calls to action. The app is still behind the tester gate, so these only work
// for the public once the gate change (JRN-18) is live. Both phases enter
// through the quiz: its therapy question routes people in therapy to Phase 2.
export const LINKS = {
  quiz: `${BUSINESS.app}/quiz`,
  login: `${BUSINESS.app}/login`,
} as const;

export const PRICES = {
  founding: { monthly: '€6.99', annual: '€59' },
  regular: { monthly: '€9.99', annual: '€79' },
  // Default founding window until Bas decides otherwise (ops/QUESTIONS.md).
  foundingWindow: 'the first 500 paying members, or until 31 March 2027, whichever comes first',
  refundDays: 14,
} as const;

export const LAST_UPDATED = '27 November 2026';
