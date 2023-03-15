import React from "react";
import githubLogo from '../assets/icons/GithubLogowhite.png';
import linkedLogo from '../assets/icons/linkedinWhite.png';

export default function Header({ currentPage, handlePageChange}) {
  return (
    <div className="navbar bg-base-100 shadow-lg shadow-stone-800">

      <div className="navbar-start">
        <div className="dropdown dropdown-hover z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu dropdown-content bg-gray-800 shadow rounded-box w-26">
            <li><button className={currentPage === 'Home' ? 'active' : 'nav-link'} onClick={() => handlePageChange('Home')}>Home</button></li>
            <li><button className={currentPage === 'About' ? 'active' : 'nav-link'} onClick={() => handlePageChange('About')}>About</button></li>
            <li><button className={currentPage === 'Projects' ? 'active' : 'nav-link'} onClick={() => handlePageChange('Projects')}>Projects</button></li>
            <li><button className={currentPage === 'Resume' ? 'active' : 'nav-link'} onClick={() => handlePageChange('Resume')}>Resume</button></li>
            <li><button className={currentPage === 'Contact' ? 'active' : 'nav-link'} onClick={() => handlePageChange('Contact')}>Contact</button></li>
          </ul>
        </div>
        <button className="btn-disabled bg-transparent text-xl ml-4 text-yellow-500">CODY COOPER</button>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><button className={currentPage === 'Home' ? 'active' : 'nav-link'} onClick={() => handlePageChange('Home')}>Home</button></li>
          <li><button className={currentPage === 'About' ? 'active' : 'nav-link'} onClick={() => handlePageChange('About')}>About</button></li>
          <li><button className={currentPage === 'Projects' ? 'active' : 'nav-link'} onClick={() => handlePageChange('Projects')}>Projects</button></li>
          <li><button className={currentPage === 'Resume' ? 'active' : 'nav-link'} onClick={() => handlePageChange('Resume')}>Resume</button></li>
          <li><button className={currentPage === 'Contact' ? 'active' : 'nav-link'} onClick={() => handlePageChange('Contact')}>Contact</button></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <a href="https://github.com/Ccooper9893" className="mx-2 hover:animate-pulse" target="_blank" rel="noopener noreferrer"><img className="w-6" alt="github link" src={githubLogo.toString()}></img></a>
        <a href="https://www.linkedin.com/in/cody-cooper-3a951a24b/" className="mx-3 hover:animate-spin" target="_blank" rel="noopener noreferrer"><img className="w-6" alt="linkedin link" src={linkedLogo.toString()}></img></a>
      </div>
    </div>
  );
};



