import { CopyCode } from '@/components/copyCode'
import { ArrowUpRight } from 'lucide-react'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import '@/app/highlight.css'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props) => {
      const { href, ...rest } = props as any

      return (
        <Link
          href={href}
          target="_blank"
          {...rest}
          className="not-prose inline-flex gap-1 font-medium"
        >
          {props.children}
          <ArrowUpRight className="mt-0.5 h-4 w-4 text-blue-600" />
        </Link>
      )
    },
    blockquote: (props) => {
      const { children } = props as any

      return (
        <blockquote
          {...props}
          className="rounded-lg bg-gray-700 py-px pr-4 !text-white"
        >
          {children}
        </blockquote>
      )
    },
    code: (props) => {
      const { children, __rawString__ } = props as any

      if (children.indexOf('\n') === -1) {
        return (
          <code className="text-blue-600 dark:text-blue-500">{children}</code>
        )
      }

      return <CopyCode raw={__rawString__}>{children}</CopyCode>
    },
    strong: (props) => {
      const { children } = props as any

      return <strong className="font-medium text-foreground">{children}</strong>
    },
  }
}
