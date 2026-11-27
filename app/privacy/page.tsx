import type { Metadata } from 'next';
import { A, Callout, ContentPage, H2, H3, P, UL, colors } from '../components/SiteShell';
import { BUSINESS, LAST_UPDATED } from '../components/business';

export const metadata: Metadata = {
  title: 'Privacy policy | Seen',
  description: 'Who is responsible for your data in Seen, what we collect, who processes it and your rights.',
};

const cell = { padding: '10px 12px 10px 0', verticalAlign: 'top' as const, borderBottom: `1px solid ${colors.surfaceLight}` };

const processors = [
  {
    name: 'Supabase Inc.',
    role: 'Database and login. Stores your account, quiz result, check-ins, reflections, exercises and waitlist email.',
    where: 'Data stored in the EU (Ireland). Supabase is a US company.',
  },
  {
    name: 'Vercel Inc.',
    role: 'Hosts the website and app and runs the code that handles every request, including check-in text in transit.',
    where: 'Requests may be processed in the United States.',
  },
  {
    name: 'Anthropic PBC',
    role: 'Provides the AI model (Claude) that writes check-in replies and summaries. Receives the text of your check-ins to do this.',
    where: 'United States. Under its commercial terms Anthropic may keep inputs and outputs for a limited period and does not use them to train its models.',
  },
  {
    name: 'Resend Inc.',
    role: 'Sends emails such as reminders and welcome messages, if you give an email address.',
    where: 'United States.',
  },
  {
    name: 'Browser push services (Apple, Google, Mozilla)',
    role: 'Deliver notifications if you turn them on, such as a reminder with the name of an exercise you planned.',
    where: 'Depends on your device and browser.',
  },
];

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <Callout label="The short version">
          <P>
            We do not sell your data, we do not show ads and we do not track you across other websites. You can use Seen without
            your real name. What you write in check-ins is sensitive, so we only process it with your explicit consent and only
            to run Seen for you. Some of the companies that help us run Seen are based in the United States. This page names
            them.
          </P>
        </Callout>
      }
    >
      <H2>1. Who is responsible for your data</H2>
      <P>
        The controller of your personal data is {BUSINESS.tradingName}, the {BUSINESS.legalForm} of {BUSINESS.owner}, registered
        with the Dutch Chamber of Commerce (KvK) under number {BUSINESS.kvk}.
      </P>
      <P>
        Address: {BUSINESS.address}
        <br />
        Privacy questions and requests: <A href={`mailto:${BUSINESS.privacyEmail}`}>{BUSINESS.privacyEmail}</A>
      </P>
      <P>This policy covers the website at seeyourself.today and the app at app.seeyourself.today.</P>

      <H2>2. What we collect</H2>
      <H3>Information you give us</H3>
      <UL>
        <li><strong>Waitlist:</strong> your email address, if you ask us to keep you posted.</li>
        <li><strong>Quiz answers and result:</strong> your answers to the 14 questions and the pattern they point to.</li>
        <li><strong>Account:</strong> a name or nickname of your choice and, if you give one, an email address. Any email works.</li>
        <li>
          <strong>Check-ins and reflections:</strong> what you write in daily check-ins, post-session reflections and
          intentions, plus the AI&apos;s replies and the summaries made from them.
        </li>
        <li><strong>Practice data:</strong> the themes you choose, the exercises you plan and complete, and your reminder times.</li>
        <li>
          <strong>Payment:</strong> Paddle handles payment (see section 5). We receive your subscription status, plan and an
          order reference. We never see your card details.
        </li>
      </UL>
      <H3>Information collected automatically</H3>
      <UL>
        <li><strong>Technical logs:</strong> time of access, error messages and similar data our hosting provider keeps to run the service securely.</li>
        <li><strong>Push subscription:</strong> a technical address for your browser, only if you turn on notifications.</li>
      </UL>
      <P>We do not use analytics tools, advertising trackers or social media pixels.</P>

      <H2>3. Why we use it and on what legal basis</H2>
      <UL>
        <li>
          <strong>Running Seen for you</strong> (account, quiz result, practice data, reminders): performance of our contract
          with you (GDPR article 6(1)(b)).
        </li>
        <li>
          <strong>Check-in and reflection content:</strong> this can reveal information about your health, which is a special
          category of data. We process it only with your explicit consent (GDPR article 9(2)(a)). You can withdraw consent at any
          time. Without it we cannot run check-ins, but this does not affect anything we did before.
        </li>
        <li><strong>Waitlist and update emails:</strong> your consent (article 6(1)(a)). You can unsubscribe at any time.</li>
        <li>
          <strong>Security and fixing errors:</strong> our legitimate interest in keeping Seen safe and working (article
          6(1)(f)).
        </li>
        <li><strong>Tax and accounting records:</strong> legal obligation (article 6(1)(c)).</li>
      </UL>
      <P>
        Seen does not make decisions about you that have legal or similarly significant effects. The quiz result and AI
        reflections are there for you to read and think about.
      </P>

      <H2>4. Who processes your data for us</H2>
      <P>
        These companies process data on our behalf, under data processing agreements, and only to run Seen. We do not sell or
        rent your data to anyone.
      </P>
      <div style={{ overflowX: 'auto', margin: '16px 0 24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
          <caption style={{ textAlign: 'left', color: colors.faint, fontSize: '0.85rem', paddingBottom: '8px' }}>
            Processors that help run Seen
          </caption>
          <thead>
            <tr style={{ color: colors.cream, textAlign: 'left' }}>
              <th style={cell}>Company</th>
              <th style={cell}>What it does</th>
              <th style={cell}>Where</th>
            </tr>
          </thead>
          <tbody>
            {processors.map((p) => (
              <tr key={p.name}>
                <td style={{ ...cell, color: colors.cream, fontWeight: 600 }}>{p.name}</td>
                <td style={cell}>{p.role}</td>
                <td style={cell}>{p.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>5. Paddle, our reseller</H2>
      <P>
        Our order process is conducted by our online reseller Paddle.com (Paddle.com Market Limited, London, United Kingdom, and
        for US orders Paddle.com Inc.). Paddle is the Merchant of Record for all our orders. Paddle collects your name, email
        address, billing country and payment details to process payments, calculate tax and prevent fraud. For that processing
        Paddle is an independent controller under its own <A href="https://www.paddle.com/legal/privacy">privacy policy</A>.
        Paddle shares with us what we need to give you access, such as your email, plan and subscription status.
      </P>

      <H2>6. Transfers outside the EU</H2>
      <P>
        Vercel, Anthropic, Resend and Supabase are US companies, and some processing happens in the United States. We rely on
        the EU-US Data Privacy Framework where the company is certified, and on the European Commission&apos;s Standard
        Contractual Clauses. Data is also transferred to the UK for Paddle, which the EU recognises as having adequate
        protection. We are working on moving more processing into the EU.
      </P>

      <H2>7. How long we keep data</H2>
      <UL>
        <li><strong>Active accounts:</strong> while your account is active.</li>
        <li><strong>Inactive accounts:</strong> deleted 24 months after your last activity.</li>
        <li><strong>When you ask us to delete your account:</strong> deleted within 30 days, except what we must keep by law.</li>
        <li><strong>Waitlist emails:</strong> until you unsubscribe or ask us to delete your address.</li>
        <li><strong>Tax and payment records:</strong> 7 years, as Dutch tax law requires.</li>
      </UL>

      <H2>8. Your rights</H2>
      <P>Under the GDPR you can ask us to:</P>
      <UL>
        <li>give you a copy of your data (access);</li>
        <li>correct data that is wrong (rectification);</li>
        <li>delete your data (erasure);</li>
        <li>limit how we use it (restriction);</li>
        <li>send it to you in a machine-readable format (portability);</li>
        <li>stop processing based on our legitimate interest (objection).</li>
      </UL>
      <P>
        You can also withdraw consent at any time. Email <A href={`mailto:${BUSINESS.privacyEmail}`}>{BUSINESS.privacyEmail}</A>{' '}
        and we will respond within one month.
      </P>

      <H2>9. Security</H2>
      <P>
        Data is encrypted in transit (TLS) and at rest in our database, and access to it is restricted. If a breach affects your data, we tell you and the Dutch Data Protection Authority as the
        law requires.
      </P>

      <H2>10. Cookies</H2>
      <P>
        We only use cookies that Seen needs to work, such as keeping you logged in. See the <A href="/cookies">cookie policy</A>.
      </P>

      <H2>11. Age</H2>
      <P>Seen is for adults aged 18 and over. If we learn that someone younger has an account, we delete it.</P>

      <H2>12. Complaints</H2>
      <P>
        Please contact us first. You also have the right to complain to a data protection authority. In the Netherlands that is
        the <A href="https://autoriteitpersoonsgegevens.nl">Autoriteit Persoonsgegevens</A>. In the UK it is the{' '}
        <A href="https://ico.org.uk">Information Commissioner&apos;s Office</A>.
      </P>

      <H2>13. Changes</H2>
      <P>
        If we make important changes to this policy, we tell you by email or in the app before they apply, and we update the date
        at the top.
      </P>
    </ContentPage>
  );
}
