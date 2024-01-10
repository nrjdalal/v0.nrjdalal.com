import './globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import Script from 'next/script'

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

      {/* optional: umami analytics */}
      {process.env.NEXT_PUBLIC_UMAMI_URL && (
        <Script
          async
          defer
          src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
          data-website-id={`${process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}`}
        />
      )}
    </html>
  )
}
