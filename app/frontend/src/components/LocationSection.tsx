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
    <section className="py-32 md:py-44 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-light">
            Private Sessions Across
            <br />
            Costa Blanca South
          </h2>
          <p className="font-body text-[15px] text-muted-foreground leading-[1.9] font-light mt-6">
            I provide private one-to-one coaching sessions in the comfort of
            your own home or luxury villa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map Visual */}
          <div className="relative bg-background rounded-2xl border border-border/40 p-12 aspect-[4/3] flex items-center justify-center overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.04)]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-gold/8" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 rounded-full border border-gold/12" />
              </div>
              
              <div className="text-center space-y-6 relative z-10">
                <MapPin className="w-10 h-10 text-gold/60 mx-auto" strokeWidth={1} />
                <div>
                  <p className="font-heading text-3xl text-foreground mb-2 font-light">Costa Blanca South</p>
                  <p className="font-body text-[12px] text-muted-foreground tracking-wide">Alicante Province, Spain</p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto pt-6">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                      <p className="font-body text-[11px] text-foreground/60 font-light">{location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-10">
            <p className="font-body text-[15px] text-muted-foreground leading-[2] font-light">
              Sessions are available across the following areas of Costa Blanca South, 
              delivered privately in your home or villa:
            </p>

            <div className="space-y-0">
              {locations.map((location) => (
                <div
                  key={location}
                  className="flex items-center gap-5 py-5 border-b border-border/40 last:border-0 group hover:pl-2 transition-all duration-500"
                >
                  <MapPin className="w-4 h-4 text-gold/50 flex-shrink-0 group-hover:text-gold/80 transition-colors duration-500" strokeWidth={1.2} />
                  <p className="font-body text-[14px] text-foreground/70 tracking-wide font-light group-hover:text-foreground transition-colors duration-500">
                    {location}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-body text-[13px] text-muted-foreground/60 italic font-light pt-4">
              Not listed? Get in touch — I may still be able to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
