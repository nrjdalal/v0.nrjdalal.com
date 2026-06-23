import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiFileTextLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPublishedBlogPosts } from "@/lib/blog"
import { formatBlogDate } from "@/lib/blog-policy"

const profile = {
  name: "Neeraj Dalal",
  role: "Web developer from New Delhi, India",
  github: "https://github.com/nrjdalal",
  linkedin: "https://www.linkedin.com/in/nrjdalal",
  email: "nd941z@gmail.com",
  resume: "/nrjdalal.pdf",
}

const projects = [
  {
    title: "SpaceWall",
    subtitle: "Website maker",
    src: "/spacewall.me.png",
    href: "https://spacewall.me",
    description: "A free website maker. Build your own site in minutes, no coding required.",
  },
  {
    title: "rdt.li",
    subtitle: "URL shortener",
    src: "/rdt.li.png",
    href: "https://rdt.li",
    description:
      "Self-hostable, feature-rich, open-source URL shortener. Built with Next.js, Drizzle, and Postgres.",
  },
  {
    title: "Serpwe",
    subtitle: "Keyword research",
    src: "/serpwe.com.png",
    href: "https://serpwe.com",
    demo: "https://www.youtube.com/@SerpWe/videos",
    description:
      "Generate thousands of keywords, cluster them into topics, and use AI to write high-ranking content.",
  },
  {
    title: "Hetrolinks",
    subtitle: "Affiliate link repair",
    src: "/hetrolinks.com.png",
    href: "https://hetrolinks.com",
    demo: "https://www.youtube.com/@Hetrolinks/videos",
    description: "Instantly repair broken Amazon affiliate links across blogs and websites.",
  },
]

const repos = [
  {
    title: "rdt-li",
    type: "Next.js app",
    href: "https://github.com/nrjdalal/rdt-li",
    description: "Self-hostable, open-source URL shortener. Next.js, Drizzle, Postgres.",
  },
  {
    title: "shadcn/ui Snippets",
    type: "VS Code extension",
    href: "https://github.com/nrjdalal/shadcn-ui-snippets",
    description: "Import and drop in shadcn/ui components straight from editor snippets.",
  },
  {
    title: "Onset",
    type: "Starter template",
    href: "https://github.com/nrjdalal/onset",
    description: "An open-source bare Next.js starter. Next.js, Drizzle (Postgres), Auth.js.",
  },
  {
    title: "JioTV-Next",
    type: "Next.js app",
    href: "https://github.com/nrjdalal/JioTV-Next",
    description: "JioTV HD streaming, free, on browser, Android, and Android TV.",
  },
  {
    title: "google-parser",
    type: "npm package",
    href: "https://github.com/nrjdalal/google-parser",
    description: "HTTP-based Google search results scraper and parser.",
  },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{children}</h2>
}

export default function Home() {
  const posts = getPublishedBlogPosts().slice(0, 6)

  return (
    <main className="mx-auto max-w-5xl px-6 pt-14">
      <section className="border-border/60 flex flex-col gap-6 border-b py-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="text-muted-foreground text-lg sm:text-xl">{profile.role}</p>
        </div>
        <p className="text-foreground/80 max-w-2xl text-lg leading-relaxed">
          I build SaaS products, open-source tools, and developer-focused web apps. I like turning
          ideas into shipped products, and writing about what I learn along the way.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <RiGithubFill className="size-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <RiLinkedinBoxFill className="size-4" /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className={buttonVariants({ variant: "outline" })}>
            <RiMailLine className="size-4" /> Email
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <RiFileTextLine className="size-4" /> Resume
          </a>
        </div>
      </section>

      <section className="border-border/60 border-b py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeading>Writing</SectionHeading>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
          >
            All posts <RiArrowRightLine className="size-4" />
          </Link>
        </div>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts published yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.url} href={post.url} className="group">
                <Card className="group-hover:border-foreground/30 h-full transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{post.data.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.data.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {post.data.tags?.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <time
                      className="text-muted-foreground shrink-0 text-xs"
                      dateTime={post.data.publishedAt}
                    >
                      {formatBlogDate(post.data.publishedAt)}
                    </time>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section id="projects" className="border-border/60 scroll-mt-20 border-b py-16">
        <SectionHeading>Projects</SectionHeading>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col gap-4">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/60 hover:border-foreground/30 overflow-hidden rounded-lg border transition-colors"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={1172}
                  height={880}
                  className="h-auto w-full"
                />
              </a>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="outline">{project.subtitle}</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex gap-3 pt-1">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    Visit <RiArrowRightUpLine className="size-3.5" />
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    >
                      Demo <RiArrowRightUpLine className="size-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-border/60 border-b py-16">
        <SectionHeading>Open source</SectionHeading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.title}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="group-hover:border-foreground/30 h-full transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base">{repo.title}</CardTitle>
                    <RiGithubFill className="text-muted-foreground size-4" />
                  </div>
                  <Badge variant="outline" className="w-max">
                    {repo.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{repo.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 py-16">
        <SectionHeading>Get in touch</SectionHeading>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Have a project in mind, or just want to say hi? Reach out and let me help turn your vision
          into reality.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={buttonVariants()}>
            <RiMailLine className="size-4" /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <RiGithubFill className="size-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <RiLinkedinBoxFill className="size-4" /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}
