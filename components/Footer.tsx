import { FaLocationArrow } from "react-icons/fa6";
// import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { RxGithubLogo } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";

export const socialMedia = [
  {
    id: 1,
    // img: "/git.svg",
    icon: <RxGithubLogo size={23} name="GitHub"/>,
    link: "https://github.com/Priyanshu255/",
  },
  {
    id: 2,
    // img: "/twit.svg",
    icon: <SiLeetcode size={23} name="LeetCode"/>,
    link: "https://leetcode.com/priyanshu_pandit/",
  },
  {
    id: 3,
    // img: "/link.svg",
    icon: <AiOutlineLinkedin size={23} name="LinkedIn"/>,
    link: "https://www.linkedin.com/in/priyanshupandit",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:priyanshupandit737@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Priyanshu Pandit
        </p>

        <div className="flex items-center md:gap-3 mt-4 md:mt-0 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.icon}
              {/* <img src={info.img} loading="lazy" alt="icons" width={20} height={20} /> */}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
