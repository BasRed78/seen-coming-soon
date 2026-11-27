import type { Metadata } from 'next';
import { A, BusinessBlock, ContentPage, H2, P, UL } from '@/app/components/SiteShell';
import { BUSINESS, LAST_UPDATED, PRICES } from '@/app/components/business';

export const metadata: Metadata = {
  title: 'Refund policy | Seen',
  description: `Full refund within ${PRICES.refundDays} days of any payment for Seen, no questions asked.`,
};

export default function RefundsPage() {
  return (
    <ContentPage
      title="Refund policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <P>
          If Seen is not for you, you get your money back. Ask within {PRICES.refundDays} days of a payment and we refund that
          payment in full. No questions asked.
        </P>
      }
    >
      <H2>Who the refund applies to</H2>
      <P>
        Every Seen subscription, monthly or annual, including renewals. The {PRICES.refundDays} days start on the date of the
        payment you want refunded. You do not need to give a reason, and it does not matter how much you have used Seen.
      </P>

      <H2>How to ask for a refund</H2>
      <UL>
        <li>
          Through Paddle, our reseller: find your receipt email from Paddle, or go to{' '}
          <A href="https://paddle.net">paddle.net</A> and look up your order.
        </li>
        <li>
          Or email us at <A href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</A> with the email address you used to pay. We
          pass the request on to Paddle.
        </li>
      </UL>

      <H2>What happens next</H2>
      <P>
        Paddle refunds the money to the payment method you used. Banks usually take 5 to 10 working days to show it. When a
        payment is refunded, the subscription it paid for ends.
      </P>

      <H2>After 14 days</H2>
      <P>
        You can still cancel at any time, so you are not charged again. You keep access until the end of the period you already
        paid for. If something went wrong with your payment after the {PRICES.refundDays} days, email us and we will look at it
        with you.
      </P>

      <H2>Your legal rights</H2>
      <P>
        This policy comes on top of your rights under consumer law, including the 14-day right of withdrawal for consumers in
        the EU and UK. It does not limit them.
      </P>

      <H2>Who you are dealing with</H2>
      <P>
        Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our
        orders. Seen itself is provided by:
      </P>
      <BusinessBlock />
      <P>
        See also our <A href="/terms">terms</A> and <A href="/pricing">pricing</A>.
      </P>
    </ContentPage>
  );
}
