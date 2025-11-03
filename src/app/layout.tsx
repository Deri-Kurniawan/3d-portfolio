import { montserrat, poppins } from "@/constant/font";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Portfolio",
  description: "Deri Kurniawan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
