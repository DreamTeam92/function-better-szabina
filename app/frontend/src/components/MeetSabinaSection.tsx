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

const MeetSabinaSection = () => {
  return (
    <section id="meet-sabina" className="py-32 md:py-44 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
              <img
                src="/assets/szabina.png"
                alt="Sabina - Movement Specialist"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-light">
                Meet Sabina
              </h2>
              <p className="font-heading text-xl md:text-2xl text-foreground/70 italic font-light leading-relaxed">
                Expert guidance. Personalised care. Lasting results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-10 border-y border-border/50">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-4xl md:text-5xl text-gold/80 mb-2 font-light">
                    {stat.value}
                  </p>
                  <p className="font-body text-[10px] tracking-[0.15em] text-muted-foreground uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Philosophy quote */}
            <p className="font-body text-[15px] text-muted-foreground leading-[2] font-light max-w-lg">
              With over two decades of experience, I combine biomechanics, corrective exercise, 
              strength training and Pilates to help you move with confidence and live without limitation.
            </p>

            {/* Qualifications */}
            <div className="pt-4">
              <h3 className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-foreground/40 mb-6">
                Qualifications & Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualifications.map((qual) => (
                  <div
                    key={qual}
                    className="flex items-center gap-4"
                  >
                    <div className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                    <p className="font-body text-[13px] text-foreground/70 font-light">
                      {qual}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetSabinaSection;
