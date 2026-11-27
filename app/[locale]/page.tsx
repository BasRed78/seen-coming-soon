import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Phase1Landing from '../components/phase1/Phase1Landing';
import { alternates, getCopy, isLocale } from '../i18n';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return { title: copy.meta.p1Title, description: copy.meta.p1Description, alternates: alternates(locale, '/') };
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Phase1Landing copy={getCopy(locale)} locale={locale} />;
}
