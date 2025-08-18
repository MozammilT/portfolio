import { motion } from "motion/react";

function Card({ text, style, image, containerRef }) {
  return image && !text ? (
    <motion.img
      src={image}
      className="absolute w-15 cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragElastic={3}
      dragConstraints={containerRef}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 bg-storm font-extralight w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragElastic={3}
      dragConstraints={containerRef}
    >
      {text}
    </motion.div>
  );
}

export default Card;
