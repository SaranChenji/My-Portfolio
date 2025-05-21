import { FaPaintBrush } from "react-icons/fa";
// import { SiFiverr } from "react-icons/si";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  mysql,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs.
Using modern technologies like React and other cutting-edge tools, I ensure your site is optimized for speed, scalability, and accessibility — delivering a strong and reliable online presence.`,
  },
];

export const projects = [
  {
    title: "Omnifood",
    image: project1,
    category: "Web",
    description: `A responsive landing page for an AI-powered food delivery service. Designed with HTML, CSS, and JavaScript. Features include smooth scrolling, modern layout, and mobile-friendly design for all screen sizes.`,
    demoLink: "https://omnifood-gourmet.netlify.app/",
    stacks: [
      {
        name: "HTML5",
        logo: html,
      },
      {
        name: "CSS3",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Moderna Clone",
    image: project2,
    category: "Web",
    description: `A modern and responsive business website template built with HTML, CSS, and JavaScript. Features include a clean layout, navigation bar, image sliders, services section, and contact form. Fully optimized for desktop and mobile devices.`,
    demoLink: "https://moderna-clone.netlify.app/",
    stacks: [
      {
        name: "HTML5",
        logo: html,
      },
      {
        name: "CSS3",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Protfolio",
    image: project3,
    category: "Web",
    description: `A personal portfolio website built using React. Showcases projects, skills, and contact information with a clean and responsive design. Uses components for easy updates and smooth user experience across all devices.`,
    demoLink: "",
    stacks: [
      {
        name: "HTML5",
        logo: html,
      },
      {
        name: "CSS3",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "ReactJs",
        logo: react,
      },
    ],
  },
];

export const skills = [
  {
    title: "Database",
    data: [
      {
        skill: "MySQL",
        level: "Intermediate",
        logo: mysql,
      },
      // {
      //   skill: "Sketch",
      //   level: "Intermediate",
      //   logo: sketch,
      // },
      // {
      //   skill: "XD",
      //   level: "Intermediate",
      //   logo: xd,
      // },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Intermediate",
        logo: javascript,
      },
      // {
      //   skill: "Tailwind",
      //   level: "Intermediate",
      //   logo: tailwind,
      // },
      {
        skill: "Bootstrap",
        level: "Intermediate",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Intermediate",
        logo: react,
      },
      // {
      //   skill: "React Native",
      //   level: "Experienced",
      //   logo: reactnative,
      // },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "saranchenji4@gmail.com",
    link: "mailto:saranchenji4@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Saran C",
    link: "https://m.me/_saranc_",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+916383403138",
    link: "https://api.whatsapp.com/send?phone=916383403138",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "instagram",
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/_saranc_/",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/SaranChenji",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/saran-c-a4b7a132b",
  },
  // {
  //   name: "Youtube",
  //   icon: <AiFillYoutube />,
  //   link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  // },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
