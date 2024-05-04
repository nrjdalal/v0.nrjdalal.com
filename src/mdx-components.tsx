import { CopyCode } from '@/components/copyCode'
import { ArrowUpRight } from 'lucide-react'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

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
          className="rounded-lg border-[1px] bg-gray-100 py-px pr-4 !text-black"
        >
          {children}
        </blockquote>
      )
    },
    code: (props) => {
      const { children } = props as any

      if (children.indexOf('\n') === -1) {
        return <code>{children}</code>
      }

      return <CopyCode>{children}</CopyCode>
    },
  }
}
