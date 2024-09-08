// "use client"
import Link from "next/link";
import { projects } from "@/data";
import ProjectCard from "@/components/ui/ProjectCard";
// import CustomCursor from "@/components/CustomCursor";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  return (
    <div
      className="py-10 flex flex-col items-center justify-center mx-5"
      id="projects"
    >
      {/* <CustomCursor /> */}
      <div className="w-full px-2 md:px-24 flex justify-between items-center">
        <h1 className="text-xl">
          {/* A small selection of{" "} */}
          <span className="text-white">Recent Projects</span>
        </h1>
        <Link
          href="/#projects"
          className="underline cursor-pointer text-purple"
        >
          Home
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:p-4 gap-4 my-10">
        {projects.map((item, index) => (
          <div
            className="flex items-center justify-center lg:mx-10"
            key={index}
          >
            <ProjectCard item={item} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
