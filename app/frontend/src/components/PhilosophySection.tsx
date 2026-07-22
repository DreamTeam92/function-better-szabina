const PhilosophySection = () => {
  return (
    <section className="py-40 md:py-56 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
      
      <div className="max-w-5xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-light/50 font-medium mb-12">
            Philosophy
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-14 text-primary-foreground font-light leading-[1.08]">
            Movement is the foundation
            <br />
            for living well.
          </h2>
          <div className="space-y-8 mb-20">
            <p className="font-body text-[15px] text-primary-foreground/70 leading-[2.2] font-light">
              Movement isn't about doing more. It's about moving better.
            </p>
            <p className="font-body text-[14px] text-primary-foreground/55 leading-[2.2] font-light max-w-2xl mx-auto">
              I believe every person deserves a programme designed around their
              own body—not around trends or generic workouts.
            </p>
            <p className="font-body text-[14px] text-primary-foreground/55 leading-[2.2] font-light max-w-2xl mx-auto">
              By combining biomechanics, corrective exercise, strength training
              and Pilates, every programme is carefully tailored to improve
              movement, build resilience and support long-term wellbeing.
            </p>
          </div>

          {/* Elegant divider */}
          <div className="w-16 h-px bg-gold-light/20 mx-auto mb-20" />

          {/* Elegant quote */}
          <p className="font-heading text-2xl md:text-3xl text-primary-foreground/60 italic font-light leading-[1.6] max-w-2xl mx-auto">
            "Every body is different. Every programme should be too."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
