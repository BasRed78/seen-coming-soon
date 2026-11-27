import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { A, ContentPage, H2, P, UL, colors } from '@/app/components/SiteShell';
import { PRICES } from '@/app/components/business';

export const metadata: Metadata = {
  title: 'Pricing | Seen',
  description: `Seen founding membership: ${PRICES.founding.annual} a year or ${PRICES.founding.monthly} a month, VAT included. ${PRICES.refundDays}-day refund, no questions asked.`,
};

function PlanCard({ name, price, period, note, highlight, children }: {
  name: string;
  price: string;
  period: string;
  note: string;
  highlight?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: colors.card,
        border: `1px solid ${highlight ? colors.accent : colors.line}`,
        borderRadius: '16px',
        padding: '28px',
      }}
    >
      <p style={{ margin: 0, fontWeight: 600, color: highlight ? colors.accent : colors.heading }}>{name}</p>
      <p style={{ margin: '12px 0 4px' }}>
        <span style={{ fontSize: '2.5rem', fontWeight: 800, color: colors.heading }}>{price}</span>
        <span style={{ color: colors.muted }}> {period}</span>
      </p>
      <p style={{ margin: 0, color: colors.muted, fontSize: '0.9rem' }}>{note}</p>
      {children}
    </div>
  );
}

const included = [
  'Daily AI check-ins that reflect your own words back',
  'A record of your check-ins, in your own words',
  'Weekly reflections',
  'The practice space: exercises, intentions and post-session reflection',
  'Reminders at times you choose',
  'Crisis contacts inside the app',
];

export default function PricingPage() {
  return (
    <ContentPage
      title="Pricing"
      intro={<P>One plan with everything in it. The quiz is free for everyone. Prices include VAT.</P>}
    >
      <H2>Founding member prices</H2>
      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <PlanCard
          name="Annual"
          price={PRICES.founding.annual}
          period="per year"
          note="Works out at under €5 a month. Billed once a year."
          highlight
        />
        <PlanCard
          name="Monthly"
          price={PRICES.founding.monthly}
          period="per month"
          note="Billed every month."
        />
      </div>
      <P>
        <span style={{ display: 'block', marginTop: '16px' }}>
          Founding prices are open to {PRICES.foundingWindow}. If you join as a founding member, you keep your price for as
          long as your subscription stays active. After that, new members pay {PRICES.regular.annual} a year or{' '}
          {PRICES.regular.monthly} a month.
        </span>
      </P>

      <H2>Free</H2>
      <P>The 14-question pattern quiz and its result are free. No account and no payment details needed.</P>

      <H2>What the subscription includes</H2>
      <UL>
        {included.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </UL>

      <H2>Billing, cancelling and refunds</H2>
      <UL>
        <li>Subscriptions renew automatically at the end of each month or year until you cancel.</li>
        <li>You can cancel at any time. You keep access until the end of the period you paid for, and you are not charged again.</li>
        <li>
          Changed your mind? You get a full refund if you ask within {PRICES.refundDays} days of your first payment, or of any
          renewal. No questions asked. See the <A href="/refunds">refund policy</A>.
        </li>
        <li>There is no free trial and no hidden fees. The price you see is the price you pay.</li>
        <li>
          Payments are handled by Paddle.com, our online reseller and Merchant of Record. Paddle shows the final price with VAT
          for your country before you pay.
        </li>
      </UL>

      <H2>Where Seen is available</H2>
      <P>Seen is offered in the European Union and the United Kingdom. The app is in English, with Dutch coming soon.</P>

      <H2>Before you subscribe</H2>
      <P>
        Seen is self-reflection software. It gives no medical advice and is no substitute for professional care. Read{' '}
        <A href="/what-seen-is">what Seen is and is not</A>.
      </P>
    </ContentPage>
  );
}
