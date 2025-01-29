// import React from 'react';
import { TbBrandNextjs } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { motion } from "framer-motion";

const Technologies = () => {
  // Continuous bounce animation for the icons
  const bounceVariants = {
    bounce: {
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 1.5,
        repeat: Infinity, // Loop forever
        repeatType: "mirror", // Smooth back-and-forth
        ease: "easeInOut",
      },
    },
    hover: { scale: 1.1, transition: { duration: 0.2 } }, // Hover effect
  };

  // Animation for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, key: 'react' },
            { icon: <TbBrandNextjs className="text-7xl text-green-800" />, key: 'nextjs' },
            { icon: <FaWordpress className="text-7xl text-gray-400" />, key: 'wordpress' },
            { icon: <DiJavascript className="text-7xl text-orange-600" />, key: 'javascript' },
            { icon: <RiTailwindCssFill className="text-7xl text-cyan-400" />, key: 'tailwind' },
          ].map((tech) => (
            <motion.div
              key={tech.key}
              variants={bounceVariants}
              animate="bounce" // Apply the bounce animation
              whileHover="hover" // Apply the hover effect
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technologies;