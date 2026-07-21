import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Brand */}
          <div className="space-y-5">
            <img
              src="/assets/logo.png"
              alt="Function Better"
              className="h-10 w-auto brightness-0 invert opacity-80"
            />
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/40 font-light">
              Private Movement • Strength • Recovery
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <p className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-primary-foreground/30">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              <a href="#home" className="font-body text-[13px] text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors duration-500 font-light">Home</a>
              <a href="#services" className="font-body text-[13px] text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors duration-500 font-light">Services</a>
              <a href="#meet-sabina" className="font-body text-[13px] text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors duration-500 font-light">Meet Sabina</a>
              <a href="#client-experience" className="font-body text-[13px] text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors duration-500 font-light">Client Experience</a>
              <a href="#contact" className="font-body text-[13px] text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors duration-500 font-light">Contact</a>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-5">
            <p className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-primary-foreground/30">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-gold-light/30 hover:text-gold-light transition-all duration-500"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.2} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-gold-light/30 hover:text-gold-light transition-all duration-500"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.2} />
              </a>
              <a
                href="mailto:hello@functionbetter.com"
                className="w-11 h-11 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-gold-light/30 hover:text-gold-light transition-all duration-500"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" strokeWidth={1.2} />
              </a>
            </div>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-[11px] text-primary-foreground/30 hover:text-gold-light/70 transition-colors duration-500 tracking-wide"
            >
              View Google Reviews →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-primary-foreground/5 text-center">
          <p className="font-body text-[11px] text-primary-foreground/25 font-light tracking-wide">
            © {new Date().getFullYear()} Function Better. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
