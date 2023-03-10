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
            {renderPage()}
            <Footer></Footer>
        </div>
    );
};