import { TECH_STACK } from "../constant/tech-stack";

/**
 * Configuration
 *
 * Modify the information below to customize your portfolio
 */

export const CONFIG = {
  name: {
    first: "Deri",
    last: "Kurniawan",
  },
  email: "hi@derikn.com",
  role: "Full-stack Web Developer",
  location: "Sukabumi Regency, West Java, Indonesia",
  socials: {
    github: "https://github.com/Deri-Kurniawan",
    linkedin: "https://www.linkedin.com/in/deri-kurniawan",
    instagram: "https://www.instagram.com/deri561",
    dribbble: "https://dribbble.com/deri-kurniawan",
  },
  quotes: {
    text: "This portfolio was made with heart and soul, pouring passion and creativity into every detail to bring it to life. It&apos;s not just a portfolio, it&apos;s a labor of love.",
    author: "Deri Kurniawan",
  },
  techStacks: [
    ...Object.values(TECH_STACK),
    // you can add tech stack one by one if you don't want to use all registered tech stack
    // TECH_STACK.nextjs,
    // TECH_STACK.reactjs,
    // TECH_STACK.tailwindcss,
  ],
  resume: {
    fileName: "Sample.pdf",
    downloadUrl: "/files/sample.pdf",
  },
  projects: [
    {
      title: "Portfolio Website 1",
      summary:
        "A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.",
      image: "/projects/3d-portfolio.webp",
      techStack: [
        TECH_STACK.reactjs,
        TECH_STACK.nextjs,
        TECH_STACK.tailwindcss,
        TECH_STACK.typescript,
      ],
      urls: {
        demo: "https://3d-portfolio.derikn.com",
        github: "https://github.com/Deri-Kurniawan/3d-portfolio",
        figma:
          "https://www.figma.com/design/TYBBBbA5cvBN4QU70hNxvr/3D-PORTFOLIO?node-id=307-16&t=1mhoto9IrOWXBn4O-1",
      },
      category: "Web App",
    },
    {
      title: "Portfolio Website 2",
      summary:
        "A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.",
      image: "/projects/3d-portfolio.webp",
      techStack: [
        TECH_STACK.reactjs,
        TECH_STACK.nextjs,
        TECH_STACK.tailwindcss,
        TECH_STACK.typescript,
      ],
      urls: {
        demo: "https://3d-portfolio.derikn.com",
        github: "https://github.com/Deri-Kurniawan/3d-portfolio",
      },
      category: "Web App",
    },
    {
      title: "Portfolio Website 3",
      summary:
        "A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.",
      image: "/projects/3d-portfolio.webp",
      techStack: [
        TECH_STACK.reactjs,
        TECH_STACK.nextjs,
        TECH_STACK.tailwindcss,
        TECH_STACK.typescript,
      ],
      urls: {
        demo: "https://3d-portfolio.derikn.com",
        figma:
          "https://www.figma.com/design/TYBBBbA5cvBN4QU70hNxvr/3D-PORTFOLIO?node-id=307-16&t=1mhoto9IrOWXBn4O-1",
      },
      category: "Web App",
    },
    {
      title: "Portfolio Website 4",
      summary:
        "A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.",
      image: "/projects/3d-portfolio.webp",
      techStack: [
        TECH_STACK.reactjs,
        TECH_STACK.nextjs,
        TECH_STACK.tailwindcss,
        TECH_STACK.typescript,
      ],
      urls: {
        github: "https://github.com/Deri-Kurniawan/3d-portfolio",
        figma:
          "https://www.figma.com/design/TYBBBbA5cvBN4QU70hNxvr/3D-PORTFOLIO?node-id=307-16&t=1mhoto9IrOWXBn4O-1",
      },
      category: "Web App",
    },
    {
      title: "Portfolio Website 5",
      summary:
        "A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.",
      image: "/projects/3d-portfolio.webp",
      techStack: [
        TECH_STACK.reactjs,
        TECH_STACK.nextjs,
        TECH_STACK.tailwindcss,
        TECH_STACK.typescript,
      ],
      urls: {
        github: "https://github.com/Deri-Kurniawan/3d-portfolio",
      },
      category: "Web App",
    },
    {
      title: "Portfolio Website 6",
      summary:
        "A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.",
      image: "/projects/3d-portfolio.webp",
      techStack: [
        TECH_STACK.reactjs,
        TECH_STACK.nextjs,
        TECH_STACK.tailwindcss,
        TECH_STACK.typescript,
      ],
      urls: {
        figma:
          "https://www.figma.com/design/TYBBBbA5cvBN4QU70hNxvr/3D-PORTFOLIO?node-id=307-16&t=1mhoto9IrOWXBn4O-1",
      },
      category: "Web App",
    },
  ],
} satisfies Config;
