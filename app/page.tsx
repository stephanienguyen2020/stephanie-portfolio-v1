import AchievementsTable from "./components/achievements-table";
import { Suspense } from "react";
import SectionSkeleton from "./components/section-skeleton";
import ParallaxSection from "./components/parallax-section";
import LoadingScreen from "./components/loading-screen";
import StarfieldBackground from "./components/starfield-background";
import TechStack from "./components/tech-stack";
import ProjectSlider from "./components/project-slider";
import ContactForm from "./components/contact-form";
import HomeTitle from "./components/home-title";
import Footer from "./components/footer";
import { Button } from "@/app/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import WorkHistory from "./components/work-history";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  await delay(2000);

  return (
    <div className="min-h-screen bg-transparent text-white scroll-smooth">
      <StarfieldBackground />
      <LoadingScreen />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <HomeTitle className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              STEPHANIE NG.
              <br />
            </HomeTitle>
            <p className="max-w-[600px] text-white/80 md:text-xl dark:text-white/80 mx-auto">
              CS student by day, indie hacker by night.
              <br />
              16x Hackathon Winner. Everything Cloud, Blockchain & AI.
              <br />
              Currently based in New York.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://github.com/stephanienguyen2020/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 hover:bg-white/10"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/steph-tien-ng"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 hover:bg-white/10"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <section id="work" className="py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <ParallaxSection>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Work Experience
              </h2>
            </ParallaxSection>
            <WorkHistory />
          </div>
        </section>
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <section id="projects" className="py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <ParallaxSection>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Featured Projects
              </h2>
            </ParallaxSection>
            <ProjectSlider />
          </div>
        </section>
      </Suspense>

      {/* Achievements Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <section id="achievements" className="py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <ParallaxSection>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Notable Achievements
              </h2>
            </ParallaxSection>
            <AchievementsTable />
          </div>
        </section>
      </Suspense>

      {/* Tech Stack Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <section id="tech-stack" className="py-6 md:py-8 mb-10">
          <div className="container px-4 md:px-6">
            <ParallaxSection>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Tech Stack
              </h2>
            </ParallaxSection>
            <TechStack />
          </div>
        </section>
      </Suspense>

      <Footer />
    </div>
  );
}
