import { motion } from "framer-motion";

type Props = {
  onReset: () => void;
};

export default function ContactSuccess({ onReset }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="text-center py-24"
    >
      <motion.div
        initial={{
          scale: 0,
          rotate: -20,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          type: "spring",
        }}
        className="
          mx-auto
          mb-10
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          border
          border-gold/30
          bg-gold/5
        "
      >
        <span className="text-4xl text-gold">
          ✓
        </span>
      </motion.div>

      <h2 className="font-heading text-5xl font-light mb-8">
        Thank You
      </h2>

      <p className="font-body text-muted-foreground leading-8 max-w-xl mx-auto mb-6">
        Your consultation request has been received successfully.
      </p>

      <p className="font-body text-muted-foreground leading-8 max-w-xl mx-auto mb-12">
        Sabina will personally reply within <strong>24 hours.</strong>
      </p>

      <p className="font-body italic text-foreground/80 mb-16">
        We look forward to helping you move better,
        feel stronger and live with confidence.
      </p>

      <button
        onClick={onReset}
        className="
          rounded-full
          border
          border-gold/25
          px-10
          py-4
          text-sm
          uppercase
          tracking-[0.2em]
          transition-all
          duration-500
          hover:bg-gold/5
          hover:border-gold/50
        "
      >
        Send Another Enquiry
      </button>
    </motion.div>
  );
}

