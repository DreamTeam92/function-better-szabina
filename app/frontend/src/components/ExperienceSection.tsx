import { ClipboardCheck, Target, Users, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Assess',
    description: 'Comprehensive movement assessment to understand your body and identify areas for improvement.',
  },
  {
    icon: Target,
    title: 'Plan',
    description: 'A personalised programme designed specifically around your goals and lifestyle.',
  },
  {
    icon: Users,
    title: 'Coach',
    description: 'Expert one-to-one guidance through every session, adapting as you progress.',
  },
  {
    icon: TrendingUp,
    title: 'Thrive',
    description: 'Build lasting strength, confidence and freedom in your movement.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-40 md:py-56">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/70 font-medium mb-8">
            Your Journey
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 font-light">
            The Function Better Experience
          </h2>
          <p className="font-heading text-xl md:text-2xl text-foreground/60 italic mb-10 font-light leading-relaxed">
            A personalised approach to movement, strength and recovery.
          </p>
          <p className="font-body text-[14px] text-muted-foreground leading-[2.1] font-light max-w-2xl mx-auto">
            Every session is thoughtfully designed around your body, your goals
            and the way you move. Whether you're looking to build strength,
            recover from injury, improve posture or simply move with greater
            confidence, every programme is completely tailored to you.
          </p>
          <div className="mt-10 space-y-2">
            <p className="font-body text-[12px] text-foreground/40 tracking-wide font-light italic">
              No generic workouts. No one-size-fits-all approach.
            </p>
          </div>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center group relative">
                <div className="relative mb-10">
                  <div className="w-[104px] h-[104px] mx-auto rounded-full bg-warm-beige flex items-center justify-center border border-border/40 group-hover:border-gold/20 group-hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.04)] transition-all duration-700 relative z-10">
                    <step.icon className="w-9 h-9 text-gold/70" strokeWidth={1} />
                  </div>
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border border-border/60 flex items-center justify-center font-body text-[9px] font-medium text-foreground/40 z-20">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-3xl text-foreground mb-4 font-light">
                  {step.title}
                </h3>
                <p className="font-body text-[13px] text-muted-foreground leading-[2] max-w-[240px] mx-auto font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
