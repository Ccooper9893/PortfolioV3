import React from "react";
import selfie from '../../assets/images/selfie2-colorized-sm-burned.png'
import '../styles/transitions.css'

export default function Home({handlePageChange}) {
    return (
        <div className="hero mt-14 ">
          
        <div className="hero-content p-0 flex-col-reverse lg:flex-row-reverse">
        <button className="glass nextPage btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => handlePageChange('About')}>More</button>
          <img className="fade-in-4" src={selfie} alt="Cody Cooper"/>
          <div className="text-center">
            <h1 className="text-7xl fade-in-1">WELCOME!</h1>
            <p className="py-3 text-5xl fade-in-2 text-white">MY NAME IS <span className="text-yellow-500 fade-in-3">CODY COOPER</span></p>
            <p className="text-2xl fade-in-5 text-white">I AM A <span className="text-blue-400 fade-in-6 shadow">FULL STACK WEB DEVELOPER</span></p>
          </div>
          
        </div>
      </div>
    )
};
