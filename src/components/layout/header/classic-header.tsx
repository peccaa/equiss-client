import React from "react";
import { cn } from "@/utils/ui-utils";

export default function ClassicHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <header className={cn("z-50", className)}>{children}</header>;
}
