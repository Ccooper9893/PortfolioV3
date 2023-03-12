import React from "react";
import '../styles/transitions.css';
import { motion } from "framer-motion"
 
export default function About() {
    return (
        <div className="h-96 carousel carousel-vertical p-30">
            <div className="carousel-item h-full">
                <div className="hero bg-base-200 h-4/5">
                    <div className="hero-content text-center w-full">
                        <div className="max-w-md">
                        {/* <motion.div
                            initial={{ y: -300 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                        > */}
                            <h1 className="text-6xl text-white">WHO AM I?</h1>
                            {/* </motion.div> */}
                            <p className="py-6 text-xl fade-in-3 text-white">
                                <span className="text-yellow-500 text-2xl">Coder - </span>
                                <span className="text-yellow-500 text-2xl">Adventurer - </span>
                                <span className="text-yellow-500 text-2xl">Learnaholic - </span>
                                <span className="text-yellow-500 text-2xl">Leader</span>
                            </p> 
                            <p>Programming and problem-solving are passions of mine. I love taking on new challenges and making an impact along the way.</p>
                            <div className="animate-bounce mt-10">
                                <p>Scroll down to continue</p>
                                <p>V</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="carousel-item h-full">
                <div className="hero bg-base-200">
                    <div className="hero-content text-center w-full">
                        <div className="h-full">
                        <h1 className="text-6xl text-yellow-500">WHAT CAN I DO?</h1>
                        <p className="py-6 text-white text-xl">As someone who can build full stack applications using the latest technologies, I have the ability to create software solutions that can handle both front-end and back-end development. I can develop user-friendly interfaces using modern web development frameworks, as well as manage data storage and server-side functionality.</p>
                        
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
};