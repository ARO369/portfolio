"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { TechStackButton } from "./TechStackButton";
import reactLogo from "../../public/assets/react.png";
import javascriptLogo from "../../public/assets/javascript.png";
import tailwindLogo from "../../public/assets/tailwind.png";
import nodejsLogo from "../../public/assets/nodejs.png";
import expressLogo from "../../public/assets/express.png";
import restapiLogo from "../../public/assets/restapi.png";
import mongodbLogo from "../../public/assets/mongodb.png";
import mongooseLogo from "../../public/assets/mongoose.png";
import nextjsLogo from "../../public/assets/nextjs.png";
import typescriptLogo from "../../public/assets/typescript.png";
import materialuiLogo from "../../public/assets/materialui.png";
import cppLogo from "../../public/assets/cpp.png";
import htmlLogo from "../../public/assets/html.png";
import cssLogo from "../../public/assets/css.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import art from "../../public/assets/art.webp";
import art3 from "../../public/assets/art-3.webp";
import art4 from "../../public/assets/art-4.webp";
import art6 from "../../public/assets/art-6.webp";
import art7 from "../../public/assets/art-7.webp";
import blog1 from "../../public/assets/blog1.webp";
import blog2 from "../../public/assets/blog2.webp";
import Blog3 from "../../public/assets/Blog3.webp";
import { BlogsCards } from "./BlogsCards";
import { ServiceCards } from "./ServiceCards";

interface LazyImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
}

