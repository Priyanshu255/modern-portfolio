import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Chip from "./ui/Chip";

const techStacks = [
  "React",
  "Angular",
  "TypeScript",
  "Next.js",
  "GraphQL",
  "NestJS",
];

const Hero = () => {
  return (
    <div className="pb-20 pt-32" id="home">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* --Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-start md:justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p> */}

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          {/* <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[20px] md:text-5xl lg:text-5xl"
          /> */}

          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m{" "}
            <span className="text-purple inline text-2xl md:text-3xl">
              Priyanshu Pandit
            </span>
            , specializing in{" "}
            <span className="text-purple inline">MERN/MEAN</span> and{" "}
            <span className="text-purple inline">Next.js</span> to deliver
            exceptional digital experiences.
          </p> */}

          <h1 className="text-white text-left text-4xl md:text-6xl font-semibold">
            Priyanshu Pandit
          </h1>
          <h3 className="text-[#C4A5FF] text-center text-sm md:text-lg font-semibold pt-2">
            Software Engineer · Frontend / Full Stack
          </h3>
          <TextGenerateEffect
            words="Software Engineer with nearly 2 years of experience developing production web applications, enterprise dashboards, and interactive interfaces across the frontend and full stack."
            className="text-center font-normal text-base md:text-lg pt-6"
          />

          {/* Techstack chips */}
          <div className="flex flex-wrap justify-center gap-1 pb-32">
            {techStacks.map((item, index) => (
              <Chip text={item} key={index} />
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/resume">
              <MagicButton
                title="View my resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
