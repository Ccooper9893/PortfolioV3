import React from "react";
import { motion } from "framer-motion";
import bigGear from '../../assets/icons/bg-gear.png';
import mdGear from '../../assets/icons/md-gear.png';
import smGear from '../../assets/icons/sm-gear.png';
import target from '../../assets/icons/career-goals.png';
import briefcase from '../../assets/icons/briefcase.png';
import lightbulb from '../../assets/icons/lightbulb.png';

export default function About({ handlePageChange }) {
    return (
          <div className="h-full flex-col text-center about">
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-20 mx-10 mt-12">
              <motion.div 
              className="shadow-sm hover:shadow-blue-500 p-4"
                  animate={{ x: 0, opacity: 1 }} 
                  initial={{ x: '-100vw', opacity: 0 }} 
                  transition={{ type: 'tween', ease: "easeIn", delay: 0.5 }}
                >
                <div className="flex relative justify-center mb-14 opacity-90">
                    <motion.img 
                      src={bigGear} 
                      className="w-20 lg:w-24 animate-spin rotate-180" 
                      alt="Big gear" 
                      style={{animationDuration: '15s'}}
                    >
                    </motion.img>
                    <img 
                      src={mdGear} 
                      className="w-20 lg:w-24 animate-spin rotate-180" 
                      alt="medium gear" 
                      style={{animationDuration: '15s'}}
                    >
                    </img>
                    <img 
                      src={smGear} 
                      className="absolute lg:w-24 w-20 animate-spin" 
                      alt="Small gear" 
                      style={{animationDuration: '15s', marginLeft: '15px', top: '36px'}}
                      >
                    </img>
                  </div>
                  <motion.h3 className="text-yellow-500 lg:text-2xl shadow-sm">DRIVE</motion.h3>
                  <motion.p className="text-lg lg:text-2xl mx-8">
                      My passion lies in building dynamic, user-friendly web applications that solve real-world problems. 
                      I am eager to continue growing as a developer and to contribute to innovative solutions that push the boundaries of what is possible in web development.
                  </motion.p>
                </motion.div>

                <motion.div  
                className="shadow-sm hover:shadow-blue-500 p-4"
                  animate={{ x: 0, opacity: 1 }} 
                  initial={{ x: '100vh', opacity: 0 }} 
                  transition={{ 
                    type:"tween", 
                    ease: "easeIn", 
                    delay: 1 
                  }}
                >
                  <div className="flex justify-center mt-2">
                    <img className="flex justify-center opacity-90 w-28 mb-8" src={target} alt="arrow target">
                    </img>
                  </div>
                  <h3 className="text-yellow-500 lg:text-2xl shadow-sm">GOALS</h3>
                  <p className="text-lg lg:text-2xl mx-8">
                    My goal is to work with a team to develop dynamic and responsive web applications that can make an impact in the tech industry. 
                    I am committed to pursuing opportunities that challenge and push me to grow both personally and professionally as a web developer.
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center mt-7 shadow-sm hover:shadow-blue-500 p-4"
                  animate={{ x: 0, opacity: 1 }} 
                  initial={{ x: '-100vw', opacity: 0 }} 
                  transition={{ type:"tween", ease: "easeIn", delay: 1.5 }}
                >
                  <div className="flex justify-center mb-7 mt-2">
                    <img className="opacity-90 w-28" src={briefcase} alt="briefcase">
                      </img>
                  </div>
                  <h3 className="text-yellow-500 lg:text-2xl shadow-sm mt-6">EXPERIENCE</h3>
                    <motion.p className="text-lg lg:text-2xl mx-8">
                        My background in customer service and team leadership roles has given me the ability to communicate effectively and work collaboratively. Having built and led a team of over 40 employees, I understand the importance of effective communication and respectfulness.
                    </motion.p>
                </motion.div>

                <motion.div 
                  className="shadow-sm hover:shadow-blue-500 p-4"
                  animate={{ x: 0, opacity: 1 }} initial={{ x: '100vh', opacity: 0 }} 
                  transition={{ type:"tween", ease: "easeIn", delay: 1.8 }}
                >
                  <div className="flex justify-center">
                    <img className="flex justify-center opacity-90 mb-6 w-36 animate-pulse" src={lightbulb} alt="lightbulb">
                      </img>
                  </div>
                  <h3 className="text-yellow-500 lg:text-2xl shadow-sm">TRAITS</h3>
                    <motion.p className="text-lg lg:text-2xl">
                    I'm a hardworking and respectful person who values learning from others. I enjoy woodworking and coding as hobbies, and I believe in the importance of listening to others to continue growing both personally and professionally.
                    </motion.p>
                </motion.div>

              </div>
              <motion.button 
                className='text-2xl lg:text-4xl animate-pulse p-0 mt-20 mb-10 hover:text-amber-500' 
                onClick={() => handlePageChange('Skills')} 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: -100, opacity: 0 }} 
                transition={{ delay: 8 }}
              >
                Continue &#x2192;
              </motion.button>
          </div> 
    );
};


