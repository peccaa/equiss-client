"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/ui-utils";

interface TopLoadingBarProps {
  isLoading?: boolean;
  color?: string;
  height?: number;
  className?: string;
}

export function TopLoadingBar({
  isLoading = false,
  color = "#3b82f6",
  height = 3,
  className,
}: TopLoadingBarProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let completeTimeout: NodeJS.Timeout;

    if (isLoading) {
      setVisible(true);
      setProgress(0);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 30) return prev + 5;
          if (prev < 80) return prev + 0.5;
          if (prev < 90) return prev + 0.1;
          return prev;
        });
      }, 100);
    } else if (visible) {
      setProgress(100);

      completeTimeout = setTimeout(() => {
        setVisible(false);
      }, 500);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [isLoading, visible]);

  if (!visible && !isLoading) return null;

  return (
    <div
      className={cn(
        "fixed transition-opacity duration-500",
        !isLoading && progress === 100 ? "opacity-0" : "opacity-100",
        className,
      )}
      style={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999, // Much higher z-index
      }}
    >
      <div
        style={{
          height: `${height}px`,
          width: `${progress}%`,
          backgroundColor: color,
          transition:
            progress < 100 ? "width 100ms ease" : "width 400ms ease-out",
        }}
      />
    </div>
  );
}
