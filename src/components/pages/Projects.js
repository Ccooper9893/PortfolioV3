import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import getFitPic from "../../assets/screenshots/getfitScreenshot.png";
import bringPopcornPic from "../../assets/screenshots/bringpopcornscreenshot.png";
import omegaBlogsPic from "../../assets/screenshots/dashboardScreenshot.png";
import jatePic from "../../assets/screenshots/jatepic.png";
import apiPic from "../../assets/screenshots/mongoApi.png";
import getFitLogo from "../../assets/screenshots/MuscleLogoNoCircle.png";
import omegaBlogsLogo from "../../assets/screenshots/omegaLogo.png";
import popcornLogo from "../../assets/screenshots/popcornLogo.png";
import jateLogo from "../../assets/icons/JateLogoblue.png";
import apiLogo from "../../assets/icons/apiLogo.png";

export default function Skills({ handlePageChange }) {
  const projectInfo = [
    {
      title: "Bring Popcorn",
      summary:
        "Bring Popcorn is a movie search website that was    developed with the goal of providing users with one,  convenient location to discover and search for movies. By utilizing several third-party APIs, we deliver various pieces of data, eliminating the need for multiple applications to obtain movie-related information.",
      logoImg: popcornLogo,
      logoWidth: "w-20",
      screenshot: bringPopcornPic,
      logoAlt: "Bring Popcorn logo",
      screenshotAlt: "Bring Popcorn website",
      githubLink: "https://github.com/NBADRAUN/Bring-Popcorn",
      websiteLink: "https://nbadraun.github.io/Bring-Popcorn/",
      modalId: "bringPopcornModal",
      delay: 1.5,
    },
    {
      title: "Omega Blogs",
      summary:
        "Omega Blogs is a space in which you can share your ideas and gain knowledge from others. Created using MVP (Mode-View-Controller) paradigm and OOP (Object-Oriented-Programming).",
      logoImg: omegaBlogsLogo,
      logoWidth: "w-24",
      screenshot: omegaBlogsPic,
      logoAlt: "Omega Blogs logo",
      screenshotAlt: "Omega Blogs screenshot",
      githubLink: "https://github.com/Ccooper9893/Omega-Blogs",
      websiteLink: "https://omega-blogs.herokuapp.com/",
      modalId: "omegaBlogsModal",
      delay: 1.2,
    },
    {
      title: "GetFit",
      summary:
        "GetFit is a website devoted to assisting users to become physically active and provides the necessary tools to aid users on their fitness journeys. GetFit is a collaborative project that is based off MVC (Model-View-Controller) paradigm and utilizes a wide array of softwares to store and manipulate user exercise data",
      logoImg: getFitLogo,
      logoWidth: "w-32",
      screenshot: getFitPic,
      logoAlt: "GetFit logo",
      screenshotAlt: "GetFit website",
      githubLink: "https://github.com/Jelenarog/Workout-planner",
      websiteLink: "https://workout-planner.herokuapp.com/",
      modalId: "getFitModal",
      delay: 1,
    },
    {
      title: "J.A.T.E",
      summary:
        "JATE(Just Another Text Editor) is a Progressive Web Application(PWA) that provides users with a simple yet powerful text editor. With JATE, you can create, edit, and save text with ease. The app features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, ensuring that your data is always safe and accessible.",
      logoImg: jateLogo,
      logoWidth: "w-24",
      screenshot: jatePic,
      logoAlt: "JATE logo",
      screenshotAlt: "Jate application",
      githubLink: "https://github.com/Ccooper9893/Text-Editor",
      websiteLink: "https://lit-island-48530.herokuapp.com/",
      modalId: "jateModal",
      delay: 1.2,
    },
    {
      title: "Social Network API",
      summary:
        "RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project was built using Express, MongoDB, and Mongoose. Also tested using Mocha and seeded using Postman. The API is designed to be scalable and flexible, allowing for easy integration with other applications.",
      logoImg: apiLogo,
      logoWidth: "w-24",
      screenshot: apiPic,
      logoAlt: "Social Network API logo",
      screenshotAlt: "Postman fetch results",
      githubLink: "https://github.com/Ccooper9893/Social-Networking-API",
      websiteLink: "https://github.com/Ccooper9893/Social-Networking-API",
      modalId: "socialMediaModal",
      delay: 1.5,
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      <h1 className="text-center text-4xl lg:text-6xl text-blue-400 mt-5">
        PROJECTS
      </h1>
      <h6 className="text-center">Click icon to view</h6>

      <motion.div className="flex flex-col lg:flex-row justify-center lg:mt-24 gap-6">
        {projectInfo.map((project) => {
          return <Project key={project.modalId} project={project}></Project>;
        })}
      </motion.div>
      <motion.button
        className="text-lg lg:text-xl animate-pulse p-0 mt-20 lg:mt-44 mb-10 text-slate-400 hover:text-white"
        onClick={() => handlePageChange("Resume")}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: "-30vw", opacity: 0 }}
        transition={{ type: "spring", delay: 2.5 }}
      >
        Continue &#x2192;
      </motion.button>
    </div>
  );
}
