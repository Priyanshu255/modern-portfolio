"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-7 inset-x-0 mx-auto px-10 py-3 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(10px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            {/* <span className="block sm:hidden">{navItem.icon}</span> */}
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
    {/* mobile view */}
    <motion.div
        className={cn(
          "flex md:hidden max-w-full mx-4 fixed z-[5000] top-4 inset-x-0 px-7 py-1 rounded-md border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(10px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          // borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <p>PP</p>
        <div className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes size={24} color="white" name="Close"/>
          ) : (
            <FaBars size={24} color="white" name="Menu"/>
          )}
        </div>
      </motion.div>
      {isOpen && (
        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100}}
          className={cn(
            // change rounded-full to rounded-lg
            // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
            // change  pr-2 pl-8 py-2 to px-10 py-5
            "flex flex-col top-0 max-w-full h-[83vh] mx-4 fixed z-40 inset-x-0 px-7 py-10 rounded-md border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-start justify-start space-y-7",
            className
          )}
          style={{
            backdropFilter: "blur(10px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            // borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem: any, idx: number) => (
            <motion.div key={`link=${idx}`} 
            animate={{ y: 150 }}
            transition={{ type: "spring", stiffness: 200 }}
            >
            <Link
              
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className=" text-2xl !cursor-pointer">{navItem.name}</span>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};
