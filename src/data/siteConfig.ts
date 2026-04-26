export const siteConfig = {
  name: "Ram Dularey Yadav",
  title: "Full-Stack Developer & Creative Problem Solver",
  description:
    "Building beautiful, performant web experiences with modern technologies. Specialist in React, Next.js, and full-stack JavaScript.",
  author: "Ram Dularey",
  email: "ramdulareyyadav2002@gmail.com",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com/Ramdularey1",
    linkedin: "https://www.linkedin.com/in/ram-dularey-yadav-256945224/",
    discord: "https://discord.com",
  },
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "GitHub", url: siteConfig.links.github, icon: "github" },
  { name: "LinkedIn", url: siteConfig.links.linkedin, icon: "linkedin" },
  { name: "Twitter", url: siteConfig.links.twitter, icon: "twitter" },
  { name: "Email", url: `mailto:${siteConfig.email}`, icon: "mail" },
];
