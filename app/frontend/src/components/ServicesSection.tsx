import { Activity, Dumbbell, Heart, Zap, Move, Shield } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Corrective Exercise',
    subtitle: 'Restore balance. Improve movement.',
    description:
      'Identify movement imbalances, improve posture and address the underlying causes of discomfort through personalised corrective exercise.',
    checklist: ['Posture', 'Alignment', 'Pain Management', 'Movement Quality'],
    image: '/assets/service-corrective-exercise.png',
  },
  {
    icon: Dumbbell,
    title: 'Personal Training',
    subtitle: 'Strength with purpose.',
    description:
      'Build strength, improve fitness and increase confidence through personalised one-to-one training designed around your goals and abilities.',
    checklist: ['Functional Strength', 'Body Composition', 'Confidence', 'Long-Term Health'],
    image: '/assets/service-personal-training.png',
  },
  {
    icon: Move,
    title: 'Pilates',
    subtitle: 'Mat & Reformer Pilates',
    description:
      'Improve core strength, posture and body awareness through personalised Mat and Reformer Pilates sessions tailored to your individual needs.',
    checklist: ['Core Strength', 'Stability', 'Flexibility', 'Body Awareness'],
    image: '/assets/service-pilates.png',
  },
  {
    icon: Heart,
    title: 'Recovery & Injury Prevention',
    subtitle: 'Recover well. Move with confidence.',
    description:
      "Whether you're returning from injury or looking to prevent future problems, every session is designed to restore movement, build resilience and help you stay active for years to come.",
    checklist: ['Injury Recovery', 'Pain Reduction', 'Joint Stability', 'Injury Prevention'],
    image: '/assets/service-recovery-prevention.png',
  },
  {
    icon: Zap,
    title: 'Strength',
    subtitle: 'Build strength that lasts.',
    description:
      'Develop functional strength that supports everyday life, enhances performance and helps you move with greater confidence.',
    checklist: ['Functional Strength', 'Muscle Development', 'Bone Health', 'Everyday Performance'],
    image: '/assets/service-strength.png',
  },
  {
    icon: Shield,
    title: 'Mobility',
    subtitle: 'Move freely.',
    description:
      'Improve flexibility, joint mobility and movement quality to help your body move more efficiently and comfortably every day.',
    checklist: ['Joint Mobility', 'Flexibility', 'Range of Motion', 'Efficient Movement'],
    image: '/assets/service-mobility.png',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-36 md:py-48 lg:py-56 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section Label */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-gold font-medium mb-5">
            Signature Services
          </p>
          <div className="w-10 h-[1.5px] bg-gold/60 mx-auto" />
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-6 animate-fade-in-up animate-delay-100">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-foreground font-light leading-[1.2] tracking-tight">
            How I Can Help
          </h2>
        </div>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-5 animate-fade-in-up animate-delay-200">
          <p className="font-body text-[15px] md:text-base text-muted-foreground/75 leading-[2] font-light">
            Tailored movement, strength and recovery services designed around your individual needs.
          </p>
          <p className="font-body text-[15px] md:text-base text-muted-foreground/75 leading-[2] font-light">
            {"Whether your goal is to move without pain, build strength, recover from injury or simply feel your best, every session is personalised to help you achieve lasting results."}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-[20px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-400 ease-out animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${250 + index * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Icon */}
              <div className="flex justify-center -mt-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-gold/25 flex items-center justify-center shadow-sm">
                  <service.icon className="w-5 h-5 text-gold/70" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="px-7 pt-5 pb-8 flex-1 flex flex-col text-center">
                <h3 className="font-heading text-xl md:text-[1.35rem] text-foreground font-light mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-[12px] text-gold italic font-light mb-4">
                  {service.subtitle}
                </p>
                <p className="font-body text-[13px] text-muted-foreground/65 leading-[1.9] font-light mb-6 flex-1">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="w-8 h-px bg-gold/25 mx-auto mb-5" />

                {/* Checklist */}
                <div className="space-y-2.5 text-left pl-4">
                  {service.checklist.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <svg
                        className="w-3.5 h-3.5 text-gold/60 flex-shrink-0"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 8.5l3.5 3.5L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-[12.5px] text-muted-foreground/60 font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
