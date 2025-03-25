// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import Navbar from "@/components/navbar";
import { montserrat, poppins } from "@/constant/font";
import "./globals.css";

export const metadata = {
  title: "Home - Portfolio",
  description: "Deri Kurniawan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
