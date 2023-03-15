import React, {useState} from "react";
import { motion } from 'framer-motion';

export default function Contact() {

    const [ name, setName ] = useState('');
    const [ email, setEmail] = useState('');
    const [ message, setMessage ] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        switch (inputType) {
            case 'name': setName(inputValue);
            break;
            case 'email': setEmail(inputValue);
            break;
            case 'message': setMessage(inputValue);
            break;
            default:
            break;
        }

    }

    return (
        <div>
            <h1 className="text-center text-4xl lg:text-6xl text-blue-400 mt-5">CONTACT</h1>
            <div class="flex justify-center">
                <div className=" w-60 lg:w-80 mt-20 border-1 border-black shadow-sm shadow-white p-3">
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text text-xl text-white">Name:</span>
                        </label>
                        <input 
                            className="input input-bordered w-full max-w-xs text-lg bg-gray-200 text-black" 
                            type="text" 
                            name="name" 
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>

            </div>

        </div>
    )
};