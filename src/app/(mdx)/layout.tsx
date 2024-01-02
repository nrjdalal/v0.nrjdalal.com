'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegments()

  return (
    <main className="container mx-auto min-h-[100dvh] max-w-screen-xl">
      {
        // ~ Header
      }
      <div className="mx-5 flex h-12 items-center gap-5">
        <p className="text-md font-semibold">NEERAJ DALAL</p>
      </div>

      {
        // ~ About
      }
      <div className="mx-2.5 border-t border-slate-800 px-2.5 pt-10 font-medium" />

      <div className="flex justify-center">
        <article className="prose prose-a:no-underline prose-a:font-normal w-full max-w-screen-md px-5 pb-20 pt-10">
          <div className="flex items-center gap-5">
            <Link
              className="text-xs font-semibold text-blue-500 no-underline"
              href={'/'}
            >
              BACK
            </Link>
            <p className="border-px select-none rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-500">
              {segment.join('/')}
            </p>
          </div>

          {children}
        </article>
      </div>
    </main>
  )
}
