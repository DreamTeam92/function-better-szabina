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
    <section className="py-32 md:py-44 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 font-light">
            The Function Better Experience
          </h2>
          <p className="font-heading text-xl md:text-2xl text-foreground/70 italic mb-8 font-light leading-relaxed">
            A personalised approach to movement, strength and recovery.
          </p>
          <p className="font-body text-[15px] text-muted-foreground leading-[2] font-light max-w-2xl mx-auto">
            Every session is thoughtfully designed around your body, your goals
            and the way you move. Whether you're looking to build strength,
            recover from injury, improve posture or simply move with greater
            confidence, every programme is completely tailored to you.
          </p>
          <div className="mt-8 space-y-2">
            <p className="font-body text-[13px] text-foreground/50 tracking-wide font-light italic">
              No generic workouts.
            </p>
            <p className="font-body text-[13px] text-foreground/50 tracking-wide font-light italic">
              No one-size-fits-all approach.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-background/80 flex items-center justify-center border border-border/50 group-hover:border-gold/30 group-hover:shadow-sm transition-all duration-500">
                  <step.icon className="w-8 h-8 text-gold/80" strokeWidth={1.2} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[calc(50%+48px)] w-[calc(100%-96px)] h-px bg-border/60" />
                )}
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3 font-light">
                {step.title}
              </h3>
              <p className="font-body text-[13px] text-muted-foreground leading-[1.9] max-w-[220px] mx-auto font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
