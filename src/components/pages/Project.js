import React from "react";
import { motion } from "framer-motion";
import githubLogo from "../../assets//icons/GithubLogowhite.png";
import websiteIcon from "../../assets/icons/linkIcon.png";

export default function Project(props) {
  const { project } = props;
  const {
    delay,
    modalId,
    logoImg,
    logoAlt,
    logoWidth,
    title,
    summary,
    technology,
    screenshot,
    screenshotAlt,
    githubLink,
    websiteLink,
  } = project;

  return (
    <motion.div
      className="flex justify-center my-10"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ type: "tween", delay: delay }}
    >
      <label
        htmlFor={modalId}
        className="btn bg-transparent border-none opacity-70 hover:opacity-100 hover:bg-transparent"
      >
        {title === "Bring Popcorn V2" ? (
                  <div className="indicator">
                  <span className="indicator-item badge bg-white scale-110 text-black">New</span>
                  <div className="relative -top-7">
                  <img className={logoWidth} alt={logoAlt} src={logoImg}></img>
                  </div>
                </div>
        ) : (
          <img className={logoWidth} alt={logoAlt} src={logoImg}></img>
        )}

      </label>

      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-stone-900 border-2 border-stone-700 px-4 scale-110">
        <label htmlFor={modalId} className="btn bg-stone-900 btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-6xl text-yellow-500 border-b border-yellow-400">
            {title}
          </h3>
          <h4 className="text-xl text-blue-400">{technology}</h4>
          <p className="py-4 text-xl">{summary}</p>
          <img src={screenshot} alt={screenshotAlt}></img>
          <div className="modal-action justify-between">
            <div className="flex flex-row gap-10 align-middle">
              <a
                className="opacity-70 hover:opacity-100"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-10" src={githubLogo} alt="Github link"></img>
              </a>
              <a
                className="opacity-70 hover:opacity-100"
                href={websiteLink}
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
            <label htmlFor={modalId} className="btn bg-gray-300 text-black">
              Close
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
