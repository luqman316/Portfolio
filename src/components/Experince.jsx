// import React from 'react';
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  // Animation variants for the experience cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Animation for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Ensures animation plays once per session
          variants={headingVariants}
          className="my-20 text-center text-4xl"
        >
          Experience
        </motion.h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Starts animation when 20% of card is visible
              variants={cardVariants}
              transition={{ delay: index * 0.2 }} // Staggered delay for each card
              className="flex flex-wrap mb-8 lg:justify-center"
            >
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }} // Hover effect for technologies
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
