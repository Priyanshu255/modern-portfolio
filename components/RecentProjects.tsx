"use client";
import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";
// import Link from "next/link";
import ProjectCard from "./ui/ProjectCard";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div
      className="py-20 flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:p-4 gap-4 my-10">
        {projects.slice(0, 4).map((item, index) => (
          <div
            className="flex items-center justify-center lg:mx-10"
            key={index}
          >
            <ProjectCard item={item} index={index}/>
          </div>
        ))}
      </div>
      <Link href="/projects">
        <MagicButton
          title="All Projects"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </div>
  );
};

export default RecentProjects;
