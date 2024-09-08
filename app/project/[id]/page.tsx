import { projects } from "@/data";
import Link from "next/link";
const ProjectPage = ({ params }: { params: { id: number } }) => {
  const data = projects[params.id - 1];
  return (
    <div className="p-5 md:p-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold lg:text-3xl text-2xl my-5">{data.title}</h1>
        <Link href="/#projects" className="underline cursor-pointer text-purple">Home</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
        <div className="relative overflow-hidden h-[21vh] md:h-[47vh] mb-10 mt-5 rounded-md">
          {/* {!item?.img && ( */}
          <div
            className=" w-full overflow-hidden lg:rounded-xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.webp" alt="bgimg" loading="lazy" />
          </div>
          {/* )} */}
          {data?.img && (
            <img
              src={data.img}
              alt="cover"
              loading="lazy"
              className="z-10 absolute top-0 w-full rounded-md -rotate-2 hover:rotate-0 duration-300"
            />
          )}
        </div>
        <div className="">
          <p
            className="lg:text-xl text-start text-base pb-5 md:pt-5"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            {data.des}
          </p>
          <p
            className="lg:text-xl text-base mb-5"
            style={{
              color: "#BEC1DD",
              //   margin: "1vh 0",
            }}
          >
            <span className="text-white">Tech Stack:</span> {data.tech}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
