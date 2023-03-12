// import userEvent from "@testing-library/user-event";
import React from "react";
import { useState, useEffect } from "react";
import Header from './Header';
import Footer from "./Footer";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './styles/transitions.css'

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home': return <Home handlePageChange={handlePageChange}></Home>;
            case 'About': return <About></About>;
            case 'Projects': return <Projects></Projects>;
            case 'Resume': return <Resume></Resume>;
            case 'Contact': return <Contact></Contact>;
            default: return <Home></Home>;
        };
        
    };

    useEffect(() => {
        const container = document.querySelector(".fade-in-container");
        container.style.opacity = 1;
    }, []);

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div className="pageContainer fade-in-container">
            <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
            {renderPage()}
        </div>
    );
};