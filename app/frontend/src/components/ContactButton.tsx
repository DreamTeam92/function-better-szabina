import { motion } from "framer-motion";
import Spinner from "./Spinner";

type Props = {
  isSending: boolean;
};

export default function ContactButton({
  isSending,
}: Props) {

  return (

    <motion.button

      whileHover={{
        scale: 1.02,
      }}

      whileTap={{
        scale: 0.97,
      }}

      disabled={isSending}

      type="submit"

      className="
      relative
      w-full
      rounded-full
      bg-foreground
      py-5
      text-[10px]
      uppercase
      tracking-[0.2em]
      font-medium
      text-primary-foreground
      transition-all
      duration-500
      disabled:cursor-not-allowed
      disabled:opacity-90
      "

    >

      <span
        className="
        flex
        items-center
        justify-center
        gap-3
        "
      >

        {isSending ? (

          <>

            <Spinner />

            Sending your enquiry...

          </>

        ) : (

          "Book Consultation"

        )}

      </span>

    </motion.button>

  );

}
