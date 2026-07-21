const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center min-h-[85vh]">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-10 animate-fade-in-up">
            <div className="space-y-5">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05]">
                Function
                <br />
                Better
              </h1>
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-gold/80 font-medium">
                Private Movement • Strength • Recovery
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-heading text-2xl md:text-3xl text-foreground/85 italic leading-relaxed font-light">
                Move Better. Feel Better. Live Better.
              </p>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.9] max-w-md font-light">
                Bespoke movement, strength and recovery coaching designed around
                your body, your goals and your lifestyle.
              </p>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.9] max-w-md font-light">
                Private one-to-one sessions delivered in your home or private
                villa across Costa Blanca South.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-6 animate-fade-in animate-delay-400">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-foreground text-primary-foreground font-body text-[11px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-foreground/85 transition-all duration-500 ease-out"
              >
                Book Your Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-10 py-4 border border-foreground/15 text-foreground font-body text-[11px] font-medium tracking-[0.2em] uppercase rounded-full hover:border-foreground/30 transition-all duration-500 ease-out"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center lg:justify-end animate-fade-in animate-delay-200">
            <div className="relative w-full max-w-2xl">
              <div className="aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src="/assets/hero.png"
                  alt="Sabina - Function Better Movement Specialist"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
