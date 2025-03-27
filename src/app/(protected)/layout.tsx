import { ReactNode } from "react";
import ContentLayout from "@/components/layout/content-layout";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <ContentLayout>{children}</ContentLayout>
    </>
  );
}
