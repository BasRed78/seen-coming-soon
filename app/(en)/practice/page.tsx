import type { Metadata, Viewport } from 'next';
import Phase2Landing from '../../components/phase2/Phase2Landing';
import { alternates, getCopy } from '../../i18n';

const copy = getCopy('en');

export const metadata: Metadata = {
  title: copy.meta.p2Title,
  description: copy.meta.p2Description,
  alternates: alternates('en', '/practice'),
};

export const viewport: Viewport = { themeColor: '#faf8f5' };

export default function PracticePage() {
  return <Phase2Landing copy={copy} locale="en" />;
}
