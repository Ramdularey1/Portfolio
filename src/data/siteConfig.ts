export const siteConfig = {
  name: "John Developer",
  title: "Full-Stack Developer & Creative Problem Solver",
  description:
    "Building beautiful, performant web experiences with modern technologies. Specialist in React, Next.js, and full-stack JavaScript.",
  author: "John Developer",
  email: "hello@johndeveloper.com",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
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
