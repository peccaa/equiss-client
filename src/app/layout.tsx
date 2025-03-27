import "@/assets/styles/globals.scss";
import "@/assets/styles/theme.scss";
import { ReactNode } from "react";
import type { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";

export const metadata: Metadata = {
  title: "Equiss",
  description: "Equiss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <MainLayout>{children}</MainLayout>
    </html>
  );
}
