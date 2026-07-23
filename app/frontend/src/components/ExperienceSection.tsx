const journeySteps = [
  {
    number: '01',
    title: 'Movement Assessment',
    subtitle: 'Understanding your body comes first.',
    description:
      "Before we begin, we'll take the time to assess how you move, identify imbalances, discuss your goals and understand your lifestyle. This allows every session to be personalised from day one.",
    checklist: [
      'Posture & movement analysis',
      'Mobility assessment',
      'Strength evaluation',
      'Injury history & lifestyle review',
    ],
  },
  {
    number: '02',
    title: 'Bespoke Programme',
    subtitle: 'A programme designed exclusively for you.',
    description:
      'Your sessions are never taken from a template. Every exercise is carefully selected to suit your body, your abilities and your long-term goals, adapting as you progress.',
    checklist: [
      'Personalised exercise programme',
      'Corrective movement strategies',
      'Progressive strength development',
      'Ongoing adjustments based on your progress',
    ],
  },
  {
    number: '03',
    title: 'One-to-One Coaching',
    subtitle: 'Expert coaching with complete attention to detail.',
    description:
      "Every session is delivered privately, allowing for precise coaching, continuous feedback and a level of personal attention that's impossible to achieve in group classes.",
    checklist: [
      'Private sessions in your home or villa',
      'Individual coaching',
      'Professional guidance throughout',
      'Flexible scheduling',
    ],
  },
  {
    number: '04',
    title: 'Lasting Results',
    subtitle: 'Building strength for life.',
    description:
      "My goal isn't simply to help you exercise — it's to help you move with confidence, reduce the risk of injury and build lasting strength that supports your everyday life.",
    checklist: [
      'Improved movement quality',
      'Greater strength & mobility',
      'Better balance & posture',
      'Long-term health & wellbeing',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-36 md:py-48 lg:py-56 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        {/* Section Label */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-gold font-medium mb-5">
            The Function Better Experience
          </p>
          <div className="w-10 h-[1.5px] bg-gold/60 mx-auto" />
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12 animate-fade-in-up animate-delay-100">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-light leading-[1.25] tracking-tight">
            Every session is thoughtfully designed around your body, your goals and the way you move.
          </h2>
        </div>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-28 md:mb-36 space-y-6 animate-fade-in-up animate-delay-200">
          <p className="font-body text-[15px] md:text-base text-muted-foreground/75 leading-[2] font-light">
            {"Whether you're looking to build strength, recover from an injury, improve your posture or simply move with greater confidence, every programme is completely tailored to you."}
          </p>
          <p className="font-body text-[15px] md:text-base text-muted-foreground/75 leading-[2] font-light">
            No generic workouts.<br />
            No one-size-fits-all approach.<br />
            Just expert guidance, designed around your individual needs.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.number}
                className="animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div
                  className={`flex flex-col lg:flex-row items-start gap-10 lg:gap-20 ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Number */}
                  <div className="flex-shrink-0 lg:w-32">
                    <span className="font-heading text-7xl md:text-8xl lg:text-9xl text-gold/20 font-light leading-none select-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 max-w-2xl">
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground font-light mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="font-body text-[15px] text-gold/80 italic font-light mb-6">
                      {step.subtitle}
                    </p>
                    <p className="font-body text-[14px] md:text-[15px] text-muted-foreground/70 leading-[2] font-light mb-8">
                      {step.description}
                    </p>

                    {/* Checklist */}
                    <div className="space-y-3">
                      {step.checklist.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="text-gold/60 text-sm mt-0.5 flex-shrink-0">{"\u2713"}</span>
                          <span className="font-body text-[13px] text-muted-foreground/60 font-light leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle separator between steps */}
                {index < journeySteps.length - 1 && (
                  <div className="w-12 h-px bg-gold/15 mx-auto mt-24 md:mt-32 lg:mt-40" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
