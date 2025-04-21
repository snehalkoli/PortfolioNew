// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import shadcnLogo from "./assets/tech_logo/ShadCn.png";
import antdesignLogo from "./assets/tech_logo/AntDesign.svg";
import chakraLogo from "./assets/tech_logo/Chakra.png"; // Ensure this file exists
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gitlabLogo from "./assets/tech_logo/gitlab.svg";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import raftlabsLogo from "./assets/company_logo/raftlabs.png";
import parenthesesLogo from "./assets/company_logo/parentheses_systems_logo.jpg";
import fiveTechGLogo from "./assets/company_logo/5techg_logo.jpg";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import ritLogo from "./assets/education_logo/rit.jpg";

// Project Section Logo's
import humacLogo from "./assets/work_logo/humac.png";
import shivaLogo from "./assets/work_logo/shiva.png";
import voterLogo from "./assets/work_logo/volor.png";
import calorLogo from "./assets/work_logo/calor.png";
import aldifestLogo from "./assets/work_logo/aldifest_2023.webp";
import moviesLogo from "./assets/work_logo/moviesapp.png";
import techNewsLogo from "./assets/work_logo/Tech_News.png";

import webverLogo from "./assets/work_logo/web_dig.png";
import amazonCloneLogo from "./assets/work_logo/amazon-clone.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Shad Cn", logo: shadcnLogo },
      { name: "Ant Design", logo: antdesignLogo },
      { name: "Chakra UI", logo: chakraLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitLab", logo: gitlabLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: parenthesesLogo,
    role: "Software Development Engineer",
    company: "Parentheses Systems Private Limited",
    date: "April 2024 - Present",
    desc: "Designing and developing dynamic, user-friendly web applications using React.js, Next.js, and TypeScript. Built highly interactive and responsive UIs with Tailwind CSS and ShadCN UI, ensuring modern design systems and smooth user experiences. Integrated backend services using GraphQL and managed client-side state with Redux. Leveraged Gen AI technologies to enhance user workflows and application intelligence. Collaborated in agile teams with designers and backend developers to deliver scalable solutions, focusing on performance optimization and code quality.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Shad Cn",
      "Gen Ai",
      "Redux",
      "Next Js",
    ],
  },
  {
    id: 1,
    img: raftlabsLogo,
    role: "Junior Software Engineer",
    company: "RaftLabs",
    date: "Feb 2023 - Feb 2024",
    desc: "Developed and maintained modern, responsive web applications using React.js, Next.js, and TypeScript. Focused on building high-performance UIs with Tailwind CSS and Webflow, ensuring cross-browser compatibility and pixel-perfect design. Integrated APIs using GraphQL and Supabase, and managed application state efficiently with Redux. Collaborated closely with designers and backend engineers in an agile setup to deliver user-centric features and continuously improve frontend performance and scalability.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "WebFlow",
      "Tailwind CSS",
      "GraphQL",
      "Supabase",
      "Ant Design",
      "Gatsby.js",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 2,
    img: fiveTechGLogo,
    role: "Frontend Developer",
    company: "5TechG",
    date: "Jan 2022 - Feb 2022",
    desc: "Worked as a Frontend Developer at 5TechG, building responsive and interactive user interfaces using ReactJS, Redux, JavaScript, HTML, and CSS. Collaborated with the design and backend teams to implement seamless UI/UX, optimize performance, and ensure cross-browser compatibility. Contributed to enhancing the overall user experience by integrating dynamic components and applying best practices in frontend development.",

    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 3,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School Coding Bootcamp",
    date: "January 2022 -January 2023",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, React, TailwindCSS, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "React JS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "Data Structures and Algorithms",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: ritLogo,
    school: "Rajarambapu Institute of Technology, Rajaramnagar",
    date: "Aug 2018 - July 2022",
    grade: "6.9 CGPA (First Class)",
    desc: "I completed my B.Tech in Information Technology from Rajarambapu Institute of Technology, Rajaramnagar (Aug 2018 – July 2022). During this time, I built a solid foundation in core computer science subjects such as Data Structures, Algorithms, Operating Systems, Computer Networks, Web Technologies, and Software Engineering. I gained hands-on experience through academic projects, coding assignments, and collaborative team activities. Additionally, I actively participated in technical workshops, coding competitions, and seminars, which helped enhance my practical skills and broaden my understanding of real-world software development practices.",
    degree: "Bachelor of Technology - B.Tech (Information Technology)",
  },
  // {
  //   id: 1,
  //   img: bsaLogo,
  //   school: "BSA College, Mathura",
  //   date: "Sept 2018 - Aug 2021",
  //   grade: "73.2%",
  //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  //   degree: "Bachelor of Science - BSC (Computer Science)",
  // },
  // {
  //   id: 2,
  //   img: vpsLogo,
  //   school: "Indirabai Bhide kannya prashala, vita",
  //   date: "Apr 2017 - March 2018",
  //   grade: "78%",
  //   desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  //   degree: "X",
  // },
  
];

