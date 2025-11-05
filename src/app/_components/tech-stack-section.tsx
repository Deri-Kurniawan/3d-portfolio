"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import MotionWrapper from "@/components/motion-wrapper";
import SectionHeader from "@/components/section-header";
import { CONFIG } from "@/config";

const TechStackSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="dk-safe-x-padding dk-section-distance">
      <SectionHeader
        title="Technology Stack"
        description="I am concerned about security and performance for my clients. That's why I always keep updating and use the best technologies in a product."
        inViewport={inView}
        className="text-center"
        animate
      />
      <div className="flex items-center justify-center mt-12">
        <div className="flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center">
          {CONFIG.techStacks.map((item, index) => (
            <div key={index.toString()} className="relative h-full">
              <MotionWrapper
                className="flex justify-center items-center size-[100px]"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`${item.siteUrl}?utm_source=deri.my.id&utm_medium=campaign&utm_campaign=portfolio`}
                  target="_blank"
                  title={`Figure out about ${item.name}`}
                >
                  <span
                    className={`${item.color} **:size-20 lg:**:size-[100px]`}
                  >
                    {item.icon}
                    <div className="sr-only">{item.name} Technology</div>
                  </span>
                </Link>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
