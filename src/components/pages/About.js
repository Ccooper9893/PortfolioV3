import React, { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import bigGear from '../../assets/icons/bg-gear.png';
import mdGear from '../../assets/icons/md-gear.png';
import smGear from '../../assets/icons/sm-gear.png';

export default function About() {
    const skillsRef = useRef(null);
    const skillsInView = useInView(skillsRef, { once: true });

    useEffect(() => {
        console.log("Skills is in view: ", skillsInView)
      }, [skillsInView]);

    return (
        <div className="h-96 carousel carousel-vertical rounded-box">

        <div className="carousel-item h-full flex-col mt-20 text-center">

        <h1 className="text-lg lg:text-4xl lg:mt-10 text-blue-400">ABOUT ME</h1>

            <div className="grid lg:grid-cols-3 gap-4 mx-4 border-t-yellow-500 ">

                <motion.div className=" mt-3" animate={{ y: 0, opacity: 1 }} initial={{ y: '100vh', opacity: 0 }} transition={{ type:"just", ease: "easeIn", delay: 1 }}>
                <h3 className="text-yellow-500 lg:text-2xl shadow-sm shadow-yellow-500">GOALS</h3>
                    <p className="text-sm md:text-lg">

                    My goal is to work with a team to develop dynamic and responsive web applications that can make an impact in the tech industry. 
                    I am committed to pursuing opportunities that challenge and push me to grow both personally and professionally as a web developer.
                    </p>
                </motion.div>

                <motion.div className="text-center lg:mt-20" animate={{ y: 0, opacity: 1 }} initial={{ y: '100vh', opacity: 0 }} transition={{ ease: "easeInOut", delay: 0.5 }}>
                    <div className="flex relative justify-center mb-14 opacity-80">
                            <img src={bigGear} className="w-10 lg:w-20 animate-spin rotate-180" alt="Big gear" style={{animationDuration: '15s'}}></img>
                            <img src={mdGear} className="w-10 lg:w-20 animate-spin rotate-180" alt="medium gear" style={{animationDuration: '15s'}}></img>
                            <img src={smGear} className="absolute lg:w-20 w-10 animate-spin" alt="Small gear" style={{animationDuration: '15s', marginLeft: '15px', top: '36px'}}></img>
                    </div>
                    <motion.h3 className="text-yellow-500 lg:text-2xl shadow-sm shadow-yellow-500">DRIVE</motion.h3>
                    <motion.p className="text-sm md:text-lg">
                        My passion lies in building dynamic, user-friendly web applications that solve real-world problems. 
                        I am eager to continue growing as a developer and to contribute to innovative solutions that push the boundaries of what is possible in web development. 
                    </motion.p>
                </motion.div>

                <motion.div className="text-center"animate={{ y: 0, opacity: 1 }} initial={{ y: '100vh', opacity: 0 }} transition={{ type:"just", ease: "easeIn", delay: 1.5 }}>
                <h3 className="text-yellow-500 lg:text-2xl shadow-sm shadow-yellow-500">EXPERIENCE</h3>
                    <motion.p className="text-sm md:text-lg">
                        My background in customer service and team leadership roles has given me the ability to communicate effectively and work collaboratively. Having led a team of over 40 employees, I understand the importance of effective communication.
                    </motion.p>
                </motion.div>
          </div>

                <motion.div className="animate-bounce text-center mt-8 lg:mt-40" animate={{ y: 0, opacity: 1 }} initial={{ y: 0, opacity: 0 }} transition={{ ease: "easeInOut", delay: 4 }}>
                    <p className="text-white opacity-50">Scroll down to continue</p>
                    <p className="text-white opacity-50">V</p>
                </motion.div>
        </div> 

        <div className="carousel-item h-full justify-center mt-20" ref={skillsRef}>
        <motion.h1 animate={{ y: 0, opacity: 1 }} initial={{ y: 0, opacity: 0 }} transition={{ delay: 0.3 }} className="text-3xl lg:text-5xl text-blue-400 text-center lg:mt-10">MY SKILLS</motion.h1>
        </div> 
        <div className="carousel-item h-full justify-center">
          <h1>MY SKILLS</h1>
        </div>  
        <div className="carousel-item h-full justify-center">
          <h1>MY SKILLS</h1>
        </div>  
        <div className="carousel-item h-full justify-center">
          <h1>MY SKILLS</h1>
        </div>  
        <div className="carousel-item h-full justify-center">
          <h1>MY SKILLS</h1>
        </div>  
        <div className="carousel-item h-full justify-center">
          <h1>MY SKILLS</h1>
        </div> 
      </div>
    )
};


