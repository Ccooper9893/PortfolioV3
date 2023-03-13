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

        <div className="carousel-item h-full flex-col mt-20">

        <motion.h1 animate={{ y: 0, opacity: 1 }} initial={{ y: 0, opacity: 0 }} transition={{ delay: 0.3 }} className="text-3xl lg:text-5xl text-blue-400 text-center lg:mb-10 lg:pt-10 lg:text-6xl">ABOUT</motion.h1>

            <div className="grid lg:grid-cols-3 gap-10 mx-4 border-t-yellow-500 ">

                <div className="text-center mt-3">
                    <h3 className="text-yellow-500 lg:text-3xl">GOALS</h3>
                    <motion.p className="lg:text-2xl md:text-lg sm:text-sm mt-2 text-center" animate={{ y: 0, opacity: 1 }} initial={{ y: 0, opacity: 0 }} transition={{ type:'tween', ease: "easeInOut", delay: 1 }}>

                    My goal is to work with a team to develop dynamic and responsive web applications that can make an impact in the tech industry. 
                    I am committed to pursuing opportunities that challenge and push me to grow both personally and professionally as a web developer.
                    </motion.p>
                </div>

                <div class="text-center">
                    <motion.div className="flex relative justify-center mb-14" animate={{ y: 0, opacity: 0.7 }} initial={{ y: 0, opacity: 0 }} transition={{ ease: "easeInOut", delay: 2.8 }}>
                            <img src={bigGear} className="w-20 animate-spin rotate-180" alt="Big gear" style={{animationDuration: '15s'}}></img>
                            <img src={mdGear} className="w-20 animate-spin rotate-180" alt="medium gear" style={{animationDuration: '15s'}}></img>
                            <img src={smGear} className="absolute w-20 animate-spin" alt="Small gear" style={{animationDuration: '15s', marginLeft: '15px', top: '36px'}}></img>
                        </motion.div>
                    <h3 className="text-yellow-500 lg:text-3xl">DRIVE</h3>
                    <motion.p className="lg:text-2xl md:text-lg sm:text-sm text-center" animate={{ y: 0, opacity: 1 }} initial={{ y: 0, opacity: 0 }} transition={{ type:'spring', ease: "easeInOut", delay: 1.5 }}>
                    

                        My passion lies in building dynamic, user-friendly web applications that solve real-world problems. 
                        I am eager to continue growing as a developer and to contribute to innovative solutions that push the boundaries of what is possible in web development. 
                    </motion.p>
                </div>

                <div className="text-center">
                    <h3 className="text-yellow-500 lg:text-3xl">EXPERIENCE</h3>
                    <motion.p className="lg:text-2xl md:text-lg sm:text-sm mt-2 text-center" animate={{ y: 0, opacity: 1 }} initial={{ y: 0, opacity: 0 }} transition={{ type:'spring', ease: "easeInOut", delay: 2 }}>
                        My background in customer service and team leadership roles has given me the ability to communicate effectively and work collaboratively. Having led a team of over 40 employees, I understand the importance of effective communication.
                    </motion.p>
                </div>
          </div>

                <motion.div className="animate-bounce text-center mt-14" animate={{ y: 0, opacity: 1 }} initial={{ y: 0, opacity: 0 }} transition={{ ease: "easeInOut", delay: 5 }}>
                    <p className="text-white">Scroll down to continue</p>
                    <p className="text-white">V</p>
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


