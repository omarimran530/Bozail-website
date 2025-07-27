import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "trade@bozail.com",
    description: "Get in touch for trading inquiries"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "24/7 trading desk support"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Global Operations",
    description: "Offices in major trading hubs"
  },
  {
    icon: Clock,
    title: "Trading Hours",
    details: "24/7 Operations",
    description: "Round-the-clock market access"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Work With Us Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to connect with global suppliers? Our trading experts are here to help you navigate the commodity markets.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="John" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Doe" className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="john@company.com" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input placeholder="Your Company Name" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Commodity Interest</label>
                  <Input placeholder="e.g., Basmati Rice, Copper Ore" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your trading requirements..." 
                    className="w-full min-h-[120px]" 
                  />
                </div>
                
                <Button variant="action" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">{info.title}</h4>
                    <p className="text-primary font-medium mb-1">{info.details}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="bg-hero-gradient rounded-lg p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Work with us!</h4>
              <p className="mb-6 text-gray-200">
                Join our list of satisfied clients who trust Bozail for their global commodity trading needs.
              </p>
              <Button variant="premium" size="lg" className="w-full">
                Let's Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
