"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import MotionWrapper from "@/components/motion-wrapper";
import SectionHeader from "@/components/section-header";
import { CONFIG } from "@/config";
import { ASSETS } from "@/constant/assets";

const tabs = [
  {
    name: "Project",
    image: ASSETS.home.myLatestProject.suitcase,
    data: [...CONFIG.projects],
  },
  {
    name: "More",
    image: ASSETS.home.myLatestProject.rocket,
    data: [],
  },
];

const MyLatestProjectSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");
    if (tab && parseInt(tab, 10) < tabs.length - 1) {
      setActiveTab(parseInt(tab, 10));
    }
  }, []);

  return (
    <section ref={ref} className="dk-safe-x-padding dk-section-distance">
      <SectionHeader
        title="My Latest Project"
        description="Take a look at something I've worked on, such as a case study, real project, and more."
        inViewport={inView}
        className="text-center"
        animate
      />
      <div className="mt-[50px] h-full">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-9">
          {/* tabs */}
          <div className="flex flex-row md:flex-col bg-gray p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]">
            {tabs.map((tab, index) => (
              <MotionWrapper
                as="button"
                key={index.toString()}
                className={`relative ${
                  activeTab === index ? "dk-gradient-bg" : "bg-white"
                } w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => {
                  if (index === tabs.length - 1) {
                    router.push("/project");
                    return;
                  }
                  setActiveTab(index);
                  window.history.pushState({}, "", `?tab=${index}`);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={tab.image}
                  alt={`${tab.name} tab icon`}
                  width={100}
                  height={100}
                  style={{ height: "auto" }}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                  <p
                    className={`${
                      activeTab === index ? "text-white" : "text-accent"
                    } font-bold transition-colors duration-75 ease-in-out`}
                  >
                    {tab.name}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
          {/* content */}
          <div className="overflow-hidden">
            <div className="bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto">
              <div className="grid grid-flow-row grid-cols-12 gap-[26px]">
                {tabs.map((tab, tabIndex) =>
                  tab.data.map(
                    (item, dataIndex) =>
                      activeTab === tabIndex && (
                        <MotionWrapper
                          key={dataIndex.toString()}
                          className="relative col-span-12 overflow-hidden group xl:col-span-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="col-span-6">
                            <MotionWrapper
                              className="bg-white p-[26px] rounded-2xl md:rounded-[25px] h-[261px] overflow-hidden"
                              initial={{ opacity: 0, x: -50 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + dataIndex * 0.1,
                              }}
                            >
                              <Image
                                className="object-contain w-full h-auto"
                                src={item.image}
                                alt={`${item.title} project image`}
                                width={441}
                                height={261}
                                priority
                              />
                            </MotionWrapper>
                          </div>
                          <div className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 opacity-0 backdrop-blur-0 gap-y-2 group-hover:opacity-100 group-hover:backdrop-blur-sm bg-gray/10 rounded-2xl">
                            <div className="flex flex-col items-center justify-center w-full h-full select-none lg:select-auto">
                              <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">
                                {item.title}
                              </p>
                              <div className="flex flex-row gap-4 text-3xl">
                                {item?.urls?.demo && (
                                  <Link
                                    className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-linear-to-r hover:from-primary hover:to-secondary"
                                    href={{
                                      pathname: item.urls?.demo,
                                      query: {
                                        utm_medium: "campaign",
                                        utm_campaign: "3d-theme-portfolio",
                                      },
                                    }}
                                    target="_blank"
                                    title="Demo"
                                  >
                                    <IoMdOpen />
                                  </Link>
                                )}
                                {item?.urls?.github && (
                                  <Link
                                    className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-linear-to-r hover:from-primary hover:to-secondary"
                                    href={{
                                      pathname: item.urls?.github,
                                      query: {
                                        utm_medium: "campaign",
                                        utm_campaign: "3d-theme-portfolio",
                                      },
                                    }}
                                    target="_blank"
                                    title="GitHub Repository"
                                  >
                                    <BsGithub />
                                  </Link>
                                )}
                                {item?.urls?.figma && (
                                  <Link
                                    className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-linear-to-r hover:from-primary hover:to-secondary"
                                    href={{
                                      pathname: item.urls.figma,
                                      query: {
                                        utm_medium: "campaign",
                                        utm_campaign: "3d-theme-portfolio",
                                      },
                                    }}
                                    target="_blank"
                                    title="Figma Design"
                                  >
                                    <FiFigma />
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </MotionWrapper>
                      ),
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyLatestProjectSection;
