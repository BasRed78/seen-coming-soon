import type { Metadata } from 'next';
import { A, ContentPage, H2, P, UL } from '@/app/components/SiteShell';
import { BUSINESS, LAST_UPDATED } from '@/app/components/business';

export const metadata: Metadata = {
  title: 'Cookie policy | Seen',
  description: 'Seen only uses cookies it needs to work. No analytics, no advertising.',
};

export default function CookiesPage() {
  return (
    <ContentPage
      title="Cookie policy"
      lastUpdated={LAST_UPDATED}
      intro={<P>Seen only uses cookies and local storage it needs to work. We use no analytics, advertising or social media cookies.</P>}
    >
      <H2>This website</H2>
      <P>The website at seeyourself.today sets no cookies of its own.</P>

      <H2>The Seen app</H2>
      <P>The app at app.seeyourself.today uses strictly necessary cookies and local storage to:</P>
      <UL>
        <li>keep you logged in;</li>
        <li>keep access secure while Seen is in testing;</li>
        <li>remember settings such as your quiz result on your device and whether you have seen a notice.</li>
      </UL>
      <P>Because these are strictly necessary, the law does not require us to ask for consent first.</P>

      <H2>Payments</H2>
      <P>
        When you pay, Paddle&apos;s checkout may set its own cookies to process the payment and prevent fraud. See{' '}
        <A href="https://www.paddle.com/legal/privacy">Paddle&apos;s privacy policy</A>.
      </P>

      <H2>Questions</H2>
      <P>
        Email <A href={`mailto:${BUSINESS.privacyEmail}`}>{BUSINESS.privacyEmail}</A>. See also our{' '}
        <A href="/privacy">privacy policy</A>.
      </P>
    </ContentPage>
  );
}
