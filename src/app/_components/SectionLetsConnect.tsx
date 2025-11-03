"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/constant/assets";
import styles from "../home.module.css";

const AnimatedImage = motion(Image);

export default function SectionLetsConnect() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const socialMediaLinks = [
    {
      initial: { y: 50, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 0.4 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer top-14 left-14 xl:left-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
      src: assets.home.letsConnect.linkedin,
      alt: "",
      width: 168,
      height: 168,
      tabIndex: 0,
      onClick: () =>
        window.open("https://linkedin.com/in/deri-kurniawan", "_blank"),
    },
    {
      initial: { y: 50, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 0.6 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer top-14 right-14 xl:right-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
      src: assets.home.letsConnect.instagram,
      alt: "",
      width: 168,
      height: 168,
      tabIndex: 0,
      onClick: () => window.open("https://instagram.com/deri561", "_blank"),
    },
    {
      initial: { y: -50, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 1 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer bottom-14 right-36 xl:right-44 md:right-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
      src: assets.home.letsConnect.github,
      alt: "",
      width: 168,
      height: 168,
      tabIndex: 0,
      onClick: () => window.open("https://github.com/deri-kurniawan", "_blank"),
    },
    {
      initial: { y: -50, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 0.8 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer bottom-14 left-36 xl:left-44 md:left-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
      src: assets.home.letsConnect.dribble,
      alt: "",
      width: 168,
      height: 168,
      tabIndex: 0,
      onClick: () =>
        window.open("https://dribbble.com/deri-kurniawan", "_blank"),
    },
    {
      initial: { y: 100, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 0 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer -bottom-64 w-10 h-10 md:w-[310px] md:h-[310px] z-10",
      src: assets.home.letsConnect.gmail,
      alt: "",
      width: 310,
      height: 310,
      tabIndex: 0,
      onClick: () => window.open("mailto:deri.netuchi@gmail.com", "_self"),
    },
  ];

  return (
    <section
      ref={ref}
      className={`safe-x-padding ${styles.sectionDistance} overflow-y-hidden lg:h-[1000px]`}
      aria-label="Let's Connect Section"
    >
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[730px] mx-auto`}
        >
          Do you have any questions or a project in mind? Let&apos;s connect! I
          am here to help and excited to hear from you. You can also take a look
          at my work.
        </motion.p>
      </div>
      <div className="h-full mt-4">
        <div className="relative flex flex-col items-center justify-center">
          <div className="hidden lg:block absolute animate-ping -z-[2]">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="rounded-full gradient-bg h-96 w-96"
            ></motion.div>
          </div>
          <AnimatedImage
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-52 h-52 md:w-[330px] md:h-[330px] lg:w-[530px] lg:h-[530px] rounded-full bg-gray lg:bg-transparent"
            src={assets.home.letsConnect.avatarBigSmile}
            alt=""
            width={530}
            height={530}
            priority
          />
          {socialMediaLinks.map((socialMediaLink, index) => (
            <AnimatedImage key={index.toString()} {...socialMediaLink} />
          ))}
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-4 lg:hidden">
            <AnimatedImage
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.linkedin}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open("https://linkedin.com/in/deri-kurniawan", "_blank")
              }
            />
            <AnimatedImage
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.dribble}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open("https://dribbble.com/deri-kurniawan", "_blank")
              }
            />
            <AnimatedImage
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.gmail}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open("mailto:deri.netuchi@gmail.com", "_self")
              }
            />
            <AnimatedImage
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.instagram}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open("https://instagram.com/deri561", "_blank")
              }
            />
            <AnimatedImage
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.github}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open("https://github.com/deri-kurniawan", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
