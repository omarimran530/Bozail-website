import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Market News & Insights
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay informed with the latest commodity market news and expert analysis
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured Article */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="bg-accent-gradient p-8 text-white">
                <Badge variant="secondary" className="mb-4">Featured</Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Global Wheat Prices Surge Amid Supply Chain Disruptions
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Analysis of how recent geopolitical events and weather patterns are affecting global wheat markets, with implications for traders and consumers worldwide.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm opacity-75">
                    By Sarah Johnson • March 15, 2024
                  </div>
                  <Button variant="secondary">Read More</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Energy</Badge>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                <CardTitle className="text-lg">
                  Oil Markets React to OPEC Production Cuts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Crude oil prices jumped 3% following OPEC's announcement of additional production cuts, signaling tighter global supply.
                </p>
                <Button variant="outline" size="sm">Read Article</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Metals</Badge>
                  <span className="text-sm text-muted-foreground">4 hours ago</span>
                </div>
                <CardTitle className="text-lg">
                  Copper Demand Rises with Green Energy Push
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Electric vehicle manufacturing and renewable energy infrastructure drive unprecedented demand for copper globally.
                </p>
                <Button variant="outline" size="sm">Read Article</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Agricultural</Badge>
                  <span className="text-sm text-muted-foreground">6 hours ago</span>
                </div>
                <CardTitle className="text-lg">
                  Soybean Harvest Exceeds Expectations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Brazilian soybean harvest is 15% higher than last year, potentially easing global food supply concerns.
                </p>
                <Button variant="outline" size="sm">Read Article</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Technology</Badge>
                  <span className="text-sm text-muted-foreground">1 day ago</span>
                </div>
                <CardTitle className="text-lg">
                  Blockchain Revolutionizes Commodity Trading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Smart contracts and blockchain technology are transforming how commodities are traded and tracked globally.
                </p>
                <Button variant="outline" size="sm">Read Article</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Market Analysis</Badge>
                  <span className="text-sm text-muted-foreground">1 day ago</span>
                </div>
                <CardTitle className="text-lg">
                  Q1 Commodity Performance Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analysis of commodity performance in the first quarter, with outlook for Q2.
                </p>
                <Button variant="outline" size="sm">Read Article</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Sustainability</Badge>
                  <span className="text-sm text-muted-foreground">2 days ago</span>
                </div>
                <CardTitle className="text-lg">
                  ESG Standards Reshape Commodity Markets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Environmental, social, and governance factors are becoming critical in commodity sourcing decisions.
                </p>
                <Button variant="outline" size="sm">Read Article</Button>
              </CardContent>
            </Card>
          </div>

          {/* Market Insights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Weekly Market Insights</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3">Price Movements</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Crude Oil</span>
                        <span className="text-red-600">-2.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gold</span>
                        <span className="text-green-600">+0.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wheat</span>
                        <span className="text-green-600">+5.2%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Key Events</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• OPEC meeting results</li>
                      <li>• US inflation data release</li>
                      <li>• Brazilian harvest reports</li>
                      <li>• Chinese demand indicators</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Next Week Outlook</h3>
                    <p className="text-sm text-muted-foreground">
                      Focus on Federal Reserve policy decisions and their impact on commodity currencies. Weather patterns in key producing regions remain critical.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <Card className="bg-accent-gradient p-8">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="mb-6 opacity-90">
                  Subscribe to our newsletter for daily market updates and expert insights
                </p>
                <div className="flex max-w-md mx-auto gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 rounded-lg text-foreground"
                  />
                  <Button variant="secondary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
