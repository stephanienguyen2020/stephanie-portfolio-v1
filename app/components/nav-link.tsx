"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { scrollToSection } from "../utils/scroll"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const sectionId = href.slice(1) // Remove the # from the href
      scrollToSection(sectionId)
    }
  }

  // If it's a hash link and we're on the homepage, use the scroll behavior
  if (href.startsWith("#") && pathname === "/") {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`transition-colors hover:text-foreground/80 text-white/80 hover:text-white ${className}`}
      >
        {children}
      </a>
    )
  }

  // Otherwise, use Next.js Link for navigation
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-foreground/80 text-white/80 hover:text-white ${className}`}
    >
      {children}
    </Link>
  )
}

