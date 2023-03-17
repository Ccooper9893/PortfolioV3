import React from "react";
import { motion } from "framer-motion";
import bigGear from "../../assets/icons/bg-gear.png";
import mdGear from "../../assets/icons/md-gear.png";
import smGear from "../../assets/icons/sm-gear.png";
import target from "../../assets/icons/career-goals.png";
import briefcase from "../../assets/icons/briefcase.png";
import lightbulb from "../../assets/icons/lightbulb.png";

export default function About({ handlePageChange }) {
  return (
    <div className="h-full flex-col text-center about mt-3">
      <h1 className="text-6xl text-blue-400">ABOUT</h1>
      <div className="grid lg:grid-cols-2 mt-4">
        <motion.div
          className="p-4"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "100vh", opacity: 0 }}
          transition={{ type: "tween", ease: "easeIn", delay: 0.2 }}
        >
          <div className="flex relative justify-center mb-14 opacity-90">
            <motion.img
              src={bigGear}
              className="w-20 lg:w-24 animate-spin rotate-180"
              alt="Big gear"
              style={{ animationDuration: "15s" }}
            ></motion.img>
            <img
              src={mdGear}
              className="w-20 lg:w-24 animate-spin rotate-180"
              alt="medium gear"
              style={{ animationDuration: "15s" }}
            ></img>
            <img
              src={smGear}
              className="absolute lg:w-24 w-20 animate-spin"
              alt="Small gear"
              style={{
                animationDuration: "15s",
                marginLeft: "15px",
                top: "36px",
              }}
            ></img>
          </div>
          <h3 className="text-yellow-500 lg:text-2xl shadow-sm">DRIVE</h3>
          <p className="text-lg lg:text-xl mx-8">
            As a developer, I am driven by an insatiable curiosity to explore
            new technologies and advance my skills. From designing immersive
            games with Unity, to engineering complex machines with Autodesk, and
            creating stunning visuals with Photoshop, I am constantly pushing
            the boundaries of what I can create. My passion for learning fuels
            my ambition to expand my toolkit and tackle new challenges, always
            striving to innovate and create impactful solutions.
          </p>
        </motion.div>

        <motion.div
          className="p-4"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "100vh", opacity: 0 }}
          transition={{
            type: "tween",
            ease: "easeIn",
            delay: 0.4,
          }}
        >
          <div className="flex justify-center mt-2">
            <img
              className="flex justify-center opacity-90 w-28 mb-8"
              src={target}
              alt="arrow target"
            ></img>
          </div>
          <h3 className="text-yellow-500 lg:text-2xl shadow-sm">GOALS</h3>
          <p className="text-lg lg:text-xl mx-8">
            My goal is to work with a team to develop dynamic and responsive web
            applications that can make an impact in the tech industry. I am
            committed to pursuing opportunities that challenge and push me to
            grow both personally and professionally as a web developer.
          </p>
        </motion.div>

        <motion.div
          className="text-center mt-7 p-4"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "100vh", opacity: 0 }}
          transition={{ type: "tween", ease: "easeIn", delay: 0.6 }}
        >
          <div className="flex justify-center mb-7 mt-2">
            <img
              className="opacity-90 w-28"
              src={briefcase}
              alt="briefcase"
            ></img>
          </div>
          <h3 className="text-yellow-500 lg:text-2xl shadow-sm mt-6">
            EXPERIENCE
          </h3>
          <p className="text-lg lg:text-xl mx-8">
            My background in customer service and team leadership roles has
            given me the ability to communicate effectively and work
            collaboratively. Having built and led a team of over 40 employees, I
            understand the importance of effective communication.
          </p>
        </motion.div>

        <motion.div
          className="p-4"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "100vh", opacity: 0 }}
          transition={{ type: "tween", ease: "easeIn", delay: 0.8 }}
        >
          <div className="flex justify-center">
            <img
              className="flex justify-center opacity-90 mb-6 w-36 animate-pulse"
              src={lightbulb}
              alt="lightbulb"
            ></img>
          </div>
          <h3 className="text-yellow-500 lg:text-2xl shadow-sm">TRAITS</h3>
          <p className="text-lg lg:text-xl mx-8">
            As a diligent and courteous individual, I hold great regard for
            gaining knowledge from others and firmly believe that attentive
            listening is crucial for continuous learning. During my free time I
            like to either read, woodcarve, cook, or go outside and enjoy the
            outdoors!
          </p>
        </motion.div>
      </div>
      <motion.button
        className="text-lg lg:text-xl animate-pulse p-0 mt-8 mb-10 text-slate-400 hover:text-white"
        onClick={() => handlePageChange("Projects")}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: "-30vw", opacity: 0 }}
        transition={{ type: "spring", delay: 2 }}
      >
        Continue &#x2192;
      </motion.button>
    </div>
  );
}
