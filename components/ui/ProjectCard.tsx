import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
type item =
  | {
      // id: number;
      title: string;
      des: string;
      tech: string;
    //   iconLists: string[];
      link: string;
      img?: undefined;
    }
  | {
      // id: number;
      title: string;
      des: string;
      img: string;
      tech: string;
    //   iconLists: string[];
      link: string;
    };

const ProjectCard = ({ item, index }: { item: item, index: number }) => {
  return (
    <div className=" px-4 flex flex-col items-start justify-center lg:mx-10 rounded-2xl duration-200 shadow-md border border-white/[0.1] md:hover:-translate-y-2 overflow-hidden">
      <div className="relative flex justify-center overflow-hidden h-[18vh] lg:h-[30vh] mb-10 mt-5 md:rounded-md">
        {/* {!item?.img && ( */}
          <div
            className=" w-full overflow-hidden lg:rounded-xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.webp" alt="bgimg" loading="lazy" />
          </div>
        {/* )} */}
        {item?.img && (
          <img
            src={item.img}
            alt="cover"
            loading="lazy"
            className="z-10 absolute top-1 w-[98%] md:rounded-md rotate-2 hover:rotate-0 duration-300"
          />
        )}
      </div>

      <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
        {item.title}
      </h1>

      <p
        className="lg:text-sm text-xs line-clamp-2"
        style={{
          color: "#BEC1DD",
          margin: "1vh 0",
        }}
      >
        {item.des}
      </p>
      <p
        className="lg:text-sm text-xs line-clamp-1 mb-5"
        style={{
          color: "#BEC1DD",
        //   margin: "1vh 0",
        }}
      >
        <b className="underline">Tech Stack:</b> {item.tech}
      </p>

      <div className="flex items-center justify-between w-full mt-7 mb-3">
        {/* <div className="flex items-center">
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
      </div> */}

        <a
          target="blanck"
          href={item.link}
          className="flex items-center cursor-pointer"
        >
          <p className="lg:text-lg md:text-xs text-sm text-purple">
            Check Live Site
          </p>
          <FaLocationArrow className="ms-2" color="#CBACF9" />
        </a>
        <Link 
          href={`project/${index+1}`}
          className="md:text-xs text-sm text-purple underline"
        >More Details</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
