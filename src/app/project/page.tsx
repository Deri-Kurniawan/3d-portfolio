"use client";

import { assets } from "@/constant/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsDribbble, BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const categories = [
    {
        slug: 'app',
        name: 'App',
    },
    {
        slug: 'design',
        name: 'Design',
    }
];

const projectTypes = [
    {
        slug: 'case-study',
        name: 'Case Study',
    },
    {
        slug: 'real-project',
        name: 'Real Project',
    }
]

const initialProjects = [
    {
        slug: 'transform-portfolio-design-to-web-app-1',
        title: 'Transform Portfolio Design to Web App',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://deri.my.id",
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        techStacks: [
            {
                name: 'Next JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-2',
        title: 'Portfolio 2',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://deri.my.id",
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        techStacks: [
            {
                name: 'Next JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-3',
        title: 'Portfolio 3',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://deri.my.id",
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        techStacks: [
            {
                name: 'Next JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-4',
        title: 'Portfolio 4',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://deri.my.id",
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        techStacks: [
            {
                name: 'Next JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-5',
        title: 'Portfolio 5',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://deri.my.id",
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        techStacks: [
            {
                name: 'Next JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-6',
        title: 'Portfolio 6',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://deri.my.id",
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        techStacks: [
            {
                name: 'Next JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'portfolio-web-design',
        title: 'Portfolio Web Design',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://dribbble.com/shots/21642242-3D-Theme-Portfolio-Website?utm_source=Clipboard_Shot&utm_campaign=deri-kurniawan&utm_content=3D%20Theme%20Portfolio%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=deri-kurniawan&utm_content=3D%20Theme%20Portfolio%20Website&utm_medium=Social_Share",
        demoUrl: "https://www.figma.com/proto/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?node-id=1-2&scaling=scale-down-width",
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        techStacks: [
            {
                name: 'Next JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[1],
        category: categories[1]
    },
]

export default function Project() {
    const [projects, setProjects] = useState(initialProjects);
    const [filteredProjects, setFilteredProjects] = useState(initialProjects);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className='safe-x-padding mt-[38px] overflow-y-hidden lg:min-h-[1000px]'>
            <div className='text-center'>
                <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.2 }} className='mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text'>Explore Deri&apos;s Project</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className='font-medium text-xl lg:text-2xl text-accent max-w-[730px] mx-auto'>Take a look at something I&apos;ve worked on, such as a case study, real project, and more.</motion.p>
            </div>
            <div className='my-[50px] h-full'>
                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="col-span-4 shadow-md hover:shadow-2xl hover:scale-[1.01] rounded-2xl transition-all duration-500 ease-in-out">
                            <Link
                                className="w-full h-full bg-white"
                                href={`/project/${project.slug}`}
                                target="_blank"
                            >
                                <div className="relative overflow-hidden max-h-48 rounded-tl-2xl rounded-tr-2xl">
                                    <div className="relative">
                                        <Image className="object-cover" src={project.image} alt={`${project.title} thumbnail`} />
                                        <div className="absolute top-0 right-0 p-2 bg-black z-[1] text-white rounded-bl-2xl text-sm hover:opacity-0 transition-all duration-500 ease-in-out">
                                            {project.projectType.name}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 px-6 py-3">
                                        <div className="flex flex-row flex-wrap gap-x-4">
                                            {project.techStacks.map((techStack, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={inView ? { opacity: 1 } : {}}
                                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                    className="p-1 bg-white border-[0.5px] border-gray/70 rounded-full hover:cursor-help"
                                                >
                                                    <Image
                                                        src={techStack.imageUrl}
                                                        alt={`${techStack.name} icon`}
                                                        loader={({ src }) => src}
                                                        width={36}
                                                        height={36}
                                                        title={techStack.name}
                                                        unoptimized
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 py-4">
                                    <h5 className="mb-2 text-base font-bold line-clamp-1">{project.title}</h5>
                                    <p className="text-sm font-normal line-clamp-2">{project.summary}</p>
                                    <div className="grid grid-flow-col gap-4 mt-4">
                                        {project.demoUrl && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(project.demoUrl, '_blank', 'utm_source=deri.my.id&utm_medium=campaign&utm_campaign=portfolio');
                                                }}
                                                className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1">
                                                <span>
                                                    {project.category.slug === 'design' ?
                                                        "See Prototype"
                                                        :
                                                        "Visit Demo"
                                                    }
                                                </span>
                                                <IoMdOpen />
                                            </button>
                                        )}

                                        {project.repositoryUrl && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(project.repositoryUrl, '_blank', 'utm_source=deri.my.id&utm_medium=campaign&utm_campaign=portfolio');
                                                }}
                                                rel="noopener noreferrer"
                                                className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1"
                                            >
                                                {project.category.slug === 'design' ? (
                                                    <>
                                                        <span>Dribble</span>
                                                        <BsDribbble />
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Github</span>
                                                        <BsGithub />
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>

    )
}
