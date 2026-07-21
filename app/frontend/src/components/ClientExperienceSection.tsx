import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Las Colinas',
    text: 'Working with Sabina has completely transformed how I move and feel. After years of back pain, I finally feel strong and confident again. Her attention to detail and personalised approach is unlike anything I have experienced before.',
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Campoamor',
    text: 'Sabina is exceptional at what she does. Her knowledge of biomechanics and corrective exercise helped me recover from a knee injury that I thought would limit me forever. I cannot recommend her highly enough.',
    rating: 5,
  },
  {
    name: 'Maria L.',
    location: 'La Zenia',
    text: 'The private sessions at my villa are the highlight of my week. Sabina creates a calm, professional environment and every session feels purposeful. I have never felt stronger or more balanced.',
    rating: 5,
  },
];

const ClientExperienceSection = () => {
  return (
    <section id="client-experience" className="py-32 md:py-44">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-light">
            Client Experience
          </h2>
          <p className="font-heading text-xl text-foreground/60 italic font-light">
            Real people. Personal journeys. Lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative p-10 rounded-2xl border border-border/30 bg-background hover:shadow-[0_12px_48px_-12px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out ${
                index === 1 ? 'md:translate-y-[-12px]' : ''
              }`}
            >
              <Quote className="w-8 h-8 text-gold/20 mb-6" strokeWidth={1} />
              
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gold/70 text-gold/70"
                  />
                ))}
              </div>
              
              <p className="font-body text-[14px] text-foreground/70 leading-[2] mb-8 font-light italic">
                "{testimonial.text}"
              </p>
              
              <div className="pt-6 border-t border-border/30">
                <p className="font-body text-[13px] font-medium text-foreground/80">
                  {testimonial.name}
                </p>
                <p className="font-body text-[11px] text-muted-foreground/70 mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-foreground/12 text-foreground/70 font-body text-[11px] font-medium tracking-[0.2em] uppercase rounded-full hover:border-foreground/25 hover:text-foreground transition-all duration-500"
          >
            View Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;
