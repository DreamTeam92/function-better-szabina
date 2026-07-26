import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSectionPremium() {
  return (
    <section
      id="contact"
      className="py-40 md:py-56"
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
