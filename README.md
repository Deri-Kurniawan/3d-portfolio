# Deri Kurniawan's 3D Portfolio

[![Deri-Kurniawan - 3D Portfolio](https://img.shields.io/static/v1?label=Deri-Kurniawan&message=3d-portfolio&color=blue&logo=github)](https://github.com/Deri-Kurniawan/3d-portfolio "Go to GitHub repo") [![License](https://img.shields.io/badge/License-MIT-blue)](#license) [![stars - 3D Portfolio](https://img.shields.io/github/stars/Deri-Kurniawan/3d-portfolio?style=social)](https://github.com/Deri-Kurniawan/3d-portfolio)
[![forks - 3D Portfolio](https://img.shields.io/github/forks/Deri-Kurniawan/3d-portfolio?style=social)](https://github.com/Deri-Kurniawan/3d-portfolio)

A beautiful 3D-themed portfolio website built with Next.js 15, Tailwind CSS 4, and Framer Motion. This portfolio is based on my designs in [Dribbble - Deri Kurniawan](https://dribbble.com/shots/21642242-3D-Theme-Portfolio-Website).

## ✨ Features

- 🎨 Modern 3D-themed design with gradient animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 15 + Turbopack for fast development
- 🎭 Smooth animations powered by Framer Motion
- 🔧 Easy configuration - just edit one file!
- 🚀 One-click deploy to Vercel

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/Deri-Kurniawan/3d-portfolio.git
cd 3d-portfolio
npm install
```

### 2. Set Up Environment

```bash
cp example.env .env
```

Edit `.env` and set your app URL:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## 🎨 Customization Guide

### Quick Customization (5 minutes)

The main configuration file is `src/config/index.ts`. Edit this file to personalize your portfolio:

```typescript
export const CONFIG = {
  // Your name
  name: {
    first: "Your",
    last: "Name",
  },

  // Contact email
  email: "your@email.com",

  // Your professional role
  role: "Full-stack Web Developer",

  // Your location
  location: "City, Country",

  // Social media links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    instagram: "https://www.instagram.com/yourusername",
    dribbble: "https://dribbble.com/yourusername",
  },

  // Quote section
  quotes: {
    text: "Your inspiring quote here...",
    author: "Your Name",
  },

  // Resume download
  resume: {
    fileName: "YourName-Resume.pdf",
    downloadUrl: "/files/your-resume.pdf",
  },
  // ... projects and tech stacks
};
```

### Adding Your Resume

1. Place your PDF file in `public/files/`
2. Update the config:

```typescript
resume: {
  fileName: "John-Doe-Resume.pdf",
  downloadUrl: "/files/John-Doe-Resume.pdf",
}
```

### Adding Projects

Add projects to the `projects` array in `src/config/index.ts`:

```typescript
projects: [
  {
    title: "My Awesome Project",
    summary: "A brief description of what this project does and the problem it solves.",
    image: "/projects/my-project.webp", // Place image in public/projects/
    techStack: [
      TECH_STACK.reactjs,
      TECH_STACK.nextjs,
      TECH_STACK.tailwindcss,
    ],
    urls: {
      demo: "https://my-project.com",        // Optional
      github: "https://github.com/...",       // Optional
      figma: "https://figma.com/...",         // Optional
    },
    category: "Web App",
  },
]
```

**Project Image Guidelines:**
- Place images in `public/projects/`
- Recommended format: `.webp` for best performance
- Recommended size: 800x400px or similar aspect ratio

### Customizing Tech Stack

#### Using Existing Tech Icons

The portfolio includes pre-configured tech stacks in `src/constant/tech-stack.tsx`:

- `TECH_STACK.nextjs`
- `TECH_STACK.reactjs`
- `TECH_STACK.typescript`
- `TECH_STACK.javascript`
- `TECH_STACK.tailwindcss`
- `TECH_STACK.laravel`
- `TECH_STACK.expressjs`
- `TECH_STACK.prisma`
- `TECH_STACK.expo`
- `TECH_STACK.reactnative`

#### Adding New Tech Stack

Edit `src/constant/tech-stack.tsx`:

```typescript
import { SiVuedotjs } from "react-icons/si"; // Import icon from react-icons

export const TECH_STACK = {
  // ... existing stacks

  vuejs: {
    name: "Vue.js",
    icon: <SiVuedotjs />,
    color: "text-green-500",  // Tailwind color class
    siteUrl: "https://vuejs.org/",
  },
};
```

Find icons at [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/) (search for `Si` prefix for brand icons).

#### Selecting Which Tech Stacks to Display

In `src/config/index.ts`, you can either show all or select specific ones:

```typescript
// Show ALL registered tech stacks
techStacks: [...Object.values(TECH_STACK)],

// OR select specific ones
techStacks: [
  TECH_STACK.nextjs,
  TECH_STACK.reactjs,
  TECH_STACK.typescript,
  TECH_STACK.tailwindcss,
],
```

### Replacing Avatar Images

Your 3D avatar appears in two places. Replace these files:

| Location      | File Path                                                  | Recommended Size |
| ------------- | ---------------------------------------------------------- | ---------------- |
| Hero Section  | `src/assets/images/home/hero/avatar-smile.webp`            | 480x480px        |
| Let's Connect | `src/assets/images/home/letsConnect/avatar-big-smile.webp` | 530x530px        |

**Create your own 3D character at [peeps.ui8.net](https://peeps.ui8.net/)**

### Customizing Colors

Edit the theme colors in `src/app/globals.css`:

```css
@theme inline {
  --color-primary: #a293ff;    /* Purple - gradient start */
  --color-secondary: #00f0ff;  /* Cyan - gradient end */
  --color-accent: #000000;     /* Text color */
  --color-accent2: #8e8e8e;    /* Secondary text */
  --color-gray: #f1f1f1;       /* Background gray */
}
```

### Updating Open Graph Image

Replace `public/og-image.webp` with your own image (recommended: 1200x630px) for social media previews.

### Adding Navigation Links

Edit `src/constant/navigation.ts`:

```typescript
export const NAVIGATION_LINKS: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "Project", href: "/project" },
  { name: "Blog", href: "/blog" },  // Add new pages
];
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── _components/        # Page-specific components
│   ├── project/            # Project listing page
│   ├── globals.css         # Global styles & theme
│   └── layout.tsx          # Root layout
├── assets/
│   ├── fonts/              # Custom fonts
│   └── images/             # Static images (avatars, decoratives)
├── components/             # Shared components
├── config/
│   └── index.ts            # ⭐ MAIN CONFIGURATION FILE
├── constant/
│   ├── assets.ts           # Asset path mappings
│   ├── font.ts             # Font configurations
│   ├── navigation.ts       # Navigation links
│   └── tech-stack.tsx      # Tech stack definitions
└── types/
    └── globals.d.ts        # TypeScript type definitions
```

---

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDeri-Kurniawan%2F3d-portfolio&env=NEXT_PUBLIC_APP_URL)

1. Click the button above
2. Set `NEXT_PUBLIC_APP_URL` to your domain (e.g., `https://yourname.vercel.app`)
3. Deploy!

### Manual Deployment

```bash
npm run build
npm run start
```

### Environment Variables for Production

```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

---

## 📜 Available Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server with Turbopack |
| `npm run build`        | Build for production                    |
| `npm run start`        | Start production server                 |
| `npm run lint`         | Run Biome linter                        |
| `npm run lint:fix`     | Fix linting issues                      |
| `npm run format:check` | Check code formatting                   |
| `npm run format:fix`   | Fix code formatting                     |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Linting:** [Biome](https://biomejs.dev/)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/)
- **Environment:** [@t3-oss/env-nextjs](https://env.t3.gg/)

---

## 📄 License

Released under [MIT](/LICENSE) by [@Deri-Kurniawan](https://github.com/Deri-Kurniawan).

Feel free to use this template for your own portfolio.