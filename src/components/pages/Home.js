import React from 'react';
import { motion } from "framer-motion";
import '../styles/transitions.css';
import selfie from '../../assets/images/selfie2-colorized-sm-burned.png';
import mongoIcon from '../../assets/icons/mongo.png';
import expressIcon from '../../assets/icons/express.png';
import reactIcon from '../../assets/icons/react.png';
import nodeIcon from '../../assets/icons/node.png';


export default function Home({handlePageChange}) {
    return (
        <div className="hero">
          
        <div className="hero-content p-0 flex-col-reverse lg:flex-row-reverse">

          <motion.img className="fade-in-4" animate={{ x: 0, opacity: 1 }} initial={{ x: '0', opacity: 0 }} transition={{ delay: 3.5 }} src={selfie} alt="Cody Cooper"/>
          <div className="text-center">

            <motion.h1 className="text-5xl text-white" animate={{ x: 0, opacity: 1 }} initial={{ x: '0', opacity: 0 }} transition={{ delay: 0.8 }}>WELCOME!</motion.h1>

            <motion.p animate={{ x: 0, opacity: 1 }} initial={{ x: '0', opacity: 0 }} transition={{ delay: 1.6 }} className="py-3 text-4xl">MY NAME IS
              <motion.span animate={{ x: 0, opacity: 1 }} initial={{ x: '0', opacity: 0 }} transition={{ delay: 2.4 }} className="text-yellow-500"> CODY COOPER</motion.span>
            </motion.p>

            <motion.p animate={{ x: 0, opacity: 1 }} initial={{ x: '0', opacity: 0 }} transition={{ delay: 4.5 }} className="text-2xl">I AM A 
              <motion.span animate={{ x: 0, opacity: 1 }} initial={{ x: '0', opacity: 0 }} transition={{ delay: 4.8 }} className="text-blue-400"> FULL STACK WEB DEVELOPER</motion.span>
            </motion.p>

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
