"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { assets } from '@/constant/assets';
import { suarte } from '@/constant/font';

const AnimatedImage = motion(Image);

export default function SectionQuote() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const animatedFloatingImages = [
        {
            className: "absolute -z-10 -top-20 left-10 md:left-36 lg:left-48 lg:-top-24 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]",
            src: assets.home.quote.teaCup,
            width: 100,
            height: 100,
            alt: '',
            initial: { y: 50, x: -50, opacity: 0 },
            animate: inView ? { y: 0, x: 0, opacity: 1 } : {},
            transition: { duration: 0.5, delay: 0.2 },
        },
        {
            className: "absolute -z-10 -top-20 right-10 md:right-36 lg:right-48 lg:-top-24 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]",
            src: assets.home.quote.bulb,
            width: 100,
            height: 100,
            alt: '',
            initial: { y: 50, x: 50, opacity: 0 },
            animate: inView ? { y: 0, x: 0, opacity: 1 } : {},
            transition: { duration: 0.5, delay: 0.4 },
        },
        {
            className: "absolute -z-10 -bottom-40 md:-bottom-20 left-8 md:left-32 lg:-bottom-24 xl:left-72 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]",
            src: assets.home.quote.paintKit,
            width: 100,
            height: 100,
            alt: '',
            initial: { y: 50, x: -50, opacity: 0 },
            animate: inView ? { y: 0, x: 0, opacity: 1 } : {},
            transition: { duration: 0.5, delay: 0.6 },
        },
        {
            className: "absolute -z-10 -bottom-36 md:-bottom-20 right-8 md:right-28 xl:right-72 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]",
            src: assets.home.quote.heart,
            width: 100,
            height: 100,
            alt: '',
            initial: { y: 50, x: 50, opacity: 0 },
            animate: inView ? { y: 0, x: 0, opacity: 1 } : {},
            transition: { duration: 0.5, delay: 0.8 },
        }
    ];

    return (
        <div className='safe-x-padding mt-[10.75em] mb-[10.75em]' ref={ref}>
            <div className='relative'>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className='font-medium text-xl leading-[38px] lg:text-2xl text-accent max-w-[933px] mx-auto text-justify'>
                    This portfolio was made with heart and soul, pouring passion and creativity into every detail to bring it to life. It&apos;s not just a portfolio, it&apos;s a labor of love.
                </motion.p>

                {animatedFloatingImages.map((item, index) => (
                    <AnimatedImage key={index.toString()} {...item} />
                ))}
            </div>
            <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className='font-medium text-6xl lg:text-7xl text-accent text-center mt-[20px]' style={suarte.style}>
                Deri kurniawan
            </motion.p>
        </div >
    )
}
