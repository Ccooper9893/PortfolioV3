import React from "react";
import {motion} from "framer-motion";

export default function Resume({handlePageChange}) {

    const frontSkills = ['HTML', 'CSS', 'Javascript', 'React', 'Handlebars', 'Bootstrap', 'Tailwind', 'Daisy UI', 'Framer Motion'];
    const backSkills = ['NodeJS', 'Express', 'MongoDB/Mongoose', 'mySQL/Sequelize', 'GraphQL', 'REST', 'Web Tokens', 'APIs'];
    const otherSkills = [ 'Git', 'Postman', 'GIMP', 'Figma',  'Lucidchart', 'Continuous Integration', 'Wireframing', 'Communication'];
    return (
        <div className="flex-col justify-center text-center mt-6">
            
            <h1 className="text-center text-4xl lg:text-6xl text-blue-400 mt-5">SKILLS</h1>
            
            <div className="grid lg:grid-cols-3 gap-2 lg:gap-10 mx-10 lg:mx-40">

                <motion.div className="my-6 border-2 border-black shadow-md shadow-black"
                    animate={{ y: 0, opacity: 1 }} 
                    initial={{ y: 0, opacity: 0 }} 
                    transition={{ delay: 0.8 }}
                >
                    <h2 className="text-2xl text-white border-b border-b-blue-400">BACK-END</h2>
                    <ul className="my-4">
                        {backSkills.map((skill, index) => (
                            <li className="text-xl mb-2" key={index}>{skill}</li>
                        ))}
                    </ul>      
                </motion.div>

                <motion.div className="my-6 border-2 border-black shadow-md shadow-black"
                    animate={{ y: 0, opacity: 1 }} 
                    initial={{ y: 0, opacity: 0 }} 
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-2xl text-white border-b border-b-blue-400">FRONT-END</h2>
                    <ul className="mt-4">
                        {frontSkills.map((skill, index) => (
                            <li className="text-xl mb-2" key={index}>{skill}</li>
                        ))}
                    </ul>         
                </motion.div>

                <motion.div className="my-6 border-2 border-black shadow-md shadow-black"
                    animate={{ y: 0, opacity: 1 }} 
                    initial={{ y: 0, opacity: 0 }} 
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-2xl text-white border-b border-b-blue-400">OTHER</h2>
                    <ul className="mt-4">
                        {otherSkills.map((skill, index) => (
                            <li className="text-xl mb-2" key={index}>{skill}</li>
                        ))}
                    </ul>     
                </motion.div>
                
            </div>
            
            <motion.a 
                className="btn glass text-white shadow-sm shadow-black btn-wide" 
                href="Resume.pdf" 
                download
                animate={{ y: 0, opacity: 1 }} 
                initial={{ y: 0, opacity: 0 }} 
                transition={{ delay: 1.5 }}
            >
                Download Resume
            </motion.a>
            <div>
                <motion.button 
                className='text-lg lg:text-xl animate-pulse p-0 text-amber-500 mt-8 hover:text-white' 
                onClick={() => handlePageChange('Contact')} 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: 0, opacity: 0 }} 
                transition={{ type:'spring', delay: 2 }}
                >
                Continue &#x2192;
                </motion.button>
            </div>
        </div>
    )
};