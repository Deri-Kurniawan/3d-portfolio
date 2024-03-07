"use client";

import styles from "@/app/home.module.css";
import { assets } from "@/constant/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const technologyStack = [
  {
    name: "Next JS",
    image: assets.home.technologyStack.nextJs,
    officialSite: "https://nextjs.org/",
  },
  {
    name: "Laravel",
    image: assets.home.technologyStack.laravel,
    officialSite: "https://laravel.com/",
  },
  {
    name: "Expo",
    image: assets.home.technologyStack.expo,
    officialSite: "https://expo.dev/",
  },
  {
    name: "Prisma",
    image: assets.home.technologyStack.prisma,
    officialSite: "https://www.prisma.io/",
  },
  {
    name: "Express JS",
    image: assets.home.technologyStack.expressJs,
    officialSite: "https://expressjs.com/",
  },
  {
    name: "Planet Scale",
    image: assets.home.technologyStack.planetScale,
    officialSite: "https://planetscale.com/",
  },
  {
    name: "Javascript",
    image: assets.home.technologyStack.javascript,
    officialSite: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React JS",
    image: assets.home.technologyStack.reactJs,
    officialSite: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    image: assets.home.technologyStack.tailwindCss,
    officialSite: "https://tailwindcss.com/",
  },
  {
    name: "React Native",
    image: assets.home.technologyStack.reactNative,
    officialSite: "https://reactnative.dev/",
  },
  {
    name: "Typescript",
    image: assets.home.technologyStack.typescript,
    officialSite: "https://www.typescriptlang.org/",
  },
];

export default function SectionTechnologyStack() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Technology Stack
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[960px] mx-auto`}
        >
          I are concerned about security and performance for my client.
          That&apos;s why I always keep updating and use best technologies in a
          product
        </motion.p>
      </div>
      <div className="flex items-center justify-center mt-12">
        <div className="flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center">
          {technologyStack.map((item, index) => (
            <div key={index.toString()} className="relative h-full">
              <motion.div
                className="flex justify-center items-center w-[100px] h-[100px] transition-all duration-150 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  className="w-auto h-[100px]"
                  src={item.image}
                  width={0}
                  height={100}
                  alt={item.name}
                />
                <Link
                  href={{
                    pathname: item.officialSite,
                    query: {
                      utm_source: "deri.my.id",
                      utm_medium: "campaign",
                      utm_campaign: "portfolio",
                    },
                  }}
                  target="_blank"
                  title={`Figure out about ${item.name}`}
                >
                  <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-1 text-white transition-all duration-300 bg-opacity-50 opacity-0 gradient-bg hover:opacity-100 rounded-xl">
                    <p className="font-semibold text-center line-clamp-3">
                      {item.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
