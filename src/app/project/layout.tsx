import type { ReactNode } from "react";
import Footer from "@/components/footer";

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
