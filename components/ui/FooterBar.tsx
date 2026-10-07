import { RxGithubLogo } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";

export const socialMedia = [
  {
    id: 1,
    icon: <RxGithubLogo size={23} name="GitHub" />,
    link: "https://github.com/Priyanshu255/",
  },
  {
    id: 2,
    icon: <SiLeetcode size={23} name="LeetCode" />,
    link: "https://leetcode.com/priyanshu_pandit/",
  },
  {
    id: 3,
    icon: <AiOutlineLinkedin size={23} name="LinkedIn" />,
    link: "https://www.linkedin.com/in/priyanshupandit",
  },
];

function FooterBar() {
  return (
    <div className="flex w-full my-16 md:flex-row flex-col justify-between items-center">
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2026 Priyanshu Pandit
      </p>

      <div className="flex items-center md:gap-3 mt-4 md:mt-0 gap-6">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            {info.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterBar;
