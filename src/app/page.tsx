import { Navbar } from '@/components/navbar'
import TimeAgo from '@/components/timeAgo'
import Image from 'next/image'
import Link from 'next/link'
import pMap from 'p-map'

const getBlogs = async () => {
  const githubBlogs = {
    username: 'nrjdalal',
    repository: 'nrjdalal.com',
    path: 'src/app/(mdx)/blog',
  }

  const blogJson = async ({
    username,
    repository,
    path,
  }: {
    username: string
    repository: string
    path: string
  }) => {
    const res = await (
      await fetch(
        `https://github.com/${username}/${repository}/tree-commit-info/main/${path}`,
        {
          headers: {
            accept: 'application/json',
          },
        },
      )
    ).json()

    return Object.values(res).map((item: any, index: number) => ({
      slug: Object.keys(res)[index],
      ...item,
    }))
  }

  const rawText = ({
    username,
    repository,
    path,
    slug,
  }: {
    username: string
    repository: string
    path: string
    slug: string
  }) =>
    `https://raw.githubusercontent.com/${username}/${repository}/main/${path}/${slug}/page.mdx`

  const blogsData = await blogJson(githubBlogs)

  const blogsSlugs = blogsData.map((blog: any) => blog.slug)

  const blogsMeta = await pMap(blogsSlugs, async (slug: string) => {
    const res = await fetch(rawText({ ...githubBlogs, slug }))

    const text = (await res.text())
      .replaceAll('\n', ' ')
      .split(', }  #')[0]
      .split('metadata = {   ')[1]
      .replaceAll('     ', ' ')
      .split(',   ')

    const KeyFinder = (key: string) =>
      text.find((item: any) => item.startsWith(key))

    return {
      slug,
      title: KeyFinder('title')?.split('title: ')[1].slice(1, -1),
      description: KeyFinder('description')
        ?.split('description: ')[1]
        .slice(1, -1),
      tags: KeyFinder('tags')?.split('tags: ')[1].slice(1, -1),
      publish: new RegExp('true').test(
        KeyFinder('publish')?.split('publish: ')[1] || 'true',
      ),
      blog: new RegExp('true').test(
        KeyFinder('blog')?.split('blog: ')[1] || 'true',
      ),
    } as any
  })

  console.log(blogsMeta)

  const data = blogsData.map((blog: any) => {
    const matchMeta = blogsMeta.find((item: any) => item.slug === blog.slug)

    return { ...blog, ...matchMeta }
  })

  return data
    .filter((blog: any) => blog.publish)
    .map((blog: any) => {
      const { title, description, tags } = blogsMeta.find(
        (item: any) => item.slug === blog.slug,
      )

      return { ...blog, title, description, tags }
    })
    .sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

const Page = async () => {
  const blogs = await getBlogs()

  return (
    <main className="container mx-auto max-w-screen-xl">
      <Navbar />

      {
        // ~ About
      }
      <div className="mx-2.5 flex flex-col justify-center border-t border-foreground/25 px-2.5 py-20 font-medium md:py-60">
        <p className="text-2xl text-amber-600 md:text-3xl dark:text-amber-500 ">
          Dream. Sometimes you got to close your eyes and envision the future.
        </p>

        <p className="pt-10 text-2xl md:text-3xl">
          I&apos;m Neeraj Dalal, a web developer from New Delhi, India.
        </p>

        <p className="pt-2 text-2xl md:text-3xl">
          And I will help you to turn your vision into reality.
        </p>
      </div>

      {
        // ~ Blog
      }
      <div className="mx-5 border-t border-foreground/25 py-20  lg:py-28">
        <h2 className="mb-10 text-2xl font-medium text-amber-600 md:text-3xl dark:text-amber-500">
          Blogs
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs
            .filter((blog: any) => blog.blog)
            .map((blog: any) => (
              <BlogLinks
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                title={blog.title}
                tags={blog.tags}
                description={blog.description}
                time={blog.date}
              />
            ))}
        </div>
      </div>

      {
        // ~ Projects
      }
      <Projects
        src="/rdt.li.png"
        href="https://rdt.li"
        title="Redirect Link (SAAS Product)"
      >
        <p>
          rdt.li self hostable, feature rich, minimalistic and open source URL
          shortener. Built with Next.js, Drizzle, NextAuth and Postgres.
        </p>
      </Projects>

      <Projects
        src="/serpwe.com.png"
        href="https://serpwe.com"
        title="Serpwe (SAAS Product)"
        demo="https://www.youtube.com/@SerpWe/videos"
      >
        <p>
          Generate keyword ideas, group similar keywords, and organize them into
          topical clusters - a product of Warewe
        </p>
      </Projects>

      <Projects
        src="/hetrolinks.com.png"
        href="https://hetrolinks.com"
        title="Hetrolinks (SAAS Product)"
        demo="https://www.youtube.com/@Hetrolinks/videos"
      >
        <p>
          Instantly Repair Broken Amazon Affiliate Links - a product of Warewe
        </p>
      </Projects>

      {
        // ~ Github
      }
      <div className="mx-5 border-t border-foreground/25 py-20  lg:py-28">
        <h2 className="mb-10 text-2xl font-medium text-amber-600 md:text-3xl dark:text-amber-500">
          Github
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <GithubLinks
            href="https://github.com/nrjdalal/rdt-li"
            title="rdt-li"
            type="Next.js App"
          >
            rdt.li self hostable, feature rich, minimalistic and open source URL
            shortener. Built with Next.js, Drizzle, NextAuth and Postgres
          </GithubLinks>

          <GithubLinks
            href="https://github.com/nrjdalal/shadcn-ui-snippets"
            title="Shadcn UI Snippets"
            type="VS Code Extension"
          >
            Simply import and use shadcn-ui components in your project
          </GithubLinks>

          <GithubLinks
            href="https://github.com/nrjdalal/onset"
            title="Onset"
            type="Starter Template"
          >
            An open source Next.js bare starter with step-by-step instructions
            if required. Built with Next.js 14, Drizzle (Postgres),
            NextAuth/Auth.js
          </GithubLinks>

          <GithubLinks
            href="https://github.com/nrjdalal/JioTV-Next"
            title="JioTV"
            type="Next.js App"
          >
            JioTV HD Streaming Free on Browser / Android / Android TV
          </GithubLinks>

          <GithubLinks
            href="https://github.com/nrjdalal/google-parser"
            title="Google Parser"
            type="npm package"
          >
            HTTP based Google Search Results scraper/parser
          </GithubLinks>
        </div>
      </div>

      {
        // ~ My Resources
      }
      <div className="mx-5 border-t border-foreground/25 py-20  lg:py-28">
        <h2 className="mb-10 text-2xl font-medium text-amber-600 md:text-3xl dark:text-amber-500">
          My Resources
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs
            .filter((blog: any) => !blog.blog)
            .map((blog: any) => (
              <BlogLinks
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                title={blog.title}
                tags={blog.tags}
                description={blog.description}
                time={blog.date}
              />
            ))}
        </div>
      </div>

      {
        // ~ Contact
      }
      <div className="mx-5 border-t border-foreground/25 py-20  lg:py-28">
        <h2 className="mb-10 text-2xl font-medium text-amber-600 md:text-3xl dark:text-amber-500">
          Contact
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <ContactLinks
            href="mailto:nd941z@gmail.com"
            title="Let's chat ..."
            type="Email"
          >
            nd941z@gmail.com
          </ContactLinks>

          <ContactLinks
            href="tel:+9199999373188"
            title="Ping me at ..."
            type="Mobile"
          >
            +91 9999 373 1 88
          </ContactLinks>

          <ContactLinks
            href="/nrjdalal.pdf"
            title="About me in doc ..."
            type="Resume"
          >
            Download resume
          </ContactLinks>
        </div>
      </div>
    </main>
  )
}

