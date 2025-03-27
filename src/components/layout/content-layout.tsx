"use client";

import { ReactNode, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/store/use-theme-store";
import { useSidebar } from "@/store/use-sidebar-store";
import LayoutWrapper from "@/components/layout/layout-wrapper";
import { cn } from "@/utils/ui-utils";

export default function ContentLayout({ children }: { children: ReactNode }) {
  const { collapsed, sidebarType, setCollapsed, subMenu } = useSidebar();
  const { layout } = useThemeStore();
  const location = usePathname();
  const isMobile = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  if (layout === "semibox") {
    return (
      <>
        <div
          className={cn("content-wrapper transition-all duration-150 ", {
            "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
            "ltr:xl:ml-[272px] rtl:xl:mr-[272px]": !collapsed,
          })}
        >
          <div className={cn("pt-6 pb-8 px-4  page-min-height-semibox ")}>
            <div className="semibox-content-wrapper ">
              <LayoutWrapper
                isMobile={isMobile}
                setOpen={setOpen}
                open={open}
                location={location}
              >
                {children}
              </LayoutWrapper>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (layout === "horizontal") {
    return (
      <>
        <div className={cn("content-wrapper transition-all duration-150 ")}>
          <div
            className={cn("  pt-6 px-6 pb-8  page-min-height-horizontal ", {})}
          >
            <LayoutWrapper
              isMobile={isMobile}
              setOpen={setOpen}
              open={open}
              location={location}
            >
              {children}
            </LayoutWrapper>
          </div>
        </div>
      </>
    );
  }

  if (sidebarType !== "module") {
    return (
      <>
        <div
          className={cn("content-wrapper transition-all duration-150 ", {
            "ltr:xl:ml-[248px] rtl:xl:mr-[248px] ": !collapsed,
            "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
          })}
        >
          <div className={cn("  pt-6 px-6 pb-8  page-min-height ", {})}>
            <LayoutWrapper
              isMobile={isMobile}
              setOpen={setOpen}
              open={open}
              location={location}
            >
              {children}
            </LayoutWrapper>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className={cn("content-wrapper transition-all duration-150 ", {
          "ltr:xl:ml-[300px] rtl:xl:mr-[300px]": !collapsed,
          "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
        })}
      >
        <div className={cn(" layout-padding px-6 pt-6  page-min-height ")}>
          <LayoutWrapper
            isMobile={isMobile}
            setOpen={setOpen}
            open={open}
            location={location}
          >
            {children}
          </LayoutWrapper>
        </div>
      </div>
    </>
  );
}
