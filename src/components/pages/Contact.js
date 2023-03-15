import React, {useState} from "react";


export default function Contact() {

    const [ name, setName ] = useState('');
    const [ email, setEmail] = useState('');
    const [ message, setMessage ] = useState('');

    return (
        <h1>Contact</h1>
    )
};