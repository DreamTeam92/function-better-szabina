import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Petra K.',
    location: 'Las Colinas, ES',
    text: 'We have our second home in Las Colinas, Orihuela Costa, and finding someone with truly high standards and real expertise is not always easy. Working with Sabina has honestly been one of the best investments we’ve made for our wellbeing. She is an exceptionally knowledgeable...',
    rating: 5,
  },
  {
    name: 'Dan B.',
    location: 'Chipping Norton, UK',
    text: 'I had the pleasure of having Szabina teach at my personal training and Pilates studio in Chipping Norton, England, for one year, and she was a genuine joy to work with. She is not only a wonderful and highly knowledgeable teacher, but also a genuinely great person who brings warmth, professionalism...',
    rating: 5,
  },
  {
    name: 'Alice W.',
    location: 'Soho Farmhouse, UK',
    text: 'Szabina is the best personal trainer ever! I had tried a few before, but have never experienced training that is so personalized and takes into account exactly what my body needs in order to achieve my goals. Her knowledge of anatomy and techniques is exceptional and her attention and focus is incredible...',
    rating: 5,
  },
];

const ClientExperienceSection = () => {
  return (
    <section id="client-experience" className="py-40 md:py-56">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium mb-8">
            Testimonials
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 font-light">
            Client Experience
          </h2>
          <p className="font-heading text-xl md:text-2xl text-foreground/55 italic font-light leading-relaxed">
            Real people. Personal journeys. Lasting results.
          </p>
        </div>

        {/* Five star rating display */}
        <div className="flex justify-center gap-1.5 mb-16">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-gold/60 text-gold/60"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative p-10 lg:p-12 rounded-2xl border border-border/25 bg-background hover:shadow-[0_16px_56px_-16px_rgba(0,0,0,0.05)] transition-all duration-700 ease-out"
            >
              <Quote className="w-10 h-10 text-gold/12 mb-8" strokeWidth={1} />
              
              <p className="font-body text-[13px] text-foreground/65 leading-[2.2] mb-10 font-light">
                "{testimonial.text}"
              </p>
              
              <div className="pt-8 border-t border-border/25">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-gold/50 text-gold/50"
                    />
                  ))}
                </div>
                <p className="font-body text-[13px] font-medium text-foreground/75 tracking-wide">
                  {testimonial.name}
                </p>
                <p className="font-body text-[11px] text-muted-foreground/60 mt-1.5 font-light">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="https://maps.app.goo.gl/1UytitqEeVeKxAzL7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-foreground/10 text-foreground/60 font-body text-[10px] font-medium tracking-[0.2em] uppercase rounded-full hover:border-foreground/20 hover:text-foreground transition-all duration-500"
          >
            View All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;
