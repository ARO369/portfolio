"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image, { StaticImageData } from "next/image";

interface tech {
  title: string;
  logo: StaticImageData;
}

export function TechStackButton({ title, logo }: tech) {
  return (
    <div className="m-4 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-3"
      >
        <Image src={logo} alt={title} width={40} />
        <span>{title}</span>
      </HoverBorderGradient>
    </div>
  );
}
