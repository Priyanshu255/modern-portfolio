import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import Chip from "./Chip";
import { RxGithubLogo } from "react-icons/rx";
type Item = {
  title: string;
  des: string;
  img: string;
  tech: string[];
  link: string;
  githubLink?: string;
};

const ProjectCard = ({ item }: { item: Item }) => {
  return (
    <div className="relative px-4 flex flex-col md:flex-row items-start md:gap-10 justify-start w-full rounded-2xl duration-200 shadow-md border border-white/[0.1] md:hover:-translate-y-1 overflow-hidden bg-[#1119285c]">
      <div className="relative flex justify-center overflow-hidden h-[10rem] md:h-[13rem] w-full md:w-[450px] md:flex-shrink-0 my-5 rounded-md">
        {/* {!item?.img && ( */}
        {/* <div
          className=" w-full overflow-hidden lg:rounded-xl"
          style={{ backgroundColor: "#13162D" }}
        >
          <img src="/bg.webp" alt="bgimg" loading="lazy" />
        </div> */}
        {/* )} */}
        {item?.img && (
          <img
            src={item.img}
            alt="cover"
            loading="lazy"
            className="h-full w-full object-cover object-top"
            // className="z-10 absolute top-1 md:rounded-md duration-300"
          />
        )}
      </div>

      <div className="my-5 flex flex-col justify-between h-full">
        <div>
          <h1 className="font-extrabold md:text-2xl text-xl line-clamp-1 text-[#F8FAFC]">
            {item.title}
          </h1>

          <p className="text-md font-normal text-[#D1D7E6] my-[1vh]">
            {item.des}
          </p>
          {/* <p
            className="text-md mb-5 text-white-200"
          >
            <b className="font-bold mr-2">Tech Stack:</b>
            {item.tech}
          </p> */}
          <div className="flex flex-wrap gap-1 pb-4">
            {item.tech.map((item, index) => (
              <Chip text={item} key={index} />
            ))}
          </div>

          {/* <div className="flex items-center justify-between w-full mt-7 mb-3">
            <div className="flex items-center">
              {item.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <img src={icon} alt="icon5" className="p-2" />
                </div>
              ))}
            </div>
          </div> */}
        </div>
        {item.link !== "" ? (
          <a
            target="_blank"
            href={item.link}
            className={`flex items-center cursor-pointer`}
            style={{ pointerEvents: item.link === "" ? "none" : "auto" }}
          >
            <p className="lg:text-lg md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow className="ms-2" color="#CBACF9" />
          </a>
        ) : (
          <p className="lg:text-lg md:text-xs text-sm text-purple">
            Going Live Soon...
          </p>
        )}
        {/* <Link
          href={`project/${index + 1}`}
          className="md:text-xs text-sm text-purple underline"
        >
          More Details
        </Link> */}
      </div>
      {item?.githubLink && (
        <div className=" absolute bottom-4 right-4">
          <a
            href={item.githubLink}
            target="_blank"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <RxGithubLogo size={23} name="GitHub" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
