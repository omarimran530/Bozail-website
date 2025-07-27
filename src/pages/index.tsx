import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import TrustIndicators from "@/components/TrustIndicators";
import CorporateOverview from "@/components/CorporateOverview";
import FeaturedCommodities from "@/components/FeaturedCommodities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductCategories />
      <TrustIndicators />
      <CorporateOverview />
      <FeaturedCommodities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
