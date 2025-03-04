"use client";

import type React from "react";

import { Card } from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Three.js",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Python",
      "Go",
      "Rust",
      "Java",
      "C/C++",
      "Django",
      "Express",
      "SQL",
      "Flask",
      "RESTful APIs",
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker",
      "AWS",
      "Azure",
      "Google Cloud Platform",
      "Vite",
      "Gradle",
      "Linux",
      "Nginx",
    ],
  },
  {
    category: "Web3 & Blockchain",
    skills: [
      "Solidity",
      "Rust",
      "Anchor",
      "Vyper",
      "Foundry",
      "Hardhat",
      "Truffle",
      "Move",
      "Web3.js",
      "Ethers.js",
      "Anchor",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Databricks",
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "Numpy",
      "Pandas",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Hugging Face",
      "LangChain",
    ],
  },
  {
    category: "Tools",
    skills: [
      "VS Code",
      "Postman",
      "Figma",
      "Jupyter Notebook",
      "GitHub",
      "Vercel",
      "Eclipse",
    ],
  },
];

const SkillButton = ({ skill }: { skill: string }) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    buttonRef.current.style.setProperty("--mouse-x", `${x}px`);
    buttonRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={buttonRef}
      className="relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-primary/50 to-primary/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
      <div
        className="relative rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20
        before:absolute before:inset-0 before:rounded-md before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(var(--primary-rgb),0.15),transparent_50%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
      >
        {skill}
      </div>
    </motion.div>
  );
};

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* First row - 3 items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="h-full p-6 bg-black/40 backdrop-blur-sm border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            {technologies[0].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies[0].skills.map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="h-full p-6 bg-black/40 backdrop-blur-sm border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            {technologies[1].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies[1].skills.map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="h-full p-6 bg-black/40 backdrop-blur-sm border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            {technologies[2].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies[2].skills.map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Second row - 2 items spanning 3 columns */}
      <motion.div
        className="lg:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="h-full p-6 bg-black/40 backdrop-blur-sm border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            {technologies[3].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies[3].skills.map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="h-full p-6 bg-black/40 backdrop-blur-sm border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            {technologies[4].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies[4].skills.map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Third row - 2 items spanning 3 columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="h-full p-6 bg-black/40 backdrop-blur-sm border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            {technologies[5].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies[5].skills.map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        className="lg:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="h-full p-6 bg-black/40 backdrop-blur-sm border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            {technologies[6].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies[6].skills.map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