export default Page

const BlogLinks = ({
  href,
  title,
  tags,
  description,
  time,
}: {
  href: string
  title: string
  time: string
  description: string
  tags: string
}) => {
  return (
    <Link href={href}>
      <div className="h-full rounded-lg border border-foreground/25 font-medium">
        <div className="flex h-7 w-full items-center gap-x-2 px-3">
          <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
        </div>
        <div className="relative h-full p-5 pb-10">
          <h2 className="text-xl md:text-2xl">{title}</h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.split(',').map((tag: string) => (
              <span
                className="rounded-full border border-amber-600 px-2 py-0.5 text-xs text-amber-600 dark:border-amber-500 dark:text-amber-500"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="pt-4 text-lg text-foreground/50">{description}</p>
          <div className="absolute bottom-10 right-5 mt-auto w-full text-right text-[0.6rem] capitalize text-foreground/50">
            <TimeAgo time={time} />
          </div>
        </div>
      </div>
    </Link>
  )
}

const GithubLinks = ({
  href,
  title,
  type,
  children,
}: {
  href: string
  title: string
  type: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href} target="_blank" data-umami-event={href}>
      <div className="h-full rounded-lg border border-foreground/25 font-medium">
        <div className="flex h-7 w-full items-center gap-x-2 px-3">
          <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
        </div>
        <div className="p-5">
          <h2 className="text-xl md:text-2xl">{title}</h2>
          <p className="mt-2 w-max rounded-full border border-amber-600 px-2 py-0.5 text-xs text-amber-600 dark:border-amber-500 dark:text-amber-500">
            {type}
          </p>
          <p className="pt-4 text-lg text-foreground/50">{children}</p>
        </div>
      </div>
    </Link>
  )
}

const Projects = ({
  src,
  href,
  title,
  children,
  demo,
}: {
  src: string
  href: string
  title: string
  children: React.ReactNode
  demo?: string
}) => {
  return (
    <div className="mx-5 flex flex-col border-t border-foreground/25 lg:py-10">
      <div className="grid gap-x-16 gap-y-12 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-foreground/25">
          <div className="flex h-7 w-full items-center gap-x-2 px-3">
            <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
            <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
            <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
          </div>
          <Link href={href} target="_blank">
            <Image src={src} alt={title} height={440} width={586} />
          </Link>
        </div>

        <div className="flex flex-col justify-center font-medium">
          <h2 className="text-2xl md:text-3xl">{title}</h2>

          <div className="pt-8 text-xl text-foreground/50">{children}</div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={href}
              target="_blank"
              className="w-max rounded-xl border border-amber-600 px-4 py-2 text-amber-600 dark:border-amber-500 dark:text-amber-500"
            >
              Visit Website
            </Link>

            {demo && (
              <Link
                href={demo}
                target="_blank"
                className="w-max rounded-xl border border-red-500 bg-red-500 px-4 py-2 text-white"
              >
                Video Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactLinks = ({
  href,
  title,
  type,
  children,
}: {
  href: string
  title: string
  type: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href}>
      <div className="h-full rounded-lg border border-foreground/25 font-medium">
        <div className="flex h-7 w-full items-center gap-x-2 px-3">
          <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
        </div>
        <div className="p-5">
          <h2 className="text-lg md:text-xl">{title}</h2>
          <p className="mt-2 w-max rounded-full border border-amber-600 px-2 py-0.5 text-xs text-amber-600 dark:border-amber-500 dark:text-amber-500">
            {type}
          </p>
          <p className="pt-4 text-lg text-foreground/50">{children}</p>
        </div>
      </div>
    </Link>
  )
}
