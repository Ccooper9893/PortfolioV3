import React from "react";
import './styles/Header.css'

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header">
            <ul>
                <li
                className={ currentPage === 'About' ? 'activeNav' : 'lazyNav' }
                onClick={() => handlePageChange('About')}
                 >ABOUT</li>

                <li
                className={ currentPage === 'Projects' ? 'activeNav' : 'lazyNav' }
                onClick={() => handlePageChange('Projects')}
                >PROJECTS</li>

                <li 
                className={ currentPage === 'Home' ? 'activeNav' : 'lazyNav' }
                onClick={() => handlePageChange('Home')}
                >HOME</li>
                
                <li 
                className={ currentPage === 'Resume' ? 'activeNav' : 'lazyNav' }
                onClick={() => handlePageChange('Resume')}
                >RESUME</li>

                <li 
                className={ currentPage === 'Contact' ? 'activeNav' : 'lazyNav' }
                onClick={() => handlePageChange('Contact')}
                >CONTACT</li>
            </ul>
        </div>
    );
};