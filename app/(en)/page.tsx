import type { Metadata } from 'next';
import Phase1Landing from '../components/phase1/Phase1Landing';
import { alternates, getCopy } from '../i18n';

const copy = getCopy('en');

export const metadata: Metadata = {
  title: copy.meta.p1Title,
  description: copy.meta.p1Description,
  alternates: alternates('en', '/'),
};

export default function HomePage() {
  return <Phase1Landing copy={copy} locale="en" />;
}
