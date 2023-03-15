import React from 'react';
import { motion } from "framer-motion";
import selfie from '../../assets/images/selfie2-colorized-sm-burned.png';
import mongoIcon from '../../assets/icons/mongo.png';
import expressIcon from '../../assets/icons/express.png';
import reactIcon from '../../assets/icons/react.png';
import nodeIcon from '../../assets/icons/node.png';

export default function Home({handlePageChange}) {
    return (
        <div className="hero mt-10">
          <div className="hero-content p-0 flex-col-reverse lg:flex-row-reverse">
            <motion.img 
              className="fade-in-4" 
              animate={{ x: 0, opacity: 1 }} 
              initial={{ x: '100vh', opacity: 0 }} 
              transition={{ delay: 3 }} 
              src={selfie} 
              alt="Cody Cooper"/>
            <div className="text-center">
            <motion.h1 
              className="text-7xl mt-5 text-white" 
              animate={{ x: 0, opacity: 1 }} 
              initial={{ x: '0', opacity: 0 }} 
              transition={{ delay: 0.3 }}
            >
              WELCOME!
            </motion.h1>
            <motion.p 
              animate={{ x: 0, opacity: 1 }} 
              initial={{ x: '0', opacity: 0 }} 
              transition={{ delay: 1 }} 
              className="py-3 text-4xl"
            >
              MY NAME IS 
              <motion.span 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: '0', opacity: 0 }} 
                transition={{ delay: 1.6 }} 
                className="text-yellow-500"
              > CODY COOPER
              </motion.span>
            </motion.p>
            <motion.p 
              animate={{ x: 0, opacity: 1 }} 
              initial={{ x: '0', opacity: 0 }} 
              transition={{ delay: 4 }} 
              className="text-2xl"
            >
              I AM A  
              <motion.span 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: '0', opacity: 0 }} 
                transition={{ delay: 4.5 }} 
                className="text-blue-400"
              > FULL STACK WEB DEVELOPER
              </motion.span>
            </motion.p>
            <div className='flex flex-row justify-center gap-4 mt-4'>
              <motion.img 
                className='w-12 hover:animate-pulse' 
                alt="MongoDB" src={mongoIcon.toString()} 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: -100, opacity: 0 }} 
                transition={{ delay: 6.4 }} 
              />
              <motion.img 
                className='w-12 hover:animate-pulse' 
                alt="Express" src={expressIcon.toString()} 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: -100, opacity: 0 }} 
                transition={{ delay: 6.2 }} 
              />
              <motion.img 
                className='w-12 hover:animate-pulse' 
                alt="React" 
                src={reactIcon.toString()} 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: -100, opacity: 0 }} 
                transition={{ delay: 6 }} 
              />
              <motion.img 
                className='w-12 hover:animate-pulse' 
                alt="Node" 
                src={nodeIcon.toString()} 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: -100, opacity: 0 }} 
                transition={{ delay: 5.8 }} 
              />
            </div>
            <motion.button 
              className='text-lg animate-pulse p-0 mt-3 hover:font-bold' 
              onClick={() => handlePageChange('About')} 
              animate={{ x: 0, opacity: 1 }} 
              initial={{ x: -100, opacity: 0 }} 
              transition={{ delay: 8 }}
            >
              Continue &#x2192;
            </motion.button>
              
            </div>
          </div>
      </div>
    )
};
