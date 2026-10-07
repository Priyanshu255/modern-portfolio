import { Button } from "./ui/MovingBorders";

const About = () => {
  return (
    <div className="py-20 w-full" id="about">
      <h1 className="heading">About</h1>

      <div className="w-full mt-12">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex p-3 py-6 md:p-5 lg:p-10 flex-col-reverse md:flex-row justify-between items-center md:gap-20">
            <p className="pt-5 text-white text-base text-left">
              <span className="font-black">
                I enjoy building things that make technology feel effortless.
              </span>
              <br />
              <br />
              I&rsquo;m Priyanshu, a{" "}
              <span className="font-black">
                Software Engineer with nearly 2 years of experience
              </span>{" "}
              working across frontend and full-stack development.
              <br />
              <br />
              From developing{" "}
              <span className="font-black">
                enterprise dashboards with Angular
              </span>{" "}
              to building{" "}
              <span className="font-black">
                interactive applications with React
              </span>
              , I enjoy turning{" "}
              <span className="font-black">
                complex requirements into intuitive, maintainable interfaces
              </span>
              .
              <br />
              <br />
              My experience also extends to{" "}
              <span className="font-black">GraphQL integrations</span>,{" "}
              <span className="font-black">real-time communication</span>, and{" "}
              <span className="font-black">production deployments</span>, giving
              me a broader understanding of how software works beyond the UI.
              <br />
              <br />
              Outside work, I&rsquo;m drawn to{" "}
              <span className="font-black">music, history, art</span>, and
              exploring new ideas. I believe good engineering comes from{" "}
              <span className="font-black">
                curiosity, thoughtful problem-solving, and a willingness to keep
                learning
              </span>
              .
              <br />
              <br />
            </p>
            <img
              className="md:h-[350px] h-[250px] shadow-[10px_10px_60px_15px] shadow-[#362b5ea1] rounded-full border-8 border-purple/20 mb-10 profile"
              src="/profilepic.jpeg"
              loading="lazy"
              alt="Profile"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default About;