export const projects = [
  {
    id: 0,
    title: "Humac.AI",
    description:
      "A comprehensive data visualization platform built with Next.js, designed to monitor and analyze machine-related data. The application offers detailed insights into machine runtime, downtime, workforce capacity, and performance trends across daily, weekly, monthly, and yearly intervals. It enables users to identify what’s working and what’s not through machine-specific data breakdowns, with support for predictive analytics powered by integrated AI models. Additionally, it can dynamically generate graphs and G-code based on user inputs, making it a powerful tool for manufacturing intelligence and decision-making.",
    image: humacLogo ,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Next JS","Graph ql", "REST API","Shad Cn","GitLab"],
    github:
      "#",
    webapp: "https://v2.humac.live/",
  },
  {
    id: 1,
    title: "Shiva Ai",
    description:
      "An intelligent AI-powered chatbot built with Next.js and React.js, designed to assist with machine-related queries and automation tasks. Shiva AI can provide instant answers on key metrics like machine cycle time, runtime, downtime, workforce utilization, and OEE. It also supports dynamic graph generation and is capable of generating G-code tailored to various machine types based on user inputs. With a sleek interface powered by Chakra UI, the platform delivers a smart and intuitive user experience, bridging the gap between operational data and actionable insights.",
    image:shivaLogo,
    tags: [
      "React JS",
      "Next JS",
      "Chakra UI",
      "Gen Ai",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "#",
    webapp: "https://shiva.humac.ai",
  },
  {
    id: 2,
    title: "Voter IQ",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: voterLogo,
    tags: ["React JS",  "HTML", "CSS", "JavaScript","Graph ql"],
    github: "#",
    webapp: "#",
  },
  {
    id: 3,
    title: "Calor Gas",
    description:
      "A feature-rich reward management application that enables the efficient handling of reward campaigns and user engagement. The platform includes two separate interfaces: an admin panel for managing campaigns, publishing news, and monitoring user activity; and a user dashboard where users can browse and redeem coupons, track their rewards, and view updates. Built using React.js, Supabase, and NPM, the app ensures secure data handling, real-time updates, and seamless user interactions.",
    image: calorLogo,
    tags: ["React JS", "Next Js", "Supabase", "HTML", "CSS", "JavaScript","Ant Design", "Tailwind CSS"],
    github: "#",
    webapp: "https://calorenergiser.com/",
  },
  {
    id: 4,
    title: "Aldifest 2023",
    description:
      "Led a full-scale website rebuild, handling both frontend and backend development. The backend was powered by GraphQL and PostgreSQL, while the frontend was built using Next.js with Ant Design for a clean and scalable UI. The site features interactive visual elements, including SVG-based animated text and scroll/mouse-driven imagery effects, enhancing the overall user experience. Collaborated closely with the creative team at RaftLabs, making the project both technically rewarding and creatively fulfilling. As of the latest update, the platform had successfully collected over 5,000 receipts from more than 3,200 participants.",
    image: aldifestLogo,
    tags: ["React Js", "Next Js", "Graph QL", "PostgreSQL", "HTML", "CSS", "JavaScript","Ant Design"],
    github: "#",
    webapp: "https://aldifest.ie",
  },
  {
    id: 5,
    title: "ERP Management System",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "#",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Movies App",
    description:
      "A responsive and dynamic frontend application that displays movies and TV shows categorized under Popular, Upcoming, Top Rated, and more. Users can seamlessly browse through content and utilize the real-time search functionality to find specific titles. The app is designed to consume external APIs and provide an engaging, user-friendly interface.",
    image: moviesLogo,
    tags: ["React JS", "SCSS", "JavaScript", "HTML"],
    github: "https://github.com/snehalkoli/movies-app-with-api",
    webapp: "https://movies-app-with-api.vercel.app/tv",
  },
  {
    id: 7,
    title: "Tech NEWS Website",
    description:
      "A fully responsive and interactive React.js application designed to keep users updated with the latest technology news. It features a powerful search functionality that enables users to find news based on specific technical topics or keywords. Integrated with the Algolia API, the app fetches real-time, tech-focused articles and presents them in a clean, user-friendly layout.Pagination allows smooth navigation between pages of results, while a Load More option provides access to full article details. Additionally, users can remove specific news items from the view for a more personalized experience. The application showcases practical use of React hooks, API integration, conditional rendering, and component-based architecture.",
    image: techNewsLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/snehalkoli/tech-news-website",
    webapp: "https://tech-news-website-iota.vercel.app/",
  },
  {
    id: 8,
    title: "Amazon Clone",
    description:
      "A fully responsive frontend e-commerce application built with React.js that replicates the core features of the Amazon shopping experience. The platform includes product listings, search functionality, a shopping cart, and a checkout interface, all designed with a clean and intuitive UI. It simulates a real-world online shopping experience and showcases strong component-based architecture and state management using React.",
    image: amazonCloneLogo,
    tags: ["React JS", "API", "Firebase", "HTML", "CSS", "Javascript"],
    github: "https://github.com/snehalkoli/JS-Mini-Project---JavaScript-Mini-Project---7jqi91m04npd",
    webapp: "https://ecommerse-website-two.vercel.app/",
  },
];
