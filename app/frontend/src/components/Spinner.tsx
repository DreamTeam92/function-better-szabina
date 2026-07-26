import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
        ease: "linear",
      }}
      className="relative h-5 w-5"
    >
      <div
        className="
          absolute
          inset-0
          rounded-full
          border-2
          border-gold/20
        "
      />

      <motion.div
        className="
          absolute
          inset-0
          rounded-full
          border-2
          border-transparent
          border-t-gold
        "
      />

      <motion.div
        animate={{
          scale: [0.85, 1, 0.85],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-gold/5
        "
      />
    </motion.div>
  );
}

