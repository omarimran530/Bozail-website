import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold">Bozail</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Connecting global buyers and trusted suppliers through verified logistics and market insight.
            </p>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Global Operations</span>
            </div>
          </div>
          
          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Commodities</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Agricultural Products</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Minerals & Ores</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Energy Products</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Market Insights</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm text-primary-foreground/80">trade@bozail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Bozail. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
