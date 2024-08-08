import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeElement] = node.children
            if (codeElement.tagName !== 'code') return

            node.__rawString__ = codeElement.children[0]?.value
          }
        })
      },
      rehypeHighlight,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const preElement = node.children.at(-1)

            preElement.properties = {
              ...preElement.properties,
              __rawString__: node.__rawString__,
            }
          }
        })
      },
    ],
  },
})

export default withMDX(nextConfig)
