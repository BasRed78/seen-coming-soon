import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seen. Voor de tijd tussen je therapiesessies',
  description: 'Seen helpt je vasthouden wat je in therapie leert, en het toe te passen in je dagelijks leven. Binnenkort beschikbaar.',
}

export const viewport: Viewport = {
  themeColor: '#faf8f5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        {children}
      </body>
    </html>
  )
}
