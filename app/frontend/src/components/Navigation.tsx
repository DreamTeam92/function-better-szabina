import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Meet Sabina', href: '#meet-sabina' },
    { label: 'Client Experience', href: '#client-experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? 'bg-background/97 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--border))] py-4'
          : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Function Better"
            className="h-9 md:h-11 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground/70"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/99 backdrop-blur-xl border-b border-border/50 animate-fade-in">
          <div className="px-8 py-10 flex flex-col gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-sm font-light tracking-[0.1em] text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
