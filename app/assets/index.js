import img from "./image.png";
import androidStudio from "./android_studio.png";
import figma from "./figma.png";
import github from "./github.png";
import mongo from "./mongo.png";
import coding from "./coding.jpg";
import projects from "./projects.jpg";
import education from "./education.jpg";
import postman from "./postman.jpg";
import vscode from "./vscode.png";
import web from "./globe.png";
import api from "./api.png";
import deployment from "./deployment.png";
import ui from "./website-layout.png";

export const assets = {
  img: img,
};

export const infoList = [
  { icon: coding, title: "Languages", description: "JavaScript , Python" },
  {
    icon: education,
    title: "Education",
    description: "BSC in computer science     (Expected Graduation:2026)",
  },
  {
    icon: projects,
    title: "Projects",
    description: "Built Several Real World Projects using the MERN stack",
  },
];

export const toolsData = [vscode, github, androidStudio, figma, mongo, postman];

export const serviceData = [
  {
    icon: web,
    title: "Web Development",
    description: "I offer full-stack web development services  ",
    link: "https://github.com/sandy0637R",
  },
  {
    icon: ui,
    title: "UI/UX Development",
    description:
      "Responsive and clean User Interface , Intitive user experience  ",
    link: "https://github.com/sandy0637R",
  },
  {
    icon: api,
    title: "API's",
    description:
      "I am Experienced in making RestFull APIs with secure Backend using express and library like JWT  ",
    link: "https://github.com/sandy0637R",
  },
  {
    icon: deployment,
    title: "Hosting & Deployment",
    description:
      "Easily Deploy your project in platforms like Netlify , Vercel , Render   ",
    link: "https://github.com/sandy0637R",
  },
];

export const myWorks = [
  {
    title: "Land Lord",
    description: "Web appication to manage the property papers digitially ",
    bgImage: "/land-lord.png",
    link: "https://land-lord.tech",
  },
  {
    title: "ChatEzy",
    description: "real time Chatting application ",
    bgImage: "/chatezy.png",
    link: "https://Chat-Ezy.onrender.com",
  },
  {
    title: "Electronest",
    description: "Ecom platform for Electronic items with admin panel",
    bgImage: "/electronest.jpg",
    link: "https://electronestapp.netlify.app",
  },
  {
    title: "Music app",
    description: "Android Music app",
    bgImage: "/music.jpeg",
    link: "https://github.com/DeepakPandey2005/music-app.git",
  },
  {
    title: "Coding info ",
    description:
      "Mobile app to view the official Docs of famous programming languages",
    bgImage: "/code_info.png",
    link: "https://github.com/DeepakPandey2005/Programming-info-App.git",
  },
  {
    title: " Traffic post",
    description: "Social media like application to make post about traffic",
    bgImage: "/travel-info.jpg",
    link: "https://traffic-app-topaz.vercel.app/",
  },
];
