"use client";

import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/utils/ui-utils";
import { useThemeStore } from "@/store/use-theme-store";
import MountedProvider from "@/providers/mounted.provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({ children }: { children: ReactNode }) {
  const { colorTheme, themeMode, radius } = useThemeStore();

  return (
    <body
      className={cn("equiss-app", inter.className, "theme-" + colorTheme)}
      style={
        {
          "--radius": `${radius}rem`,
        } as React.CSSProperties
      }
    >
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme={themeMode} // light or dark
      >
        <MountedProvider>
          <QueryProvider>
            <div className={cn("h-full")}>
              <div dir="ltr">{children}</div>
            </div>
          </QueryProvider>
        </MountedProvider>
        <Toaster position="bottom-right" />
      </ThemeProvider>
    </body>
  );
}
