"use client";

import { useEffect, useState } from 'react';
import { assets } from '@/constant/assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { BsInfoCircle } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';

const tabs = [
    {
        name: 'Project',
        image: assets.home.myLatestProject.suitcase,
        data: [
            {
                slug: 'transform-portfolio-design-to-web-app',
                name: 'Transform Portfolio Design to Web App',
                image: assets.home.myLatestProject.projects.portfolioWebsite,
                repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
                demoUrl: "https://portfolio.deri.my.id",
            },
            {
                slug: 'transform-portfolio-design-to-web-app',
                name: 'Portfolio 2',
                image: assets.home.myLatestProject.projects.portfolioWebsite,
                repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
                demoUrl: "https://portfolio.deri.my.id",
            },
            {
                slug: 'transform-portfolio-design-to-web-app',
                name: 'Portfolio 3',
                image: assets.home.myLatestProject.projects.portfolioWebsite,
                repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
                demoUrl: "https://portfolio.deri.my.id",
            },
            {
                slug: 'transform-portfolio-design-to-web-app',
                name: 'Portfolio 4',
                image: assets.home.myLatestProject.projects.portfolioWebsite,
                repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
                demoUrl: "https://portfolio.deri.my.id",
            },
            {
                slug: 'transform-portfolio-design-to-web-app',
                name: 'Portfolio 5',
                image: assets.home.myLatestProject.projects.portfolioWebsite,
                repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
                demoUrl: "https://portfolio.deri.my.id",
            },
            {
                slug: 'transform-portfolio-design-to-web-app',
                name: 'Portfolio 6',
                image: assets.home.myLatestProject.projects.portfolioWebsite,
                repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
                demoUrl: "https://portfolio.deri.my.id",
            },
        ]
    },
    {
        name: 'Design',
        image: assets.home.myLatestProject.figma,
        data: [
            {
                slug: 'portfolio-web-design',
                name: 'Portfolio Web Design',
                image: assets.home.myLatestProject.projects.portfolioWebsite,
                repositoryUrl: "https://www.figma.com/file/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?type=design&node-id=49%3A26&t=3Bwr9eEa8OLH9C0R-1",
                demoUrl: "https://www.figma.com/proto/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?page-id=0%3A1&type=design&node-id=49-26&viewport=-226%2C241%2C0.42&scaling=min-zoom",
            },
        ],
    },
];

tabs.push({
    name: 'More',
    image: assets.home.myLatestProject.rocket,
    data: []
});

export default function SectionMyLatestProject() {
    const [activeTab, setActiveTab] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab && parseInt(tab) < tabs.length - 1) {
            setActiveTab(parseInt(tab));
        }
    }, [activeTab])

    return (
        <div className='safe-x-padding mt-[10.75em] mb-[10.75em]' ref={ref}>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className='mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text'>My Latest Project</motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className='font-medium text-xl lg:text-2xl text-accent max-w-[706px] mx-auto'>Take a look at something I&apos;ve worked on, such as a case study, real project, and more</motion.p>
            </div>
            <div className='mt-[3.125em] h-full'>
                <div className='flex flex-col items-center justify-center md:items-start md:flex-row gap-9'>
                    <div className='flex flex-row md:flex-col bg-gray p-[26px] rounded-[25px] gap-x-[26px] md:gap-x-0 gap-y-[26px]'>
                        {tabs.map((tab, index) => (
                            <motion.button
                                key={index.toString()}
                                className={`relative ${activeTab === index ? 'gradient-bg' : 'bg-white'} w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-[25px] flex justify-center items-center shadow-2xl`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                onClick={() => {
                                    if (index === tabs.length - 1) {
                                        router.push('/project');
                                        return;
                                    }
                                    setActiveTab(index);
                                    window.history.pushState({}, '', `?tab=${index}`);
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src={tab.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                    style={{ height: 'auto' }}
                                />
                                <div className="absolute bg-gray/10 backdrop-blur-sm rounded-[25px] top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 md:text-2xl">
                                    <p className={`${activeTab === index ? 'text-white' : 'text-accent'} font-bold transition-all duration-150 ease-in-out`}>{tab.name}</p>
                                </div>
                            </motion.button>

                        ))}
                    </div>
                    <div className='overflow-hidden'>
                        <div className='bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto'>
                            <div className='grid grid-flow-row grid-cols-12 gap-[26px]'>
                                {tabs.map((tab, tabIndex) =>
                                    tab.data.map((item, dataIndex) =>
                                        activeTab === tabIndex && (
                                            <motion.div
                                                key={dataIndex.toString()}
                                                className={`col-span-12 xl:col-span-6`}
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => {
                                                    if (window.innerWidth < 1024) {
                                                        router.push(`/project/${item.slug}`);
                                                        return;
                                                    }
                                                }}
                                            >
                                                <div className="col-span-6">
                                                    <motion.div
                                                        className="bg-white shadow-lg p-[26px] rounded-2xl h-[261px] overflow-hidden"
                                                        initial={{ opacity: 0, x: -50 }}
                                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ duration: 0.5, delay: 0.2 + dataIndex * 0.1 }}
                                                    >
                                                        <Image
                                                            className="object-contain w-full h-auto"
                                                            src={item.image}
                                                            alt=""
                                                            width={441}
                                                            height={261}
                                                            priority
                                                        />
                                                    </motion.div>
                                                </div>
                                                <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full duration-300 opacity-0 select-none active:opacity-100 bg-gray/10 backdrop-blur-sm rounded-2xl hover:opacity-100 gap-y-2 lg:select-auto">
                                                    <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">{item.name}</p>
                                                    <div className='flex flex-row gap-4 text-3xl'>
                                                        {item.repositoryUrl && (
                                                            <Link className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary" href={item.repositoryUrl} target='_blank' title="Repository">
                                                                {tabs[activeTab].name.toLowerCase() === "project" ? (
                                                                    <BsGithub />
                                                                ) : (
                                                                    <FiFigma />
                                                                )}
                                                            </Link>
                                                        )}
                                                        {item.demoUrl && (
                                                            <Link className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary" href={item.demoUrl} target='_blank' title="Demo">
                                                                <IoMdOpen />
                                                            </Link>
                                                        )}
                                                        <Link className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary" href={`/project/${item.slug}`} title={`Detail of ${item.name}`}>
                                                            <BsInfoCircle />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
