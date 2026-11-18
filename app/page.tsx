'use client';

import { useEffect, useState } from 'react';

type Lang = 'nl' | 'en';

const copy = {
  nl: {
    eyebrow: 'Binnenkort beschikbaar',
    h1: 'Voor de tijd tussen je therapiesessies.',
    sub: 'Seen helpt je vasthouden wat je in therapie leert, en het toe te passen in je dagelijks leven.',
    placeholder: 'jouw@email.nl',
    cta: 'Hou me op de hoogte',
    loading: 'Bezig...',
    successTitle: 'Je staat op de lijst.',
    successBody: 'Je hoort van me zodra Seen er is.',
    error: 'Er ging iets mis. Probeer het nog eens.',
    formNote: 'Je e-mailadres gebruiken we alleen om je te laten weten wanneer Seen er is.',
    recogniseTitle: 'Herken je dit?',
    recognise: [
      'Je loopt je sessie uit met een helder hoofd. Je weet wat er speelt, en wat je anders wil doen.',
      'Onderweg naar huis denk je er nog over na. Maar werk belt, en thuis gaat het leven gewoon door.',
      'Twee dagen later probeer je te bedenken wat je deze week ook alweer zou doen. En voor je het weet zit je weer bij je therapeut, met de vraag: hoe ging het deze week?',
    ],
    videoLabel: 'Bekijk in twee minuten hoe Seen werkt',
    howTitle: 'Hoe het werkt',
    steps: [
      ['Direct na je sessie', 'Seen stelt je een paar korte vragen. Hoe was het, wat wil je onthouden, waar wil je deze week op letten? Dat kost je twee minuten.'],
      ['Kies waar je mee oefent', 'Je kiest een of twee dingen om mee te oefenen. Seen stelt korte oefeningen voor die daarbij passen, en jij zet ze in je week.'],
      ['Door de week', 'Je hoeft er niet zelf aan te denken. Seen stuurt je een bericht en vraagt hoe het gaat met wat je je had voorgenomen.'],
      ['Voor je volgende sessie', 'Seen zet je week op een rij: wat je hebt gedaan, wat lastig was en wat je wil bespreken.'],
    ],
    factsTitle: 'Goed om te weten',
    facts: [
      ['Wat je invult is van jou', 'Je therapeut ziet niets, tenzij jij het laat zien.'],
      ['Je praat met een AI', 'Seen vraagt door, geeft geen advies en stelt geen diagnose. Daarvoor is je therapeut er.'],
    ],
    founder: 'Ik bouw Seen omdat ik uit eigen ervaring weet hoe snel een week je inhaalt na een goede sessie.',
    closing: 'Seen komt eraan.',
    rights: 'Alle rechten voorbehouden.',
  },
  en: {
    eyebrow: 'Launching soon',
    h1: 'For the time between your therapy sessions.',
    sub: 'Seen helps you hold on to what you learn in therapy, and apply it in your everyday life.',
    placeholder: 'your@email.com',
    cta: 'Keep me posted',
    loading: 'Joining...',
    successTitle: "You're on the list.",
    successBody: "I'll let you know when Seen is ready.",
    error: 'Something went wrong. Please try again.',
    formNote: 'We only use your email address to tell you when Seen is ready.',
    recogniseTitle: 'Sound familiar?',
    recognise: [
      "You walk out of your session with a clear head. You know what's going on, and what you want to do differently.",
      "On the way home you're still thinking it over. But work calls, and at home life carries on.",
      "Two days later you're trying to remember what you were going to do this week. And before you know it you're back with your therapist, who asks: how was your week?",
    ],
    videoLabel: 'See how Seen works in two minutes',
    howTitle: 'How it works',
    steps: [
      ['Right after your session', 'Seen asks you a few short questions. How was it, what do you want to remember, what do you want to watch for this week? It takes two minutes.'],
      ['Choose what to work on', 'You pick one or two things to work on. Seen suggests short exercises that fit, and you put them in your week.'],
      ['During the week', "You don't have to remember. Seen sends you a message and asks how it's going with what you set out to do."],
      ['Before your next session', 'Seen lays out your week: what you did, what was hard and what you want to talk about.'],
    ],
    factsTitle: 'Good to know',
    facts: [
      ['What you enter is yours', 'Your therapist sees nothing unless you show it.'],
      ["You're talking with an AI", 'Seen asks follow-up questions, gives no advice and makes no diagnosis. That is what your therapist is for.'],
    ],
    founder: 'I am building Seen because I know from experience how fast a week catches up with you after a good session.',
    closing: 'Seen is on its way.',
    rights: 'All rights reserved.',
  },
} as const;

function Star({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
    </svg>
  );
}

function Waitlist({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="done">
        <strong>{t.successTitle}</strong>
        <span>{t.successBody}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="waitlist">
      <div className="row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          aria-label="Email"
          required
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? t.loading : t.cta}
        </button>
      </div>
      {status === 'error' ? <p className="err">{t.error}</p> : <p className="note">{t.formNote}</p>}
    </form>
  );
}

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>('nl');

  // Dutch browsers get Dutch, everyone else English. ?lang=nl or ?lang=en overrides.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'nl' || q === 'en') {
      setLang(q);
    } else if (!navigator.language.toLowerCase().startsWith('nl')) {
      setLang('en');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = copy[lang];

  return (
    <div className="page">
      <header className="bar">
        <div className="brand">
          <span className="star"><Star size={20} /></span>
          Seen
        </div>
        <div className="lang" role="group" aria-label="Language">
          <button className={lang === 'nl' ? 'on' : ''} onClick={() => setLang('nl')}>NL</button>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.h1}</h1>
          <p className="sub">{t.sub}</p>
          <Waitlist lang={lang} />
        </section>

        <section className="split">
          <div>
            <h2>{t.recogniseTitle}</h2>
            {t.recognise.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <figure>
            <video
              key={lang}
              controls
              playsInline
              preload="none"
              poster={`/video/poster-${lang}.jpg`}
              src={`/video/seen-explainer-${lang}.mp4`}
            />
            <figcaption>{t.videoLabel}</figcaption>
          </figure>
        </section>

        <section>
          <h2>{t.howTitle}</h2>
          <ol className="steps">
            {t.steps.map(([title, body], i) => (
              <li key={title}>
                <span className="num">{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2>{t.factsTitle}</h2>
          <div className="facts">
            {t.facts.map(([title, body]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="founder">
          <p>{t.founder}</p>
          <span>Bas</span>
        </section>

        <section className="closing">
          <span className="star"><Star size={28} /></span>
          <h2>{t.closing}</h2>
          <Waitlist lang={lang} />
        </section>
      </main>

      <footer>© 2026 Seen. {t.rights}</footer>
    </div>
  );
}
