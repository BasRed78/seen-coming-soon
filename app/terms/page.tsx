import type { Metadata } from 'next';
import { A, BusinessBlock, Callout, ContentPage, CrisisContacts, H2, P, UL } from '../components/SiteShell';
import { BUSINESS, LAST_UPDATED, PRICES } from '../components/business';

export const metadata: Metadata = {
  title: 'Terms of service | Seen',
  description: 'The terms for using Seen, a self-reflection app provided by Red About Now.',
};

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of service"
      lastUpdated={LAST_UPDATED}
      intro={
        <P>
          These terms apply to the Seen website at seeyourself.today, the Seen app at app.seeyourself.today and every Seen
          subscription. By using Seen you agree to them. They are written to be readable. If anything is unclear, email us.
        </P>
      }
    >
      <H2>1. Who provides Seen</H2>
      <P>
        Seen is provided by {BUSINESS.tradingName}, the {BUSINESS.legalForm} of {BUSINESS.owner}. When you use Seen, your
        agreement is with {BUSINESS.tradingName}. In these terms, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean{' '}
        {BUSINESS.tradingName}, and &ldquo;you&rdquo; means the person using Seen.
      </P>
      <BusinessBlock />

      <H2>2. What Seen is and is not</H2>
      <P>
        Seen is self-reflection software. It offers a pattern quiz, AI check-ins that reflect your own words back to you, weekly
        reflections and a practice space with self-help exercises.
      </P>
      <Callout label="Seen gives no medical advice">
        <UL>
          <li>Seen does not give medical, psychological or health advice, and it does not diagnose, treat or prevent any condition.</li>
          <li>Seen is not therapy, counselling or a medical device, and no clinician works through Seen.</li>
          <li>A pattern result describes behaviour. It is not a diagnosis.</li>
          <li>Seen is no substitute for professional care. If you are worried about your health, please see a doctor or other professional.</li>
          <li>Seen is not a crisis service.</li>
        </UL>
      </Callout>
      <P>
        Read the full statement on <A href="/what-seen-is">what Seen is and is not</A>.
      </P>
      <CrisisContacts />

      <H2>3. Who can use Seen</H2>
      <UL>
        <li>You must be at least 18 years old.</li>
        <li>Seen is for your own personal use.</li>
        <li>Please do not use Seen while you are in crisis. Use the contacts above instead.</li>
      </UL>

      <H2>4. Your account</H2>
      <P>
        You need an account for check-ins and the practice space. Keep your login details to yourself. You are responsible for
        what happens in your account, unless someone got in through a failure on our side.
      </P>

      <H2>5. Using Seen fairly</H2>
      <P>You agree not to:</P>
      <UL>
        <li>use Seen for anything unlawful, fraudulent or harmful to others;</li>
        <li>send spam or malicious code, or try to break into or overload Seen or its systems;</li>
        <li>copy, resell or reverse-engineer Seen, or scrape it with automated tools;</li>
        <li>use Seen to infringe anyone else&apos;s rights, including intellectual property rights.</li>
      </UL>

      <H2>6. AI responses</H2>
      <P>
        Seen&apos;s check-ins and summaries are written by an AI model (Claude, made by Anthropic). You are always talking to
        software. AI can misunderstand you or get things wrong. Treat what it writes as a reflection to think about, and never as
        advice or instructions. Decisions about your life and health stay with you and the professionals you choose.
      </P>

      <H2>7. Subscriptions and payment</H2>
      <Callout label="Paddle is our reseller">
        <P>
          Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our
          orders. Paddle provides all customer service inquiries and handles returns. Paddle&apos;s own{' '}
          <A href="https://www.paddle.com/legal/checkout-buyer-terms">buyer terms</A> apply to your payment.
        </P>
      </Callout>
      <UL>
        <li>
          The quiz is free. Check-ins, weekly reflections and the practice space need a paid subscription, billed monthly or
          yearly. Current prices are on the <A href="/pricing">pricing page</A> and include VAT.
        </li>
        <li>Your subscription renews automatically at the end of each period until you cancel.</li>
        <li>
          You can cancel at any time through Paddle at <A href="https://paddle.net">paddle.net</A>, from your receipt email, or by emailing us. You
          keep access until the end of the period you paid for, and you are not charged again.
        </li>
        <li>
          Founding members keep their founding price ({PRICES.founding.annual} a year or {PRICES.founding.monthly} a month) for
          as long as their subscription stays active.
        </li>
        <li>
          If we change the price for other members, we tell you at least 30 days before the change applies to you, and you can
          cancel before it does.
        </li>
        <li>
          Refunds: you get a full refund for any payment if you ask within {PRICES.refundDays} days of it, no questions asked.
          See the <A href="/refunds">refund policy</A>.
        </li>
        <li>There is no free trial, and we do not charge hidden fees.</li>
      </UL>

      <H2>8. Your content</H2>
      <P>
        What you write in Seen stays yours. You give us permission to store and process it only to run Seen for you, as
        described in our <A href="/privacy">privacy policy</A>. We do not sell it, and we do not use it for advertising.
      </P>

      <H2>9. Our software and name</H2>
      <P>
        The Seen software, design, texts, pattern framework and name belong to {BUSINESS.tradingName}. You get a personal,
        non-transferable right to use Seen while your account is active. Exercises that build on existing methods credit their
        sources.
      </P>

      <H2>10. Availability</H2>
      <P>
        We work to keep Seen running well, but we cannot promise it will always be available or free of errors. We may change or
        improve features. If we remove something central to your subscription, we tell you in advance.
      </P>

      <H2>11. Ending your use of Seen</H2>
      <UL>
        <li>You can stop using Seen and ask us to delete your account at any time.</li>
        <li>
          We may suspend or end your access if you seriously or repeatedly break these terms, do not pay, or put the security of
          Seen or other people at risk. Where possible, we warn you first.
        </li>
        <li>If we stop offering Seen altogether, we refund the unused part of any subscription you paid in advance.</li>
      </UL>

      <H2>12. Liability</H2>
      <P>
        Seen is a self-reflection tool, and you decide what to do with what you notice. To the extent the law allows, we are not
        liable for indirect or consequential loss, or for decisions you make based on what Seen shows you. Where we are liable,
        our total liability is limited to what you paid us in the 12 months before the claim, or €100 if that is higher.
      </P>
      <P>
        Nothing in these terms limits liability that the law does not allow us to limit, such as liability for intent or gross
        negligence, and nothing limits your rights as a consumer.
      </P>

      <H2>13. Changes to these terms</H2>
      <P>
        We may update these terms. For important changes we tell you by email or in the app at least 30 days before they take
        effect. If you do not agree, you can cancel before then.
      </P>

      <H2>14. Law and disputes</H2>
      <P>
        Dutch law applies to these terms. If you live in another country, you keep the protection of the mandatory consumer law
        of that country. Please contact us first so we can try to solve a problem together. If that does not work, you can take
        the dispute to the competent court in the Netherlands or in the country where you live.
      </P>

      <H2>15. Contact</H2>
      <P>
        Email <A href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</A>, or see the <A href="/contact">contact page</A>.
      </P>
    </ContentPage>
  );
}
