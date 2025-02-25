import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft } from "lucide-react"
import ContactForm from "../components/contact-form"
import StarfieldBackground from "../components/starfield-background"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Contact - Stephanie Ng",
  description: "Get in touch with Stephanie Ng",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <StarfieldBackground />

      <div className="container px-4 md:px-6 py-8">
        <Link href="/">
          <Button variant="outline" size="icon" className="mb-8 border-white/10 hover:bg-white/10">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="text-white/80 md:text-lg">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <ContactForm />

          <div className="text-center text-white/60 text-sm">
            <p>You can also reach me directly at:</p>
            <a href="mailto:contact@example.com" className="text-primary hover:underline">
              contact@example.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

