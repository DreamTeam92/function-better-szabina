import { Activity, Dumbbell, Heart, Shield, Zap, Move } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Corrective Exercise',
    description: 'Restore balance and improve movement patterns through targeted corrective strategies based on biomechanical assessment.',
    size: 'large',
  },
  {
    icon: Dumbbell,
    title: 'Personal Training',
    description: 'Strength with purpose. Programmes designed to build functional strength tailored to your body and goals.',
    size: 'small',
  },
  {
    icon: Heart,
    title: 'Mat & Reformer Pilates',
    description: 'Improve strength, posture and body awareness through classical and contemporary Pilates methods.',
    size: 'small',
  },
  {
    icon: Shield,
    title: 'Recovery & Injury Prevention',
    description: 'Recover well and move confidently. Evidence-based strategies to prevent injury and support long-term resilience.',
    size: 'large',
  },
  {
    icon: Zap,
    title: 'Strength Development',
    description: 'Build strength that lasts. Progressive programmes designed for sustainable, long-term results.',
    size: 'small',
  },
  {
    icon: Move,
    title: 'Mobility',
    description: 'Move freely. Restore range of motion and improve joint health for everyday movement confidence.',
    size: 'small',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-40 md:py-56 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/70 font-medium mb-8">
            Signature Services
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 font-light">
            How I Can Help
          </h2>
          <p className="font-body text-[14px] text-muted-foreground leading-[2] font-light">
            Tailored movement, strength and recovery services designed around your individual needs.
          </p>
          <p className="font-body text-[14px] text-muted-foreground leading-[2] font-light">
            Whether your goal is to move without pain, build strength, recover from injury or simply feel your best, every session is personalised to help you achieve lasting results.
          </p>
        </div>

        {/* Editorial grid layout - varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-12 lg:p-14 rounded-2xl bg-background border border-border/30 hover:border-gold/15 hover:shadow-[0_16px_56px_-16px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out ${
                service.size === 'large' ? 'md:col-span-2 md:flex md:items-center md:gap-14' : ''
              } ${index === 0 || index === 3 ? '' : ''}`}
            >
              <div className={`mb-8 ${service.size === 'large' ? 'md:mb-0 md:flex-shrink-0' : ''}`}>
                <div className="w-16 h-16 rounded-full bg-warm-beige flex items-center justify-center group-hover:bg-gold/6 transition-all duration-600">
                  <service.icon className="w-7 h-7 text-gold/65" strokeWidth={1} />
                </div>
              </div>
              <div className={service.size === 'large' ? 'md:flex-1' : ''}>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4 font-light">
                  {service.title}
                </h3>
                <p className="font-body text-[13px] text-muted-foreground leading-[2] mb-8 font-light max-w-md">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/35 hover:text-gold transition-colors duration-500 inline-flex items-center gap-3 group/link"
                >
                  Enquire
                  <span className="inline-block w-5 h-px bg-current transition-all duration-500 group-hover/link:w-8" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
