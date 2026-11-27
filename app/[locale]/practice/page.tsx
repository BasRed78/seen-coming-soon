import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Phase2Landing from '../../components/phase2/Phase2Landing';
import { alternates, getCopy, isLocale } from '../../i18n';

type Props = { params: Promise<{ locale: string }> };

export const viewport: Viewport = { themeColor: '#faf8f5' };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return { title: copy.meta.p2Title, description: copy.meta.p2Description, alternates: alternates(locale, '/practice') };
}

export default async function LocalePracticePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Phase2Landing copy={getCopy(locale)} locale={locale} />;
}
