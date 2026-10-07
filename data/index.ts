export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "/resume" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Clear communication. Better collaboration.",
    description: "How I approach teamwork",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Smart TV application deployment experience",
    description: "2,000+ rooms",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always exploring, always improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working as a SDE",
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
  {
    // id: 1,
    title: "CampusHub: Event Management",
    des: "Designed and developed a full-stack event management platform with authentication, event registration, and Stripe payment integration. Built type-safe form workflows using Zod and developed responsive interfaces using ShadCN and TailwindCSS",
    // tech: "NextJS • MongoDB • TailwindCSS • Stripe • Clerk",
    tech: ["NextJS", "MongoDB", "TailwindCSS", "Stripe", "Clerk"],
    img: "/projects/campusHub.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://campushub-mu.vercel.app/",
    githubLink: "https://github.com/Priyanshu255/SangamVedh",
  },
  {
    title: "The Elite International",
    des: "Developed a full-stack platform for a startup, implementing payments, JWT authentication, OTP verification, and email workflows. Deployed the application on an Ubuntu VPS, configuring Nginx as a reverse proxy and setting up the production domain and server environment.",
    // tech: "MERN • TailwindCSS • RazorPay • Hostinger(VPS:Ubuntu) • formik/yup",
    tech: [
      "MERN",
      "TailwindCSS",
      "RazorPay",
      "Hostinger (VPS: Ubuntu)",
      "Formik",
      "Yup",
    ],
    img: "/projects/theelite.webp",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
    githubLink: "https://github.com/Priyanshu255/TheEliteInternational",
  },
  {
    title: "Animations",
    des: "This website features a range of custom animations, showcasing my ability to create smooth and engaging interactions without relying on animation libraries.",
    // tech: "HTML • CSS • JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/projects/animation.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://animationspriyanshupandit.vercel.app/",
    githubLink: "https://github.com/Priyanshu255/animation-lab",
  },
  {
    title: "Gym Website",
    des: "A website that can give gym exercises for any body part. A user can search exercises for a target muscle and can get YouTube video suggestions and exercises that target same muscle or uses same equipment.",
    // tech: "ReactJS • MaterialUI • TailwindCSS • RapidAPI",
    tech: ["ReactJS", "MaterialUI", "TailwindCSS", "RapidAPI"],
    img: "/projects/gymApp.webp",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://priyanshu255.github.io/Gym-App/",
    githubLink: "https://github.com/Priyanshu255/Gym-App",
  },
  {
    title: "React Admin Dashboard",
    des: "A website that has a fully functional dashboard with different charts, tables, form and calendar. Also have light-dark theme implemented using MaterialUI.",
    // tech: "ReactJS • MaterialUI • formik • yup • react routing • react-icons • Nivo Charts • FullCalender",
    tech: [
      "ReactJS",
      "MaterialUI",
      "Formik",
      "Yup",
      "React Router",
      "React Icons",
      "Nivo Charts",
      "FullCalendar",
    ],
    img: "/projects/reactAdmin.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/React-Admin-Dashboard/",
    githubLink: "https://github.com/Priyanshu255/React-Admin-Dashboard",
  },
  // {
  //   title: "BharatEduColab",
  //   des: "Developed a full-stack platform with 4 team members for underprivileged students to upload projects, receive mentorship, secure job opportunities, and find investors.",
  //   tech: "MERN, TailwindCSS",
  //   link: "https://github.com/Priyanshu255/BharatEduCollab",
  // },
  // {
  //   title: "Hospital Management System",
  //   des: "This project uses connector to connect Python and MySQL. And can-do operations like adding new data, updating, deleting and searching the data. It can also generate the receipt (with amount) for the checkout.",
  //   tech: "Python, SQL, MySQL, VS Code",
  //   link: "https://github.com/Priyanshu255/Hotel-Management-System",
  // },
  {
    title: "Calculator",
    des: "A website that has a fully functional calculator with light-dark theme implemented using JavaScript.",
    // tech: "HTML • CSS • JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/projects/calculatorDark.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/Calculator/",
    githubLink: "https://github.com/Priyanshu255/Calculator",
  },
  {
    title: "Analog Clock",
    des: "A animated clock which shows system's current time.",
    // tech: "HTML • CSS • JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/projects/analogClockDark.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/Analog-Clock/",
    githubLink: "https://github.com/Priyanshu255/Analog-Clock",
  },
  {
    title: "Digital Clock",
    des: "A animated clock which shows system's current time.",
    // tech: "HTML • CSS • JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/projects/digitalClock.webp",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://priyanshu255.github.io/Digital-Clock/",
    githubLink: "https://github.com/Priyanshu255/Digital-Clock",
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
    title: "SDE: Full stack Developer",
    desc: [
      [
        { text: "Built and enhanced " },
        { text: "production Angular dashboards", highlight: true },
        {
          text: " supporting ",
        },
        {
          text: "15+ hospitality and branded-residence properties and 7,500+ rooms",
          highlight: true,
        },
        {
          text: ", implementing ",
        },
        { text: "GraphQL integrations", highlight: true },
        { text: ", " },
        { text: "dynamic Reactive Forms", highlight: true },
        {
          text: " with conditional fields and validation, reusable components, charts, and client/admin workflows.",
        },
      ],
      [
        { text: "Developed a " },
        { text: "Microsoft Teams application from scratch", highlight: true },
        {
          text: " using React and Microsoft Teams Toolkit, implementing a visitor-management dashboard and community feed with polls, ratings, and reactions; used ",
        },
        { text: "Apollo GraphQL InMemoryCache", highlight: true },
        {
          text: " to synchronize interactive feed updates without maintaining separate React state for individual posts.",
        },
      ],
      [
        { text: "Reworked DigiConnect's data flow by replacing " },
        {
          text: "Angular client-side polling with Node.js backend polling and WebSocket-based event delivery",
          highlight: true,
        },
        {
          text: ", emitting updates only when underlying SQLite data changed; implemented ",
        },
        {
          text: "paginated APIs, infinite scrolling, search, and time-based filtering",
          highlight: true,
        },
        {
          text: ", while synchronizing live updates with historical data.",
        },
      ],
      [
        { text: "Built and deployed " },
        { text: "React-based Smart TV applications", highlight: true },
        {
          text: " for Samsung Tizen and LG Pro:Centric, supporting ",
        },
        { text: "2,000+ hotel rooms across 4+ properties", highlight: true },
        {
          text: ", with ",
        },
        { text: "MQTT-based communication", highlight: true },
        {
          text: ", configuration-driven UI, and platform-specific TV API integrations.",
        },
      ],
      [
        { text: "Developed a custom " },
        {
          text: "spatial navigation algorithm using Euclidean distance-based focus calculation",
          highlight: true,
        },
        {
          text: " for TV interfaces, enabling flexible navigation across dynamically configured layouts; applied the ",
        },
        { text: "Facade design pattern", highlight: true },
        {
          text: " to abstract platform-specific TV operations across platforms.",
        },
      ],
      [
        { text: "Built" },
        {
          text: " event-driven animated operational dashboards",
          highlight: true,
        },
        {
          text: " using React, SVG, CSS, and Framer Motion, translating live operational data into dynamic visualizations for orders, room locations, and floor activity.",
        },
      ],
    ],
    company: "Digivalet",
    link: "https://www.digivalet.com/",
    duration: "Jan. 2025 - Present",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "SDE Intern",
  //   desc: [
  //     [
  //       { text: "Developed " },
  //       { text: "Sensonic 2.0 Microsoft Teams application", highlight: true },
  //       {
  //         text: " using React, GraphQL, and AWS Amplify Cognito, implementing ",
  //       },
  //       { text: "dynamic forms", highlight: true },
  //       {
  //         text: " and improving data handling efficiency by optimizing GraphQL caching, reducing redundant queries by ",
  //       },
  //       { text: "40%", highlight: true },
  //       { text: "." },
  //     ],
  //     [
  //       { text: "Contributed to " },
  //       { text: "real-time animated operational dashboards", highlight: true },
  //       { text: " using React, SVG, and Framer Motion for " },
  //       { text: "live system monitoring", highlight: true },
  //       { text: "." },
  //     ],
  //   ],
  //   company: "Digivalet",
  //   link: "https://www.digivalet.com/",
  //   duration: "Jan. 2025 - Jun. 2025",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp2.svg",
  // },
  {
    id: 2,
    title: "SWE Intern: Full Stack Web Developer",
    // desc: [
    //   "Maintained and enhanced 3 production-level company websites using Next.js 14 and Strapi CMS.",
    //   "Achieved SEO improvement from 72% to 98%.",
    //   "Designed webhook-driven CI/CD automation using DigitalOcean Functions + GitHub Workflows enabling schema-based selective deployments in an ambiguous production environment.",
    // ],
    desc: [
      [
        { text: "Maintained and enhanced " },
        { text: "3 production websites", highlight: true },
        {
          text: " using Next.js 14 and Strapi CMS, implementing responsive UI improvements and ",
        },
        { text: "SEO optimizations", highlight: true },
        { text: " that improved SEO scores from " },
        { text: "72% to 98%", highlight: true },
        { text: "." },
      ],
      [
        { text: "Designed " },
        { text: "webhook-driven CI/CD automation", highlight: true },
        {
          text: " using DigitalOcean Functions and GitHub Workflows, enabling ",
        },
        { text: "schema-based selective deployments", highlight: true },
        { text: " for more targeted and efficient releases." },
      ],
    ],
    company: "Zangoh",
    link: "https://zangoh.com/",
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
