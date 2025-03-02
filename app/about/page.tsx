"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  return (
    <div className="mx-7 md:mx-20 mb-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold lg:text-3xl text-2xl my-5">About</h1>
        <Link href="/" className="underline cursor-pointer text-purple">
          Home
        </Link>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-20">
        <p className="pt-5 text-purple">
        Ah, the classic &quot;About Me&quot; section—where I attempt to summarize my journey from a curious coder to a full-fledged Software Engineer Trainee at DigiValet, all while pretending I didn&apos;t debug the same issue for three hours yesterday. 
        <br />
        <br />
        With a background in Computer Science and Engineering from Medicaps University, I have honed my skills in full-stack development using technologies like Next.js, React, Angular, MERN, TypeScript, and Git/GitHub. My expertise extends beyond writing code; I have a love-hate relationship with CI/CD pipelines, a knack for SEO optimization, and an uncanny ability to make APIs and databases behave (most of the time).
        <br />
        <br />
        Previously, I was an SDE Intern at Zangoh, where I maintained and enhanced multiple company websites, integrated CRM systems, and even dabbled in webhook wizardry. My recent project, SangamVedh, is an event management platform proving that I can, in fact, build something from scratch without breaking the internet.
        <br />
        <br />
        When I&apos;m not busy making web applications (or debugging why they aren&apos;t working), I&apos;m probably learning something new, can be technology, literature or spoken languages, or contemplating whether AI will replace me before I finish this paragraph.
        <br />
        <br />
        Let&apos;s connect—if you enjoy sarcasm and clean code in equal measure.
        </p>
        {/* <div className=" h-full w-full  rounded-full"> */}
        <img
            className="md:h-[400px] h-[250px] shadow-[10px_10px_60px_15px] shadow-[#362b5ea1] rounded-full brightness-75 s border-4 profile"
            src="/profilepic.jpg"
            loading="lazy"
            alt="Profile"
          />
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
