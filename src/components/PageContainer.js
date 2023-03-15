// import userEvent from "@testing-library/user-event";
import React from "react";
import { useState } from "react";
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home': return <Home handlePageChange={handlePageChange}></Home>;
            case 'About': return <About handlePageChange={handlePageChange}></About>;
            case 'Projects': return <Projects handlePageChange={handlePageChange}></Projects>;
            case 'Resume': return <Resume handlePageChange={handlePageChange}></Resume>;
            case 'Contact': return <Contact></Contact>;
            default: return <Home></Home>;
        };  
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div className="pageContainer">
            <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
            {renderPage()}
        </div>
    );
};
