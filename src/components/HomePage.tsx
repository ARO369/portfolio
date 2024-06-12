import React from "react";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import "@/styles/Home.module.css";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";

const HomePage = () => {
  return (
    <section
      id="home"
      className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-center"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4">
        <div className="mb-6">
          <span className="mr-4 bg-black text-white border border-[#413d3d] hover:bg-[#7B93FE] text-[14px] hover:text-black hover:duration-300 ease-in transition-all p-1 px-2 rounded-lg">
            Next.js
          </span>
          <span className="mr-4 bg-black text-white border border-[#413d3d] hover:bg-[#7B93FE] text-[14px] hover:text-black hover:duration-300 ease-in transition-all p-1 px-2 rounded-lg">
            TailwindCSS
          </span>
          <span className="bg-black text-white border border-[#413d3d] hover:bg-[#7B93FE] text-[14px] hover:text-black hover:duration-300 ease-in transition-all p-1 px-2 rounded-lg">
            Typescript
          </span>
        </div>
        <div>
          <h1>
            <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
              Hello, I&apos;m
              <br />
            </span>
            <span className="clash-grotesk text-[#7B93FE] text-6xl 2xl:text-8xl">
              Aaradhya.
            </span>
          </h1>
          <p className="mt-4 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl">
            A Full Stack Web Developer | MERN Stack Specialist | Learning Web3 &
            Solana.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="#contact"
            className="bg-[#7B93FE] text-black py-3 px-6 text-[16px] mr-2 rounded-lg font-bold"
          >
            Get in touch
          </Link>
          <Link
            href="#about"
            className="bg-black border border-[#413d3d] py-3 px-6 text-[16px] mr-2 rounded-lg font-bold"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed="-.01"
        className="mt-14 xl:mt-0 canvas-container border border-[#413d3d] rounded-3xl h-[515px] xl:w-[690px] xl:min-w-[690px] overflow-hidden"
      >
        <Suspense fallback={<span>Loading...</span>}>
          <Spline scene="/assets/scene.splinecode" />
        </Suspense>
      </div>
    </section>
  );
};

export default HomePage;
