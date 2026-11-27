import '../globals.css';
import type { ReactNode } from 'react';
import { HtmlShell, baseMetadata, baseViewport } from '../components/rootLayout';

// Root layout for English: the landing pages at / and /practice, plus the
// shared pages (pricing, legal, contact), which are English only for now.
export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return <HtmlShell lang="en">{children}</HtmlShell>;
}
