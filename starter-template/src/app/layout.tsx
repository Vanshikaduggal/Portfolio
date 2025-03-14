import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Importing fonts
const poppins = Poppins({ subsets: ['latin'], variable: '--font-sans', weight: ["400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.variable, playfair.variable, "bg-gray-900 text-white antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
