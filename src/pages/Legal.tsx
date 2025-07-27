import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Legal Information
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Terms of service, privacy policy, and compliance information
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="terms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Terms of Service</CardTitle>
                  <p className="text-muted-foreground">Last updated: March 15, 2024</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
                    <p className="text-muted-foreground">
                      By accessing and using the Bozail platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">2. Platform Services</h3>
                    <p className="text-muted-foreground mb-3">
                      Bozail provides a digital marketplace platform that connects commodity suppliers with buyers. Our services include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Marketplace for commodity trading</li>
                      <li>Verification services for suppliers and buyers</li>
                      <li>Payment processing and escrow services</li>
                      <li>Market data and analytics</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">3. User Obligations</h3>
                    <p className="text-muted-foreground mb-3">Users agree to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of their account credentials</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Honor all commitments made through the platform</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">4. Trading Terms</h3>
                    <p className="text-muted-foreground">
                      All trades conducted through the platform are subject to the specific terms agreed upon between buyer and supplier. Bozail acts as a facilitator and is not party to the underlying commodity transactions.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">5. Limitation of Liability</h3>
                    <p className="text-muted-foreground">
                      Bozail shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of the platform or any transactions conducted through it.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Policy</CardTitle>
                  <p className="text-muted-foreground">Last updated: March 15, 2024</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                    <p className="text-muted-foreground mb-3">We collect information you provide directly to us, such as:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Account registration information</li>
                      <li>Business verification documents</li>
                      <li>Trading activity and transaction data</li>
                      <li>Communications with our support team</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
                    <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Provide and improve our services</li>
                      <li>Verify user identities and prevent fraud</li>
                      <li>Process transactions and payments</li>
                      <li>Communicate with users about their accounts</li>
                      <li>Comply with legal and regulatory requirements</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Information Sharing</h3>
                    <p className="text-muted-foreground">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                    <p className="text-muted-foreground mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to processing of your data</li>
                      <li>Data portability</li>
                    </ul>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="compliance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Anti-Money Laundering (AML)</h3>
                    <p className="text-muted-foreground">
                      Bozail maintains strict AML policies and procedures to prevent money laundering and terrorist financing. All users undergo KYC verification and transactions are monitored for suspicious activity.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Know Your Customer (KYC)</h3>
                    <p className="text-muted-foreground mb-3">
                      We require all users to complete our KYC process, which includes:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Identity verification</li>
                      <li>Business registration documents</li>
                      <li>Financial background checks</li>
                      <li>Ongoing monitoring</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Trade Sanctions Compliance</h3>
                    <p className="text-muted-foreground">
                      We comply with all applicable trade sanctions and export control regulations, including those imposed by the UN, US, EU, and other jurisdictions.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Financial Regulations</h3>
                    <p className="text-muted-foreground">
                      Our platform operates in compliance with financial services regulations in all jurisdictions where we provide services, including licensing requirements and capital adequacy standards.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Data Protection</h3>
                    <p className="text-muted-foreground">
                      We comply with GDPR, CCPA, and other data protection regulations to ensure your personal information is processed lawfully and securely.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cookies" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cookie Policy</CardTitle>
                  <p className="text-muted-foreground">Last updated: March 15, 2024</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-3">What Are Cookies</h3>
                    <p className="text-muted-foreground">
                      Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Types of Cookies We Use</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Essential Cookies</h4>
                        <p className="text-muted-foreground">Required for the website to function properly, including authentication and security features.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Analytics Cookies</h4>
                        <p className="text-muted-foreground">Help us understand how visitors interact with our website and improve our services.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Functional Cookies</h4>
                        <p className="text-muted-foreground">Remember your preferences and provide enhanced, personalized features.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Marketing Cookies</h4>
                        <p className="text-muted-foreground">Track your browsing habits to deliver relevant advertisements.</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Managing Cookies</h3>
                    <p className="text-muted-foreground">
                      You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Third-Party Cookies</h3>
                    <p className="text-muted-foreground">
                      We may use third-party services such as Google Analytics, which may place cookies on your device. These third parties have their own privacy policies and cookie practices.
                    </p>
                  </section>
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

export default Legal;
