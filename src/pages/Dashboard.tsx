import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, manage your trading activities</p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">Active Orders</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-accent">$2.4M</div>
                <div className="text-sm text-muted-foreground">Total Volume</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-accent">8</div>
                <div className="text-sm text-muted-foreground">Pending Quotes</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-accent">96%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="quotes">Quotes</TabsTrigger>
              <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Recent Orders</h2>
                <Button>New Order</Button>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">Premium Wheat - 5,000 MT</h3>
                        <p className="text-sm text-muted-foreground">Order #ORD-2024-001</p>
                      </div>
                      <Badge variant="default">In Transit</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Supplier:</span>
                        <div>Australian Grains Co.</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Value:</span>
                        <div>$1,425,000</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Delivery:</span>
                        <div>Mar 15, 2024</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">Copper Cathodes - 100 MT</h3>
                        <p className="text-sm text-muted-foreground">Order #ORD-2024-002</p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Supplier:</span>
                        <div>Chilean Metals Ltd.</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Value:</span>
                        <div>$825,000</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Delivery:</span>
                        <div>Apr 10, 2024</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="quotes" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Quote Requests</h2>
                <Button>Request Quote</Button>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">Soybeans - 10,000 MT</h3>
                        <p className="text-sm text-muted-foreground">Quote #QUO-2024-008</p>
                      </div>
                      <Badge variant="default">3 Responses</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-muted-foreground">Origin:</span>
                        <div>Brazil</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Best Quote:</span>
                        <div>$385/MT</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Expires:</span>
                        <div>2 days</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Quotes</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="watchlist" className="space-y-6">
              <h2 className="text-xl font-semibold">Watchlist</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">Crude Oil (Brent)</h3>
                        <p className="text-sm text-muted-foreground">Current: $82.45/barrel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-red-600 font-semibold">-2.3%</div>
                        <div className="text-sm text-muted-foreground">Today</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">Gold</h3>
                        <p className="text-sm text-muted-foreground">Current: $2,034/oz</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-semibold">+0.8%</div>
                        <div className="text-sm text-muted-foreground">Today</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="profile" className="space-y-6">
              <h2 className="text-xl font-semibold">Profile Settings</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Smith" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="john.smith@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="Global Trading Corp" />
                  </div>
                  <Button>Update Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
