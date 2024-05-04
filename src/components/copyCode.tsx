'use client'

import { Copy, CopyCheck } from 'lucide-react'
import { useState } from 'react'

export const CopyCode = ({ children }: { children: any }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute -top-2 right-0 rounded-md bg-gray-800 p-1 text-white"
      >
        {isCopied ? <CopyCheck className="text-green-400" /> : <Copy />}
      </button>
      <pre className="m-0 rounded-md bg-gray-800 p-0 pt-7 text-white">
        <code>{children}</code>
      </pre>
    </div>
  )
}
