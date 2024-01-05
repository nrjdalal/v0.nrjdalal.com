import { ArrowLeft, ArrowRight, RotateCw, X } from 'lucide-react'

export const BrowserPreview = ({
  title,
  children,
  url,
}: {
  title: string
  children: any
  url: string
}) => {
  return (
    <div className="w-full rounded-lg border border-slate-300">
      <div className="flex h-8 cursor-not-allowed items-center gap-x-2 rounded-t-lg bg-zinc-700 px-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
        <div className="ml-3 mt-1 flex h-7 items-center rounded-t-md bg-zinc-600 px-3 text-xs text-white">
          {title} <X className="ml-1.5 h-3.5 w-3.5" />
        </div>
      </div>
      <div className="flex h-10 cursor-not-allowed items-center gap-3 border-b bg-zinc-600 px-3 text-white">
        <ArrowLeft className="h-3.5 w-3.5" />
        <ArrowRight className="h-3.5 w-3.5" />
        <RotateCw className="h-3.5 w-3.5" />
        <div className="w-full rounded-full bg-zinc-700 px-6 py-1 text-sm ">
          {url}
        </div>
      </div>
      <div className="min-h-[25dvh]">{children}</div>
    </div>
  )
}
