import React from "react";
import { motion } from "framer-motion";

export default function Resume({ handlePageChange }) {
  const frontSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Handlebars",
    "Bootstrap",
    "Tailwind",
    "Daisy UI",
    "Framer Motion",
    "Next.js"
  ];
  const backSkills = [
    "NodeJS",
    "Express",
    "MongoDB/Mongoose",
    "mySQL/Sequelize",
    "GraphQL",
    "REST",
    "Web Tokens",
    "APIs",
    "Google Cloud Storage",
  ];
  const otherSkills = [
    "Git",
    "Postman",
    "GIMP",
    "Figma",
    "Lucidchart",
    "Continuous Integration",
    "Wireframing",
    "Communication",
  ];
  return (
    <main className="flex-col justify-center text-center mt-6">
      <header className="text-center text-4xl lg:text-6xl text-blue-400 mt-5">
        SKILLS
      </header>

      <section className="grid lg:grid-cols-3 gap-2 lg:gap-10 mx-10 lg:mx-40">
        <motion.article
          className="my-6 p-4 border-2 border-black shadow-md shadow-black bg-zinc-700"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 0, opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl text-white border-b border-b-blue-400">
            BACK-END
          </h2>
          <ul className="my-4">
            {backSkills.map((skill, index) => (
              <li className="text-xl mb-2" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          className="my-6 p-4 border-2 border-black shadow-md shadow-black bg-zinc-800"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 0, opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl text-white border-b border-b-blue-400">
            FRONT-END
          </h2>
          <ul className="mt-4">
            {frontSkills.map((skill, index) => (
              <li className="text-xl mb-2" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          className="my-6 p-4 border-2 border-black shadow-md shadow-black bg-zinc-900"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 0, opacity: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-2xl text-white border-b border-b-blue-400">
            OTHER
          </h2>
          <ul className="mt-4">
            {otherSkills.map((skill, index) => (
              <li className="text-xl mb-2" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </motion.article>
      </section>

      <motion.a
        className="btn glass text-white shadow-sm shadow-black btn-wide"
        href="Resume.pdf"
        download
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 0, opacity: 0 }}
        transition={{ delay: 1.5 }}
      >
        Download Resume
      </motion.a>
      <section>
        <motion.button
          className="text-lg lg:text-xl animate-pulse p-0 text-slate-400 my-8 hover:text-white"
          onClick={() => handlePageChange("Contact")}
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: "-30vw", opacity: 0 }}
          transition={{ type: "spring", delay: 2 }}
        >
          Continue &#x2192;
        </motion.button>
        </section>
    </main>
  );
}
