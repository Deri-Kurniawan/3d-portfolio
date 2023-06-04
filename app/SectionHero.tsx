"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import { MotionProps, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

interface IAnimateImageProps extends MotionProps {
    className: string;
    src: string;
    width: number;
    height: number;
    alt: string;
}

const AnimatedImage = motion(Image);

export default function SectionHero(): JSX.Element {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const animatedImages: IAnimateImageProps[] = [
        {
            className: 'w-[140px] h-auto lg:w-[180px] lg:h-[120px] absolute top-3 -left-16 z-[1]',
            src: assets.home.hero.zigZag,
            width: 180,
            height: 120,
            alt: '',
            initial: { opacity: 0, x: -100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            transition: { delay: 0.4, duration: 0.8 },
        },
        {
            className: 'w-[110px] h-auto lg:w-[150px] lg:h-[140px] absolute top-6 -right-12 z-[1]',
            src: assets.home.hero.twistedTorus,
            width: 150,
            height: 140,
            alt: '',
            initial: { opacity: 0, x: 100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            transition: { delay: 0.6, duration: 0.8 },
        },
        {
            className: 'w-[130px] h-auto lg:w-[170px] lg:h-[170px] absolute bottom-6 -left-14 z-[1]',
            src: assets.home.hero.quadrilateral,
            width: 170,
            height: 170,
            alt: '',
            initial: { opacity: 0, x: -100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            transition: { delay: 0.8, duration: 0.8 },
        },
        {
            className: 'w-[192px] h-auto lg:w-[242px] lg:h-[202px] absolute bottom-8 -right-24 z-[1]',
            src: assets.home.hero.triangle,
            width: 242,
            height: 202,
            alt: '',
            initial: { opacity: 0, x: 100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            transition: { delay: 1, duration: 0.8 },
        },
    ];

    return (
        <section ref={ref} className='safe-x-padding mt-10 mb-[172px]' aria-label='Hero Section'>
            <div className='grid grid-flow-row gap-10 xl:grid-cols-2 xl:grid-flow-col xl:gap-0'>
                {/* first */}
                <div className='flex flex-col items-center justify-center order-2 xl:items-start xl:order-1'>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className='font-montserrat font-bold text-2xl md:text-[28px] lg:text-[32px] text-accent mb-3 text-center xl:text-left'
                        aria-label="Welcome to Deri's Portfolio"
                    >
                        Welcome to Deri&apos;s Portfolio
                    </motion.p>
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.7 }}
                        className='font-montserrat font-extrabold text-5xl md:text-[64px] md:leading-[56px] lg:text-[66px] lg:leading-[88px] gradient-text mb-6 text-center xl:text-left'
                        aria-label="Full Stack Web Developer"
                    >
                        Full Stack Web Developer
                    </motion.h2>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.9 }}
                        className='text-base font-medium text-center md:text-xl lg:text-2xl text-accent xl:text-left'
                        aria-label="I'm Deri Kurniawan. A passionate Full Stack Web Developer based in Sukabumi Regency, West Java, Indonesia."
                    >
                        I&apos;m Deri Kurniawan. A passionate Full Stack Web Developer based in Sukabumi Regency, West Java, Indonesia.
                    </motion.p>
                </div>
                {/* second */}
                <div className='xl:order-2'>
                    <div className='relative flex items-center justify-center order-1 xl:justify-end'>
                        <div className='relative'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.8 }}
                                className='relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] bg-gray rounded-3xl overflow-clip'
                                aria-hidden={!inView}
                            >
                                <AnimatedImage
                                    className='w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] absolute top-0 bottom-0 left-0 right-0'
                                    src={assets.home.hero.avatarSmile}
                                    width={480}
                                    height={480}
                                    alt=''
                                    priority
                                    initial={{ opacity: 0, y: 800 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2, duration: 1 }}
                                    aria-label="Deri's Avatar"
                                />
                            </motion.div>
                            {animatedImages.map(({ className, src, width, height, alt, initial, animate, transition }, index) => (
                                <AnimatedImage
                                    key={index}
                                    className={className}
                                    src={src}
                                    width={width}
                                    height={height}
                                    alt={alt}
                                    initial={initial}
                                    animate={animate}
                                    transition={transition}
                                    aria-hidden={!inView}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
