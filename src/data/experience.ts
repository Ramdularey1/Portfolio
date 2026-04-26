export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  highlights: string[];
  startDate: string;
  endDate?: string;
}

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "TechCorp Solutions",
    position: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    startDate: "2022-01",
    description:
      "Led the development of multiple high-impact products serving 100k+ users. Architected scalable systems and mentored junior developers.",
    highlights: [
      "Architected and built a new microservices infrastructure, improving system performance by 40%",
      "Led a team of 5 developers on a critical product redesign, delivering on time and under budget",
      "Implemented comprehensive testing strategy, increasing code coverage from 45% to 95%",
      "Mentored 3 junior developers, resulting in 2 promotions within the team",
    ],
  },
  {
    id: "2",
    company: "StartupHub Inc.",
    position: "Full-Stack Developer",
    duration: "2020 - 2022",
    startDate: "2020-03",
    endDate: "2022-01",
    description:
      "Developed and maintained multiple web applications for early-stage startups. Worked with various technologies and wore many hats.",
    highlights: [
      "Built 5+ full-stack applications from scratch, shipping features every 2 weeks",
      "Reduced API response time by 60% through optimization and caching strategies",
      "Implemented authentication system supporting OAuth2 and JWT tokens",
      "Collaborated with product team to design and implement new features based on user feedback",
    ],
  },
  {
    id: "3",
    company: "Digital Agency Co.",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    startDate: "2019-06",
    endDate: "2020-03",
    description:
      "Created responsive and interactive websites for diverse client base. Focused on modern web technologies and best practices.",
    highlights: [
      "Developed 20+ client websites using React and modern CSS techniques",
      "Improved website performance scores from average 35 to 85+ (Lighthouse)",
      "Established reusable component library, reducing development time by 30%",
      "Conducted code reviews and mentored 2 junior developers",
    ],
  },
  {
    id: "4",
    company: "TechStart Academy",
    position: "Web Development Instructor",
    duration: "2018 - 2019",
    startDate: "2018-09",
    endDate: "2019-06",
    description:
      "Taught full-stack web development to bootcamp cohorts. Developed curriculum and guided students through real-world projects.",
    highlights: [
      "Created comprehensive curriculum for 12-week bootcamp program",
      "Taught 50+ students full-stack JavaScript development",
      "Achieved 92% job placement rate for bootcamp graduates",
      "Mentored students on building portfolio projects",
    ],
  },
];
