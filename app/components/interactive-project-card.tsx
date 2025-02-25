"use client";

import { Card } from "@/app/components/ui/card";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
}

export default function InteractiveProjectCard({
  title,
  description,
  image,
  link,
  github,
  tags,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden bg-white/10 backdrop-blur-lg transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-700/50 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto">
          <Link
            href={github}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={link}
            target="_blank"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
          >
            View Project
          </Link>
        </div>
      </div>
    </Card>
  );
}
