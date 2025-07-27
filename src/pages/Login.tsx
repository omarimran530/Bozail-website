import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <p className="text-muted-foreground">Sign in to your Bozail account</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
              </div>
              
              <Button className="w-full" variant="action">
                Sign In
              </Button>
              
              <div className="text-center">
                <a href="#" className="text-sm text-accent hover:underline">
                  Forgot your password?
                </a>
              </div>
              
              <Separator />
              
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">Don't have an account?</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    Register as Buyer
                  </Button>
                  <Button variant="outline" className="w-full">
                    Register as Supplier
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
