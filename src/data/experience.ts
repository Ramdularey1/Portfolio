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
    company: "RevSpire Technologies.",
    position: "Full Stack Developer Intern",
    duration: "2024 - 2025",
    startDate: "2022-01",
    description:
      "Built and contributed to full-stack web applications using modern technologies, focusing on scalable architecture, seamless API integration, and high-performance user experiences.",
    highlights: [
      "Developed responsive and reusable UI components using React and Tailwind CSS",
      "Designed and implemented REST APIs using Node.js and Express.js",
      "Integrated frontend with backend services and managed dynamic data",
      "Implemented secure authentication and authorization using JWT",
      "Debugged and resolved real-world issues including API failures, CORS errors, and UI bugs",
      "Improved application performance and ensured smooth user experience across devices",
    ],
  },
];
