import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextAuthProvider from "./Providers.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agile  Board",
  description: "Agile Board is a simple kanban board app built with Next.js by Mudasir Khan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
