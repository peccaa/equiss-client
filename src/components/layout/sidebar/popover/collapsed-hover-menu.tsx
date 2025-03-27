"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { cn, isLocationMatch } from "@/utils/ui-utils";
import MultiMenuHandler from "@/components/layout/sidebar/common/multi-menu-handler";
import MultiNestedMenu from "@/components/layout/sidebar/common/multi-nested-menu";
import SubMenuItem from "@/components/layout/sidebar/common/sub-menu-item";

type Props = {
  item: any;
  menuTitle?: string;
};

export default function CollapsedHoverMenu({ item, menuTitle }: Props) {
  const pathname = usePathname();

  const [activeMultiMenu, setMultiMenu] = useState<number | null>(null);

  const toggleMultiMenu = (subIndex: number) => {
    if (activeMultiMenu === subIndex) {
      setMultiMenu(null);
    } else {
      setMultiMenu(subIndex);
    }
  };

  return (
    <>
      {item?.child ? (
        <ul className="space-y-2 relative before:absolute before:left-4 before:top-0  before:h-[calc(100%-5px)]  before:w-[2px] before:bg-primary/20 before:rounded">
          <li className=" text-primary-foreground bg-primary font-medium px-3 py-3 rounded  relative flex items-center gap-3 ">
            <item.icon className="h-5 w-5 " />
            {menuTitle}
          </li>
          {item.child?.map((subItem: any, j: number) => (
            <li
              className={cn(
                "relative block ml-10 first:pt-4  before:absolute first:before:top-4 before: top-0 before:-left-6  before:w-[2px]  before:h-0 before:transition-all before:duration-200",
                {
                  "before:bg-primary first:before:h-[calc(100%-16px)]  before:h-full":
                    isLocationMatch(subItem.href, pathname),
                },
              )}
              key={`sub_menu_${j}`}
            >
              {subItem?.multi_menu ? (
                <div>
                  <MultiMenuHandler
                    subItem={subItem}
                    subIndex={j}
                    activeMultiMenu={activeMultiMenu}
                    toggleMultiMenu={toggleMultiMenu}
                    className="before:-left-6"
                  />
                  <div className="pl-3">
                    <MultiNestedMenu
                      subItem={subItem}
                      subIndex={j}
                      activeMultiMenu={activeMultiMenu}
                    />
                  </div>
                </div>
              ) : (
                <SubMenuItem subItem={subItem} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div>no menu</div>
      )}
    </>
  );
}
