import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { CONFIG } from "@/config";
import { FONT_MONTSERRAT, FONT_POPPINS } from "@/constant/font";
import { env } from "@/env";

import "./globals.css";

export const metadata: Metadata = {
  title: "3D theme Portfolio",
  description: `${CONFIG.name.first.concat(
    " ",
    CONFIG.name.last,
  )}'s 3D theme Portfolio`,
  openGraph: {
    title: "3D theme Portfolio",
    description: `${CONFIG.name.first.concat(
      " ",
      CONFIG.name.last,
    )}'s 3D theme Portfolio`,
    url: env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "3D theme Portfolio",
      },
    ],
  },
  twitter: {
    title: "3D theme Portfolio",
    description: `${CONFIG.name.first.concat(
      " ",
      CONFIG.name.last,
    )}'s 3D theme Portfolio`,
    images: [`${env.NEXT_PUBLIC_APP_URL}/og-image.webp`],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FONT_MONTSERRAT.variable} ${FONT_POPPINS.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
