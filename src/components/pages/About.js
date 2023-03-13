import React, { useRef, useEffect } from "react";
import '../styles/transitions.css';
import { useInView, motion } from "framer-motion";
 
export default function About() {

    const skillsRef = useRef(null);
    const skillsInView = useInView(skillsRef, { once: true });

    useEffect(() => {
        console.log("Skills is in view: ", skillsInView)
      }, [skillsInView]);



    return (
        <div className="h-96 carousel carousel-vertical rounded-box">

        <div className="carousel-item h-full justify-center">
            <div className="flex flex-col text-center mt-10">
                <h1 className="text-5xl">ABOUT ME</h1>
                <motion.p animate={{ x: 0, opacity: 1 }} initial={{ x: '-100vw', opacity: 0 }} transition={{ delay: 1 }}>I am the god of thunder.</motion.p>
          </div>
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
        <div className="carousel-item h-full justify-center">
          <h1>MY SKILLS</h1>
        </div> 
      </div>
    )
};