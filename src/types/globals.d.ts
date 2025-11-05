declare type TechStack = {
  name: string;
  icon: React.ReactNode;
  color: string;
  siteUrl: string;
};

declare type NavigationLink = {
  name: string;
  href: string;
};

declare type Config = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  role: string;
  location: string;
  quotes: {
    text: string;
    author: string;
  };
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    dribbble: string;
  };
  techStacks: TechStack[];
  resume: {
    fileName: string;
    downloadUrl: string;
  };
  projects: {
    title: string;
    summary: string;
    image: StaticImageData | string;
    techStack: {
      name: string;
      icon: React.ReactNode;
      color: string;
      siteUrl: string;
    }[];
    urls: {
      demo?: string;
      github?: string;
      figma?: string;
    };
    category: string;
  }[];
};
