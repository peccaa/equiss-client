"use client";

import React from "react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { cn, isLocationMatch } from "@/utils/ui-utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MultiNestedMenu = ({
  subItem,
  subIndex,
  activeMultiMenu,
}: {
  subItem: any;
  subIndex: number;
  activeMultiMenu: number | null;
}) => {
  const pathname = usePathname();

  return (
    <Collapsible open={activeMultiMenu === subIndex}>
      <CollapsibleContent className="CollapsibleContent">
        <ul className="space-y-3 pl-1">
          {subItem?.multi_menu?.map((item: any, i: number) => (
            <li className=" first:pt-3" key={i}>
              <Link href={item.href}>
                <span
                  className={cn(
                    "text-sm flex gap-3  items-center transition-all duration-150 capitalize hover:text-primary",
                    {
                      "text-primary": isLocationMatch(item.href, pathname),
                      "text-default-600": !isLocationMatch(item.href, pathname),
                    },
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-2 w-2  border border-default-500 rounded-full",
                      {
                        "bg-primary ring-primary/30   ring-[4px]  border-primary":
                          isLocationMatch(item.href, pathname),
                      },
                    )}
                  ></span>
                  <span className="flex-1">{item.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MultiNestedMenu;
