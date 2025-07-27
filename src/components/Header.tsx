import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">B</span>
          </div>
          <span className="text-2xl font-bold text-primary">Bozail</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-accent transition-colors">Home</Link>
          <Link to="/commodities" className="text-foreground hover:text-accent transition-colors">Commodities</Link>
          <Link to="/services" className="text-foreground hover:text-accent transition-colors">Services</Link>
          <Link to="/about" className="text-foreground hover:text-accent transition-colors">About</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">Login</Button>
          <Button variant="action" size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
