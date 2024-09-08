export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    // description: "I am currently pursuing a Bachelor of Technology in Computer Science and Engineering (B.Tech CSE) at Medicaps University. With a strong passion for learning and problem-solving, I have become proficient in languages such as C, C++, Python, and Java. My expertise extends to web development, particularly in HTML, CSS, JavaScript, ReactJS, and the MERN stack, where I enjoy bringing ideas to life through engaging and efficient web projects. In addition to web development, I am actively exploring the world of Machine Learning and its potential applications. I take pride in applying my skills to solve real-world challenges, and my familiarity with Git and GitHub ensures smooth collaboration in development projects. I look forward to connecting with professionals and opportunities that allow me to leverage technology for meaningful impact.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "I'm very flexible with time zone communications",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Website for Startup",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-80 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  // {
  //   id: 1,
  //   title: "SangamVedh: Event Management",
  //   des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
  //   tech: "NextJS, MongoDB, TailwindCSS",
  //   // img: "/projects/theelite.webp",
  //   // iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
  //   link: "https://sangamvedh.vercel.app",
  // },
  {
    // id: 2,
    title: "The Elite International",
    des: "Developed a full-stack application for a startup company enabling users to make payments and gain access to a Telegram group for forex market insights.",
    tech: "MERN, TailwindCSS, RazorPay, Hostinger(VPS:Ubuntu), formik/yup",
    // img: "/p2.sg",
    img: "/projects/theelite.webp",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://theeliteinternational.com/",
  },
  {
    // id: 3,
    title: "Gym Exercise Recommendation",
    des: "A website that can suggest gym exercises for any body part. A user can search exercises for a target muscle and can get YouTube video suggestions and exercises that target same muscle or uses same equipment.",
    tech: "ReactJS, MaterialUI, TailwindCSS, RapidAPI",
    img: "/projects/gymApp.webp",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://priyanshu255.github.io/Gym-App/",
  },
  {
    // id: 4,
    title: "React Admin Dashboard",
    des: "A website that has a fully functional dashboard with different charts, tables, form and calendar. Also have light-dark theme implemented using MaterialUI.",
    tech: "ReactJS, MaterialUI, formik, yup, react routing, react-icons, Nivo Charts, FullCalender",
    img: "/projects/reactAdmin.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/React-Admin-Dashboard/",
  },
  {
    // id: 5,
    title: "Animations",
    des: "This website includes different animations. Showcasing my animation skills without using any library",
    tech: "HTML, CSS, JavaScript",
    img: "/projects/animation.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/Animations/",
  },
  {
    title: "BharatEduColab",
    des: "Developed a full-stack platform with 4 team members for underprivileged students to upload projects, receive mentorship, secure job opportunities, and find investors.",
    tech: "MERN, TailwindCSS",
    link: "https://github.com/Priyanshu255/BharatEduCollab",
  },
  {
    title: "Hospital Management System",
    des: "This project uses connector to connect Python and MySQL. And can-do operations like adding new data, updating, deleting and searching the data. It can also generate the receipt (with amount) for the checkout.",
    tech: "Python, SQL, MySQL, VS Code",
    link: "https://github.com/Priyanshu255/Hotel-Management-System",
  },
  {
    // id: 6,
    title: "Calculator",
    des: "A website that has a fully functional calculator with light-dark theme implemented using JavaScript.",
    tech: "HTML, CSS, JavaScript",
    img: "/projects/calculatorDark.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/Calculator/",
  },
  {
    // id: 7,
    title: "Analog Clock",
    des: "A animated clock which shows system's current time.",
    tech: "HTML, CSS, JavaScript",
    img: "/projects/analogClockDark.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/Analog-Clock/",
  },
  {
    // id: 8,
    title: "Digital Clock",
    des: "A animated clock which shows system's current time.",
    tech: "HTML, CSS, JavaScript",
    img: "/projects/digitalClock.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/Digital-Clock/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "SWE Intern: Full Stack Web Developer",
    desc: "Developed and maintained live websites using Next.js and Strapi, managed CI/CD pipelines to streamline deployment processes, and deployed applications on DigitalOcean. Additionally, integrated Zoho for enhanced CRM and business automation.",
    company: "Zangoh",
    duration: "Jun. 2024 - Aug. 2024",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    // img: "/git.svg",
    link: "https://github.com/Priyanshu255/",
  },
  {
    id: 2,
    // img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    // img: "/link.svg",
    link: "https://www.linkedin.com/in/priyanshupandit",
  },
];
