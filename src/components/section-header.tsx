import type React from "react";
import type { FC } from "react";
import MotionWrapper from "./motion-wrapper";

type SectionHeaderProps = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  inViewport?: boolean;
  className?: string;
  animate?: boolean;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  title = "Section Title",
  description = "Section description goes here.",
  inViewport = true,
  className = "",
  animate = undefined,
}) => {
  return (
    <div className={className}>
      <MotionWrapper
        as="h2"
        initial={animate ? { y: 100, opacity: 0 } : {}}
        animate={animate && inViewport ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="dk-section-title"
      >
        {title}
      </MotionWrapper>
      <MotionWrapper
        as="p"
        initial={animate ? { y: 100, opacity: 0 } : {}}
        animate={animate && inViewport ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="dk-section-description max-w-[730px] mx-auto"
      >
        {description}
      </MotionWrapper>
    </div>
  );
};

export default SectionHeader;
