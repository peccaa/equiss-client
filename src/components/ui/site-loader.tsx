"use client";

import React from "react";
import { Loader2 } from "lucide-react";

const SiteLoader = () => {
  return (
    <div className=" h-screen flex items-center justify-center flex-col space-y-2">
      <span className=" inline-flex gap-1">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </span>
    </div>
  );
};

export default SiteLoader;
