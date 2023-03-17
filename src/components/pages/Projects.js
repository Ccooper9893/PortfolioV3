import React from "react";
import { motion } from "framer-motion";
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
import githubLogo from "../../assets//icons/GithubLogowhite.png";
import websiteIcon from "../../assets/icons/linkIcon.png";

export default function Skills({ handlePageChange }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <h1 className="text-center text-4xl lg:text-6xl text-blue-400 mt-5">
        PROJECTS
      </h1>
      <h6 className="text-center">Click icon to view</h6>
      <motion.div className="flex flex-col lg:flex-row justify-center lg:mt-24 gap-6">
        <motion.div
          className="flex justify-center my-10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", delay: 1.5 }}
        >
          {/* The button to open modal */}
          <label
            htmlFor="bringPopModal"
            className="btn bg-transparent border-none hover:bg-transparent opacity-70 hover:opacity-100"
          >
            <img className=" w-20" alt="Popcorn bag" src={popcornLogo}></img>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="bringPopModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box bg-stone-900 border border-black">
              <h3 className="text-6xl text-yellow-500 border-b border-yellow-400">
                Bring Popcorn
              </h3>
              <p className="py-4 text-xl text-white">
                Bring Popcorn is a movie search website that was developed with
                the goal of providing users with one, convenient location to
                discover and search for movies. By utilizing several third-party
                APIs, we deliver various pieces of data, eliminating the need
                for multiple applications to obtain movie-related information.
              </p>
              <img src={bringPopcornPic} alt="Bring popcorn website"></img>
              <div className="modal-action justify-between">
                <div className="flex flex-row gap-10 align-middle">
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="https://github.com/NBADRAUN/Bring-Popcorn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-10"
                      src={githubLogo}
                      alt="Github link"
                    ></img>
                  </a>
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="https://nbadraun.github.io/Bring-Popcorn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className=" w-11"
                      src={websiteIcon}
                      alt="website link"
                    ></img>
                  </a>
                </div>
                <label
                  htmlFor="bringPopModal"
                  className="btn bg-gray-300 text-black"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center my-10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", delay: 1.2 }}
        >
          {/* The button to open modal */}
          <label
            htmlFor="omegaModal"
            className="btn bg-transparent border-none hover:bg-transparent opacity-70 hover:opacity-100"
          >
            <img
              className=" w-24"
              alt="omega symbol"
              src={omegaBlogsLogo}
            ></img>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="omegaModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box bg-stone-900 border border-black">
              <h3 className="text-6xl text-yellow-500 border-b border-yellow-400">
                Omega Blogs
              </h3>
              <p className="py-4 text-xl text-white">
                Omega Blogs is a space in which you can share your ideas and
                gain knowledge from others. Created using MVP
                (Mode-View-Controller) paradigm and OOP
                (Object-Oriented-Programming).
              </p>
              <img src={omegaBlogsPic} alt="Blogging website"></img>
              <div className="modal-action justify-between">
                <div className="flex flex-row gap-10 align-middle">
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="https://github.com/Ccooper9893/Omega-Blogs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-10"
                      src={githubLogo}
                      alt="Github link"
                    ></img>
                  </a>
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="omega-blogs.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className=" w-11"
                      src={websiteIcon}
                      alt="website link"
                    ></img>
                  </a>
                </div>
                <label
                  htmlFor="omegaModal"
                  className="btn bg-gray-300 text-black"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center my-10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          {/* The button to open modal */}
          <label
            htmlFor="getFitModal"
            className="btn bg-transparent border-none hover:bg-transparent opacity-70 hover:opacity-100"
          >
            <img
              className=" w-32"
              src={getFitLogo}
              alt="getFit website logo"
            ></img>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="getFitModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box bg-stone-900 border border-black">
              <h3 className="text-6xl text-yellow-500 border-b border-yellow-400">
                GetFit
              </h3>
              <p className="py-4 text-xl text-white">
                GetFit is a website devoted to assisting users to become
                physically active and providing the necessary tools to aid users
                on their fitness journeys. GetFit is a collaborative project
                that is based off MVC (Model-View-Controller) paradigm and
                utilizes a wide array of softwares to store and manipulate user
                exercise data.
              </p>
              <img src={getFitPic} alt="getFit website"></img>
              <div className="modal-action justify-between">
                <div className="flex flex-row gap-10 align-middle">
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="https://github.com/Jelenarog/Workout-planner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-10"
                      src={githubLogo}
                      alt="github link"
                    ></img>
                  </a>
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="https://workout-planner.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className=" w-11"
                      src={websiteIcon}
                      alt="website link"
                    ></img>
                  </a>
                </div>
                <label
                  htmlFor="getFitModal"
                  className="btn bg-gray-300 text-black"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center my-10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", delay: 1.2 }}
        >
          {/* The button to open modal */}
          <label
            htmlFor="jateModal"
            className="btn bg-transparent border-none hover:bg-transparent opacity-70 hover:opacity-100"
          >
            <img
              className=" w-24"
              alt="Just another text editor"
              src={jateLogo}
            ></img>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="jateModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box bg-stone-900 border border-black">
              <h3 className="text-6xl text-yellow-500 border-b border-yellow-400">
                J.A.T.E
              </h3>
              <p className="py-4 text-xl text-white">
                JATE(Just Another Text Editor) is a Progressive Web Application
                (PWA) that provides users with a simple yet powerful text
                editor. With JATE, you can create, edit, and save text with
                ease. The app features a number of data persistence techniques
                that serve as redundancy in case one of the options is not
                supported by the browser, ensuring that your data is always safe
                and accessible.
              </p>
              <img src={jatePic} alt="Bring popcorn website"></img>
              <div className="modal-action justify-between">
                <div className="flex flex-row gap-10 align-middle">
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="https://github.com/Ccooper9893/Text-Editor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-10"
                      src={githubLogo}
                      alt="github link"
                    ></img>
                  </a>
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="https://lit-island-48530.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className=" w-11"
                      src={websiteIcon}
                      alt="website Icon"
                    ></img>
                  </a>
                </div>
                <label
                  htmlFor="jateModal"
                  className="btn bg-gray-300 text-black"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center my-10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", delay: 1.5 }}
        >
          {/* The button to open modal */}
          <label
            htmlFor="apiModal"
            className="btn bg-transparent border-none hover:bg-transparent opacity-70 hover:opacity-100"
          >
            <img
              className=" w-24"
              alt="Just another text editor"
              src={apiLogo}
            ></img>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="apiModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box bg-stone-900 border border-black">
              <h3 className="text-6xl text-yellow-500 border-b border-yellow-400">
                Social Network API
              </h3>
              <p className="py-4 text-xl text-white">
                RESTful API for a social network web application where users can
                share their thoughts, react to friends’ thoughts, and create a
                friend list. This project was built using Express, MongoDB, and
                Mongoose. Also tested using Mocha and seeded using Postman. The
                API is designed to be scalable and flexible, allowing for easy
                integration with other applications.
              </p>
              <img src={apiPic} alt="Bring popcorn website"></img>
              <div className="modal-action justify-between ">
                <div className="flex flex-row gap-10 align-middle">
                  <a
                    className="opacity-70 hover:opacity-100"
                    href="https://github.com/Ccooper9893/Social-Networking-API"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-10"
                      src={githubLogo}
                      alt="Github link"
                    ></img>
                  </a>
                </div>
                <label
                  htmlFor="apiModal"
                  className="btn bg-gray-300 text-black"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.button
        className="text-lg lg:text-xl animate-pulse p-0 mt-20 lg:mt-44 mb-10 text-amber-500 hover:text-white"
        onClick={() => handlePageChange("Resume")}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: "-100vw", opacity: 0 }}
        transition={{ type: "spring", delay: 2.5 }}
      >
        Continue &#x2192;
      </motion.button>
    </div>
  );
}
