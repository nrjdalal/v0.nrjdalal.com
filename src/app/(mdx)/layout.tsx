'use client'

import { useSelectedLayoutSegments } from 'next/navigation'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegments()

  return (
    <main className="container mx-auto min-h-[100dvh] max-w-screen-xl">
      {
        // ~ Header
      }
      <div className="mx-5 flex h-12 items-center">
        <p className="text-md font-semibold">NEERAJ DALAL</p>
        <p className="border-px ml-5 rounded-md bg-slate-100 px-3 py-1 text-xs text-blue-500">
          {segment.join('/')}
        </p>
      </div>

      {
        // ~ About
      }
      <div className="mx-2.5 border-t border-slate-800 px-2.5 pt-10 font-medium" />

      <div className="flex justify-center">
        <article className="prose w-full max-w-screen-md px-5 pt-10">
          {children}
        </article>
      </div>
    </main>
  )
}
