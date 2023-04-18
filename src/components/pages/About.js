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
            As a developer, I am driven by a curiosity to explore
            new technologies and advance my skills. From building dynamic and responsive full stack web applications to reverse engineering a blender with Autodesk, I am constantly pushing
            the boundaries of what I can create. Knowing that someone is out there using an application that I helped build... is a great feeling.
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
          My goal is to pursue a career in coding because it's something that I absolutely love doing. I am always eager to learn more and improve my skills, and I find myself spending hours reading documentation and daydreaming about code. I'm excited about the prospect of working with others to build something truly amazing - something that can change lives, no matter how big or small.
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
          As a Full Stack web developer, I have created numerous applications that range from simple static webpages to complex MERN stack applications. My experience includes developing websites that are responsive, intuitive, and visually appealing, using a variety of programming languages and frameworks. In addition to my technical expertise, I have leadership experience as a general manager where I led a team consisting of over 40 people. This experience taught me the importance of effective communication and treating others with respect. I am excited about utilizing my diverse skill set to create innovative solutions and collaborate with others to make an impact. 
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
          I strongly value the principles of hard work and respect, and these values have been the guiding force in my personal and professional life. Whether it's working on personal projects or collaborating with a team, I believe that a positive and respectful work environment is essential for success.
      I never shy away from an opportunity to lend or receive a helping hand, and I take pride in my ability to communicate effectively and work collaboratively with others. Learning new skills and pushing myself beyond my limits is something that I thoroughly enjoy, and I am constantly seeking opportunities to challenge myself and grow both personally and professionally.
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
