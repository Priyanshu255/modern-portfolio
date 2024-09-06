"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";
// import Link from "next/link";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4 mt-10">
        {projects.map((item) => (
          // <div
          //   className="flex items-center justify-center sm:w-96 w-[80vw] lg:mx-10"
          //   key={item.id}
          // >
            // {/* <div className="relative  z-30"> */}
              <div className=" p-4 flex flex-col items-center justify-center sm:w-96 w-[80vw] lg:mx-10 rounded-2xl duration-300 shadow-md border border-white/[0.1] hover:-translate-y-2 overflow-hidden">
                {/* <div className=" relative h-full"> */}
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[18vh] lg:h-[28vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" />
                    </div>
                    {item?.img && (
                      <img
                        src={item.img}
                        alt="cover"
                        className="z-10 absolute bottom-0 rotate-2 hover:-rotate-0 duration-300"
                      />
                    )}
                  </div>

                  <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
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
                      className="flex justify-center items-center cursor-pointer"
                    >
                      <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  </div>
                {/* </div> */}
              </div>
            // {/* </div> */}
          // </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
