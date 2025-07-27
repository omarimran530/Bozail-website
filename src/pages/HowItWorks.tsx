import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Simple, secure, and efficient commodity trading in four easy steps
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Register & Verify</h3>
                <p className="text-muted-foreground">
                  Create your account and complete our comprehensive verification process to ensure platform security
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Browse & Connect</h3>
                <p className="text-muted-foreground">
                  Explore our marketplace of verified suppliers and quality commodities from around the world
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Negotiate & Contract</h3>
                <p className="text-muted-foreground">
                  Use our secure platform to negotiate terms, finalize contracts, and arrange financing options
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Execute & Deliver</h3>
                <p className="text-muted-foreground">
                  Complete payment, track shipments, and receive quality assurance throughout the delivery process
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Process */}
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">For Buyers</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Search & Filter</h4>
                      <p className="text-muted-foreground">Find exactly what you need with advanced search filters</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Request Quotes</h4>
                      <p className="text-muted-foreground">Get competitive quotes from multiple verified suppliers</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Secure Payment</h4>
                      <p className="text-muted-foreground">Use our escrow service for secure transactions</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Buyer Benefits</h3>
                <ul className="space-y-2">
                  <li>✓ Access to global suppliers</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Quality guarantees</li>
                  <li>✓ Logistics support</li>
                  <li>✓ 24/7 customer service</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-accent-gradient p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Supplier Benefits</h3>
                <ul className="space-y-2 text-white">
                  <li>✓ Global market reach</li>
                  <li>✓ Verified buyer network</li>
                  <li>✓ Marketing support</li>
                  <li>✓ Financing options</li>
                  <li>✓ Risk management tools</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">For Suppliers</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">List Products</h4>
                      <p className="text-muted-foreground">Showcase your commodities with detailed specifications</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Receive Orders</h4>
                      <p className="text-muted-foreground">Get purchase orders from verified global buyers</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Fulfill & Ship</h4>
                      <p className="text-muted-foreground">Use our logistics network for efficient delivery</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied traders who trust Bozail for their commodity trading needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="action" size="lg">Register as Buyer</Button>
            <Button variant="outline" size="lg">Register as Supplier</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
