import React from "react";
import getFitPic from "../../assets/screenshots/getfitScreenshot.png";
import bringPopcornPic from "../../assets/screenshots/bringpopcornscreenshot.png";
import omegaBlogsPic from "../../assets/screenshots/dashboardScreenshot.png";
import getFitLogo from "../../assets/screenshots/MuscleLogoNoCircle.png";
import omegaBlogsLogo from "../../assets/screenshots/omegaLogo.png";
import popcornLogo from "../../assets/screenshots/popcornLogo.png";
import githubLogo from "../../assets//icons/GithubLogowhite.png"

export default function Skills() {
    return (
        <div>
            <h1 className="text-center lg:text-6xl text-blue-400 mt-10">My Projects</h1>
            <h6 className="text-center">Click to view projects</h6>

            <div className="flex justify-center mt-10">
               
                <div>
                    {/* The button to open modal */}
                    <label htmlFor="omegaModal" className="btn bg-transparent border-none hover:bg-transparent">
                        <img className=" w-24" alt="omega symbol" src={omegaBlogsLogo}></img>
                    </label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="omegaModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box bg-neutral-500">
                            <h3 className="text-6xl text-yellow-500 border-b-2 border-black">Omega Blogs</h3>
                            <p className="py-4 text-xl font-bold text-black">Omega Blogs is a space in which you can share your ideas and gain knowledge from others.</p>
                            <img src={omegaBlogsPic}></img>
                            <div className="modal-action">
                                <label htmlFor="omegaModal" className="btn bg-black">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* The button to open modal */}
                    <label htmlFor="getFitModal" className="btn bg-transparent border-none hover:bg-transparent">
                        <img className=" w-32" src={getFitLogo}></img>
                    </label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="getFitModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box bg-neutral-500">
                            <h3 className="text-6xl text-yellow-500 border-b-2 border-black">GetFit</h3>
                            <p className="py-4 text-xl font-bold text-black">GetFit is a website devoted to assisting users to become physically active and providing the necessary tools to aid users on their fitness journeys.</p>
                            <img src={getFitPic}></img>
                            <div className="modal-action">
                                <label htmlFor="getFitModal" className="btn bg-black">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* The button to open modal */}
                    <label htmlFor="bringPopModal" className="btn bg-transparent border-none hover:bg-transparent">
                        <img className=" w-20" alt="" src={popcornLogo}></img>
                    </label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="bringPopModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box bg-neutral-500">
                            <h3 className="text-6xl text-yellow-500 border-b-2 border-black">Bring Popcorn</h3>
                            <p className="py-4 text-xl font-bold text-black">Bring Popcorn is a movie search website that was developed with the goal of providing users with one, convenient location to discover and search for movies.</p>
                            <img src={bringPopcornPic}></img>
                            <div className="modal-action">
                                <label htmlFor="bringPopModal" className="btn bg-black">Close</label>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
};