import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  firebase,
  sql,
  java,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  chitkara,
  dps,
  smartBallot,
  vistagate,
  blogverse
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Structures and Algorithms",
    icon: mobile,
  },
  // {
  //   title: "",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"java",
    icon : java
  },
  {
    name:"firebase",
    icon :firebase
  },
  {
    name: "sql",
    icon: sql
  }


];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Smart Ballot",
    description:
      "A web-based platform that allows administrators to create and manage elections, declare results, and oversee candidates, while users can participate by casting their votes. Each user is provided with a unique voter ID for secure voting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: smartBallot,
    source_code_link: "https://github.com/raghavG0212/Smart-Ballot",
  },
  {
    name: "Blog Verse",
    description:
      "A web application that enables administrators to add and manage blogs, users, comments, and posts. Users can browse blogs, leave comments, and like posts, providing an interactive platform for content sharing and engagement.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux-store",
        color: "pink-text-gradient",
      },
    ],
    image: blogverse,
    source_code_link: "https://github.com/raghavG0212/BLOGVERSE",
  },
  {
    name: "Vista Gate",
    description:
      "A comprehensive platform where, after logging in, users can list their properties for rent or sale. Other users can browse these properties based on availability, special offers, rent, or sale status, and contact the owners directly for inquiries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: vistagate,
    source_code_link: "https://github.com/raghavG0212/Vistagate",
  },
];

const education = [
  {
    title: "B.E.",
    place: "Chitkara University",
    icon: chitkara,
    iconBg: "#000000",
    date: "June 2021 - June 2025",
    points: [
      "Gaining in-depth knowledge in core engineering subjects such as Data Structures, Algorithms, and Software Development.",
      "Working on real-world projects using technologies like React.js, Node.js, and databases to build scalable applications.",
      "Acquired hands-on experience with modern tech stacks, focusing on creating user-friendly interfaces and optimizing the overall user experience.",
    ],
  },
  {
    title: "Intermediate",
    place: "Delhi Public School, Ambala Cantt",
    icon: dps,
    iconBg: "#000000",
    date: "March 2020 - March 2021",
    points: [
      "Excelled in subjects such as Physics, Chemistry, and Mathematics, laying a strong foundation for engineering studies.",
      "Took leadership roles in organizing academic and cultural events, fostering communication and organizational skills.",
      "Served as a key member of the student council, contributing to decision-making and coordinating school-wide initiatives.",
    ],
  },
  {
    title: "Matriculation",
    place: "Delhi Public School, Ambala Cantt",
    icon: dps,
    iconBg: "#000000",
    date: "March 2018 - March 2019",
    points: [
      "Achieved a solid academic foundation with a focus on Science and Mathematics.",
      "Participated in various extracurricular activities, including sports and science fairs.",
      "Developed problem-solving and analytical skills through project work and practical assignments.",
    ],
  },
];

export { services, technologies, projects,education };
