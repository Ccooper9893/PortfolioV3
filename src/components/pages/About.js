import React, { useRef, useEffect } from "react";
import '../styles/transitions.css';
import { useInView, motion } from "framer-motion";
 
export default function About() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

    return (
        <div className="carousel carousel-vertical">
            <div className="carousel-item">
                <div className="hero h-screen">
                    <div className="hero-content text-center">
                        <div className="max-w-md" ref={ref}>
                            <motion.div ref={ref} initial={{ y: '-100vw' }} animate={isInView ? { y: 0 } : { y: '-100vw' }} transition={{ type: 'spring', stiffness: 40, duration: 2 }}>
                                <h1 className="text-6xl text-blue-400">WHO AM I?</h1>
                            </motion.div>
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
                <div className="hero">
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