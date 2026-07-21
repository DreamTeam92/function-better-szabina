import { Activity, Dumbbell, Heart, Shield, Zap, Move } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Corrective Exercise',
    description: 'Restore balance. Improve movement.',
    featured: true,
  },
  {
    icon: Dumbbell,
    title: 'Personal Training',
    description: 'Strength with purpose.',
    featured: false,
  },
  {
    icon: Heart,
    title: 'Mat & Reformer Pilates',
    description: 'Improve strength, posture and body awareness.',
    featured: true,
  },
  {
    icon: Shield,
    title: 'Recovery & Injury Prevention',
    description: 'Recover well. Move confidently.',
    featured: false,
  },
  {
    icon: Zap,
    title: 'Strength Development',
    description: 'Build strength that lasts.',
    featured: false,
  },
  {
    icon: Move,
    title: 'Mobility',
    description: 'Move freely.',
    featured: true,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 md:py-44">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-light">
            How I Can Help
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-10 rounded-2xl border border-border/40 bg-background hover:border-gold/20 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out ${
                service.featured ? 'md:translate-y-[-8px]' : ''
              }`}
            >
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full bg-warm-beige/80 flex items-center justify-center group-hover:bg-gold/8 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-gold/70" strokeWidth={1.2} />
                </div>
              </div>
              <h3 className="font-heading text-2xl md:text-[1.7rem] text-foreground mb-4 font-light">
                {service.title}
              </h3>
              <p className="font-body text-[14px] text-muted-foreground leading-[1.8] mb-8 font-light">
                {service.description}
              </p>
              <a
                href="#contact"
                className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/40 hover:text-gold transition-colors duration-500 inline-flex items-center gap-3 group/link"
              >
                Learn More
                <span className="inline-block w-5 h-px bg-current transition-all duration-500 group-hover/link:w-8" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
