import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import agriculturalImage from "@/assets/agricultural.jpg";
import mineralsImage from "@/assets/minerals.jpg";
import energyImage from "@/assets/energy.jpg";

const categories = [
  {
    title: "Agricultural Supply",
    description: "Rice, corn, beans, lentils & specialty grains sourced directly from farms and cooperatives.",
    image: agriculturalImage,
    link: "#grains",
    buttonText: "Explore Grains"
  },
  {
    title: "Minerals & Ores",
    description: "High-grade copper ore, iron, chromite and more with full assay certificates.",
    image: mineralsImage,
    link: "#minerals",
    buttonText: "Explore Minerals"
  },
  {
    title: "Energy Products",
    description: "Fuel-grade petcoke and coal, shipped in bulk with end-to-end logistics.",
    image: energyImage,
    link: "#energy",
    buttonText: "Explore Energy"
  }
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Global Commodity Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive sourcing across three major commodity sectors with verified quality and transparent pricing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-card-lg transition-all duration-300 border-0 bg-card overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                <Button variant="action" className="w-full group-hover:shadow-md transition-shadow duration-300">
                  {category.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
