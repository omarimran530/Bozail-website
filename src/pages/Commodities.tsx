import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Commodities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Commodities Catalog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our comprehensive range of agricultural products, minerals, and energy commodities
          </p>
        </div>
      </section>

      {/* Commodities Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="agricultural" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="agricultural">Agricultural</TabsTrigger>
              <TabsTrigger value="minerals">Minerals</TabsTrigger>
              <TabsTrigger value="energy">Energy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="agricultural">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Wheat
                      <Badge variant="secondary">Popular</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Premium quality wheat from verified global suppliers
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$285/MT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Origin:</span>
                        <span>USA, Canada, Australia</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Rice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      High-grade rice varieties for global markets
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$420/MT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Origin:</span>
                        <span>India, Thailand, Vietnam</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Soybeans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Non-GMO and conventional soybeans
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$385/MT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Origin:</span>
                        <span>Brazil, USA, Argentina</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="minerals">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Iron Ore
                      <Badge variant="secondary">High Demand</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      High-grade iron ore from certified mines
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$95/MT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Grade:</span>
                        <span>62% Fe Content</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Copper</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Premium copper cathodes and concentrates
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$8,250/MT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Purity:</span>
                        <span>99.99%</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Gold</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment grade gold bullion and bars
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$65,000/kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Purity:</span>
                        <span>24K (99.9%)</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="energy">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Crude Oil
                      <Badge variant="secondary">Volatile</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Brent and WTI crude oil from certified sources
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$82/barrel</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span>Brent Crude</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Natural Gas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      LNG and pipeline natural gas
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$3.2/MMBtu</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span>Henry Hub</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Coal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Thermal and metallurgical coal
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Current Price:</span>
                        <span className="font-semibold">$125/MT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span>Thermal Coal</span>
                      </div>
                    </div>
                    <Button className="w-full">View Details</Button>
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

export default Commodities;
