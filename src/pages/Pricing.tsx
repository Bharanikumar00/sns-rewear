
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: annual ? "$49" : "$5",
      period: annual ? "/year" : "/month",
      description: "Perfect for occasional buyers and casual sellers",
      features: [
        "Up to 10 listings per month",
        "Basic search functionality",
        "In-app messaging",
        "Standard payment processing",
        "Community access"
      ],
      notIncluded: [
        "Reduced commission fees",
        "Featured listings",
        "AI style recommendations",
        "Verified seller badge",
        "Analytics dashboard"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Premium",
      price: annual ? "$99" : "$10",
      period: annual ? "/year" : "/month",
      description: "Ideal for regular buyers and active sellers",
      features: [
        "Unlimited listings",
        "Reduced 5% commission fees",
        "Featured listings (3/month)",
        "AI style recommendations",
        "Verified seller badge",
        "Basic analytics dashboard",
        "Priority customer support"
      ],
      notIncluded: [
        "Free authentication service",
        "Advanced analytics",
        "Custom storefront"
      ],
      popular: true,
      buttonText: "Try Premium"
    },
    {
      name: "Pro Seller",
      price: annual ? "$199" : "$20",
      period: annual ? "/year" : "/month",
      description: "For professional sellers and businesses",
      features: [
        "All Premium features",
        "Lowest 3% commission fees",
        "Unlimited featured listings",
        "Free authentication service",
        "Advanced analytics dashboard",
        "Custom storefront",
        "Bulk listing tools",
        "API access",
        "Dedicated account manager"
      ],
      notIncluded: [],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];
  
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div 
                  className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary text-primary/80"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  PRICING PLANS
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Simple, Transparent Pricing
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Choose the plan that fits your needs. No hidden fees, cancel anytime.
                </motion.p>
                
                <motion.div 
                  className="flex items-center justify-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Label htmlFor="billing-toggle" className={!annual ? "font-medium" : "text-muted-foreground"}>
                    Monthly
                  </Label>
                  <Switch
                    id="billing-toggle"
                    checked={annual}
                    onCheckedChange={setAnnual}
                  />
                  <Label htmlFor="billing-toggle" className={annual ? "font-medium" : "text-muted-foreground"}>
                    Annually <span className="text-green-600 text-xs font-medium ml-1">Save 20%</span>
                  </Label>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Pricing Cards */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeInUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`hover-lift ${plan.popular ? 'mt-[-20px] md:mt-[-40px]' : ''}`}
                  >
                    <Card className={`h-full border-border/40 overflow-hidden ${
                      plan.popular ? 'ring-2 ring-primary shadow-lg' : 'shadow-md'
                    }`}>
                      {plan.popular && (
                        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      
                      <CardHeader className="p-6 pb-0">
                        <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <span className="text-4xl font-display font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">{plan.period}</span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 pt-0">
                        <div className="mt-4 space-y-3">
                          {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                          
                          {plan.notIncluded.map((feature, i) => (
                            <div key={i} className="flex items-start text-muted-foreground">
                              <X className="h-5 w-5 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-6 pt-0">
                        <Button 
                          className={`w-full ${
                            plan.popular 
                              ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                              : 'bg-secondary hover:bg-secondary/90 text-primary'
                          }`}
                        >
                          {plan.buttonText}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-display font-bold mb-4">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground">
                    Find answers to common questions about our pricing and features.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "Can I change plans later?",
                      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit towards your next billing cycle."
                    },
                    {
                      question: "What are commission fees?",
                      answer: "We charge a small percentage of each sale to cover payment processing and platform maintenance. The commission rate depends on your plan: 8% for Basic, 5% for Premium, and 3% for Pro Seller."
                    },
                    {
                      question: "Is there a free trial available?",
                      answer: "We offer a 14-day free trial of our Premium plan for all new users. No credit card required to start your trial."
                    },
                    {
                      question: "What happens if I exceed my monthly listing limit?",
                      answer: "On the Basic plan, once you reach your 10 listing limit, you'll need to wait until the next billing cycle to add more items or upgrade to a Premium plan for unlimited listings."
                    },
                    {
                      question: "How does the authentication service work?",
                      answer: "Our authentication service verifies the authenticity of luxury and designer items. Pro Seller members receive this service for free, while other plans can access it for a per-item fee."
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="bg-white rounded-lg p-6 shadow-sm border border-border/30"
                    >
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <p className="text-muted-foreground mb-4">
                    Still have questions about our pricing?
                  </p>
                  <Button variant="outline" className="border-primary/20 hover:bg-secondary/80">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Ready to Join the Sustainable Fashion Movement?
                </h2>
                <p className="text-primary-foreground/80 mb-8 text-lg">
                  Start your 14-day free trial today. No credit card required.
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
                  Start Free Trial
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Pricing;
