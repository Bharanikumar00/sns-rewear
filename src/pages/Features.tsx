import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, RefreshCw, Truck, Shield, Repeat, MessageSquare, Zap, Unlock, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Smart Search",
      description: "Find exactly what you're looking for with our AI-powered search that understands style, brand, and size preferences."
    },
    {
      icon: <ShoppingBag className="h-10 w-10" />,
      title: "Easy Listing",
      description: "List your items in minutes with our streamlined process. Take photos, add details, and set your price."
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: "Sustainable Impact",
      description: "Track your environmental impact with metrics showing how your buying and selling reduces waste."
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Integrated Shipping",
      description: "Print shipping labels directly from our platform and track packages in real-time."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Payments",
      description: "Our escrow system ensures buyers get what they ordered and sellers get paid promptly."
    },
    {
      icon: <Repeat className="h-10 w-10" />,
      title: "Authentication Service",
      description: "Optional authentication for luxury items ensures authenticity and builds buyer confidence."
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "In-App Messaging",
      description: "Communicate easily with buyers and sellers to negotiate prices or ask questions."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "AI Style Recommendations",
      description: "Receive personalized style recommendations based on your preferences and past purchases."
    },
    {
      icon: <Unlock className="h-10 w-10" />,
      title: "Seller Analytics",
      description: "Access detailed analytics about your listings, views, and sales to optimize your strategy."
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
                  PLATFORM FEATURES
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Designed for a Seamless Experience
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Explore the innovative features that make ReWear the premier marketplace for second-hand fashion.
                </motion.p>
              </div>
            </div>
          </section>
          
          {/* Features Grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeInUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="hover-lift"
                  >
                    <Card className="h-full border-border/40">
                      <CardContent className="p-6">
                        <div className="rounded-full bg-secondary/70 w-16 h-16 mb-6 flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* How It Works */}
          <section className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.h2 
                  className="text-3xl md:text-4xl font-display font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  How ReWear Works
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Our platform makes buying and selling pre-loved fashion simple and secure.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Create Your Account",
                    description: "Sign up and complete your profile to start buying and selling on ReWear."
                  },
                  {
                    step: "02",
                    title: "List or Browse",
                    description: "Upload items you want to sell or browse thousands of pre-loved fashion pieces."
                  },
                  {
                    step: "03",
                    title: "Secure Transactions",
                    description: "Complete purchases safely through our protected payment system."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="text-6xl font-display font-bold text-primary/10 absolute -top-6 left-0">
                      {step.step}
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-border/30 relative z-10 mt-8">
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 z-0">
                        <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="currentColor" className="text-primary/20" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Feature Highlight */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary text-primary/80">
                    SPOTLIGHT FEATURE
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                    AI-Powered Style Matching
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our advanced AI algorithm learns your style preferences and matches you with items you'll love. The more you use ReWear, the more personalized your recommendations become.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Personalized recommendations based on your style profile",
                      "Discover new brands and styles that match your taste",
                      "Visual search to find similar items to pieces you love",
                      "Outfit suggestions that work with your existing wardrobe"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <div className="rounded-xl overflow-hidden shadow-xl border border-border/40">
                      <img 
                        src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                        alt="AI Style Matching" 
                        className="w-full h-auto"
                      />
                    </div>
                    
                    {/* Floating element */}
                    <motion.div 
                      className="absolute -bottom-6 -right-6 glass-card p-4 rounded-lg max-w-[220px] shadow-lg"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <p className="text-sm font-medium">
                        <span className="text-primary">87% of users</span> find new favorite items through our AI recommendations
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Features;
