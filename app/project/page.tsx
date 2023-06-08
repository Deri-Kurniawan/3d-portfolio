"use client";;
import { assets } from "@/constant/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const initialProjects = [
    {
        slug: 'transform-portfolio-design-to-web-app-1',
        title: 'Transform Portfolio Design to Web App',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://portfolio.deri.my.id",
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
        ]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-2',
        title: 'Portfolio 2',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://portfolio.deri.my.id",
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
        ]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-3',
        title: 'Portfolio 3',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://portfolio.deri.my.id",
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
        ]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-4',
        title: 'Portfolio 4',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://portfolio.deri.my.id",
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
        ]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-5',
        title: 'Portfolio 5',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://portfolio.deri.my.id",
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
        ]
    },
    {
        slug: 'transform-portfolio-design-to-web-app-6',
        title: 'Portfolio 6',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "https://portfolio.deri.my.id",
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
        ]
    },
    {
        slug: 'portfolio-web-design',
        title: 'Portfolio Web Design',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://www.figma.com/file/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?type=design&node-id=49%3A26&t=3Bwr9eEa8OLH9C0R-1",
        demoUrl: "https://www.figma.com/proto/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?page-id=0%3A1&type=design&node-id=49-26&viewport=-226%2C241%2C0.42&scaling=min-zoom",
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
        ]
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
        <>
            <section ref={ref} className='safe-x-padding mt-[38px] overflow-y-hidden lg:min-h-[1000px]'>
                <div className='text-center'>
                    <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.2 }} className='mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text'>Explore Deri&apos;s Project</motion.h2>
                    <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className='font-medium text-xl lg:text-2xl text-accent max-w-[730px] mx-auto'>Take a look at something I&apos;ve worked on, such as a case study, real project, and more.</motion.p>
                </div>
                <div className='my-[50px] h-full'>
                    <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12">
                        {filteredProjects.map((project, index) => (
                            <Link
                                key={index}
                                href={`/project/${project.slug}`}
                                className="w-full h-full col-span-4 transition-all duration-500 ease-in-out bg-white shadow-md hover:shadow-xl hover:scale-[1.01] rounded-2xl"
                                target="_blank"
                            >
                                <div className="relative overflow-hidden max-h-48 rounded-tl-2xl rounded-tr-2xl">
                                    <Image className="object-cover" src={project.image} alt={`${project.title} thumbnail`} />
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
                                                        src={techStack.imageUrl} alt={`${techStack.name} icon`}
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
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}
