"use client";
import Link from "next/link";
import InkCursor from "@/components/InkCursor";

const About = () => {
  return (
    <div className="mx-7 md:mx-20 mb-10">
      <InkCursor />
      <div className="flex items-center justify-between my-5 md:my-10">
        <h1 className="font-bold lg:text-3xl text-2xl my-5 text-[#017a9d]">
          About
        </h1>
        <Link href="/" className="underline cursor-pointer text-purple">
          Home
        </Link>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-20">
        <p className="pt-5 text-[#017a9d]">
          Ah, the classic &quot;About Me&quot; section—where I attempt to
          summarize my journey from a curious coder to a full-fledged{" "}
          <span className="text-[#a9c6cc]">Software Engineer at DigiValet</span>
          , all while pretending I didn&apos;t debug the same issue for three
          hours yesterday.
          <br />
          <br />
          With a background in{" "}
          <span className="text-[#a9c6cc]">
            Computer Science and Engineering
          </span>{" "}
          from <span className="text-[#a9c6cc]">Medicaps University</span>, I
          have honed my skills in full-stack development using technologies like{" "}
          <span className="text-[#a9c6cc]">
            Next.js, MERN, MEAN, MySQL, TypeScript, and Git/GitHub
          </span>
          . My expertise extends beyond writing code; I have a love-hate
          relationship with CI/CD pipelines, a knack for{" "}
          <span className="text-[#a9c6cc]">SEO optimization</span>, and an
          uncanny ability to make APIs and databases behave (most of the time).
          <br />
          <br />
          Previously, I was an{" "}
          <span className="text-[#a9c6cc]">SDE Intern at Zangoh</span>, where I
          maintained and enhanced multiple company websites, integrated CRM
          systems, and even dabbled in webhook wizardry. My recent project,
          SangamVedh, is an event management platform proving that I can, in
          fact, build something from scratch without breaking the internet.
          <br />
          <br />
          When I&apos;m not busy making web applications (or debugging why they
          aren&apos;t working), I&apos;m probably learning something new, can be
          technology, philosophy or spoken languages, or contemplating whether
          AI will replace me before I finish this paragraph.
          <br />
          <br />
        </p>
        {/* <div className=" h-full w-full  rounded-full"> */}
        <img
          className="md:h-[400px] h-[250px] shadow-[10px_10px_60px_15px] shadow-[#362b5ea1] rounded-full brightness-75 border-4 mb-10 profile"
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
