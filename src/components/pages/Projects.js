import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import getFitPic from "../../assets/screenshots/getfitScreenshot.png";
import bringPopcornPic from "../../assets/screenshots/bringpopcornscreenshot.png";
import omegaBlogsPic from "../../assets/screenshots/dashboardScreenshot.png";
import jatePic from "../../assets/screenshots/jatepic.png";
import apiPic from "../../assets/screenshots/mongoApi.png";
import bp2 from "../../assets/screenshots/bringpopcornv2screenshot.png";
import getFitLogo from "../../assets/screenshots/MuscleLogoNoCircle.png";
import omegaBlogsLogo from "../../assets/screenshots/omegaLogo.png";
import popcornLogo from "../../assets/screenshots/popcornLogo.png";
import jateLogo from "../../assets/icons/JateLogoblue.png";
import apiLogo from "../../assets/icons/apiLogo.png";
import farmPic from "../../assets/screenshots/farm-market-screenshot.png";
import farmIcon from "../../assets/icons/farmIcon.png";
import popcornBag from "../../assets/icons/popcornbag.webp";

export default function Skills({ handlePageChange }) {
  const projectInfo = [
    {
      title: "Bring Popcorn",
      summary:
        "Bring Popcorn is a movie search website that was developed with the goal of providing users with one,  convenient location to discover and search for movies. By utilizing several third-party APIs, we deliver various pieces of data, eliminating the need for multiple applications to obtain movie-related information.",
      technology: 'Javascript, HTML, CSS, Bootstrap, Third-Party APIs, Git',
      logoImg: popcornLogo,
      logoWidth: "w-20",
      screenshot: bringPopcornPic,
      logoAlt: "Bring Popcorn logo",
      screenshotAlt: "Bring Popcorn website",
      githubLink: "https://github.com/NBADRAUN/Bring-Popcorn",
      websiteLink: "https://nbadraun.github.io/Bring-Popcorn/",
      modalId: "bringPopcornModal",
      delay: 1,
    },
    {
      title: "Bring Popcorn V2",
      summary:
        "Your Ultimate Destination for discovering Popcorn-Worthy Movies! This is a remake of the original Bring Popcorn website. It features both a mobile and desktop friendly UI built using Daisy UI and Tailwindcss. Also follows best practices for SEO and speed optimization. Future development will include personal watchlists and an option to view shows instead of movies.",
      technology: 'Nextjs, React, API, Daisy UI, Tailwindcss, Javascript, CSS, JSX, Vercel Deployment',
      logoImg: popcornBag,
      logoWidth: "w-20",
      screenshot: bp2,
      logoAlt: "Bring Popcorn V2 logo",
      screenshotAlt: "Bring Popcorn V2 website",
      githubLink: "https://github.com/Ccooper9893",
      websiteLink: "https://bring-popcorn.vercel.app/",
      modalId: "bringPopcornV2Modal",
      delay: 1.2,
    },
    {
      title: "Omega Blogs",
      summary:
        "Omega Blogs is a space in which you can share your ideas and gain knowledge from others. Created using MVP (Mode-View-Controller) paradigm and OOP (Object-Oriented-Programming).",
      technology: 'Javascript, Handlebars, Bootstrap, MySQL, Express, Bcrypt, Node, Heroku Deployment, Git',
      logoImg: omegaBlogsLogo,
      logoWidth: "w-24",
      screenshot: omegaBlogsPic,
      logoAlt: "Omega Blogs logo",
      screenshotAlt: "Omega Blogs screenshot",
      githubLink: "https://github.com/Ccooper9893/Omega-Blogs",
      websiteLink: "https://omega-blogs.herokuapp.com/",
      modalId: "omegaBlogsModal",
      delay: 1.4,
    },
    {
      title: "GetFit",
      summary:
        "GetFit is a website devoted to assisting users to become physically active and provides the necessary tools to aid users on their fitness journeys. GetFit is a collaborative project that is based off MVC (Model-View-Controller) paradigm and utilizes a wide array of softwares to store and manipulate user exercise data",
      technology: 'Javascript, Handlebars, Bootstrap, MySQL, Express, Bcrypt, Node, Heroku Deployment, Git',
      logoImg: getFitLogo,
      logoWidth: "w-32",
      screenshot: getFitPic,
      logoAlt: "GetFit logo",
      screenshotAlt: "GetFit website",
      githubLink: "https://github.com/Jelenarog/Workout-planner",
      websiteLink: "https://getfit-fitness-tracker.herokuapp.com/",
      modalId: "getFitModal",
      delay: 1.6,
    },
    {
      title: "J.A.T.E",
      summary:
        "JATE(Just Another Text Editor) is a Progressive Web Application(PWA) that provides users with a simple yet powerful text editor. With JATE, you can create, edit, and save text with ease. The app features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, ensuring that your data is always safe and accessible.",
      technology: 'Javascript, HTML, CSS, Webpack, Google Workbox, Node, Git',
      logoImg: jateLogo,
      logoWidth: "w-24",
      screenshot: jatePic,
      logoAlt: "JATE logo",
      screenshotAlt: "Jate application",
      githubLink: "https://github.com/Ccooper9893/Text-Editor",
      websiteLink: "https://lit-island-48530.herokuapp.com/",
      modalId: "jateModal",
      delay: 1.8,
    },
    {
      title: "Social Network API",
      summary:
        "RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project was built using Express, MongoDB, and Mongoose. Also tested using Mocha and seeded using Postman. The API is designed to be scalable and flexible, allowing for easy integration with other applications.",
      technology: 'Javascript, Express, MongoDB, Mongoose, Mocha, Node, Git',
      logoImg: apiLogo,
      logoWidth: "w-24",
      screenshot: apiPic,
      logoAlt: "Social Network API logo",
      screenshotAlt: "Postman fetch results",
      githubLink: "https://github.com/Ccooper9893/Social-Networking-API",
      websiteLink: "https://github.com/Ccooper9893/Social-Networking-API",
      modalId: "socialMediaModal",
      delay: 2,
    },
    {
      title: "Farmer's Market",
      summary:
        "Farmer's market website designed to connect local producers with consumers who are looking for fresh and high-quality produce and products. The platform provides an interface that is easy for users to navigate, enabling them to browse and search for products. In addition, merchants can manage their inventory by creating or deleting products and updating stock or prices.",
      technology: 'MongoDB, Express, React, Google Cloud Storage, JSON web tokens, Tailwind, Daisy UI, Node, Heroku Deployment, Git',
      logoImg: farmIcon,
      logoWidth: "w-24",
      screenshot: farmPic,
      logoAlt: "Farm",
      screenshotAlt: "Shop products page",
      githubLink: "https://github.com/lgenzone/Farmers-Market",
      websiteLink: "https://farmermarket.herokuapp.com/",
      modalId: "farmModal",
      delay: 2.2,
    },
  ];

  return (
    <main className="flex flex-col overflow-hidden">
      <h1 className="text-center text-4xl lg:text-6xl text-blue-400 mt-5">
        PROJECTS
      </h1>
      <h2 className="text-center">Click icon to view</h2>

      <motion.div className="flex flex-row flex-wrap justify-center lg:mt-8 mx-40 lg:mx-72 gap-6">
        {projectInfo.map((project) => {
          return <Project key={project.modalId} project={project}></Project>;
        })}
      </motion.div>
      <motion.button
        className="text-lg lg:text-xl animate-pulse p-0 mt-20 lg:mt-24 mb-10 text-slate-400 hover:text-white"
        onClick={() => handlePageChange("Resume")}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: "-30vw", opacity: 0 }}
        transition={{ type: "spring", delay: 2.5 }}
      >
        Continue &#x2192;
      </motion.button>
    </main>
  );
}
