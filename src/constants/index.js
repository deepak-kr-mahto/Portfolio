import starfood from "../assets/projects/starfood.png";
import genImg from "../assets/projects/genimg.png";
import portfolio from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong ability to build robust and scalable web applications. Proficient in front-end technologies like React, Tailwind CSS, and Bootstrap, as well as back-end technologies like Node.js, MySQL, SQL, and MongoDB, I also have knowledge of Java. I enjoy turning ideas into functional and efficient solutions, with a focus on creating applications that enhance user experiences`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const PROJECTS = [
  {
    title: "StarFood Food delivey Website",
    image: starfood,
    description:
      "A fully functional food delivery website with features like food order, admin panel, payment through Stripe, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB","Stripe"],
  },
  {
    title: "GenImg AI Image Generator",
    image: genImg,
    description:
      "Generate stunning AI images from text effortlessly. Purchase credits, create unique visuals, and download them instantly with secure payments. Simple, fast, and powerful!",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB", ]
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Framer Motion"],
  },
  
];

export const CONTACT = {
  phoneNo: "+91 9939159941",
  email: "kumar1737deepak@gmail.com",
};
