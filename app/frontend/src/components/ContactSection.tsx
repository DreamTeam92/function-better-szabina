import { useState } from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goals: '',
    location: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. I will be in touch soon.');
  };

  return (
    <section id="contact" className="py-40 md:py-56">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/70 font-medium mb-8">
              Get In Touch
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 font-light">
              Book Your Consultation
            </h2>
            <p className="font-body text-[14px] text-muted-foreground font-light leading-[2]">
              Take the first step towards moving better and feeling stronger.
            </p>
          </div>

          {/* Contact links */}
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-gold/30 hover:bg-gold/4 transition-all duration-500"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-foreground/40" strokeWidth={1.2} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-gold/30 hover:bg-gold/4 transition-all duration-500"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground/40" strokeWidth={1.2} />
            </a>
            <a
              href="mailto:hello@functionbetter.com"
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-gold/30 hover:bg-gold/4 transition-all duration-500"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground/40" strokeWidth={1.2} />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label
                  htmlFor="name"
                  className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-foreground/45"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-5 bg-transparent border-0 border-b border-border/80 font-body text-[14px] text-foreground placeholder:text-muted-foreground/35 focus:outline-none focus:border-gold/40 transition-colors duration-500 font-light"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="email"
                  className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-foreground/45"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-5 bg-transparent border-0 border-b border-border/80 font-body text-[14px] text-foreground placeholder:text-muted-foreground/35 focus:outline-none focus:border-gold/40 transition-colors duration-500 font-light"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label
                  htmlFor="goals"
                  className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-foreground/45"
                >
                  Goals
                </label>
                <select
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-0 py-5 bg-transparent border-0 border-b border-border/80 font-body text-[14px] text-foreground focus:outline-none focus:border-gold/40 transition-colors duration-500 font-light"
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
              <div className="space-y-4">
                <label
                  htmlFor="location"
                  className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-foreground/45"
                >
                  Preferred Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-0 py-5 bg-transparent border-0 border-b border-border/80 font-body text-[14px] text-foreground focus:outline-none focus:border-gold/40 transition-colors duration-500 font-light"
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

            <div className="space-y-4">
              <label
                htmlFor="message"
                className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-foreground/45"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-0 py-5 bg-transparent border-0 border-b border-border/80 font-body text-[14px] text-foreground placeholder:text-muted-foreground/35 focus:outline-none focus:border-gold/40 transition-colors duration-500 resize-none font-light"
                placeholder="Tell me a little about yourself and what you'd like to achieve..."
              />
            </div>

            <div className="pt-10 text-center">
              <button
                type="submit"
                className="px-14 py-5 bg-foreground text-primary-foreground font-body text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-foreground/85 transition-all duration-500 ease-out"
              >
                Book Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
