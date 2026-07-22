import { Instagram, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-28 md:py-36 bg-foreground text-primary-foreground">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="text-center space-y-10">
          {/* Logo */}
          <img
            src="/assets/logo.png"
            alt="Function Better"
            className="h-11 w-auto brightness-0 invert opacity-75 mx-auto"
          />

          {/* Tagline */}
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/35 font-light">
            Private Movement • Strength • Recovery
          </p>

          {/* Brand statement */}
          <p className="font-body text-[13px] text-primary-foreground/45 leading-[2] font-light max-w-md mx-auto">
            Bespoke movement coaching built on expertise, biomechanics and personalised care.
            Costa Blanca South.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 pt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-gold-light/25 hover:text-gold-light transition-all duration-500"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.2} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-gold-light/25 hover:text-gold-light transition-all duration-500"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.2} />
            </a>
            <a
              href="mailto:hello@functionbetter.com"
              className="w-11 h-11 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-gold-light/25 hover:text-gold-light transition-all duration-500"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" strokeWidth={1.2} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-primary-foreground/8 mx-auto" />

          {/* Copyright & Legal */}
          <div className="space-y-4">
            <p className="font-body text-[11px] text-primary-foreground/20 font-light tracking-wide">
              © {new Date().getFullYear()} Function Better. All rights reserved.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="font-body text-[10px] text-primary-foreground/20 hover:text-primary-foreground/40 transition-colors duration-500 font-light tracking-wide">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-[10px] text-primary-foreground/20 hover:text-primary-foreground/40 transition-colors duration-500 font-light tracking-wide">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
