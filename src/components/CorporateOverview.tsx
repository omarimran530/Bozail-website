import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, TrendingUp } from "lucide-react";

const CorporateOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-primary mb-6">
              Corporate Excellence in Global Trade
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Established as a premier commodity trading house, we leverage decades of experience 
              and industry expertise to deliver exceptional value to our global partners.
            </p>
          </div>

          {/* Corporate Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 border-0 shadow-subtle">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">In business since 2004</h3>
                <p className="text-sm text-muted-foreground">
                  21+ years of market leadership and expertise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-subtle">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">30+ Employees</h3>
                <p className="text-sm text-muted-foreground">
                  Expert professionals across global offices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-subtle">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">ISO Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Quality management and compliance standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-subtle">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">$5M+ Revenue</h3>
                <p className="text-sm text-muted-foreground">
                  Annual trading volume and transactions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Manufacturing Excellence */}
          <div className="bg-subtle-gradient rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  State-of-the-Art Manufacturing
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our modern packaging and processing facilities ensure the highest quality 
                  standards while maintaining efficient production capabilities. Advanced 
                  technology and strict quality control processes guarantee product excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium">Advanced packaging technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium">Quality control laboratories</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium">Sustainable production practices</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-subtle">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Factory Video & Photos
                      <br />
                      <span className="text-xs">(Coming Soon)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateOverview;
