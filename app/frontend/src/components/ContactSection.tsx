import { useState } from 'react';

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
    <section id="contact" className="py-32 md:py-44">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-light">
              Book Your Consultation
            </h2>
            <p className="font-body text-[15px] text-muted-foreground font-light leading-[1.9]">
              Take the first step towards moving better and feeling stronger.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/50"
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
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border font-body text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/50 transition-colors duration-500 font-light"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/50"
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
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border font-body text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/50 transition-colors duration-500 font-light"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label
                  htmlFor="goals"
                  className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/50"
                >
                  Goals
                </label>
                <select
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border font-body text-[14px] text-foreground focus:outline-none focus:border-gold/50 transition-colors duration-500 font-light"
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
              <div className="space-y-3">
                <label
                  htmlFor="location"
                  className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/50"
                >
                  Preferred Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border font-body text-[14px] text-foreground focus:outline-none focus:border-gold/50 transition-colors duration-500 font-light"
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

            <div className="space-y-3">
              <label
                htmlFor="message"
                className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border font-body text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/50 transition-colors duration-500 resize-none font-light"
                placeholder="Tell me a little about yourself and what you'd like to achieve..."
              />
            </div>

            <div className="pt-8 text-center">
              <button
                type="submit"
                className="px-14 py-5 bg-foreground text-primary-foreground font-body text-[11px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-foreground/85 transition-all duration-500 ease-out"
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
