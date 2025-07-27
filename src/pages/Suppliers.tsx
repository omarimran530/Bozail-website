import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Suppliers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            For Suppliers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expand your reach and connect with verified buyers worldwide
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg">
              Register as Supplier
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose Bozail as Your Trading Partner?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Global Market Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reach buyers in 45+ countries and expand your market presence beyond geographical limitations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Verified Buyer Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect only with pre-verified, financially capable buyers to ensure secure transactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Marketing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional product listing optimization and promotional support to maximize your visibility.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Supplier Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Product Catalog Management</h4>
                    <p className="text-muted-foreground">Easy-to-use interface for managing your commodity listings</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Real-time Order Management</h4>
                    <p className="text-muted-foreground">Track inquiries, quotes, and orders in real-time</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Financial Tools</h4>
                    <p className="text-muted-foreground">Access trade finance, letters of credit, and payment guarantees</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Logistics Support</h4>
                    <p className="text-muted-foreground">Comprehensive shipping and customs clearance assistance</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-accent-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Success Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-white">
                  <span>Average Deal Size</span>
                  <span className="font-bold">$2.5M</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Time to First Sale</span>
                  <span className="font-bold">14 days</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Supplier Satisfaction</span>
                  <span className="font-bold">96%</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Repeat Business Rate</span>
                  <span className="font-bold">85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-muted/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Supplier Requirements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Documentation Required:</h4>
                <ul className="space-y-2">
                  <li>✓ Business registration certificates</li>
                  <li>✓ Export/import licenses</li>
                  <li>✓ Quality certifications (ISO, etc.)</li>
                  <li>✓ Financial statements (last 2 years)</li>
                  <li>✓ Bank references</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Minimum Criteria:</h4>
                <ul className="space-y-2">
                  <li>✓ 2+ years in commodity trading</li>
                  <li>✓ Proven track record of deliveries</li>
                  <li>✓ Adequate production/storage capacity</li>
                  <li>✓ Quality assurance processes</li>
                  <li>✓ Insurance coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Expand Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our network of verified suppliers and start connecting with global buyers today
          </p>
          <Button variant="secondary" size="lg">
            Apply Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Suppliers;
