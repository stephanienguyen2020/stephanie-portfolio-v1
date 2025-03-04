export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "HedgeFi",
    description:
      "AI-powered gateway to the largest MemeCoin factory, marketplace, and prediction market on Near & Aurora.",
    image: "/hedgefi.png",
    link: "https://youtu.be/i6lvo21a63o",
    github: "https://github.com/stephanienguyen2020/hedgefi/",
    tags: [
      "Next.js",
      "Python",
      "Solidity",
      "Aurora & Near Protocol",
      "ElizaOS",
    ],
  },
  {
    title: "Innovation Workflow",
    description:
      "Supporting designers in brainstorming, prototyping, and iterative ideation.",
    image: "/innovation_workflow.png",
    link: "https://frontend-opal-kappa.vercel.app/",
    github: "https://github.com/stephanienguyen2020/innovation-workflow",
    tags: ["Next.js", "Azure"],
  },
  {
    title: "Iris",
    description:
      "Automating video and audio content moderation before it's uploaded to social media platforms.",
    image: "/iris.png",
    link: "https://youtu.be/WRx_03QeXAc",
    github: "https://github.com/stephanienguyen2020/iris/",
    tags: ["Next.js", "Python", "AWS", "Lambda", "DynamoDB"],
  },
  {
    title: "Pixie AI",
    description: "Automating pre-visit check-ins for hospitals.",
    image: "/pixieai.png",
    link: "https://www.youtube.com/watch?v=SHCp_UzDFR8",
    github: "https://github.com/stephanienguyen2020/pixieai",
    tags: ["Next.js", "AWS", "MongoDB", "Hume AI"],
  },
  {
    title: "Zelta",
    description: "Virtual AI partner",
    image: "/zelta.png",
    link: "https://youtu.be/iR8Ka1hLMdw",
    github: "https://github.com/stephanienguyen2020/zelta",
    tags: ["Next.js", "Azure", "Three.js"],
  },
  {
    title: "Lexis",
    description: "AI Agent for deep research and analysis",
    image: "/lexis.png",
    link: "https://youtu.be/Qk8sIyXCuDo",
    github: "https://github.com/stephanienguyen2020/lexis",
    tags: ["Python", "Mistral", "Langchain", "Streamlit"],
  },
];
