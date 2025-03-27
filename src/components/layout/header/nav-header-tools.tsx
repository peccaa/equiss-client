import React from "react";
import FullScreen from "@/components/layout/header/full-screen";
import ThemeModeButton from "@/components/layout/header/theme-mode-button";
import MobileMenuHandler from "@/components/layout/header/mobile-menu-handler";
import ProfileInfo from "@/components/layout/header/profile-info";

type NavHeaderTools = {
  isDesktop: boolean;
  isMobile: boolean;
  sidebarType: string;
};

export default function NavHeaderTools({
  isDesktop,
  isMobile,
  sidebarType,
}: NavHeaderTools) {
  return (
    <div className="nav-tools flex items-center gap-2">
      {isDesktop && <FullScreen />}
      <ThemeModeButton />
      <div className="ltr:pl-2 rtl:pr-2">
        <ProfileInfo />
      </div>
      {!isDesktop && sidebarType !== "module" && <MobileMenuHandler />}
    </div>
  );
}
