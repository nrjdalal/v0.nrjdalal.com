import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <main className="container mx-auto max-w-screen-xl text-slate-800">
      {
        // ~ Header
      }
      <div className="mx-5 flex h-12 items-center">
        <p className="text-md font-semibold">NEERAJ DALAL</p>
      </div>

      {
        // ~ About
      }
      <div className="mx-2.5 flex flex-col justify-center border-t border-slate-800 px-2.5 py-20 font-medium md:py-60">
        <p className="text-2xl text-amber-600 md:text-3xl">
          Dream. Sometimes you got to close your eyes and envision the future.
        </p>

        <p className="pt-10 text-2xl md:text-3xl">
          I&apos;m Neeraj Dalal, a software engineer based in New Delhi, India.
        </p>

        <p className="pt-2 text-2xl md:text-3xl">
          And I will help you to turn your vision into reality.
        </p>
      </div>

      {
        // ~ rdt.li
      }
      <div className="mx-5 flex flex-col border-t border-slate-300 lg:py-10">
        <div className="grid gap-x-16 gap-y-12 py-20 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-slate-300">
            <div className="bg-slate flex h-7 w-full items-center gap-x-2 px-3">
              <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
              <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
              <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
            </div>
            <Image
              src="/rdt.li.png"
              alt="Redirect Link"
              width={1080}
              height={1920}
            />
          </div>

          <div className="flex flex-col justify-center font-medium">
            <h2 className="text-2xl md:text-3xl">Redirect Link</h2>

            <p className="pt-8 text-xl text-slate-500">
              rdt.li self hostable, feature rich, minimalistic and open source
              URL shortener. Built with Next.js, Drizzle, NextAuth and Postgres.
            </p>

            <Link
              href={'https://rdt.li'}
              target="_blank"
              className="mt-8 w-max rounded-xl border border-amber-600 px-4 py-2 text-amber-600"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>

      {
        // ~ serpwe.com
      }
      <div className="mx-5 flex flex-col border-t border-slate-300 lg:py-10">
        <div className="grid gap-x-16 gap-y-12 py-20 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-slate-300">
            <div className="bg-slate flex h-7 w-full items-center gap-x-2 px-3">
              <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
              <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
              <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
            </div>
            <Image
              src="/serpwe.com.png"
              alt="Serpwe"
              width={1080}
              height={1920}
            />
          </div>

          <div className="flex flex-col justify-center font-medium">
            <h2 className="text-2xl md:text-3xl">Serpwe</h2>

            <p className="pt-8 text-xl text-slate-500">
              Generate keyword ideas, group similar keywords, and organize them
              into topical clusters - a product of Warewe
            </p>

            <Link
              href={'https://serpwe.com'}
              target="_blank"
              className="mt-8 w-max rounded-xl border border-amber-600 px-4 py-2 text-amber-600"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>

      {
        // ~ hetrolink.com
      }
      <div className="mx-5 flex flex-col border-t border-slate-300 lg:py-10">
        <div className="grid gap-x-16 gap-y-12 py-20 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-slate-300">
            <div className="bg-slate flex h-7 w-full items-center gap-x-2 px-3">
              <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
              <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
              <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
            </div>
            <Image
              src="/hetrolinks.com.png"
              alt="Serpwe"
              width={1080}
              height={1920}
            />
          </div>

          <div className="flex flex-col justify-center font-medium">
            <h2 className="text-2xl md:text-3xl">Hetrolinks</h2>

            <p className="pt-8 text-xl text-slate-500">
              Instantly Repair Broken Amazon Affiliate Links - a product of
              Warewe
            </p>

            <Link
              href={'https://hetrolinks.com'}
              target="_blank"
              className="mt-8 w-max rounded-xl border border-amber-600 px-4 py-2 text-amber-600"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>

      {
        // ~ more from Github
      }
      <div className="mx-5 grid gap-8 border-t border-slate-300 py-20 md:grid-cols-2 lg:grid-cols-3 lg:py-28">
        <GithubLinks
          href="https://github.com/nrjdalal/shadcn-ui-snippets"
          title="Shadcn UI Snippets"
        >
          Simply import and use shadcn-ui components in your project
        </GithubLinks>

        <GithubLinks href="https://github.com/nrjdalal/onset" title="Onset">
          An open source Next.js bare starter with step-by-step instructions if
          required. Built with Next.js 14, Drizzle (Postgres), NextAuth/Auth.js
        </GithubLinks>

        <GithubLinks
          href="https://github.com/nrjdalal/JioTV-Next"
          title="JioTV"
        >
          JioTV HD Streaming Free on Browser / Android / Android TV
        </GithubLinks>
      </div>
    </main>
  )
}

export default Page

const GithubLinks = ({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href}>
      <div className="h-full rounded-lg border border-amber-600 p-5 font-medium">
        <h2 className="text-xl md:text-2xl">{title}</h2>
        <p className="pt-4 text-lg text-slate-500">{children}</p>
      </div>
    </Link>
  )
}
