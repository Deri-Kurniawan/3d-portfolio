import localFont from "next/font/local";
import { Montserrat, Poppins } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const suarte = localFont({
  src: "../assets/fonts/suarte/Suarte Free.ttf",
  display: "swap",
});
