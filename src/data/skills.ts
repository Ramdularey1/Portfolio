export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "Redux", level: 4 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Express", level: 4 },
      { name: "PostgreSQL", level: 5 },
      { name: "MongoDB", level: 5 },
      { name: "REST APIs", level: 5 },
      { name: "API Integration", level: 5 },
      { name: "JWT", level: 5 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: 5 },
      { name: "Vercel", level: 5 },
      { name: "VS Code", level: 5 },
      { name: "Postman", level: 5 },
      { name: "Render", level: 5 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "UI/UX Design", level: 4 },
      { name: "Competitive Programming", level: 4 },
      { name: "Data Structures & Algorithms", level: 4 },
      { name: "Debugging & error handling", level: 4 },
      { name: "Logical & analytical thinking", level: 4 },
      
    ],
  },
];

export const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];
export const backendSkills = ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"];
export const allSkills = [...frontendSkills, ...backendSkills];
