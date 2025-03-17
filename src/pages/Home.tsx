
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShoppingBag, RefreshCw, DollarSign, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div 
                  className="max-w-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary text-primary/80"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    Sustainable Fashion Marketplace
                  </motion.div>
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Give Your Clothes a Second Life
                  </motion.h1>
                  <motion.p 
                    className="text-lg text-muted-foreground mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Join the sustainable fashion movement. Buy and sell pre-loved clothing and accessories on ReWear's premium marketplace.
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <Link to="/ai-feature">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300">
                        Try AI Styling <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="border-primary/20 hover:bg-secondary/80 transition-all duration-300">
                      Explore Marketplace
                    </Button>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="relative w-full max-w-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/40 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80" 
                      alt="Sustainable Fashion" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Floating card */}
                  <motion.div 
                    className="glass-card absolute -bottom-6 -left-6 p-4 rounded-lg max-w-[200px]"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <p className="text-sm font-medium">Join <span className="text-primary">2,500+</span> users who've already embraced sustainable fashion</p>
                  </motion.div>
                  
                  {/* Floating badge */}
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm shadow-lg p-3 rounded-full"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <RefreshCw className="h-8 w-8 text-green-500" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Features Preview */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.p 
                  className="text-sm font-medium text-primary mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  HOW IT WORKS
                </motion.p>
                <motion.h2 
                  className="text-3xl md:text-4xl font-display font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  A Marketplace Built for Sustainable Fashion
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  ReWear makes it easy to buy and sell pre-loved clothing, reducing waste and giving quality pieces a second life.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
                    title: "Easy Listing Process",
                    description: "List your items in minutes with our user-friendly interface and AI-powered categorization."
                  },
                  {
                    icon: <RefreshCw className="h-10 w-10 text-primary" />,
                    title: "Sustainable Marketplace",
                    description: "Join a community committed to reducing fashion waste and extending the lifecycle of quality clothing."
                  },
                  {
                    icon: <DollarSign className="h-10 w-10 text-primary" />,
                    title: "Secure Transactions",
                    description: "Our protected payment system ensures safe and reliable transactions between buyers and sellers."
                  }
                ].map((feature, index) => (
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
                      <CardContent className="p-6 text-center">
                        <div className="rounded-full bg-secondary/70 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
          
          {/* Statistics Section */}
          <section className="py-20 bg-gradient-to-br from-secondary/30 to-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: "10K+", label: "Active Users" },
                  { number: "25K+", label: "Items Listed" },
                  { number: "8K+", label: "Successful Sales" },
                  { number: "4.9/5", label: "User Rating" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <h3 className="text-4xl font-display font-bold mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Testimonial Preview */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <motion.p 
                  className="text-sm font-medium text-primary mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  TESTIMONIALS
                </motion.p>
                <motion.h2 
                  className="text-3xl md:text-4xl font-display font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  What Our Users Say
                </motion.h2>
              </div>
              
              <motion.div 
                className="glass-card max-w-2xl mx-auto p-8 rounded-xl relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-5xl font-serif text-primary/20 absolute top-4 left-6">"</div>
                <blockquote className="text-lg italic mb-6 relative z-10">
                  ReWear has completely changed how I think about fashion. I've found amazing pieces at a fraction of retail prices, and selling my unused clothes has never been easier. The community aspect makes it feel like more than just a marketplace.
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                      alt="User Avatar" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Emma Thompson</p>
                    <p className="text-sm text-muted-foreground">Loyal user since 2021</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Award key={star} className="h-5 w-5 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <div className="text-center mt-8">
                <Link to="/testimonials">
                  <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-secondary/50">
                    View all testimonials <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
                  Start buying and selling pre-loved clothing today. Join thousands of users already making a difference.
                </p>
                <Link to="/ai-feature">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
                    Try Our AI Feature <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Home;
