import type { MDXComponents } from 'mdx/types'
import '@/app/highlight.css'
import { ArrowUpRight } from 'lucide-react'
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
          className="not-prose flex gap-1"
        >
          {props.children}
          <ArrowUpRight className="mt-0.5 h-4 w-4 text-blue-600" />
        </Link>
      )
    },
  }
}
