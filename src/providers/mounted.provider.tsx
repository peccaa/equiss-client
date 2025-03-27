"use client";

import React from "react";
import { useMounted } from "@/hooks/use-mounted";
import SiteLoader from "@/components/ui/site-loader";

const MountedProvider = ({ children }: { children: React.ReactNode }) => {
  const mounted = useMounted();
  if (!mounted) return <SiteLoader />;
  return children;
};

export default MountedProvider;
