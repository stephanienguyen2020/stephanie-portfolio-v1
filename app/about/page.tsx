import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import StarfieldBackground from "../components/starfield-background";
import HomeTitle from "../components/home-title";
import Footer from "../components/footer";

// Add artificial delay to simulate loading
async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export const metadata: Metadata = {
  title: "About - Stephanie Ng",
  description:
    "Stephanie Ng is a CS student at Columbia University who loves breaking things, reverse engineering, good food, and great fashion.",
};

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/stephanienguyen2020",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/stephanienguyen2020",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "http://instagram.com/stephanielearnstocode",
  },
];

export default async function AboutPage() {
  await delay(2000);

  return (
    <div className="min-h-screen bg-transparent text-white">
      <StarfieldBackground />

      <div className="container px-4 md:px-6 py-8">
        <Link href="/">
          <Button
            variant="outline"
            size="icon"
            className="mb-8 border-white/20 hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <HomeTitle className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              I{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                BREAK
              </span>
              <br />
              THINGS TO{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                UNDERSTAND
              </span>{" "}
              THEM
              <br />
              AND THEN I{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                BUILD
              </span>
            </HomeTitle>
          </div>
          <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative aspect-square w-full rounded-full border border-white/10 overflow-hidden bg-black/50 backdrop-blur-sm">
              <Image
                src="/Stephanie.jpg"
                alt="Stephanie Ng"
                fill
                className="object-cover"
              />
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
              I'm <strong>Stephanie Ng</strong>, a CS student at{" "}
              <strong>Columbia University</strong>. I started learning how to
              code in summer 2023. I spend my time
              <strong>breaking things apart just to see how they work</strong>
              —whether it's software or ideas. Reverse engineering, debugging,
              and deconstructing systems is where I thrive.
            </p>
            <p>
              I'm interested in{" "}
              <strong>AI, blockchain, security, and automation</strong>—(the
              applied stuff rather than the theoretical stuff). I believe in{" "}
              <strong>
                hacking things together, automating what can be automated, and
                solving problems that others overlook
              </strong>
              .
            </p>
            <p>
              Beyond code? I'm all about{" "}
              <strong>good food and great interior designs</strong>. I
              appreciate well-designed things, whether it's{" "}
              <strong>
                a perfectly engineered system, an incredible meal, or a well-cut
                blazer
              </strong>
              . If I'm not debugging, you'll probably find me{" "}
              <strong>
                hunting down the best restaurants or figuring out my dream
                apartment
              </strong>
              .
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl" />
            <blockquote className="relative rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <p className="mb-4 text-lg italic text-white/80">
                "Stephanie's ability to transform complex requirements into
                elegant solutions is remarkable. Her technical expertise and
                attention to detail make her an invaluable asset to any
                project."
              </p>
              <footer className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold">Nathan Wells</p>
                  <p className="text-sm text-white/60">
                    Stephanie's Manager at Intuit
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
