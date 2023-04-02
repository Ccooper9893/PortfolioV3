import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { validate } from "email-validator";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();


  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log("Form blurred");
    console.log("Form blurred");

    if (inputType === "user_name" && !inputValue) {
      setErrorMessage("Please enter your name!");
      return;
    } else if (inputType === "user_email" && !validate(inputValue)) {
      setErrorMessage("Please enter a valid email!");
      return;
    } else if (inputType === "message" && !inputValue) {
      setErrorMessage("Please provide a message!");
      return;
    } else {
      setErrorMessage("");
    }
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(inputType);
    console.log(inputValue);

    setSuccessMessage("");
    setErrorMessage("");

    switch (inputType) {
      case "user_name":
        setName(inputValue);
        break;
      case "user_email":
        setEmail(inputValue);
        break;
      case "message":
        setMessage(inputValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      emailjs.sendForm('service_0ibywxi', 'template_dhwv5mr', form.current, '3N05w40sHCa9AFukg')
      .then((result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent!");
      }, (error) => {
          console.log(error);
      });
      setName("");
      setEmail("");
      setMessage("");
      return;
    } else {
      setErrorMessage("Please provide required information");
      return;
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl lg:text-6xl text-blue-400 mt-5">
        CONTACT
      </h1>
      <div className="flex justify-center">
      <form ref={form} onSubmit={handleSubmit} className="m-auto mb-10 bg-gray">
        <motion.div
          className="m-auto border-1 p-4 border-black shadow-lg shadow-gray-700 rounded-lg bg-zinc-800"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <div className="form-control justify-center p-3 text-center">
            <label className="label">
              <span className="label-text text-white">Name:</span>
            </label>
            <input
              className="input input-bordered text-lg bg-gray-400 focus:bg-gray-200 text-black"
              autoComplete="off"
              type="text"
              name="user_name"
              value={name}
              onChange={handleInputChange}
              onBlur={(e) => handleBlur(e)}
            />
          
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-white">Email:</span>
            </label>
            <input
              className="input input-bordered text-lg bg-gray-400 focus:bg-gray-200 text-black"
              autoComplete="off"
              type="email"
              name="user_email"
              value={email}
              onChange={handleInputChange}
              onBlur={(e) => handleBlur(e)}
            />
          </div>
          <div className="form-control justify-center">
            <label className="label">
              <span className="label-text text-white">Message:</span>
            </label>
            <textarea 
              className="text-area input input-bordered text-lg pt-2 bg-gray-400 focus:bg-gray-200 text-black"
              autoComplete="off"
              type="text"
              name="message"
              value={message}
              onChange={handleInputChange}
              onBlur={(e) => handleBlur(e)}
            />
          </div>
          {errorMessage && (
            <h4 className="text-center text-xl mt-3 text-red-500">
              {" "}
              {errorMessage}{" "}
            </h4>
          )}
          <div className="flex justify-center p-8">
            <button
              type="submit"
              className="btn btn-wide btn-active border-none btn-accent hover:bg-yellow-500"
              
            >
              Send
            </button>
            {successMessage && (
              <h5 className="text-center text-xl mt-3 text-green-600">
                {successMessage}
              </h5>
            )}
          </div>
          <div className="divider">OR</div>
          <h2 className="text-xl">Send me an email at <span className="italic text-2xl">ccooper.9893@gmail.com</span></h2>
          </div>
        </motion.div>
      </form>
      </div>
    </div>
  );
}
