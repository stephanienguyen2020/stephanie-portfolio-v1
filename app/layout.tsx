import type React from "react";
import { ThemeProvider } from "@/app/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CursorProvider } from "./components/cursor-context";
import MouseCursor from "./components/mouse-cursor";
import NavBar from "./components/nav-bar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephanie Ng - Full Stack Developer",
  description: "Full stack developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "min-h-screen font-sans antialiased px-4 md:px-8 lg:px-12",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CursorProvider>
            <MouseCursor />
            <NavBar />
            <main className="mx-auto max-w-7xl">{children}</main>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
