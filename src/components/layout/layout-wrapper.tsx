import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import MobileSidebar from "@/components/layout/sidebar/mobile-sidebar";

type LayoutWrapperProps = {
  children: ReactNode;
  isMobile?: boolean;
  setOpen?: any;
  open?: boolean;
  location?: any;
};

export default function LayoutWrapper({
  children,
  isMobile,
  setOpen,
  open,
  location,
}: LayoutWrapperProps) {
  return (
    <>
      <motion.div
        key={location}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 50,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
          pageExit: {
            opacity: 0,
            y: -50,
          },
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <main>{children}</main>
      </motion.div>
      <MobileSidebar className="left-[300px]" />
    </>
  );
}
