
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AIFeature = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-32 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div 
                  className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary text-primary/80"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  COMING SOON
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  AI-Powered Style Assistant
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Our revolutionary AI feature will transform your shopping experience, helping you discover perfect pieces that match your style and values.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300">
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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

export default AIFeature;
