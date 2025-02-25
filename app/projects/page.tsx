import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft } from "lucide-react";
import InteractiveProjectCard from "../components/interactive-project-card";
import Footer from "../components/footer";
import { projects } from "@/app/data/projects";

// Add artificial delay to simulate loading
async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export const metadata: Metadata = {
  title: "Projects - Stephanie Ng",
  description: "Full showcase of all projects and work",
};

export default async function ProjectsPage() {
  // Add 2 second delay to simulate loading
  await delay(2000);

  return (
    <div className="min-h-screen bg-transparent text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button
              variant="outline"
              size="icon"
              className="mr-4 border-white/20 hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            All Projects
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <InteractiveProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
