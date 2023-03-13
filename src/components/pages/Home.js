import React from 'react';
import { motion } from "framer-motion";
import '../styles/transitions.css';
import selfie from '../../assets/images/selfie2-colorized-sm-burned.png';
import mongoIcon from '../../assets/icons/mongo.png';
import expressIcon from '../../assets/icons/express.png';
import reactIcon from '../../assets/icons/react.png';
import nodeIcon from '../../assets/icons/node.png'


export default function Home({handlePageChange}) {
    return (
        <div className="hero">
          
        <div className="hero-content p-0 flex-col-reverse lg:flex-row-reverse">

          <img className="fade-in-4" src={selfie} alt="Cody Cooper"/>
          <div className="text-center">
            <h1 className="text-5xl fade-in-1 text-white">WELCOME!</h1>
            <p className="py-3 text-4xl fade-in-2">MY NAME IS <span className="text-yellow-500 fade-in-3">CODY COOPER</span></p>
            <p className="text-2xl fade-in-5">I AM A <span className="text-blue-400 fade-in-6">FULL STACK WEB DEVELOPER</span></p>
            <div className='flex flex-row justify-center gap-4 mt-4'>
              <motion.img className='w-12' alt="MongoDB" src={mongoIcon.toString()} animate={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ delay: 5.6 }} />
              <motion.img className='w-12' alt="Express" src={expressIcon.toString()} animate={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ delay: 5.4 }} />
              <motion.img className='w-12' alt="React" src={reactIcon.toString()} animate={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ delay: 5.2 }} />
              <motion.img className='w-12' alt="Node" src={nodeIcon.toString()} animate={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ delay: 5 }} />
            </div>
            
          </div>
        </div>
      </div>
    )
};
