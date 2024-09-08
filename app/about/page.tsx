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
          I am a dedicated student at Medicaps University pursuing a Bachelor of
          Technology in Computer Science and Engineering (B.Tech CSE). With a
          natural curiosity and a passion for learning, I thrive on exploring
          new horizons in the world of technology.
          <br />
          <br />
          My coding journey has led me to become proficient in languages such as
          C, C++, Python, and Java. I&apos;ve also honed my skills in web
          development, with expertise in HTML, CSS, JavaScript, ReactJS, and the
          MERN stack.
          <br />
          <br />
          I take pride in my ability to turn ideas into reality, having
          completed numerous web projects that showcase my creativity and
          problem-solving skills. My proficiency with Git and GitHub ensures
          collaborative and efficient development practices.
          <br />
          <br />
          Beyond my current endeavors, I am actively engaged in the exciting
          field of Machine Learning, always eager to expand my knowledge and
          explore its potential applications. I am passionate about leveraging
          technology to make a positive impact on the world and look forward to
          connecting with like-minded professionals and opportunities in the
          tech industry.
        </p>
        {/* <div className=" h-full w-full  rounded-full"> */}
        <img
            className="md:h-[300px] h-[250px] shadow-[10px_10px_60px_15px] shadow-[#362b5ea1] rounded-full brightness-75 s border-4 profile"
            src="/profilepic.webp"
            loading="lazy"
            alt="Profile"
          />
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
