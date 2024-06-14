"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  thumbnail: StaticImageData;
  techStack: string[];
  description: string;
  github: string;
  live: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  thumbnail,
  techStack,
  description,
  github,
  live,
}) => {
  return (
    <CardContainer className="inter-var mx-4">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem translateZ="100" className="w-full">
          <Image
            src={thumbnail}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem className="mb-6 flex flex-wrap" translateZ="90">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="mx-1 bg-black text-white border border-[#413d3d] hover:bg-[#7B93FE] text-[14px] hover:text-black hover:duration-300 ease-in transition-all p-1 px-2 rounded-lg cursor-default mt-2"
            >
              {tech}
            </span>
          ))}
        </CardItem>

        <CardItem
          as="p"
          translateZ="90"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          {github && (
            <CardItem
              translateZ={20}
              as={Link}
              href={github}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              GitHub →
            </CardItem>
          )}
          {live && (
            <CardItem
              translateZ={20}
              as={Link}
              href={live}
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};
