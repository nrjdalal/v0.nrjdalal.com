import './globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Neeraj Dalal',
    default: 'Neeraj Dalal',
  },
  description: 'My personal website, blogs and resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-[100dvh] font-sans antialiased',
          fontMono.variable,
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
