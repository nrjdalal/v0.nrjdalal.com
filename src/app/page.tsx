import { Navbar } from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <main className="container mx-auto max-w-screen-xl text-slate-800">
      <Navbar />

      {
        // ~ About
      }
      <div className="mx-2.5 flex flex-col justify-center border-t border-slate-800 px-2.5 py-20 font-medium md:py-60">
        <p className="text-2xl text-amber-600 md:text-3xl">
          Dream. Sometimes you got to close your eyes and envision the future.
        </p>

        <p className="pt-10 text-2xl md:text-3xl">
          I&apos;m Neeraj Dalal, a web developer based in New Delhi, India.
        </p>

        <p className="pt-2 text-2xl md:text-3xl">
          And I will help you to turn your vision into reality.
        </p>
      </div>

      {
        // ~ Blog
      }
      <div className="mx-5 border-t border-slate-300 py-20  lg:py-28">
        <h2 className="mb-10 text-2xl font-medium text-amber-600 md:text-3xl">
          Blogs
        </h2>
        {/* Exploring entertainment, food and much more */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <BlogLinks
            href="/blog/web-development"
            title="Web Development"
            type="Resources"
          >
            How to get started in 2024, and some useful resources
          </BlogLinks>

          <BlogLinks href="/blog/fitness" title="Fitness" type="Journal">
            My fitness journey, what I&apos;ve learned and what I&apos;ve done
          </BlogLinks>

          <BlogLinks
            href="/blog/travel"
            title="Travel"
            type="Entertainment, Food & More"
          >
            Exploring entertainment, food and much more
          </BlogLinks>

          <BlogLinks
            href="/blog/recommendations"
            title="Recommendations"
            type="Series, Movies & More"
          >
            I honestly believe you&apos;ll love some if not all of it
          </BlogLinks>

          <BlogLinks href="/blog/bookmarks" title="Bookmarks" type="Resources">
            Catch up on what I&apos;m reading, watching, and listening to
          </BlogLinks>
        </div>
      </div>

      {
        // ~ Github
      }
      <div className="mx-5 border-t border-slate-300 py-20  lg:py-28">
        <h2 className="mb-10 text-2xl font-medium text-amber-600 md:text-3xl">
          Github
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        // ~ Projects
      }
      <Projects src="/rdt.li.png" href="https://rdt.li" title="Redirect Link">
        <p>
          rdt.li self hostable, feature rich, minimalistic and open source URL
          shortener. Built with Next.js, Drizzle, NextAuth and Postgres.
        </p>
      </Projects>

      <Projects src="/serpwe.com.png" href="https://serpwe.com" title="Serpwe">
        <p>
          Generate keyword ideas, group similar keywords, and organize them into
          topical clusters - a product of Warewe
        </p>
      </Projects>

      <Projects
        src="/hetrolinks.com.png"
        href="https://hetrolinks.com"
        title="Hetrolinks"
      >
        <p>
          Instantly Repair Broken Amazon Affiliate Links - a product of Warewe
        </p>
      </Projects>

      {
        // ~ Contact
      }
      <div className="mx-5 border-t border-slate-300 py-20  lg:py-28">
        <h2 className="mb-10 text-2xl font-medium text-amber-600 md:text-3xl">
          Contact
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            href="https://github.com/nrjdalal"
            title="Raise an issue ..."
            type="Github"
          >
            @nrjdalal
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
      <div className="h-full rounded-lg border border-slate-300 font-medium">
        <div className="flex h-7 w-full items-center gap-x-2 px-3">
          <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
        </div>
        <div className="p-5">
          <h2 className="text-xl md:text-2xl">{title}</h2>
          <p className="mt-2 w-max rounded-full border border-amber-600 px-2 py-0.5 text-xs text-amber-600">
            {type}
          </p>
          <p className="pt-4 text-lg text-slate-500">{children}</p>
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
    <Link href={href} target="_blank">
      <div className="h-full rounded-lg border border-slate-300 font-medium">
        <div className="flex h-7 w-full items-center gap-x-2 px-3">
          <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
        </div>
        <div className="p-5">
          <h2 className="text-xl md:text-2xl">{title}</h2>
          <p className="mt-2 w-max rounded-full border border-amber-600 px-2 py-0.5 text-xs text-amber-600">
            {type}
          </p>
          <p className="pt-4 text-lg text-slate-500">{children}</p>
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
}: {
  src: string
  href: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <div className="mx-5 flex flex-col border-t border-slate-300 lg:py-10">
      <div className="grid gap-x-16 gap-y-12 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-slate-300">
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

          <div className="pt-8 text-xl text-slate-500">{children}</div>

          <Link
            href={href}
            target="_blank"
            className="mt-8 w-max rounded-xl border border-amber-600 px-4 py-2 text-amber-600"
          >
            Visit Website
          </Link>
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
      <div className="h-full rounded-lg border border-slate-300 font-medium">
        <div className="flex h-7 w-full items-center gap-x-2 px-3">
          <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
          <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
        </div>
        <div className="p-5">
          <h2 className="text-lg md:text-xl">{title}</h2>
          <p className="mt-2 w-max rounded-full border border-amber-600 px-2 py-0.5 text-xs text-amber-600">
            {type}
          </p>
          <p className="pt-4 text-lg text-slate-500">{children}</p>
        </div>
      </div>
    </Link>
  )
}
