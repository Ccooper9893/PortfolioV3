import React, { useRef, useEffect } from "react";
import '../styles/transitions.css';
import { useInView, motion } from "framer-motion";
 
export default function About() {

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutInView = useInView(aboutRef, { once: true });
    const skillsInView = useInView(skillsRef, { once: true });

    useEffect(() => {
        console.log("Element is in view: ", aboutInView)
      }, [aboutInView]);

    useEffect(() => {
        console.log("Element is in view: ", skillsInView)
    }, [skillsInView]);

    return (
        <div className="carousel carousel-vertical">

            <div className="carousel-item">
                <div className="hero h-screen">
                    <div className="hero-content">
                        <div className="max-w-md text-center mb-50" ref={aboutRef}>
                            <motion.div ref={aboutRef} initial={{ y: '-100vw' }} animate={aboutInView ? { y: -200 } : { y: '-100vh' }} transition={{ type: 'spring', stiffness: 40, duration: 1 }}>
                                <h1 className="text-4xl text-blue-400">ABOUT ME</h1>
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

            <div className="carousel-item">
                <div className="hero h-screen place-content-around">
                    <div className="hero-content">
                        <div className="max-w-md text-center mb-50">
                                <h1 className="text-4xl text-blue-400">ABOUT ME</h1>
                            <p>Programming and problem-solving are passions of mine. I love taking on new challenges and making an impact along the way.</p>
                            <div className="animate-bounce mt-10">
                                <p>Scroll down to continue</p>
                                <p>V</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            
        </div>
    )
};