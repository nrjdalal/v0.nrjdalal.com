import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="mx-5 flex h-12 items-center justify-between">
      <Link href={'/'} className="text-md font-semibold">
        NEERAJ DALAL
      </Link>

      <div className="flex gap-5">
        <Link href={'https://linkedin.com/in/nrjdalal'} target="_blank">
          <Linkedin className="text-blue-500" />
        </Link>
        <Link href={'https://github.com/nrjdalal'} target="_blank">
          <Github />
        </Link>
        <Link href={'https://x.com/nrjdalal_com'} target="_blank">
          <Twitter className="text-blue-500" />
        </Link>
        <Link href={'https://instagram.com/nrjdalal'} target="_blank">
          <Instagram className="text-pink-500" />
        </Link>
      </div>
    </div>
  )
}
