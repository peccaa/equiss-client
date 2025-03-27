"use client";

import React, { JSX } from "react";
import { useSidebar } from "@/store/use-sidebar-store";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileSidebar from "@/components/layout/sidebar/mobile-sidebar";
import PopoverSidebar from "@/components/layout/sidebar/popover";

export default function Sidebar() {
  const { sidebarType } = useSidebar();

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  let selectedSidebar;

  if (!isDesktop && sidebarType === "popover") {
    selectedSidebar = <MobileSidebar />;
  } else {
    const sidebarComponents: { [key: string]: JSX.Element } = {
      popover: <PopoverSidebar />,
    };

    selectedSidebar = sidebarComponents[sidebarType];
  }

  return <div>{selectedSidebar}</div>;
}
