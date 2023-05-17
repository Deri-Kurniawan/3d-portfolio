"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const technologyStack = [
    {
        name: 'Next JS',
        image: assets.home.technologyStack.nextJs,
        officialSite: 'https://nextjs.org/',
    },
    {
        name: 'Laravel',
        image: assets.home.technologyStack.laravel,
        officialSite: 'https://laravel.com/',
    },
    {
        name: 'Expo',
        image: assets.home.technologyStack.expo,
        officialSite: 'https://expo.dev/',
    },
    {
        name: 'Prisma',
        image: assets.home.technologyStack.prisma,
        officialSite: 'https://www.prisma.io/',
    },
    {
        name: "Express JS",
        image: assets.home.technologyStack.expressJs,
        officialSite: 'https://expressjs.com/',
    },
    {
        name: "Planet Scale",
        image: assets.home.technologyStack.planetScale,
        officialSite: 'https://planetscale.com/',
    },
    {
        name: "Javascript",
        image: assets.home.technologyStack.javascript,
        officialSite: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        name: "React JS",
        image: assets.home.technologyStack.reactJs,
        officialSite: 'https://reactjs.org/',
    },
    {
        name: "Tailwind CSS",
        image: assets.home.technologyStack.tailwindCss,
        officialSite: 'https://tailwindcss.com/',
    },
    {
        name: "React Native",
        image: assets.home.technologyStack.reactNative,
        officialSite: 'https://reactnative.dev/',
    },
    {
        name: "Typescript",
        image: assets.home.technologyStack.typescript,
        officialSite: 'https://www.typescriptlang.org/',
    }
]

export default function SectionTechnologyStack() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className='safe-x-padding mt-[10.75em] mb-[10.75em]' ref={ref}>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className='mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text'>Technology Stack</motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className='font-medium text-xl lg:text-2xl text-accent max-w-[960px] mx-auto'>I are concerned about security and performance for my client. That&apos;s why I always keep updating and use best technologies in a product</motion.p>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <div className='flex flex-row gap-[3.125em] max-w-[54em] flex-wrap justify-center items-center'>
                    {technologyStack.map((item, index) => (
                        <div key={index.toString()} className='h-full relative'>
                            <motion.div
                                className="transition-all duration-150 ease-in-out"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    className='h-auto'
                                    src={item.image}
                                    width={0}
                                    height={100}
                                    alt={item.name}
                                    style={{ width: '100%', height: '100px' }}
                                />
                                <Link href={item.officialSite} target="_blank" title={`Figure out about ${item.name}`}>
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-all duration-300 rounded-xl">
                                        <p className='text-center font-semibold'>
                                            {item.name}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    )
}
