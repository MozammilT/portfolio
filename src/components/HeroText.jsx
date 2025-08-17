import React from "react";
import { FlipWords } from "./ui/flip-words";
import { motion } from "motion/react";

function HeroText() {
  const words = ["secure", "modern", "clean", ""];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Mozammil
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A developer <br /> dedicated to crafting
          </motion.p>
          <motion.div
            className="flex justify-center items-center px-4"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <div className="text-6xl mx-auto font-black text-white">
              <FlipWords words={words} /> <br />
            </div>
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.div
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Mozammil
        </motion.div>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            className="flex justify-center items-center px-4"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <div className="text-6xl mx-auto font-black text-white">
              <FlipWords words={words} /> <br />
            </div>
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
