"use client"

import { site } from "@packages/config/site"
import {
  RiArrowUpSLine,
  RiCodeAiLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMenu4Fill,
  RiTwitterXFill,
} from "@remixicon/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { ModeToggle } from "@/components/mode-toggle"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "home", href: "/" },
  { name: "blog", href: "/blog" },
  { name: "projects", href: "/#projects" },
  { name: "contact", href: "/#contact" },
]

const socialLinks = [
  { href: "https://github.com/nrjdalal", icon: RiGithubFill, label: "GitHub" },
  { href: "https://www.linkedin.com/in/nrjdalal", icon: RiLinkedinBoxFill, label: "LinkedIn" },
  { href: "https://x.com/nrjdalal_com", icon: RiTwitterXFill, label: "X" },
]

// Active when the route path matches. In-page anchor links (e.g. "/#projects") are never path-active.
function isActive(pathname: string, href: string): boolean {
  if (href.includes("#")) return false
  const path = pathname.split(/[?#]/)[0]
  if (href === "/") return path === "/"
  return path === href || path.startsWith(`${href}/`)
}

export function Navbar() {
  const pathname = usePathname() || "/"
  const [hovered, setHovered] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  if (pathname.startsWith("/console") || pathname.startsWith("/dashboard")) return null

  return (
    <header className="bg-background fixed top-0 left-0 z-50 flex h-14 w-full justify-between border-b">
      <Link
        href="/"
        className="hover:bg-border/50 flex h-full items-center gap-x-2 px-5 font-mono font-medium transition-colors"
      >
        <RiCodeAiLine className="size-6" aria-hidden="true" />
        <span>{site.name}</span>
      </Link>

      {/* Desktop navigation */}
      <div className="text-muted-foreground hidden items-center divide-x font-medium lg:flex">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative flex h-full items-center px-7.5 transition-colors",
                active ? "text-foreground" : "hover:text-foreground",
              )}
              onMouseEnter={() => setHovered(item.href)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.name}
              <span
                className={cn(
                  "bg-foreground absolute bottom-0 left-0 h-[2px] transition-all ease-in-out",
                  active
                    ? hovered && hovered !== item.href
                      ? "w-0 duration-1000"
                      : "w-full duration-500"
                    : "w-0 duration-1000 group-hover:w-[90%]",
                )}
              />
            </Link>
          )
        })}
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="hover:text-foreground group relative flex aspect-square h-full items-center justify-center"
          >
            <link.icon className="size-5" aria-hidden="true" />
            <RiArrowUpSLine className="absolute top-1 right-1 size-3.5 rotate-45 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="bg-foreground absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 ease-in-out group-hover:w-full" />
          </a>
        ))}
        <div className="flex h-full items-center px-3">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile navigation */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger
          className="text-foreground flex h-full w-16 cursor-pointer items-center justify-center border-l lg:hidden"
          aria-label="Open menu"
        >
          <RiMenu4Fill className="size-6" aria-hidden="true" />
        </DrawerTrigger>
        <DrawerContent className="lg:hidden">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>Navigation links</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col px-6 pt-4 pb-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex h-14 items-center justify-center font-medium transition-colors",
                  isActive(pathname, item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 flex h-14 items-center justify-center divide-x border-t">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-foreground flex h-full w-full items-center justify-center transition-colors"
                >
                  <link.icon className="size-6" aria-hidden="true" />
                </a>
              ))}
              <div className="flex h-full w-full items-center justify-center">
                <ModeToggle />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
