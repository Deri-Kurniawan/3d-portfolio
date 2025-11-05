import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const FONT_MONTSERRAT = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const FONT_POPPINS = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const FONT_SUARTE = localFont({
  src: "../assets/fonts/suarte/Suarte Free.ttf",
  display: "swap",
});
