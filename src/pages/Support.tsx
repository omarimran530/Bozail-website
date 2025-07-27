import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get help with your trading activities and platform questions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Get instant help from our support team
                </p>
                <p className="font-semibold mb-4">Available 24/7</p>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Send us a detailed message
                </p>
                <p className="font-semibold mb-4">Response within 2 hours</p>
                <Button variant="outline" className="w-full">Send Email</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Speak directly with our experts
                </p>
                <p className="font-semibold mb-4">+1 (555) 123-4567</p>
                <Button variant="outline" className="w-full">Call Now</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Describe your issue or question..." rows={4} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I verify my account?</AccordionTrigger>
                  <AccordionContent>
                    Account verification requires submitting business registration documents, financial statements, and completing our KYC process. The verification typically takes 2-3 business days.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                  <AccordionContent>
                    We accept bank wire transfers, letters of credit, and major trade finance instruments. Payment methods vary by region and transaction size.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How are commodity prices determined?</AccordionTrigger>
                  <AccordionContent>
                    Prices are based on real-time market data from major exchanges, quality grades, delivery terms, and current supply-demand dynamics. Suppliers set their own prices based on these factors.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>What happens if there's a quality issue?</AccordionTrigger>
                  <AccordionContent>
                    All shipments undergo quality inspection. If quality issues arise, we have dispute resolution processes including re-inspection, partial refunds, or replacement shipments based on the contract terms.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I track my shipment?</AccordionTrigger>
                  <AccordionContent>
                    You can track shipments through your dashboard using the tracking number provided. We also send automated updates at key milestones during transit.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Are there platform fees?</AccordionTrigger>
                  <AccordionContent>
                    Platform fees vary by service type and transaction volume. Basic membership is free, with premium features available through subscription plans. Transaction fees apply to completed trades.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Emergency Support */}
          <div className="mt-16">
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-destructive mb-4">Emergency Support</h3>
                <p className="text-muted-foreground mb-6">
                  For urgent issues affecting active trades or payments, contact our emergency hotline
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="destructive">
                    Emergency Hotline: +1 (555) 999-0000
                  </Button>
                  <Button variant="outline">
                    Emergency Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
