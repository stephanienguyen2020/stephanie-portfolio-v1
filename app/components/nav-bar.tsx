import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLink from "./nav-link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Home</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
