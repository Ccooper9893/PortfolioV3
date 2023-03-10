import React from "react";
import selfie from '../../assets/images/selfie1.png'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className='main'>
            <div className='selfie'>
                <img src={selfie} alt='Cody Cooper'></img>
            </div>
        </div>
    )
};