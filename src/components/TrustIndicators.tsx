import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, TrendingUp, Users } from "lucide-react";

const indicators = [
  {
    icon: Globe,
    title: "Global Network",
    description: "We partner with 100+ clients & brokers, worldwide.",
    metric: "100+"
  },
  {
    icon: Shield,
    title: "Verified Fulfillment",
    description: "Transparent pricing, real-time commodity tracking, and quality checks.",
    metric: "100%"
  },
  {
    icon: TrendingUp,
    title: "Market Insight",
    description: "Real-time market data and pricing intelligence for informed decisions.",
    metric: "24/7"
  },
  {
    icon: Users,
    title: "Trusted Partners",
    description: "Long-term relationships with verified suppliers and logistics providers.",
    metric: "5+ Years"
  }
];

const TrustIndicators = () => {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-primary mb-6">
            Industry Leadership & Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building trust through transparency, reliability, and uncompromising quality standards. 
            Our track record speaks to our commitment to excellence in global commodity trading.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <Card key={index} className="text-center group hover:shadow-subtle transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <indicator.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{indicator.metric}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{indicator.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{indicator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-subtle">
            <h3 className="text-2xl font-bold text-primary mb-6">Sustainable Trade, Global Impact</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We partner with environmentally responsible suppliers and implement ethical sourcing practices, 
              ensuring our global trade operations create positive impact for communities and the environment while 
              maintaining the highest standards of quality and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
