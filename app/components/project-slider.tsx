"use client";
import { Button } from "@/app/components/ui/button";
import { Card, CardFooter } from "@/app/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import Image from "next/image";
import { projects } from "@/app/data/projects";

// Create a triple set of projects for smooth infinite scrolling
const tripleProjects = [...projects, ...projects, ...projects];

export default function ProjectSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);

  const getSetWidth = useCallback(() => {
    if (containerRef.current) {
      return containerRef.current.scrollWidth / 3;
    }
    return 0;
  }, []);

  useEffect(() => {
    setWidthRef.current = getSetWidth();
  }, [getSetWidth]);

  const animate = useCallback(async () => {
    const setWidth = setWidthRef.current;
    await controls.set({ x: -setWidth });

    await controls.start({
      x: [-setWidth, -setWidth * 2],
      transition: {
        duration: 80,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    });
  }, [controls]);

  useEffect(() => {
    if (!isPaused) {
      animate();
    } else {
      controls.stop();
    }
  }, [isPaused, controls, animate]);

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={containerRef} className="relative overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: -setWidthRef.current * 2, right: 0 }}
          animate={controls}
          className="flex gap-6"
        >
          {tripleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-4 bg-white/10 rounded-lg backdrop-blur-lg hover:shadow-lg h-full flex flex-col justify-between">
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-4 flex-1">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300 min-h-[48px]">
                    {project.description}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-700/50 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CardFooter className="p-2 pt-4 flex justify-between">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-sm hover:underline"
                  >
                    Visit Site
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link href="/projects">
          <Button
            variant="outline"
            className="border-white/20 bg-black/50 hover:bg-white/10"
          >
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
