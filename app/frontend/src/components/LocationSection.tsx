import { MapPin } from 'lucide-react';

const locations = [
  'Las Colinas',
  'Campoamor',
  'Cabo Roig',
  'La Zenia',
  'Villamartín',
  'Torre de la Horadada',
  'Pinar de Campoverde',
];

const LocationSection = () => {
  return (
    <section className="py-40 md:py-56 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/70 font-medium mb-8">
            Service Area
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 font-light">
            Private Sessions Across
            <br />
            Costa Blanca South
          </h2>
          <p className="font-body text-[14px] text-muted-foreground leading-[2.1] font-light mt-8 max-w-xl mx-auto">
            Private one-to-one coaching sessions delivered in the comfort of
            your own home, luxury villa or residential community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12 items-start">
          {/* Map Visual - Larger */}
          <div className="lg:col-span-3 relative bg-background rounded-2xl border border-border/30 p-14 lg:p-16 aspect-[4/3] flex items-center justify-center overflow-hidden shadow-[0_12px_48px_-12px_rgba(0,0,0,0.04)]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-gold/6" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border border-gold/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-gold/14" />
              </div>
              
              <div className="text-center space-y-8 relative z-10">
                <MapPin className="w-12 h-12 text-gold/50 mx-auto" strokeWidth={0.8} />
                <div>
                  <p className="font-heading text-4xl text-foreground mb-3 font-light">Costa Blanca South</p>
                  <p className="font-body text-[12px] text-muted-foreground tracking-wider font-light">Alicante Province, Spain</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-2 space-y-10">
            <p className="font-body text-[14px] text-muted-foreground leading-[2.2] font-light">
              Sessions are available across the following areas, delivered privately in your home or villa:
            </p>

            <div className="space-y-0">
              {locations.map((location) => (
                <div
                  key={location}
                  className="flex items-center gap-5 py-5 border-b border-border/30 last:border-0 group hover:pl-2 transition-all duration-500"
                >
                  <MapPin className="w-4 h-4 text-gold/40 flex-shrink-0 group-hover:text-gold/70 transition-colors duration-500" strokeWidth={1.2} />
                  <p className="font-body text-[14px] text-foreground/65 tracking-wide font-light group-hover:text-foreground transition-colors duration-500">
                    {location}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-body text-[12px] text-muted-foreground/50 italic font-light pt-6">
              Not listed? Get in touch — I may still be able to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
