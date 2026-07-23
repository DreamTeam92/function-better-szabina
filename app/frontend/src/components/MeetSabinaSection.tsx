import { Award, Brain, UserCheck, Home } from 'lucide-react';

const qualifications = [
  'Corrective Exercise Specialist',
  'Personal Trainer',
  'Mat Pilates Teacher',
  'Reformer Pilates Teacher',
  'Human Foundations Practitioner',
  'Biomechanics Specialist',
  'Injury Prevention & Recovery Specialist',
  'Level 4 RSPH Nutrition Advisor',
];

const stats = [
  { value: '23+', label: 'Years of Experience' },
  { value: '1000+', label: 'Sessions Delivered' },
  { value: '1:1', label: 'Personalised Coaching' },
];

const whyFeatures = [
  {
    icon: Award,
    title: '23+ Years of Experience',
    description: 'Over two decades of professional expertise in movement, biomechanics and corrective exercise.',
  },
  {
    icon: Brain,
    title: 'Evidence-Based Approach',
    description: 'Every programme is built on science, biomechanics and proven methodologies — not trends.',
  },
  {
    icon: UserCheck,
    title: 'Bespoke One-to-One Coaching',
    description: 'Completely personalised sessions designed around your body, your goals and your lifestyle.',
  },
  {
    icon: Home,
    title: 'Private Home & Villa Sessions',
    description: 'Sessions delivered in the comfort and privacy of your own home or luxury villa.',
  },
];

const MeetSabinaSection = () => {
  return (
    <section id="meet-sabina" className="py-40 md:py-56 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-start">
          {/* Image Side - Larger */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)]">
              <img
                src="/assets/szabina.png"
                alt="Sabina - Movement Specialist"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 space-y-14">
            <div className="space-y-6">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/70 font-medium">
                Your Coach
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground font-light">
                Meet Sabina
              </h2>
              <p className="font-heading text-xl md:text-2xl text-foreground/60 italic font-light leading-relaxed">
                Expert guidance. Personalised care. Lasting results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-12 border-y border-border/40">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-4xl md:text-5xl text-gold/70 mb-3 font-light">
                    {stat.value}
                  </p>
                  <p className="font-body text-[9px] tracking-[0.2em] text-muted-foreground uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="font-body text-[14px] text-muted-foreground leading-[2.2] font-light">
                With over two decades of experience, I combine biomechanics, corrective exercise, 
                strength training and Pilates to help you move with confidence and live without limitation.
              </p>
              <p className="font-body text-[14px] text-muted-foreground leading-[2.2] font-light">
                My approach is built on understanding how your body moves, identifying what needs attention, 
                and creating a programme that evolves with you.
              </p>
            </div>

            {/* Qualifications - Editorial style */}
            <div className="pt-6">
              <h3 className="font-body text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/35 mb-8">
                Qualifications & Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {qualifications.map((qual) => (
                  <div
                    key={qual}
                    className="flex items-start gap-4 py-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0 mt-1.5" />
                    <p className="font-body text-[13px] text-foreground/65 font-light leading-[1.7]">
                      {qual}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Function Better - Feature blocks */}
        <div className="mt-40 md:mt-56">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-light">
              Why Function Better?
            </h2>
            <p className="font-body text-[14px] text-muted-foreground leading-[2] font-light">
              What sets Function Better apart from traditional personal training or Pilates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {whyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-10 lg:p-12 rounded-2xl bg-background border border-border/30 hover:border-gold/12 hover:shadow-[0_12px_48px_-12px_rgba(0,0,0,0.04)] transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-full bg-warm-beige flex items-center justify-center mb-8 group-hover:bg-gold/6 transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-gold/60" strokeWidth={1.2} />
                </div>
                <h3 className="font-heading text-2xl md:text-[1.7rem] text-foreground mb-4 font-light">
                  {feature.title}
                </h3>
                <p className="font-body text-[13px] text-muted-foreground leading-[2] font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetSabinaSection;
