import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Home,
  Menu,
  Plus,
  Puzzle,
  RotateCw,
  Star,
  X,
} from 'lucide-react'

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
    <div>
      <div className="flex h-8 cursor-not-allowed items-center gap-x-2 rounded-t-lg bg-zinc-700 px-3">
        <div className="mt-0.5 h-3 w-3 rounded-full bg-red-400" />
        <div className="mt-0.5 h-3 w-3 rounded-full bg-yellow-400" />
        <div className="mt-0.5 h-3 w-3 rounded-full bg-green-400" />
        <div className="ml-3 mt-1 flex h-7 items-center gap-2 rounded-t-md bg-zinc-600 px-3 text-xs text-white">
          <Globe2 className="h-3.5 w-3.5" />
          {title}
          <X className="h-3.5 w-3.5" />
        </div>
        <Plus className="mt-1 h-3.5 w-3.5 text-white" />
      </div>
      <div className="flex h-10 cursor-not-allowed items-center gap-3 bg-zinc-600 px-3 text-white">
        <ArrowLeft className="h-3.5 w-3.5" />
        <ArrowRight className="h-3.5 w-3.5" />
        <RotateCw className="h-3.5 w-3.5" />
        <Home className="h-3.5 w-3.5" />
        <div className="flex w-full items-center justify-between rounded-full bg-zinc-700 px-4 py-1 text-sm">
          {url} <Star className="h-3.5 w-3.5" />
        </div>
        <Puzzle className="h-3.5 w-3.5" />
        <Menu className="h-3.5 w-3.5" />
      </div>
      <div className="min-h-[25dvh] rounded-b-lg border border-zinc-600">
        {children}
      </div>
    </div>
  )
}
