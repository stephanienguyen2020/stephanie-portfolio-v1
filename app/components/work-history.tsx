"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  logo: string;
  link?: string;
  skills: string[];
}

const experiences: WorkExperience[] = [
  {
    company: "Sonic Labs",
    position: "Developer Relations",
    duration: "2025 - Present",
    description: [
      "Revitalizing Sonic (prev. Fantom) ecosystem and managing university blockchain initiatives and fostering academic partnerships",
      "Hosting blockchain development workshops",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEpT6Cs9xl1Bg/company-logo_200_200/company-logo_200_200/0/1722535410497/officialsoniclabs_logo?e=2147483647&v=beta&t=ZmaxZq7Oo1ilnS9WIYqE4aiB4b5c6DsyXter9ph5tos", // Replace with actual Sonic Labs logo path
    link: "https://soniclabs.com",
    skills: [
      "Solidity",
      "React.js",
      "TypeScript",
      "Artificial Intelligence (AI)",
      "Vyper",
    ],
  },
  {
    company: "Columbia University",
    position: "Research Assistant",
    duration: "2024 - Present",
    description: ["Innovation Workflow project - Prof. Harry West"],
    logo: "https://www.peacejusticestudies.org/wp-content/uploads/2019/07/columbia_university.png",
    link: "https://columbia.edu",
    skills: ["Python", "Next.js", "React.js", "AWS", "AI", "GPT4o"],
  },
  {
    company: "Intuit",
    position: "Software Engineer Intern / Cyber Security Engineer Intern",
    duration: "Summer 2024",
    description: ["Shifted left product abuse prevention efforts"],
    logo: "https://www.svgrepo.com/show/331441/intuit.svg",
    link: "https://www.intuit.com",
    skills: [
      "Python",
      "Large Language Models (LLM)",
      "Retrieval-Augmented Generation (RAG)",
      "REST APIs",
      "Jira",
      "React.js",
      "Amazon S3",
      "AI",
      "Prompt Engineering",
      "Streamlit",
      "AWS",
      "ChromaDB",
      "Django REST Framework",
      "Cyber Security Risk",
    ],
  },
  {
    company: "Icahn School of Medicine at Mount Sinai",
    position:
      "Research Assistant @ Seaver Autism Center for Research and Treatment",
    duration: "2023 - 2024",
    description: ["Seaver Undergraduate Research Scholar"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpy_UcTeTDS6_seBBGgSVeANV8-FQoxEc9iQ&s",
    link: "https://icahn.mssm.edu/research/seaver",
    skills: ["R", "Machine Learning", "Python"],
  },
  {
    company: "CodeDay Labs",
    position: "Open Source Contributor",
    duration: "2023 - 2024",
    description: [
      "Contributed to CodeCheck, a 1,000+ user autograder and enhanced automation for TWiR, a Rust Foundation-backed authoritative Rust community e-newsletter with 26,000+ readers",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHiQAK3YLiFGQ/company-logo_200_200/company-logo_200_200/0/1707172083206/codeday_org_logo?e=2147483647&v=beta&t=gVMBi9jQaBIIEa3LRNerJCqiPotyQQYWOugOkWCDc7E",
    link: "https://www.codeday.org",
    skills: ["Rust", "JavaScript", "AWS"],
  },
];

export default function WorkHistory() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-transparent" />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative ml-16"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[3.25rem] mt-1.5">
              <div className="p-2 rounded-full bg-black border border-primary/50">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
            </div>

            <Card className="relative overflow-hidden border-white/10 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src={experience.logo || "/placeholder.svg"}
                        alt={`${experience.company} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">
                          {experience.position}
                        </h3>
                        {experience.link && (
                          <Link
                            href={experience.link}
                            target="_blank"
                            className="text-primary hover:text-primary/80"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Building2 className="w-4 h-4" />
                        <span>{experience.company}</span>
                        <span>•</span>
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 border border-primary/20 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
