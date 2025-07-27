import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive guides and API documentation for using the Bozail platform
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="trading">Trading Guide</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="getting-started" className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Getting Started</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Account Registration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">To start trading on Bozail, you'll need to create an account and complete our verification process:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Register with your business email</li>
                      <li>Provide business documentation</li>
                      <li>Complete KYC verification</li>
                      <li>Set up payment methods</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Platform Navigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Learn how to navigate the platform effectively:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Dashboard overview and key metrics</li>
                      <li>Product catalog and search functionality</li>
                      <li>Quote request and management system</li>
                      <li>Order tracking and communication tools</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Making Your First Trade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Step-by-step guide to your first commodity trade:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Search for commodities using filters</li>
                      <li>Request quotes from multiple suppliers</li>
                      <li>Compare offers and negotiate terms</li>
                      <li>Finalize the purchase and arrange logistics</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">API Reference</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">All API requests require authentication using API keys:</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <code>
                        curl -H "Authorization: Bearer YOUR_API_KEY" \<br/>
                        &nbsp;&nbsp;https://api.bozail.com/v1/commodities
                      </code>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Endpoints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">GET /v1/commodities</h4>
                        <p className="text-muted-foreground">List all available commodities</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">POST /v1/quotes</h4>
                        <p className="text-muted-foreground">Request a quote for a commodity</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">GET /v1/orders</h4>
                        <p className="text-muted-foreground">List your orders</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">GET /v1/market-data</h4>
                        <p className="text-muted-foreground">Get real-time market prices</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="trading" className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Trading Guide</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Understanding Commodity Grades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Different commodities have specific grade classifications:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Agricultural:</strong> Grade standards based on protein content, moisture, and foreign matter</li>
                      <li><strong>Metals:</strong> Purity percentages and certifications</li>
                      <li><strong>Energy:</strong> API gravity for oil, BTU content for gas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Common payment terms in commodity trading:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Letter of Credit (L/C):</strong> Bank-guaranteed payment</li>
                      <li><strong>Cash Against Documents (CAD):</strong> Payment upon document presentation</li>
                      <li><strong>Advance Payment:</strong> Payment before shipment</li>
                      <li><strong>Open Account:</strong> Payment after delivery</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Strategies to minimize trading risks:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Use hedging instruments for price protection</li>
                      <li>Verify supplier credentials and track record</li>
                      <li>Arrange comprehensive insurance coverage</li>
                      <li>Implement quality control and inspection processes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="support" className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Support Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> support@bozail.com</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Live Chat:</strong> Available 24/7</p>
                      <p><strong>Response Time:</strong> Within 2 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Training Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Video tutorials</li>
                      <li>Webinar series</li>
                      <li>Trading workshops</li>
                      <li>Platform demonstrations</li>
                      <li>Best practices guides</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Trading Platform: Operational</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Market Data: Operational</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Payment System: Operational</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>User forums</li>
                      <li>Expert Q&A sessions</li>
                      <li>Industry insights blog</li>
                      <li>Newsletter subscription</li>
                      <li>Social media updates</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;
