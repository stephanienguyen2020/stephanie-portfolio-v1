"use client";

import { useState } from "react";
import { Filter, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from "@/app/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Briefcase,
  Code2,
  Terminal,
  Users2,
  CircuitBoard,
} from "lucide-react";

const roles = {
  "Product Manager": { icon: Briefcase },
  "Blockchain Developer": { icon: CircuitBoard },
  "AI Engineer": { icon: Brain },
  "Tech Lead": { icon: Settings },
  "Software Engineer": { icon: Code2 },
  "Machine Learning Engineer": { icon: Terminal },
} as const;

type Role = keyof typeof roles;

interface Achievement {
  title: string;
  competition: string;
  roles: Role[];
  year: number;
  color: string;
}

const achievements: Achievement[] = [
  // Grand Prize & First Place Winners
  {
    title: "Grand Prize Winner",
    competition: "Salesforce x UN - Reboot the Earth Hackathon",
    roles: ["Product Manager", "Software Engineer"],
    year: 2024,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Winner",
    competition: "Build with AI - Google Developer Group NYC",
    roles: ["Product Manager", "Tech Lead", "AI Engineer"],
    year: 2024,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "First Place",
    competition: "OpenLedger Ideathon",
    roles: ["Product Manager"],
    year: 2025,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "First Place",
    competition: "Amazon x CodePath Design Challenge",
    roles: ["Product Manager"],
    year: 2025,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "First Place",
    competition: "𝐖𝟑𝐁 GreenTech Challenge",
    roles: ["Tech Lead", "Software Engineer"],
    year: 2024,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "All-track Winner",
    competition: "Violet Pitch - Blockchain Pitch Competition",
    roles: ["Product Manager", "Blockchain Developer"],
    year: 2024,
    color: "from-pink-500 to-rose-500",
  },

  // Second Place & Runner-Ups
  {
    title: "Second Place",
    competition: "Databricks Generative AI World Cup",
    roles: ["AI Engineer", "Software Engineer"],
    year: 2024,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Second Place",
    competition: "Crossingz AI Networking Hackathon",
    roles: ["Tech Lead", "AI Engineer"],
    year: 2024,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Runner Up",
    competition: "Health Tech Innovators",
    roles: ["AI Engineer", "Software Engineer"],
    year: 2024,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Runner Up",
    competition: "Future of Data Hackathon",
    roles: ["Tech Lead", "Software Engineer"],
    year: 2024,
    color: "from-green-500 to-emerald-500",
  },

  // Third Place Achievements
  {
    title: "Third Place",
    competition:
      "Leap Machine Learning Hackathon by Columbia University, Amazon Web Services (AWS) & NVIDIA",
    roles: ["Machine Learning Engineer"],
    year: 2025,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Third Place",
    competition: "EasyA x VeChain Bay Area Hackathon - Pitching Track",
    roles: ["Product Manager"],
    year: 2024,
    color: "from-green-500 to-emerald-500",
  },

  // Best Use / Special Awards
  {
    title: "Best Gaming Software",
    competition: "Future of Data Hackathon",
    roles: ["Software Engineer", "Product Manager"],
    year: 2024,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Best Use of Unstructured.io",
    competition: "MongoDB GenAI Hackathon with Amazon Web Services (AWS)",
    roles: ["Product Manager", "Tech Lead", "Software Engineer"],
    year: 2024,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Best Use of Together AI",
    competition: "AICamp's GenAI Hackathon",
    roles: ["Software Engineer"],
    year: 2024,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Best Use of AI",
    competition: "Health Hackathon by Cornell Tech x Johnson & Johnson",
    roles: ["Product Manager", "Software Engineer"],
    year: 2024,
    color: "from-pink-500 to-rose-500",
  },

  // Finalist
  {
    title: "Finalist",
    competition: "TikTok TechJam",
    roles: ["Product Manager", "Tech Lead", "Software Engineer"],
    year: 2024,
    color: "from-pink-500 to-rose-500",
  },
];
const ITEMS_PER_PAGE = 5;
export default function AchievementsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  // Get unique years and roles for filters
  const years = Array.from(new Set(achievements.map((a) => a.year))).sort(
    (a, b) => b - a
  );
  const uniqueRoles = Array.from(new Set(achievements.flatMap((a) => a.roles)));

  // Filter achievements
  const filteredAchievements = achievements.filter((achievement) => {
    const yearMatch =
      selectedYear === "all" ||
      achievement.year === Number.parseInt(selectedYear);
    const roleMatch =
      selectedType === "all" ||
      achievement.roles.includes(selectedType as Role);
    return yearMatch && roleMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredAchievements.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedAchievements = filteredAchievements.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-white/60" />
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[120px] bg-black/40 border-white/10">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Users2 className="w-4 h-4 text-white/60" />
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[160px] bg-black/40 border-white/10">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              {uniqueRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-white/5">
              <TableHead className="text-white">Year</TableHead>
              <TableHead className="text-white">Award</TableHead>
              <TableHead className="text-white">Competition</TableHead>
              <TableHead className="text-white">My Roles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence mode="wait">
              {paginatedAchievements.map((achievement, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="border-white/10 hover:bg-white/5"
                >
                  <TableCell className="font-medium">
                    {achievement.year}
                  </TableCell>
                  <TableCell>{achievement.title}</TableCell>
                  <TableCell>{achievement.competition}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap items-center gap-2">
                      {achievement.roles.map((role) => {
                        const RoleIcon = roles[role].icon;
                        return (
                          <span
                            key={role}
                            className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs"
                          >
                            <RoleIcon className="w-3 h-3" />
                            {role}
                          </span>
                        );
                      })}
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-white/60">
          Showing {startIndex + 1}-
          {Math.min(startIndex + ITEMS_PER_PAGE, filteredAchievements.length)}{" "}
          of {filteredAchievements.length} achievements
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="border-white/10 hover:bg-white/10"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="border-white/10 hover:bg-white/10"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
