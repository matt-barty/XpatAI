import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const calFont = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  display: "swap",
  preload: true,
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
