import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Package, Star } from "lucide-react";

const commodities = [
  {
    name: "Basmati Rice",
    description: "Aromatic aged long-grain rice, perfect for high-end buyers and wholesalers.",
    grade: "Aged Premium",
    packaging: "50kg Bags",
    origin: "Punjab, Pakistan",
    price: "$1,200/MT",
    rating: 4.9,
    image: "🌾"
  },
  {
    name: "Copper Ore",
    description: "Customizable Cu% content for industrial and commodity traders.",
    grade: "Industrial Grade",
    packaging: "Bulk Shipment",
    origin: "Chile",
    price: "$8,500/MT",
    rating: 4.8,
    image: "⛏️"
  },
  {
    name: "Petroleum Coke",
    description: "High-quality fuel grade petcoke for energy generation and industrial use.",
    grade: "Fuel Grade",
    packaging: "Bulk Carrier",
    origin: "USA",
    price: "$450/MT",
    rating: 4.7,
    image: "⚡"
  }
];

const FeaturedCommodities = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Top Traded Commodities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular commodities with real-time pricing and quality specifications.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {commodities.map((commodity, index) => (
            <Card key={index} className="group hover:shadow-card-lg transition-all duration-300 border-0 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{commodity.image}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-muted-foreground">{commodity.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-primary mb-3">{commodity.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{commodity.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Grade:</span>
                    <Badge variant="secondary">{commodity.grade}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground flex items-center">
                      <Package className="w-4 h-4 mr-1" />
                      Packaging:
                    </span>
                    <span className="text-sm text-primary">{commodity.packaging}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Origin:
                    </span>
                    <span className="text-sm text-primary">{commodity.origin}</span>
                  </div>
                  
                  <div className="border-t pt-3 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-accent">{commodity.price}</span>
                      <Badge variant="outline" className="border-accent text-accent">Current</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCommodities;
