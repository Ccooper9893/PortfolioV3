// import userEvent from "@testing-library/user-event";
import React from "react";
import { useState } from "react";
import Header from './Header';
import Footer from "./Footer";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import selfie from '../assets/images/browntintselfie2-1lr-sm.png'

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home': return <Home></Home>;
            case 'About': return <About></About>;
            case 'Projects': return <Projects></Projects>;
            case 'Resume': return <Resume></Resume>;
            case 'Contact': return <Contact></Contact>;
            default: return <Home></Home>;
        };
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div className="pageContainer">
            <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
            <div className="h-96 carousel carousel-vertical rounded-box">

                <div className="carousel-item flex justify-center">
                    
                        <h1 className="text-center hello">HELLO THERE!</h1>
                    
                        <img className="max-w-sm" src={selfie.toString()}></img>
                </div> 
                <div className="carousel-item h-full justify-center">
                    <h1 className="text-center">MY SKILLS</h1>
                </div> 

                <div className="carousel-item h-full justify-center">
                    <h1 className="text-center">PROJECTS</h1>
                </div> 

                <div className="carousel-item h-full justify-center">
                    <h1 className="text-center">CONTACT ME</h1>
                </div> 
            </div>
        </div>
    );
};