import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-corporate-gradient overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Corporate Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-hero font-bold mb-6 leading-tight tracking-tight">
            Global Trade
            <span className="block text-accent font-semibold">
              Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Premier commodity trading solutions connecting global markets. 
            Over 25 years of expertise in agricultural products, minerals, and energy commodities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="action" size="lg" className="text-lg px-8 py-6 shadow-premium">
              Partner With Us
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              Our Capabilities
            </Button>
          </div>
          
          {/* Corporate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">25+</div>
              <div className="text-sm text-white/80 uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-white/80 uppercase tracking-wide">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">1M+</div>
              <div className="text-sm text-white/80 uppercase tracking-wide">Tons Traded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-white/80 uppercase tracking-wide">Global Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
