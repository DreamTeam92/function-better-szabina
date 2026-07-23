import { ClipboardCheck, Users, Dumbbell, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: ClipboardCheck,
    title: 'Assess',
    description: 'Understanding how your body moves.',
  },
  {
    icon: Users,
    title: 'Personalise',
    description: 'Every programme is designed around you.',
  },
  {
    icon: Dumbbell,
    title: 'Strengthen',
    description: 'Build resilience through purposeful movement.',
  },
  {
    icon: TrendingUp,
    title: 'Thrive',
    description: 'Move with confidence for years to come.',
  },
];

const PhilosophySection = () => {
  return (
    <section className="py-36 md:py-48 lg:py-56 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        {/* Section Label */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-gold font-medium mb-5">
            Philosophy
          </p>
          <div className="w-10 h-[1.5px] bg-gold/60 mx-auto" />
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-14 animate-fade-in-up animate-delay-100">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-foreground font-light leading-[1.2] tracking-tight">
            Intelligent movement. Lasting results.
          </h2>
        </div>

        {/* Body Copy */}
        <div className="text-center max-w-3xl mx-auto mb-28 md:mb-36 space-y-8 animate-fade-in-up animate-delay-200">
          <p className="font-body text-[15px] md:text-base text-muted-foreground/80 leading-[2] font-light">
            I believe that every body is unique. That's why every session begins with understanding how you move, and every programme is individually designed around you.
          </p>
          <p className="font-body text-[15px] md:text-base text-muted-foreground/80 leading-[2] font-light">
            My approach combines movement assessment, strength training, Pilates and corrective exercise to help you move better, build strength and enjoy lasting results.
          </p>
        </div>

        {/* Four Philosophy Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative animate-fade-in-up animate-delay-300">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="text-center px-6 lg:px-8 py-8 sm:py-6 lg:py-0 relative"
            >
              {/* Vertical divider on desktop (between columns) */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gold/20" />
              )}

              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-gold/30 flex items-center justify-center">
                <pillar.icon className="w-8 h-8 text-gold/70" strokeWidth={1.2} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-[1.7rem] text-foreground font-light mb-4">
                {pillar.title}
              </h3>

              {/* Small gold divider */}
              <div className="w-6 h-[1.5px] bg-gold/50 mx-auto mb-5" />

              {/* Description */}
              <p className="font-body text-[13px] text-muted-foreground/65 leading-[1.8] font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
