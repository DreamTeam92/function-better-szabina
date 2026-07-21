import { Search, Fingerprint, Dumbbell, Sparkles } from 'lucide-react';

const pillars = [
  { icon: Search, title: 'Assess' },
  { icon: Fingerprint, title: 'Personalise' },
  { icon: Dumbbell, title: 'Strengthen' },
  { icon: Sparkles, title: 'Thrive' },
];

const PhilosophySection = () => {
  return (
    <section className="py-32 md:py-44 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
      
      <div className="max-w-5xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-10 text-primary-foreground font-light leading-[1.1]">
            Movement is the foundation
            <br />
            for living well.
          </h2>
          <div className="space-y-7 mb-20">
            <p className="font-body text-[15px] text-primary-foreground/70 leading-[2] font-light">
              Movement isn't about doing more. It's about moving better.
            </p>
            <p className="font-body text-[15px] text-primary-foreground/60 leading-[2] font-light max-w-2xl mx-auto">
              I believe every person deserves a programme designed around their
              own body—not around trends or generic workouts.
            </p>
            <p className="font-body text-[15px] text-primary-foreground/60 leading-[2] font-light max-w-2xl mx-auto">
              By combining biomechanics, corrective exercise, strength training
              and Pilates, every programme is carefully tailored to improve
              movement, build resilience and support long-term wellbeing.
            </p>
          </div>

          {/* Four Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-primary-foreground/10 flex items-center justify-center group-hover:border-gold-light/30 transition-all duration-500">
                  <pillar.icon className="w-6 h-6 text-gold-light/70" strokeWidth={1.2} />
                </div>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-primary-foreground/60 font-light">
                  {pillar.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
