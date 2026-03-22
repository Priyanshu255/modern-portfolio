import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
type Item =
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

const ProjectCard = ({ item, index }: { item: Item; index: number }) => {
  return (
    <div className=" px-4 flex flex-col md:flex-row items-start md:gap-10 justify-start w-full rounded-2xl duration-200 shadow-md border border-white/[0.1] md:hover:-translate-y-1 overflow-hidden bg-[#1119285c]">
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
          <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
            {item.title}
          </h1>

          <p
            className="text-[15px]"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            {item.des}
          </p>
          <p
            className="text-[15px] mb-5"
            style={{
              color: "#BEC1DD",
              //   margin: "1vh 0",
            }}
          >
            <b className="font-bold mr-2">Tech Stack:</b>
            {item.tech}
          </p>

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
            target="blanck"
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
    </div>
  );
};

export default ProjectCard;
