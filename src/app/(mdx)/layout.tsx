'use client'

import { Navbar } from '@/components/navbar'
import { Pencil } from 'lucide-react'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegments()
  const githubLink = `https://github.com/nrjdalal/v0.nrjdalal.com/tree/main/src/app/(mdx)/${segment.join(
    '/',
  )}/page.mdx`

  return (
    <main className="container mx-auto min-h-[100dvh] max-w-screen-xl">
      <Navbar />

      {
        // ~ About
      }
      <div className="mx-2.5 border-t border-foreground/30 px-2.5 pt-10 font-medium" />

      <div className="flex justify-center">
        <article className="prose w-full max-w-screen-xl px-5 pb-20 pt-10 text-foreground prose-headings:text-foreground prose-hr:border-foreground/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Link
                className="text-xs font-semibold text-blue-500 no-underline"
                href={'/'}
              >
                BACK
              </Link>
              <p className="border-px select-none rounded-md bg-foreground/10 px-3 py-1 text-xs text-foreground/60">
                {segment.join(' / ')}
              </p>
            </div>

            <Link
              className="flex items-center gap-2 text-xs text-foreground/75 no-underline"
              href={githubLink}
              target="_blank"
            >
              Edit <Pencil className="h-3.5 w-3.5 text-foreground/50" />
            </Link>
          </div>

          {children}
        </article>
      </div>
    </main>
  )
}
