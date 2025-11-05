"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import {
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type ReactNode,
} from "react";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  as?: keyof typeof motion; // element type, e.g., "div", "span", etc.
  children?: ReactNode;
}

const MotionWrapper = forwardRef(
  (
    { as = "div", children, ...rest }: MotionWrapperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const Component: ElementType = as && motion[as] ? motion[as] : motion.div;

    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    );
  },
);

MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;
