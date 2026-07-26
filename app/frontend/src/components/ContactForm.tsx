import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactButton from "./ContactButton";
import ContactSuccess from "./ContactSuccess";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goals: "",
    location: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setErrorMessage("");
    setIsSending(true);

    try {

      const response = await fetch(
        "https://function-better-api.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Unable to send enquiry.");
      }

      setTimeout(() => {

  setIsSending(false);

  setIsSubmitted(true);

}, 700);

    } catch (error) {

      console.error(error);

      setIsSending(false);

      setErrorMessage(
        "We're sorry. Something interrupted your request. Please try again."
      );

    }
  };

  return (
  <AnimatePresence mode="wait">

    {isSubmitted ? (

      <motion.div
        key="success"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.7 }}
      >

        <ContactSuccess
          onReset={() => {

            setIsSubmitted(false);

            setFormData({
              name: "",
              email: "",
              goals: "",
              location: "",
              message: "",
            });

          }}
        />

      </motion.div>

) : (

      <motion.div
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >


      <div className="text-center mb-20">

        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium mb-8">
          Get In Touch
        </p>

        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 font-light">
          Book Your Consultation
        </h2>

        <p className="font-body text-[14px] text-muted-foreground font-light leading-[2]">
          Take the first step towards moving better and feeling stronger.
        </p>

      </div>

      {errorMessage && (

        <div className="mb-10 rounded-2xl border border-red-200 bg-red-50/50 p-6 text-center">

          <p className="text-red-700 text-sm">

            {errorMessage}

          </p>

        </div>

      )}

      <form
        onSubmit={handleSubmit}
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

  {/* Name */}

  <div className="space-y-4">

    <label
      htmlFor="name"
      className="font-body text-[10px] uppercase tracking-[0.25em] text-foreground/45"
    >
      Name
    </label>

    <input
      id="name"
      name="name"
      type="text"
      autoComplete="name"
      required
      value={formData.name}
      onChange={handleChange}
      placeholder="Your name"
      className="
      w-full
      border-0
      border-b
      border-border/80
      bg-transparent
      px-0
      py-5
      text-[14px]
      font-light
      text-foreground
      placeholder:text-muted-foreground/35
      transition-all
      duration-500
      focus:border-gold/40
      focus:outline-none
      "
    />

  </div>

  {/* Email */}

  <div className="space-y-4">

    <label
      htmlFor="email"
      className="font-body text-[10px] uppercase tracking-[0.25em] text-foreground/45"
    >
      Email
    </label>

    <input
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      required
      value={formData.email}
      onChange={handleChange}
      placeholder="your@email.com"
      className="
      w-full
      border-0
      border-b
      border-border/80
      bg-transparent
      px-0
      py-5
      text-[14px]
      font-light
      text-foreground
      placeholder:text-muted-foreground/35
      transition-all
      duration-500
      focus:border-gold/40
      focus:outline-none
      "
    />

  </div>

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">

  {/* Goals */}

  <div className="space-y-4">

    <label
      htmlFor="goals"
      className="font-body text-[10px] uppercase tracking-[0.25em] text-foreground/45"
    >
      Goals
    </label>

    <select
      id="goals"
      name="goals"
      value={formData.goals}
      onChange={handleChange}
      className="
      w-full
      border-0
      border-b
      border-border/80
      bg-transparent
      px-0
      py-5
      text-[14px]
      font-light
      text-foreground
      transition-all
      duration-500
      focus:border-gold/40
      focus:outline-none
      "
    >
      <option value="">Select your primary goal</option>
      <option value="strength">Build Strength</option>
      <option value="recovery">Injury Recovery</option>
      <option value="posture">Improve Posture</option>
      <option value="mobility">Increase Mobility</option>
      <option value="pilates">Pilates</option>
      <option value="general">General Wellbeing</option>
    </select>

  </div>

  {/* Preferred Location */}

  <div className="space-y-4">

    <label
      htmlFor="location"
      className="font-body text-[10px] uppercase tracking-[0.25em] text-foreground/45"
    >
      Preferred Location
    </label>

    <select
      id="location"
      name="location"
      value={formData.location}
      onChange={handleChange}
      className="
      w-full
      border-0
      border-b
      border-border/80
      bg-transparent
      px-0
      py-5
      text-[14px]
      font-light
      text-foreground
      transition-all
      duration-500
      focus:border-gold/40
      focus:outline-none
      "
    >
      <option value="">Select your area</option>
      <option value="las-colinas">Las Colinas</option>
      <option value="campoamor">Campoamor</option>
      <option value="cabo-roig">Cabo Roig</option>
      <option value="la-zenia">La Zenia</option>
      <option value="villamartin">Villamartín</option>
      <option value="torre-horadada">Torre de la Horadada</option>
      <option value="pinar-campoverde">Pinar de Campoverde</option>
      <option value="other">Other</option>
    </select>

  </div>

</div>
<div className="space-y-4 mt-10">

  <label
    htmlFor="message"
    className="font-body text-[10px] uppercase tracking-[0.25em] text-foreground/45"
  >
    Message
  </label>

  <textarea
    id="message"
    name="message"
    rows={6}
    value={formData.message}
    onChange={handleChange}
    placeholder="Tell me a little about yourself and what you'd like to achieve..."
    className="
      w-full
      resize-none
      border-0
      border-b
      border-border/80
      bg-transparent
      px-0
      py-5
      text-[14px]
      font-light
      leading-7
      text-foreground
      placeholder:text-muted-foreground/35
      transition-all
      duration-500
      focus:border-gold/40
      focus:outline-none
    "
  />

</div>
<div className="pt-12">

  <ContactButton
    isSending={isSending}
  />

</div>

             </form>

      </motion.div>

    )}

  </AnimatePresence>
);
}
