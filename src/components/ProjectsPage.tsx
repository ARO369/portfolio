"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import chat_thumbnail from "../../public/assets/chat_thumbnail.webp";
import crm_thumbnail from "../../public/assets/crm_thumbnail.webp";
import crmlanding_thumbnail from "../../public/assets/crmlanding_thumbnail.webp";
import financegpt_thumbnail from "../../public/assets/financegpt_thumbnail.webp";
import gdsc_thumbnail from "../../public/assets/gdsc_thumbnail.webp";
import gym_thumbnail from "../../public/assets/gym_thumbnail.webp";
import movieHub_thmbnail from "../../public/assets/movieHub_thmbnail.webp";
import portfolio_thumbnail from "../../public/assets/portfolio_thumbnail.webp";
import technews_thumbnail from "../../public/assets/technews_thumbnail.webp";
import youtube_thumbnail from "../../public/assets/youtube_thumbnail.webp";
import gpa_thumbnail from "../../public/assets/gpa_thumbnail.webp";

const projects = [
  {
    title: "Portfolio Website ✨",
    thumbnail: portfolio_thumbnail,
    techStack: ["Next.js", "TailwindCSS", "TypeScript"],
    description:
      "A personal portfolio showcasing my projects and skills, providing an interactive platform for visitors to learn about my experience and expertise.",
    github: "https://github.com/ARO369/portfolio",
    live: "https://aaradhyapathak.vercel.app/",
  },
  {
    title: "Internship: CRM Webapp 🎯",
    thumbnail: crm_thumbnail,
    techStack: ["React.js", "TailwindCSS", "ReactFlow"],
    description:
      "Developed a CRM web application interface to streamline project management, enhancing team collaboration through intuitive data visualization and task management.",
    github: "",
    live: "https://arocrmsoftware.netlify.app/",
  },
  {
    title: "Internship: CRM Landing Page ⚓",
    thumbnail: crmlanding_thumbnail,
    techStack: ["React.js", "TailwindCSS"],
    description:
      "Created a responsive landing page to showcase a CRM software solution, providing potential clients with an introduction to its features and benefits.",
    github: "",
    live: "https://arocrmlandingwebsite.netlify.app/",
  },
  {
    title: "Tech News Platform 📺",
    thumbnail: technews_thumbnail,
    techStack: ["React.js", "API"],
    description:
      "Developed a dynamic tech news platform to deliver real-time updates and engaging content, catering to tech enthusiasts with curated news articles and insightful analysis.",
    github: "https://github.com/ARO369/TechNews-website",
    live: "https://arotechnews.netlify.app/",
  },
  {
    title: "YouTube UI Clone 💻",
    thumbnail: youtube_thumbnail,
    techStack: ["React.js", "Material-UI", "API"],
    description:
      "Built a replica of the YouTube user interface to provide users with a familiar browsing experience, featuring seamless video playback and comprehensive search functionality.",
    github: "https://github.com/ARO369/YouTube-Clone",
    live: "https://aroyoutubeclone.netlify.app",
  },
  {
    title: "Chat App (Socket.io) 💬",
    thumbnail: chat_thumbnail,
    techStack: ["Socket.io", "Node.js", "MySQL"],
    description:
      "Developed a real-time chat application for interactive communication, facilitating instant messaging and group chats using Socket.io and Node.js with MySQL for persistent data storage.",
    github: "https://github.com/ARO369/nodejs-chat-app",
    live: "",
  },
  {
    title: "FinanceGPT 💸",
    thumbnail: financegpt_thumbnail,
    techStack: ["React.js", "TailwindCSS", "API"],
    description:
      "Get real-time stock updates, trends, and market insights at your fingertips! FinanceGPT's Stock News feature, powered by a reliable news API, keeps you informed.",
    github: "https://github.com/ARO369/FinanceGPT",
    live: "https://financegpt.netlify.app/",
  },
  {
    title: "GDSC Website 🚀",
    thumbnail: gdsc_thumbnail,
    techStack: ["React.js"],
    description:
      "Created the official website for Google Developer Student Clubs to foster a community of learning and collaboration, providing resources, event updates, and membership information.",
    github: "https://github.com/ARO369/GDSC-AaradhyaPathak",
    live: "https://arogdsc.netlify.app/",
  },
  {
    title: "MoviesHub 🍿",
    thumbnail: movieHub_thmbnail,
    techStack: ["React.js", "Material-UI", "API"],
    description:
      "Developed MoviesHub, a platform for browsing movies and discovering new releases, offering users a comprehensive database and personalized recommendations.",
    github: "https://github.com/ARO369/Movies-Hub",
    live: "https://aromovieshub.netlify.app/",
  },
  {
    title: "Freelance: Gym Website 🏋️",
    thumbnail: gym_thumbnail,
    techStack: ["HTML", "CSS"],
    description:
      "Designed and developed a responsive gym website for a freelance client, providing information about services, facilities, and membership options to attract potential customers.",
    github: "",
    live: "https://aroprojects.000webhostapp.com/gymwebsite/",
  },
  {
    title: "GPA Calculator 🧮",
    thumbnail: gpa_thumbnail,
    techStack: ["HTML", "CSS"],
    description:
      "GPA Calculator is my first project. It uses by 3000+ engineering students. It contains all 8 engineering semesters calculator according to credit-grade system.",
    github: "",
    live: "https://aroprojects.000webhostapp.com/gpacalculator/",
  },
];

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
