import type { Metadata } from 'next';
import { A, ContentPage, CrisisContacts, H2, P, UL } from '@/app/components/SiteShell';
import { LAST_UPDATED } from '@/app/components/business';

export const metadata: Metadata = {
  title: 'What Seen is and is not | Seen',
  description: 'Seen is self-reflection software. It gives no medical advice, diagnosis or treatment and is no substitute for professional care.',
};

export default function WhatSeenIsPage() {
  return (
    <ContentPage
      title="What Seen is and is not"
      lastUpdated={LAST_UPDATED}
      intro={<P>Seen is software for self-reflection. Our motto is &ldquo;a mirror, not a prescription&rdquo;: Seen reflects what you tell it and leaves the conclusions to you.</P>}
    >
      <H2>What Seen is</H2>
      <UL>
        <li>
          <strong>A free 14-question quiz.</strong> It shows which of six stress-response patterns your answers fit most:
          Withdrawal &amp; Avoidance, Approval Chasing, Substance Soothing, Achievement Hiding, Intimacy Seeking or Compulsive
          Spending. The patterns describe common ways people cope with stress. They are descriptions of behaviour, and none of
          them is a diagnosis or a medical condition.
        </li>
        <li>
          <strong>Short daily check-ins with an AI.</strong> The AI asks open questions and reflects your own words back to you.
          It runs on a large language model (Claude, made by Anthropic). It is software, it can get things wrong, and no human
          reads along.
        </li>
        <li>
          <strong>Weekly reflections.</strong> A summary of what you wrote that week, for you only.
        </li>
        <li>
          <strong>A practice space for people already in therapy.</strong> You choose what you want to practise, plan short
          exercises, set intentions and write down how a session landed. The exercises are self-help techniques from established
          approaches, credited to their sources, such as CBT (Aaron Beck), ACT (Steven Hayes), DBT (Marsha Linehan) and
          mindfulness (Jon Kabat-Zinn). Seen never asks what your therapist said, and nothing is shared with your therapist.
          We encourage you to tell your therapist that you use Seen.
        </li>
      </UL>

      <H2>What Seen is not</H2>
      <UL>
        <li>Seen gives no medical, psychological or health advice.</li>
        <li>Seen does not diagnose, treat, cure or prevent any condition, and it is not a medical device.</li>
        <li>Seen is not therapy or counselling, and no therapist, coach or clinician works through Seen.</li>
        <li>Seen is no substitute for a doctor, psychologist, therapist or other professional. If something worries you, please talk to one.</li>
        <li>Seen is not a crisis or emergency service.</li>
        <li>Seen is for adults aged 18 and over.</li>
      </UL>

      <H2>What happens if a check-in suggests you are in danger</H2>
      <P>
        If you write something that suggests you may be in danger, Seen pauses the conversation and shows crisis contacts. This
        check is automated and can miss things, so please do not rely on it. If you need help now, use the numbers below.
      </P>
      <CrisisContacts />

      <H2>Related pages</H2>
      <P>
        <A href="/pricing">Pricing</A> · <A href="/terms">Terms</A> · <A href="/privacy">Privacy</A> ·{' '}
        <A href="/contact">Contact</A>
      </P>
    </ContentPage>
  );
}