const LazyImage = ({ src, alt, width }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref}>
      {inView && <Image src={src} alt={alt} width={width} loading="lazy" />}
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-28">
        <LazyImage src={art4} alt="about" width={1000} />
      </div>

      <div className="relative min-h-screen w-full flex flex-col justify-center items-center">
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
        <div
          className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
          id="about"
        >
          🌌 About 🦄
        </div>
        <br />
        <br />
        <div className="w-[90%] sm:w-[80%] md:w-[80%] xl:w-[60%] my-14 text-2xl z-10">
          Hello, folks! I'm a{" "}
          <span className="text-green-300">Full-Stack Web Developer</span> with
          a passion for the MERN stack. JavaScript is at the heart of my work,
          and I've spent the last three years diving deep into web development,
          creating projects I'm really proud of. Freelancing has also been a big
          part of my journey, giving me the chance to work with various clients
          and learn from each experience.
          <br />
          <br />
          <br />
          <div className="flex w-full flex-wrap mt-8">
            <TechStackButton title="React.Js" logo={reactLogo} />
            <TechStackButton title="JavaScript" logo={javascriptLogo} />
            <TechStackButton title="TailwindCSS" logo={tailwindLogo} />
            <TechStackButton title="Node.Js" logo={nodejsLogo} />
            <TechStackButton title="Express.js" logo={expressLogo} />
            <TechStackButton title="REST APIs" logo={restapiLogo} />
            <TechStackButton title="MongoDB" logo={mongodbLogo} />
            <TechStackButton title="Mongoose" logo={mongooseLogo} />
            <TechStackButton title="Next.js" logo={nextjsLogo} />
            <TechStackButton title="TypeScript" logo={typescriptLogo} />
            <TechStackButton title="Material-UI" logo={materialuiLogo} />
            <TechStackButton title="C++" logo={cppLogo} />
            <TechStackButton title="HTML5" logo={htmlLogo} />
            <TechStackButton title="CSS3" logo={cssLogo} />
          </div>
          <br />
          <br />
          <br />
          <div>
            <span className="sm:text-4xl text-[30px] font-bold text-green-300">
              ✨ Aaradhya D. Pathak
            </span>
            <br />
            <br /> <span className="font-bold text-purple-300">
              Currently:
            </span>{" "}
            Final Year Engineering Student <br />
            <br />
            <span className="font-bold text-purple-300">Branch:</span> Computer
            Science Engineering <br />
            <br />
            <span className="font-bold text-purple-300">College:</span> Prof.
            Ram Meghe Institute of Technology and Research
            <br />
            <br />
            <span className="font-bold text-purple-300">
              Graduation Year:
            </span>{" "}
            2025
            <br />
            <br />
            <span className="font-bold text-purple-300">Address:</span>{" "}
            Amravati, Maharashtra, India
            <br />
            <br />
            <br />
            <br />
            <div
              className="w-full flex justify-center items-center my-28"
              id="about"
            >
              <LazyImage src={art6} alt="about" width={1000} />
            </div>
            <span className="font-bold text-green-300">
              🎗️ As a student of computer science, I specialize in:
            </span>
            <br />
            <br />
            -Full Stack Web Development
            <br /> -Data Structure & Algorithms <br />
            -Object Oriented Programming
            <br /> -Database Management
            <br />
            <br /> I completed an{" "}
            <Link
              href="https://arocrmsoftware.netlify.app/"
              className="text-green-300 underline"
            >
              Internship
            </Link>{" "}
            at Decqle Design Studio as a Frontend Developer, where I worked with
            React.js, Tailwind CSS, and ReactFlow. During this internship, I
            learned various skills such as communication and teamwork.
            <br /> <br />I also completed a{" "}
            <Link
              href="https://aroprojects.000webhostapp.com/gymwebsite/"
              className="text-green-300 underline"
            >
              Freelance
            </Link>{" "}
            project for a gym, creating a landing page website using HTML and
            CSS. The website is fully mobile responsive and includes sections
            for diet plans and gym schedules.
          </div>
          <br />
          <br />
          <br />
          🙌 So, let's connect and share a few laughs while we navigate the tech
          world together!
          <br />
          <br />
          ➡️ I am looking for opportunities in the fields of web development and
          software development.
          <br />
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art7} alt="about" width={1000} />
      </div>

      {/* Blogs */}
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
        id="blogs"
      >
        🌌 Blogs 🦄
      </div>
      <div className="relative w-full min-h-full flex flex-wrap justify-center mb-20">
        <BlogsCards
          title="Starting Out on My Full Stack Development Journey 🚀"
          description="In this Blog I cover how I started Full Stack Development Journey"
          thumbnail={blog1}
          url="https://medium.com/@aaradhyablogs/starting-out-on-my-full-stack-development-journey-c42af9731779"
        />
        <BlogsCards
          title="Comprehensive Guide to Responsive Websites — Aaradhya Pathak"
          description="I'm sharing some of the best practices for creating modern, responsive websites."
          thumbnail={blog2}
          url="https://medium.com/@aaradhyablogs/comprehensive-guide-to-responsive-websites-aaradhya-pathak-1a78dabc9730"
        />
        <BlogsCards
          title="Precision in Code: A Comprehensive Guide to Naming Conventions"
          description="I am sharing some naming conventions that are used by big tech companies."
          thumbnail={Blog3}
          url="https://medium.com/@aaradhyablogs/precision-in-code-a-comprehensive-guide-to-naming-conventions-f6de29984e67"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art3} alt="about" width={1000} />
      </div>
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
        id="services"
      >
        🌌 Services 🦄
      </div>
      <div className="relative flex justify-center w-full my-8">
        <div className="flex flex-wrap justify-around items-center xl:w-[70%] sm:w-[90%]">
          <ServiceCards
            title="Frontend Development"
            description="Creating stellar user interfaces and web experiences using the latest technologies."
            emoji="💻"
          />
          <ServiceCards
            title="Backend Development"
            description="Developing robust, scalable server-side logic for a wide range of web applications."
            emoji="📡"
          />
          <ServiceCards
            title="Responsive Design"
            description="Designing websites that look and perform equally well on all devices and screen sizes."
            emoji="📲"
          />
        </div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art} alt="about" width={1000} />
      </div>
    </>
  );
};

export default AboutPage;
