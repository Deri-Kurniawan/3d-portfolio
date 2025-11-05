import {
  SiExpo,
  SiExpress,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

/**
 * Register your tech stack used in your projects here.
 * Make sure the key is the same as the one used in the project config.
 */
export const TECH_STACK = {
  nextjs: {
    name: "Next JS",
    icon: <SiNextdotjs />,
    color: "text-gray-900",
    siteUrl: "https://nextjs.org/",
  },
  laravel: {
    name: "Laravel",
    icon: <SiLaravel />,
    color: "text-red-500",
    siteUrl: "https://laravel.com/",
  },
  expo: {
    name: "Expo",
    icon: <SiExpo />,
    color: "text-black",
    siteUrl: "https://expo.dev/",
  },
  prisma: {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "text-neutral-800",
    siteUrl: "https://www.prisma.io/",
  },
  expressjs: {
    name: "Express JS",
    icon: <SiExpress />,
    color: "text-black",
    siteUrl: "https://expressjs.com/",
  },
  javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    siteUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  reactjs: {
    name: "React JS",
    icon: <SiReact />,
    color: "text-blue-500",
    siteUrl: "https://reactjs.org/",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-500",
    siteUrl: "https://tailwindcss.com/",
  },
  reactnative: {
    name: "React Native",
    icon: <TbBrandReactNative />,
    color: "text-blue-500",
    siteUrl: "https://reactnative.dev/",
  },
  typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    color: "text-blue-600",
    siteUrl: "https://www.typescriptlang.org/",
  },
} satisfies Record<string, TechStack>;
