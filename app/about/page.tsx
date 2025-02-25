import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import StarfieldBackground from "../components/starfield-background"
import HomeTitle from "../components/home-title"
import Footer from "../components/footer"

// Add artificial delay to simulate loading
async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

export const metadata: Metadata = {
  title: "About - Stephanie Ng",
  description: "Learn more about Stephanie Ng and her journey in software development",
}

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
]

export default async function AboutPage() {
  await delay(2000)

  return (
    <div className="min-h-screen bg-transparent text-white">
      <StarfieldBackground />

      <div className="container px-4 md:px-6 py-8">
        <Link href="/">
          <Button variant="outline" size="icon" className="mb-8 border-white/20 hover:bg-white/10">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <HomeTitle className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              I CREATE
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                DIGITAL EXPERIENCES
              </span>
              <br />
              THAT MATTER
            </HomeTitle>
          </div>
          <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative aspect-square w-full rounded-full border border-white/10 overflow-hidden bg-black/50 backdrop-blur-sm">
              <Image src="/placeholder.svg" alt="Stephanie Ng" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr] gap-12">
          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              With over 5 years of experience in full-stack development, I specialize in creating intuitive and
              performant web applications that solve real-world problems. My passion lies in the intersection of
              technology and user experience, where I strive to build digital solutions that not only work flawlessly
              but also delight users.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying up-to-date with the latest technologies while
              maintaining a strong foundation in software engineering principles. My approach combines technical
              expertise with creative problem-solving to deliver exceptional results.
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl" />
            <blockquote className="relative rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <p className="mb-4 text-lg italic text-white/80">
                "Stephanie's ability to transform complex requirements into elegant solutions is remarkable. Her
                technical expertise and attention to detail make her an invaluable asset to any project."
              </p>
              <footer className="flex items-center space-x-4">
                <Image src="/placeholder.svg" alt="Sarah Chen" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-white/60">Tech Lead at Future Corp</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

