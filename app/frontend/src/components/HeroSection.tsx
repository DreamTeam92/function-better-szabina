const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png"
          alt="Sabina - Private movement and wellness coaching in a luxury villa setting"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      {/* Content overlay - left aligned, vertically centered */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="max-w-xl space-y-10">
            {/* Logo */}
            <div className="animate-fade-in">
              <img
                src="/assets/logo.png"
                alt="Function Better"
                className="h-11 md:h-13 w-auto brightness-0 invert opacity-90"
              />
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up animate-delay-200">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.05] tracking-tight">
                Move Better.
                <br />
                Feel Better.
                <br />
                Live Better.
              </h1>
            </div>

            {/* Supporting paragraph */}
            <div className="animate-fade-in-up animate-delay-400">
              <p className="font-body text-[14px] md:text-[15px] text-white/75 leading-[2] font-light max-w-md">
                Bespoke movement, strength and recovery coaching designed around
                your body, your goals and your lifestyle.
              </p>
              <p className="font-body text-[12px] md:text-[13px] text-white/50 leading-[1.9] font-light mt-4">
                Private one-to-one sessions in your home or villa across Costa Blanca South.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up animate-delay-600">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-foreground font-body text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-white/90 transition-all duration-500 ease-out"
              >
                Book Your Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white/90 font-body text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-500 ease-out"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in animate-delay-800">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
