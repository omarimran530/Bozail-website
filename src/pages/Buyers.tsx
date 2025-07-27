import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Buyers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            For Buyers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Source quality commodities from verified global suppliers with confidence
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg">
              Register as Buyer
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Buyers Choose Bozail
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Verified Suppliers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every supplier undergoes rigorous verification including financial, legal, and operational assessments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access competitive quotes from multiple suppliers and negotiate the best deals for your business.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive quality control processes and third-party inspections ensure product standards.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-navy-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Buying Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <span>Search & Filter Products</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <span>Request Quotes</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <span>Compare & Negotiate</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">4</span>
                  </div>
                  <span>Secure Payment & Delivery</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Buyer Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Advanced Search</h4>
                    <p className="text-muted-foreground">Filter by origin, quality grade, certification, and delivery terms</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Quote Management</h4>
                    <p className="text-muted-foreground">Request and compare quotes from multiple suppliers simultaneously</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Secure Transactions</h4>
                    <p className="text-muted-foreground">Escrow services and payment protection for safe trading</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Shipment Tracking</h4>
                    <p className="text-muted-foreground">Real-time tracking from warehouse to destination</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Tiers */}
          <div>
            <h3 className="text-2xl font-bold text-center text-primary mb-8">Service Tiers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                  <div className="text-2xl font-bold text-accent">Free</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>✓ Basic product search</li>
                    <li>✓ Quote requests</li>
                    <li>✓ Standard support</li>
                    <li>✓ Basic market data</li>
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="border-accent">
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <div className="text-2xl font-bold text-accent">$299/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>✓ All Standard features</li>
                    <li>✓ Advanced analytics</li>
                    <li>✓ Priority support</li>
                    <li>✓ Custom alerts</li>
                    <li>✓ Market insights</li>
                  </ul>
                  <Button className="w-full mt-6" variant="action">Choose Premium</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-2xl font-bold text-accent">Custom</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>✓ All Premium features</li>
                    <li>✓ Dedicated account manager</li>
                    <li>✓ Custom integrations</li>
                    <li>✓ Volume discounts</li>
                    <li>✓ White-label options</li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Start Sourcing Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of buyers who trust Bozail for their commodity sourcing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="action" size="lg">Register Now</Button>
            <Button variant="outline" size="lg">Schedule Demo</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buyers;
