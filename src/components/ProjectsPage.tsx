"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import projects from "../data/projects";

const ProjectsPage: React.FC = () => {
  return (
    <div className="relative" id="projects">
      <div className="text-center pt-32 dark:text-white text-neutral-800 text-[2.5rem] font-bold">
        🌌 Projects 🦄
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      <div className="flex flex-wrap justify-center items-center mt-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            thumbnail={project.thumbnail}
            techStack={project.techStack}
            description={project.description}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
