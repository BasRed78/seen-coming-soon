import { BUSINESS, PRICES } from '../components/business';
import type { Copy } from './types';

// Copy rules (ops/CONTEXT.md): wellness language only; never claim to recognise,
// monitor, reduce or prevent anything; describe behaviour; no em dashes; no
// "X, not Y"; no hype words; headings name their content; each point once.
// *word* marks an accent word (coral on /, teal on /practice).

const en: Copy = {
  meta: {
    p1Title: 'Seen: see your stress patterns',
    p1Description:
      'Seen is self-reflection software. A free 14-question pattern quiz, short daily check-ins with an AI and a weekly reflection in your own words.',
    p2Title: 'Seen Practice: a place to practise between therapy sessions',
    p2Description:
      'For people in therapy. Note what you want to work on after a session, choose practices from a library, plan when to do them and gather your notes for next time.',
  },
  common: {
    language: 'Language',
    login: 'Log in',
    takeQuiz: 'Take the quiz',
    free: 'free',
    menu: 'Menu',
    ai: {
      label: 'About the AI',
      text: 'Check-ins are written by an AI model (Claude, made by Anthropic). No human reads along, and the AI can get things wrong.',
    },
    notTherapy: {
      label: 'What Seen is and is not',
      text: 'Seen is self-reflection software for adults. It gives no medical or psychological advice, does not diagnose or treat anything and is no substitute for a doctor or therapist.',
      link: 'Read the full statement',
    },
    crisis: {
      title: 'If you are in danger or thinking about ending your life',
      body: 'Seen is not an emergency service. Please contact someone now.',
      lines: [
        { label: 'Emergency, anywhere in the EU', number: '112' },
        { label: 'Netherlands, 113 Zelfmoordpreventie', number: '113 or 0800-0113' },
        { label: 'United Kingdom, Samaritans', number: '116 123' },
      ],
      elsewhere: 'Elsewhere: find a local helpline at findahelpline.com',
    },
    faqLabel: 'Questions',
    footer: {
      whatSeenIs: 'What Seen is',
      pricing: 'Pricing',
      terms: 'Terms',
      refunds: 'Refunds',
      privacy: 'Privacy',
      cookies: 'Cookies',
      contact: 'Contact',
      forTherapy: 'For people in therapy',
      forReflection: 'Pattern quiz and check-ins',
      productOf: `Seen is a product of ${BUSINESS.tradingName}, the ${BUSINESS.legalForm} of ${BUSINESS.owner}.`,
      rights: 'All rights reserved.',
    },
  },
  pricing: {
    label: 'Pricing',
    title: 'One plan with everything in it',
    intro: 'The quiz is free. Founding members pay less and keep their price for as long as their subscription stays active.',
    badge: 'Founding member price',
    annual: { name: 'Annual', period: 'per year', note: 'Under €5 a month, billed once a year.', price: PRICES.founding.annual },
    monthly: { name: 'Monthly', period: 'per month', note: 'Billed every month.', price: PRICES.founding.monthly },
    window: `Founding prices are open to ${PRICES.foundingWindow}. After that, new members pay ${PRICES.regular.annual} a year or ${PRICES.regular.monthly} a month.`,
    terms: `Prices include VAT. Cancel any time. Full refund within ${PRICES.refundDays} days, no questions asked. There is no free trial.`,
    includedLabel: 'Included',
    included: [
      'Daily check-ins',
      'A weekly reflection',
      'The practice space for people in therapy',
      'Reminders at times you choose',
      'Crisis contacts inside the app',
    ],
    cta: 'Start with the free quiz',
    details: 'Full pricing details',
  },
  p1: {
    nav: { how: 'How it works', patterns: 'Patterns', pricing: 'Pricing', faq: 'FAQ' },
    hero: {
      line1: 'See the pattern.',
      line2: 'Break the cycle.',
      hook: 'There is a pattern under your stress. Seen helps you name it.',
      body: 'What you do once you see it, including breaking a cycle, is up to you.',
      scroll: 'Scroll to explore',
    },
    cycle: ['Stress', 'Cope', 'Regret', 'Repeat'],
    problem: {
      label: 'Why patterns are hard to see',
      lines: [
        "The pattern is automatic. By the time you notice it, you've already done it.",
        "You scroll, drink, text someone you shouldn't, shop or shut down.",
        'Most of the time there is no pause in between. There is the behaviour, and then the aftermath.',
      ],
    },
    what: {
      label: 'What Seen is',
      lead: 'Self-reflection software that helps you understand yourself.',
      body: "Seen checks in with you, *remembers* what you've shared and asks open questions about it.",
      note: 'It reflects your own words back to you and leaves the conclusions with you.',
    },
    patterns: {
      label: 'The six patterns',
      title: 'Six ways people cope with stress',
      intro:
        'The quiz asks 14 questions about how you react when life gets hard, then shows which of these patterns your answers fit most. Each one describes behaviour. None of them is a diagnosis.',
      items: [
        { title: 'Withdrawal & Avoidance', text: 'Going quiet, cancelling plans or shutting down when things pile up.' },
        { title: 'Approval Chasing', text: "Looking to other people's reactions to feel steady again." },
        { title: 'Substance Soothing', text: 'Reaching for a drink, a smoke or something else to take the edge off.' },
        { title: 'Achievement Hiding', text: "Working longer and harder so there's no room left to feel the rest." },
        { title: 'Intimacy Seeking', text: 'Turning to romantic or sexual attention when stress builds.' },
        { title: 'Compulsive Spending', text: 'Buying or browsing to change how the moment feels.' },
      ],
    },
    how: {
      label: 'How it works',
      title: 'A few minutes a day, at your own pace',
      steps: [
        { title: 'Take the free quiz', text: 'Fourteen questions about how you react under stress. No account and no payment needed.' },
        {
          title: 'Check in for a few minutes a day',
          text: "Seen sends a reminder at a time you choose. An AI asks open questions and reflects your words back. You always know you're talking to software.",
        },
        {
          title: 'Read your weekly reflection',
          text: 'Once a week Seen sums up in words what you wrote, so you can see what keeps coming back. It is for you alone.',
        },
      ],
      sampleLabel: 'A check-in, for example',
      sample: [
        { from: 'ai', text: 'Evening. You mentioned work was heavy this week. How did today go?' },
        { from: 'user', text: 'Long. I cancelled drinks with Sam again and stayed in.' },
        { from: 'ai', text: "You've mentioned cancelling plans a few times this week. What was happening just before you cancelled?" },
        { from: 'user', text: 'I felt like I had nothing left to give.' },
        { from: 'ai', text: 'That sounds tiring. Do you want to stay with that feeling for a moment, or talk about something else?' },
      ],
      sampleNote: 'Example conversation. Seen is an AI and can get things wrong.',
    },
    founder: {
      label: 'Built from experience',
      lines: [
        '“I spent years stuck in a pattern I couldn’t see.',
        'By the time I understood it, it had already cost me.',
        'I built Seen because I wish it had existed for me:',
        'a place to see what’s going on, without judgement.”',
      ],
      accentLine: 2,
      name: 'Bas Redhead',
      role: 'Founder',
    },
    privacy: {
      label: 'Privacy',
      title: 'How Seen handles what you write',
      intro: 'What you share is personal. This is what that means in practice.',
      items: [
        {
          title: 'Every company named',
          text: 'The privacy policy lists each company that handles your data and the country it works from.',
        },
        { title: 'Never sold', text: 'Seen has no advertising and never sells your data.' },
        { title: 'A nickname is enough', text: 'Any name and any email address will do.' },
        { title: 'Delete it all', text: 'Ask us and we delete your account and everything in it.' },
      ],
      link: 'Read the privacy policy',
    },
    crossover: {
      label: 'In therapy right now?',
      title: 'Seen has a separate practice space for the time between sessions.',
      cta: 'See Seen for practice between sessions',
    },
    faq: {
      title: 'Common questions',
      items: [
        {
          q: 'Is Seen therapy?',
          a: 'No. Seen is self-reflection software. It gives no medical or psychological advice and does not diagnose or treat anything. If something worries you, please talk to a doctor or therapist.',
        },
        {
          q: 'Who writes the replies in a check-in?',
          a: 'An AI model, Claude, made by Anthropic. No human reads along. The AI can get things wrong, so treat what it says as a prompt to think things through for yourself.',
        },
        {
          q: 'What does the quiz tell me?',
          a: 'Which of six stress-response patterns your answers fit most. A pattern describes behaviour. It is never a diagnosis.',
        },
        {
          q: 'Who is Seen for?',
          a: 'Adults aged 18 and over who want to understand how they cope when life gets hard.',
        },
        {
          q: 'Which languages is the app in?',
          a: 'The app launches in English and Dutch. German, French, Spanish and Italian follow in January 2027.',
        },
        {
          q: 'What if I am in crisis?',
          a: 'Seen is not an emergency service. If you are in danger, call 112. The numbers further down this page are free, and the app shows them too.',
        },
      ],
    },
    waitlist: {
      title: 'Get an email when Seen opens',
      text: "Leave your email and I'll let you know when Seen is open to everyone.",
      placeholder: 'your@email.com',
      button: 'Keep me posted',
      loading: 'Joining...',
      success: "You're on the list.",
      successText: "I'll let you know when Seen is ready.",
      error: 'Something went wrong. Please try again.',
      consent: 'I use your email for this message only. You can unsubscribe at any time.',
    },
  },
  p2: {
    tag: 'Practice',
    nav: { how: 'How it works', library: 'Library', therapist: 'Your therapist', pricing: 'Pricing', faq: 'FAQ', start: 'Start' },
    hero: {
      label: 'For people in therapy',
      title: 'Made in Europe by someone who has sat in the therapy chair,',
      accent: 'for the weeks between sessions.',
      body: 'Therapy happens in one room, an hour at a time. The rest of the week happens everywhere else.',
      cta: 'Start with the quiz',
      ctaNote: "Say you're in therapy and Seen opens your practice space.",
      secondary: 'How it works',
    },
    phone: {
      greeting: 'Good evening, Sam',
      sub: 'Your practice space',
      checkin: 'Daily check-in',
      checkinSub: 'A few minutes of reflection',
      start: 'Start',
      session: 'I had a session',
      sessionSub: 'Note how it landed and what to practise',
      intentionLabel: "This week's intention",
      intention: 'Say no to one request without explaining why',
      intentionDate: 'By Friday',
      plannedLabel: 'Planned',
      plannedTitle: 'Five Senses Check-in',
      plannedTime: 'Wednesday, 08:30',
      prepare: 'Prepare for your next session',
      prepareSub: 'Your notes from the week',
    },
    cycle: ['Session', 'Reflect', 'Practise', 'Prepare'],
    week: {
      label: 'How it works',
      title: 'A week with Seen, from one session to the next',
      steps: [
        {
          when: 'Right after a session',
          title: 'Note how it landed',
          text: "Seen asks how you're sitting with today's session and what you'd like to practise this week. You answer in your own words, or skip it.",
        },
        {
          when: 'During the week',
          title: 'Practise when you planned to',
          text: 'Pick practices from the library, put them in your calendar and get a reminder at the time you chose. Short check-ins remember your intention for the week.',
        },
        {
          when: 'Before the next session',
          title: 'Gather what you want to bring',
          text: 'One page with your intention, the practices you did and your own notes, so you can decide what to raise with your therapist.',
        },
      ],
    },
    asks: {
      label: 'You frame everything',
      title: 'What Seen asks, and what it leaves alone',
      asksLabel: 'Seen asks',
      asks: [
        "How are you sitting with today's session?",
        'Is there something you want to practise this week?',
        'What did you notice?',
      ],
      neverLabel: 'Seen never asks',
      never: ['What did your therapist say?', 'What is your diagnosis?'],
      note: 'Nothing you write in Seen is shared with your therapist. Weekly summaries are for you alone.',
    },
    therapist: {
      label: 'Your therapist',
      title: 'Tell your therapist you use Seen',
      body: 'Seen is meant to be used with your therapist knowing about it. Your therapist leads your therapy, and Seen is where you practise what you chose to work on. Show them this page, or the short summary for therapists.',
      cardTitle: 'For therapists: Seen in brief',
      points: [
        'Self-reflection software for adults. It gives no medical advice and does not diagnose or treat.',
        'Your client chooses what to practise. Seen never asks what was said in a session.',
        'Practices come from a library with source credits, such as CBT (Beck), ACT (Hayes), DBT (Linehan) and mindfulness (Kabat-Zinn). Seen makes no claims about their effect.',
        'Nothing is shared with you or anyone else. Your client can bring their own notes to a session.',
        'Check-ins are with an AI. Seen shows crisis contacts and is not an emergency service.',
      ],
      contact: `Questions about Seen: ${BUSINESS.email}`,
      share: 'Copy a link to this summary',
      copied: 'Link copied',
    },
    library: {
      label: 'The practice library',
      title: 'A library you browse like a book',
      intro:
        'Every practice sits in one library, in alphabetical order. You choose what to try. Seen does not rank practices or pick them for you, and nothing is locked.',
      topicsLabel: 'Your topics',
      topics: ['saying no', 'work pressure'],
      showing: 'Practices for your topics',
      browseAll: 'Browse all',
      minutes: 'min',
      entries: [
        { title: 'Arriving in the Present', source: 'Mindfulness (Kabat-Zinn)', minutes: 7 },
        { title: 'Choice Point', source: 'ACT (Hayes)', minutes: 8 },
        { title: 'Five Senses Check-in', source: 'Mindfulness (Kabat-Zinn)', minutes: 5 },
        { title: 'Letter to Yourself', source: 'Reflective writing', minutes: 10 },
        { title: 'Noticing Your Thoughts', source: 'ACT (Hayes)', minutes: 8 },
        { title: 'Self-Soothing with Senses', source: 'DBT (Linehan)', minutes: 8 },
        { title: 'Testing an Assumption', source: 'CBT (Beck)', minutes: 10 },
        { title: 'Thought Awareness Journal', source: 'CBT (Beck)', minutes: 10 },
        { title: 'Three Circles', source: '12-step traditions', minutes: 15 },
        { title: 'What Matters Most', source: 'ACT (Hayes)', minutes: 12 },
      ],
      ownTitle: 'Your own practice',
      ownText: 'Add something your therapist suggested, in your own words.',
      afterTitle: 'After a practice',
      afterText: 'Seen asks what you noticed and gives you room to write. There are no scores and no ratings.',
      credits:
        'Practices are adapted from established approaches and credited to their sources: Cognitive Behavioural Therapy (Aaron Beck), Acceptance and Commitment Therapy (Steven Hayes), Dialectical Behaviour Therapy (Marsha Linehan), Mindfulness-Based Stress Reduction (Jon Kabat-Zinn) and the Three Circles model from 12-step traditions. Seen adds the structure, the rhythm and the reminders.',
    },
    pricingIntro: 'The practice space is part of the one Seen subscription. Founding members keep their price for as long as their subscription stays active.',
    faq: {
      title: 'Common questions',
      items: [
        {
          q: 'Do I need to be in therapy?',
          a: "The practice space is made for people who see a therapist or counsellor. If you're not in therapy, Seen starts with the free pattern quiz and daily check-ins.",
        },
        {
          q: 'Does my therapist see what I write?',
          a: 'No. Nothing is shared with your therapist or anyone else. We do encourage you to tell your therapist that you use Seen.',
        },
        {
          q: 'Will Seen ask about my sessions?',
          a: 'Seen asks how you are sitting with a session and what you want to practise, in your own words. It never asks what your therapist said.',
        },
        {
          q: 'Where do the practices come from?',
          a: 'From established approaches such as CBT, ACT, DBT and mindfulness, each credited to its source. You can add your own practices too.',
        },
        {
          q: 'Is Seen therapy?',
          a: 'No. Seen is self-reflection software. It gives no medical or psychological advice and does not diagnose or treat anything.',
        },
        {
          q: 'Who writes the replies in a check-in?',
          a: 'An AI model, Claude, made by Anthropic. No human reads along, and the AI can get things wrong.',
        },
        {
          q: 'What if I am in crisis?',
          a: 'Seen is not an emergency service. If you are in danger, call 112, or use the free numbers further down this page. Your therapist or GP can also help.',
        },
      ],
    },
    crossover: {
      label: 'Not in therapy right now?',
      title: 'Seen starts with a free pattern quiz and short daily check-ins.',
      cta: 'See Seen for self-reflection',
    },
  },
};

export default en;
