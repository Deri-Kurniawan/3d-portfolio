"use client";

import { type MotionProps, motion } from "framer-motion";
import Image from "next/image";
import { useCallback } from "react";
import { useInView } from "react-intersection-observer";
import MotionWrapper from "@/components/motion-wrapper";
import { CONFIG } from "@/config";
import { ASSETS } from "@/constant/assets";

type TAnimateImageProps = MotionProps & {
  className: string;
  src: string;
  width: number;
  height: number;
};

const AnimatedImage = motion(Image);

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getDecorativeImages = useCallback((): TAnimateImageProps[] => {
    return [
      {
        className: "w-[140px] lg:w-[180px] lg:h-[120px] top-3 -left-16",
        src: ASSETS.decoratives.zigZag,
        width: 180,
        height: 120,
        initial: { x: -100 },
        animate: inView ? { opacity: 1, x: 0 } : {},
        transition: { duration: 0.8 },
      },
      {
        className: "w-[110px] lg:w-[150px] lg:h-[140px] top-6 -right-12",
        src: ASSETS.decoratives.twistedTorus,
        width: 150,
        height: 140,
        initial: { x: 100 },
        animate: inView ? { opacity: 1, x: 0 } : {},
        transition: { duration: 0.8 },
      },
      {
        className: "w-[130px] lg:w-[170px] lg:h-[170px] bottom-6 -left-14",
        src: ASSETS.decoratives.quadrilateral,
        width: 170,
        height: 170,
        initial: { x: -100 },
        animate: inView ? { opacity: 1, x: 0 } : {},
        transition: { duration: 0.8 },
      },
      {
        className: "w-[192px] lg:w-[242px] lg:h-[202px] bottom-8 -right-24",
        src: ASSETS.decoratives.triangle,
        width: 242,
        height: 202,
        initial: { x: 100 },
        animate: inView ? { opacity: 1, x: 0 } : {},
        transition: { duration: 0.8 },
      },
    ].map((item, index) => ({
      ...item,
      className: `absolute z-[1] h-auto ${item.className}`,
      initial: { ...item.initial, opacity: 0 },
      animate: { ...item.animate, opacity: inView ? 1 : 0 },
      transition: { ...item.transition, delay: 0.6 + index * 0.2 },
    }));
  }, [inView]);

  return (
    <section
      ref={ref}
      className="dk-safe-x-padding mt-10 mb-[172px]"
      aria-label="Hero Section"
    >
      {/* content */}
      <div className="grid grid-flow-row gap-10 xl:grid-cols-2 xl:grid-flow-col xl:gap-0">
        <div className="flex flex-col items-center justify-center order-2 xl:items-start xl:order-1">
          <MotionWrapper
            as="p"
            className="font-montserrat font-bold text-2xl md:text-[28px] lg:text-[32px] text-accent mb-3 text-center xl:text-left"
            aria-label="Greeting"
          >
            Welcome to {CONFIG.name.first}&apos;s Portfolio
          </MotionWrapper>
          <MotionWrapper
            as="h2"
            className="font-montserrat font-extrabold text-5xl md:text-[64px] md:leading-14 lg:text-[66px] lg:leading-[88px] dk-gradient-text mb-6 text-center xl:text-left"
          >
            {CONFIG.role}
          </MotionWrapper>
          <MotionWrapper
            as="p"
            className="text-base font-medium text-center md:text-xl lg:text-2xl text-accent xl:text-left"
            aria-label="Introduction"
          >
            I&apos;m {CONFIG.name.first}
            {CONFIG.name.last && ` ${CONFIG.name.last}`}. A passionate{" "}
            {CONFIG.role} based in {CONFIG.location}.
          </MotionWrapper>
        </div>
        {/* illustration */}
        <div className="xl:order-2">
          <div className="relative flex items-center justify-center order-1 xl:justify-end">
            <div className="relative">
              <MotionWrapper className="relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] bg-gray rounded-3xl overflow-clip">
                <AnimatedImage
                  className="w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] absolute top-0 bottom-0 left-0 right-0"
                  src={ASSETS.home.hero.avatarSmile}
                  width={480}
                  height={480}
                  alt=""
                  priority
                  initial={{ opacity: 0.5, y: 500 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 1 }}
                />
              </MotionWrapper>
              {getDecorativeImages().map(
                (
                  {
                    className,
                    src,
                    width,
                    height,
                    initial,
                    animate,
                    transition,
                  },
                  index,
                ) => (
                  <AnimatedImage
                    key={`decorative-image-${index.toString()}`}
                    className={className}
                    src={src}
                    width={width}
                    height={height}
                    alt="" // no need alt for decorative images
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    aria-hidden={!inView}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
