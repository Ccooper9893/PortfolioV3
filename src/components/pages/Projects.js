import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import bringPopcornPic from "../../assets/screenshots/bringpopcornscreenshot.png";
import omegaBlogsPic from "../../assets/screenshots/dashboardScreenshot.png";
import bp2 from "../../assets/screenshots/bringpopcornv2screenshot.png";
import omegaBlogsLogo from "../../assets/icons/omegaIcon.webp";
import popcornLogo from "../../assets/icons/popcornLogo.webp";
import farmPic from "../../assets/screenshots/farm-market-screenshot.webp";
import farmIcon from "../../assets/icons/farmIcon.webp";
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
      futureUpdates: 'Updated, see Bring Popcorn V2',
      logoAlt: "Bring Popcorn logo",
      screenshotAlt: "Bring Popcorn website",
      githubLink: "https://github.com/NBADRAUN/Bring-Popcorn",
      websiteLink: "https://nbadraun.github.io/Bring-Popcorn/",
      modalId: "bringPopcornModal",
      delay: 0.4,
    },
    {
      title: "Bring Popcorn V2",
      summary:
        "Your Ultimate Destination for discovering Popcorn-Worthy Movies! This is a remake of the original Bring Popcorn website. Built to help users find movies to watch along with where to stream, rent, or purchase. It features both a mobile and desktop friendly UI built using Daisy UI and Tailwindcss. Also follows best practices for SEO and speed optimization.",
      technology: 'Nextjs, React, API, Daisy UI, Tailwindcss, Javascript, CSS, JSX, Vercel Deployment',
      logoImg: popcornBag,
      logoWidth: "w-20",
      screenshot: bp2,
      futureUpdates: 'Create functionality for users to create personal watchlists and allow users to view shows instead of movies',
      logoAlt: "Bring Popcorn V2 logo",
      screenshotAlt: "Bring Popcorn V2 website",
      githubLink: "https://github.com/Ccooper9893",
      websiteLink: "https://bring-popcorn.vercel.app/",
      modalId: "bringPopcornV2Modal",
      delay: 0.6,
    },
    {
      title: "Omega Blogs",
      summary:
        "Omega Blogs is a space in which you can share your ideas and gain knowledge from others. Created using MVP (Mode-View-Controller) paradigm and OOP (Object-Oriented-Programming).",
      technology: 'Javascript, Handlebars, Bootstrap, MySQL, Express, Bcrypt, Node, Heroku Deployment, Git',
      logoImg: omegaBlogsLogo,
      logoWidth: "w-24",
      screenshot: omegaBlogsPic,
      futureUpdates: 'Improve overall UI and allow users to also post images.',
      logoAlt: "Omega Blogs logo",
      screenshotAlt: "Omega Blogs screenshot",
      githubLink: "https://github.com/Ccooper9893/Omega-Blogs",
      websiteLink: "https://omega-blogs.herokuapp.com/",
      modalId: "omegaBlogsModal",
      delay: 0.8,
    },
    // {
    //   title: "GetFit",
    //   summary:
    //     "GetFit is a website devoted to assisting users to become physically active and provides the necessary tools to aid users on their fitness journeys. GetFit is a collaborative project that is based off MVC (Model-View-Controller) paradigm and utilizes a wide array of softwares to store and manipulate user exercise data",
    //   technology: 'Javascript, Handlebars, Bootstrap, MySQL, Express, Bcrypt, Node, Heroku Deployment, Git',
    //   logoImg: getFitLogo,
    //   logoWidth: "w-32",
    //   screenshot: getFitPic,
    //   logoAlt: "GetFit logo",
    //   screenshotAlt: "GetFit website",
    //   githubLink: "https://github.com/Jelenarog/Workout-planner",
    //   websiteLink: "https://getfit-fitness-tracker.herokuapp.com/",
    //   modalId: "getFitModal",
    //   delay: 1.6,
    // },
    // {
    //   title: "J.A.T.E",
    //   summary:
    //     "JATE(Just Another Text Editor) is a Progressive Web Application(PWA) that provides users with a simple yet powerful text editor. With JATE, you can create, edit, and save text with ease. The app features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, ensuring that your data is always safe and accessible.",
    //   technology: 'Javascript, HTML, CSS, Webpack, Google Workbox, Node, Git',
    //   logoImg: jateLogo,
    //   logoWidth: "w-24",
    //   screenshot: jatePic,
    //   logoAlt: "JATE logo",
    //   screenshotAlt: "Jate application",
    //   githubLink: "https://github.com/Ccooper9893/Text-Editor",
    //   websiteLink: "https://lit-island-48530.herokuapp.com/",
    //   modalId: "jateModal",
    //   delay: 1.6,
    // },
    // {
    //   title: "Social Network API",
    //   summary:
    //     "RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project was built using Express, MongoDB, and Mongoose. Also tested using Mocha and seeded using Postman. The API is designed to be scalable and flexible, allowing for easy integration with other applications.",
    //   technology: 'Javascript, Express, MongoDB, Mongoose, Mocha, Node, Git',
    //   logoImg: apiLogo,
    //   logoWidth: "w-24",
    //   screenshot: apiPic,
    //   logoAlt: "Social Network API logo",
    //   screenshotAlt: "Postman fetch results",
    //   githubLink: "https://github.com/Ccooper9893/Social-Networking-API",
    //   websiteLink: "https://github.com/Ccooper9893/Social-Networking-API",
    //   modalId: "socialMediaModal",
    //   delay: 1.8,
    // },
    {
      title: "Farmer's Market",
      summary:
        "Farmer's market website designed to connect local producers with consumers who are looking for fresh and high-quality produce and products. The platform provides an interface that is easy for users to navigate, enabling them to browse and search for products. In addition, merchants can manage their inventory by creating or deleting products and updating stock or prices.",
      technology: 'MongoDB, Express, React, Google Cloud Storage, JSON web tokens, Tailwind, Daisy UI, Node, Heroku Deployment, Git',
      logoImg: farmIcon,
      logoWidth: "w-24",
      screenshot: farmPic,
      futureUpdates: 'Create functionality to allow merchants to view customer orders and upload multiple images of products instead of just one.',
      logoAlt: "Farm",
      screenshotAlt: "Shop products page",
      githubLink: "https://github.com/Ccooper9893/Farmers-Market-Shop",
      websiteLink: "https://farm-market-shop.herokuapp.com/",
      modalId: "farmModal",
      delay: 1,
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
        transition={{ type: "spring", delay: 2.2 }}
      >
        Continue &#x2192;
      </motion.button>
    </main>
  );
}
