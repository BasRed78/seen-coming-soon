import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seen: see your stress patterns',
  description: 'Seen is self-reflection software that helps you notice how you cope with stress. A free pattern quiz, short daily check-ins and weekly reflections. No medical advice.',
}

export const viewport: Viewport = {
  themeColor: '#0f0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
