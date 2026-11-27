import type { Metadata } from 'next';
import { A, BusinessBlock, ContentPage, CrisisContacts, H2, P } from '../components/SiteShell';
import { BUSINESS } from '../components/business';

export const metadata: Metadata = {
  title: 'Contact | Seen',
  description: 'How to reach the people behind Seen.',
};

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact"
      intro={<P>Seen is built and run by Bas Redhead. I read every email myself.</P>}
    >
      <H2>Email</H2>
      <P>
        Questions, feedback, billing and refunds: <A href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</A>
        <br />
        Privacy and your data: <A href={`mailto:${BUSINESS.privacyEmail}`}>{BUSINESS.privacyEmail}</A>
      </P>

      <H2>Payments and receipts</H2>
      <P>
        Paddle.com handles payments as our Merchant of Record. For a receipt, an invoice or a payment question, you can also go
        to <A href="https://paddle.net">paddle.net</A>.
      </P>

      <H2>Business details</H2>
      <BusinessBlock />

      <H2>Crisis contacts</H2>
      <P>Email is not monitored around the clock. If you need help right now, please use one of these numbers.</P>
      <CrisisContacts />
    </ContentPage>
  );
}
