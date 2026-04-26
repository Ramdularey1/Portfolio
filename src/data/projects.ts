export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
{
  id: "1",
  title: "Code Camp",
  description: "LeetCode-like coding platform with real-time code execution",
  longDescription:
    "A full-stack coding platform where users can solve problems, write code in an integrated editor, and get instant results using Judge0 API. Includes authentication, test case execution, and dynamic problem rendering.",
  image:"/images/codecamp.png",
  tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Judge0 API"],
  github: "https://github.com/Ramdularey1/codecamp",
  live: "https://codecamp-neon.vercel.app/",
  featured: true,
},
{
  id: "2",
  title: "TubeForge",
  description: "YouTube content management and editing platform",
  longDescription:
    "A full-stack application that allows users to manage and edit YouTube video content. Features include video data fetching, editing functionality, API integration, and secure authentication with smooth UI.",
  image: "/images/tubeforge.png",
  tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
  github: "https://github.com/Ramdularey1/TubeForge",
  live: "https://tube-forge-iota.vercel.app/",
  featured: true,
},
{
  id: "4",
  title: "Swiggy Clone",
  description: "Food ordering UI with live API data and state management",
  longDescription:
    "A frontend-focused application that fetches real-time restaurant data from Swiggy API, displays it using Redux store, and includes features like routing, shimmer loading effects, and responsive UI design.",
  image: "/images/foodhub.png",
  tags: ["React", "Redux", "Tailwind CSS", "API Integration"],
  github: "https://github.com/Ramdularey1/food-hub",
  live: "https://food-hub-theta.vercel.app/",
  featured: false,
},
// {
//   id: "3",
//   title: "E-Commerce Website",
//   description: "Full-stack e-commerce platform with authentication and seamless shopping experience",
//   longDescription:
//     "A complete e-commerce web application built using React, Node.js, Express, and MongoDB. It features user authentication with JWT, product browsing, add-to-cart functionality, and secure checkout flow. The application uses Redux for state management and integrates REST APIs for handling products, users, and orders. Designed with a responsive UI to ensure a smooth shopping experience across all devices.",
//   image: "/images/ecommerce.png",
//   tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
//   github: "https://github.com/Ramdularey1/e-commerce-fullstack-",
//   live: "YOUR_LIVE_LINK",
//   featured: true,
// },

];
