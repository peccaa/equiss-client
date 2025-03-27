import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSidebar } from "@/store/use-sidebar-store";
import { useThemeStore } from "@/store/use-theme-store";
import { SiteLogo } from "@/components/svg";
import Link from "next/link";
import MenuBar from "@/components/layout/header/menu-bar";

export default function VerticalHeader() {
  const { collapsed, setCollapsed, subMenu, sidebarType } = useSidebar();
  const { layout } = useThemeStore();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isMobile = useMediaQuery("(min-width: 768px)");
  let LogoContent = null;
  let menuBarContent = null;

  const MainLogo = (
    <Link href="/" className=" text-primary ">
      <SiteLogo className="h-7 w-7" />
    </Link>
  );

  if (layout === "semibox" && !isDesktop) {
    LogoContent = MainLogo;
  }

  if (
    layout === "vertical" &&
    !isDesktop &&
    isMobile &&
    sidebarType === "module"
  ) {
    LogoContent = MainLogo;
  }

  if (layout === "vertical" && !isDesktop && sidebarType !== "module") {
    LogoContent = MainLogo;
  }

  if (isDesktop && sidebarType !== "module") {
    menuBarContent = (
      <MenuBar collapsed={collapsed} setCollapsed={setCollapsed} />
    );
  }

  if (sidebarType === "module") {
    menuBarContent = (
      <MenuBar collapsed={collapsed} setCollapsed={setCollapsed} />
    );
  }

  if (sidebarType === "classic") {
    menuBarContent = null;
  }

  if (subMenu && isDesktop) {
    menuBarContent = null;
  }

  return (
    <>
      <div className="flex items-center md:gap-6 gap-3">
        {LogoContent}
        {menuBarContent}
      </div>
    </>
  );
}
