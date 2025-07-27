import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Bozail
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Connecting global markets through innovative commodity trading solutions since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6">
                To democratize global commodity trading by providing a transparent, efficient, and secure platform that connects suppliers and buyers worldwide.
              </p>
              <p className="text-muted-foreground">
                We believe in fair trade, sustainable sourcing, and creating value for all participants in the global commodity ecosystem.
              </p>
            </div>
            <div className="bg-accent-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-white">
                  <span>Countries Served</span>
                  <span className="font-bold">45+</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Active Suppliers</span>
                  <span className="font-bold">2,500+</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Trade Volume</span>
                  <span className="font-bold">$2.5B+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Transparency</h3>
                <p className="text-muted-foreground">
                  Complete visibility into pricing, quality, and sourcing practices
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Security</h3>
                <p className="text-muted-foreground">
                  Bank-grade security and verified supplier networks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technology for efficient global trade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
