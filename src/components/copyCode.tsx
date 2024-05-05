'use client'

import { Check, Copy, CopyCheck } from 'lucide-react'
import { Fragment, isValidElement, ReactNode, useState } from 'react'

export const CopyCode = ({ children, raw }: { children: any; raw: any }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(raw)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute -right-2 -top-1 flex gap-1 rounded-md bg-gray-800 p-1 text-white"
      >
        {isCopied ? (
          <>
            <span className="flex items-center gap-x-1 rounded-md bg-white pl-2 pr-1.5 text-black">
              Copied!
            </span>
            <Check className="text-green-400" />
          </>
        ) : (
          <Copy className="hover:text-green-400" />
        )}
      </button>
      <pre className="m-0 rounded-md bg-gray-800 p-0 pt-8 text-white">
        <code>{children}</code>
      </pre>
    </div>
  )
}
