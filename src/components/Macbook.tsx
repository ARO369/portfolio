"use client"
import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export function Macbook() {
  return (
    <div className="relative overflow-hidden dark:bg-black w-full h-[200vh]">
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      <MacbookScroll
        src={`/linear.webp`}
        showGradient={false}
        title={
          <span>
            Explore the Creative and Technical Projects <br /> I've Crafted.
          </span>
        }
      />
    </div>
  );
}
