import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import MotionWrapper from "@/components/motion-wrapper";
import SectionHeader from "@/components/section-header";
import { CONFIG } from "@/config";

export const metadata: Metadata = {
  title: "Projects - 3D theme Portfolio",
  description: `Explore the latest projects by ${CONFIG.name.first.concat(
    " ",
    CONFIG.name.last,
  )} in this section of the 3D theme Portfolio.`,
};

const TECH_STACK_ICON_MAX_LENGTH = 5;
const projects = CONFIG.projects;

export default function Project() {
  return (
    <section className="dk-safe-layout pt-20 overflow-y-hidden lg:min-h-[1000px]">
      <SectionHeader
        title="My Latest Project"
        description="Take a look at something I've worked on, such as a case study, real project, and more."
        className="text-center"
      />
      <div className="my-[50px] h-full">
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-600">
                No Projects Found
              </h3>
              <p className="text-gray-500">
                Check back later for new projects and updates.
              </p>
            </div>
          </div>
        ) : (
          <MotionWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="col-span-4 shadow hover:shadow-sm hover:scale-[1.01] rounded-2xl transition-all duration-500 ease-in-out"
              >
                <div className="w-full h-full bg-white">
                  <div className="relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                    <Image
                      className="object-contain size-full"
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="p-6 py-4">
                    {/* tech stack */}
                    <div className="flex flex-row flex-wrap gap-2 my-4 items-center">
                      {project.techStack
                        .slice(0, TECH_STACK_ICON_MAX_LENGTH)
                        .map((tech) => (
                          <span
                            key={tech.name}
                            className={`${tech.color} **:size-6 lg:**:size-7`}
                            title={tech.name}
                          >
                            {tech.icon}
                            <div className="sr-only">
                              {tech.name} Technology
                            </div>
                          </span>
                        ))}
                      {project.techStack.length >
                        TECH_STACK_ICON_MAX_LENGTH && (
                        <span
                          className="text-sm font-medium text-gray-500"
                          title={project.techStack
                            .slice(TECH_STACK_ICON_MAX_LENGTH)
                            .map((tech) => tech.name)
                            .join(", ")}
                        >
                          +
                          {project.techStack.length -
                            TECH_STACK_ICON_MAX_LENGTH}
                        </span>
                      )}
                    </div>
                    <h5 className="mb-2 text-base font-bold line-clamp-1">
                      {project.title}
                    </h5>
                    <p className="text-sm font-normal line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="grid grid-flow-col gap-4 mt-4">
                      {project?.urls?.demo && (
                        <a
                          href={project.urls?.demo}
                          className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 line-clamp-1"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FaGlobe className="size-4" />
                          <span>Demo</span>
                        </a>
                      )}

                      {project?.urls?.github && (
                        <a
                          href={project.urls?.github}
                          rel="noopener noreferrer"
                          className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform bg-black rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 line-clamp-1"
                          target="_blank"
                        >
                          <BsGithub className="size-4" />
                          <span>Github</span>
                        </a>
                      )}

                      {/* figma */}
                      {project?.urls?.figma && (
                        <Link
                          href={project.urls?.figma}
                          className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 line-clamp-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiFigma className="size-4" />
                          <span>Figma</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </MotionWrapper>
        )}
      </div>
    </section>
  );
}
