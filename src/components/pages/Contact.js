import React, { useState } from "react";
import { motion } from "framer-motion";
import { validate } from "email-validator";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log("Form blurred");

    if (inputType === "name" && !inputValue) {
      setErrorMessage("Please enter your name!");
      return;
    } else if (inputType === "email" && !validate(inputValue)) {
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

    switch (inputType) {
      case "name":
        setName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      case "message":
        setMessage(inputValue);
        break;
      default:
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
        },
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent!");
          setName("");
          setEmail("");
          setMessage("");
          console.log(result.text)
        },
        (error) => {
          setErrorMessage("There was an error sending your message. Please try again.");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (name && email && message) {
      sendEmail(e);
    } else {
      setErrorMessage("Please provide required information");
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl lg:text-6xl text-blue-400 mt-5">
        CONTACT
      </h1>
      <div className="flex justify-center bg-gray">
        <motion.div
          className=" w-60 lg:w-80 mt-10 border-1 border-black shadow-lg shadow-gray-700 rounded-lg p-3 bg-zinc-800"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
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
              onBlur={(e) => handleBlur(e)}
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-xl text-white">Email:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs text-lg bg-gray-200 text-black"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              onBlur={(e) => handleBlur(e)}
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-xl text-white">Message:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs text-lg bg-gray-200 text-black"
              type="text"
              name="message"
              placeholder="Send me a message!"
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
          <div className="flex justify-center flex-col my-5">
            <button
              type="submit"
              className="btn mx-16 btn-active border-none btn-accent hover:bg-yellow-500"
              onClick={handleSubmit}
            >
              Send
            </button>
            {successMessage && (
              <h5 className="text-center text-xl mt-3 text-green-600">
                {successMessage}
              </h5>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
