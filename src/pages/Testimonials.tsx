
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Fashion Blogger",
      since: "2021",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "ReWear has completely changed how I think about fashion. I've found amazing pieces at a fraction of retail prices, and selling my unused clothes has never been easier. The community aspect makes it feel like more than just a marketplace.",
      rating: 5
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Environmental Advocate",
      since: "2022",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "As someone deeply concerned about the environmental impact of fast fashion, ReWear offers a practical solution. Their platform has made sustainable fashion choices accessible and convenient. The quality of items I've purchased has exceeded my expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophia Chen",
      role: "College Student",
      since: "2022",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      quote: "On a student budget, ReWear has been a game-changer. I can refresh my wardrobe without breaking the bank, and the platform is so intuitive to use. The secure payment system gives me peace of mind when buying from individuals.",
      rating: 4
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "Fashion Retailer",
      since: "2021",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "As a small boutique owner, I use ReWear to resell last season's inventory. The platform has helped me reach customers nationwide and reduce waste. Their seller tools are comprehensive and make inventory management simple.",
      rating: 5
    },
    {
      id: 5,
      name: "Olivia Johnson",
      role: "Sustainable Living Advocate",
      since: "2023",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "ReWear aligns perfectly with my zero-waste lifestyle goals. I love how the platform shows the environmental impact of each purchase. The community of conscious consumers here has introduced me to so many eco-friendly brands.",
      rating: 5
    },
    {
      id: 6,
      name: "David Kim",
      role: "Tech Professional",
      since: "2022",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "The user experience on ReWear is exceptional. Their AI recommendations are surprisingly accurate, helping me discover styles I wouldn't have considered. The authentication service for luxury items gave me confidence to make higher-end purchases.",
      rating: 4
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  const nextTestimonial = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    setActiveIndex(newIndex);
    setSelectedTestimonial(testimonials[newIndex]);
  };

  const prevTestimonial = () => {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);
    setSelectedTestimonial(testimonials[newIndex]);
  };
  
  const selectTestimonial = (index: number) => {
    setActiveIndex(index);
    setSelectedTestimonial(testimonials[index]);
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
                  USER TESTIMONIALS
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Voices from Our Community
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Hear what our users have to say about their experiences with ReWear.
                </motion.p>
              </div>
            </div>
          </section>
          
          {/* Featured Testimonial */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="relative max-w-4xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border border-border/30 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 bg-secondary/30 p-8 flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                          <img 
                            src={selectedTestimonial.avatar} 
                            alt={selectedTestimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">{selectedTestimonial.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{selectedTestimonial.role}</p>
                        <p className="text-xs text-muted-foreground">User since {selectedTestimonial.since}</p>
                        <div className="flex mt-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Award 
                              key={i} 
                              className={`h-4 w-4 ${i < selectedTestimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-8 flex flex-col justify-center">
                        <div className="text-6xl font-serif text-primary/10 mb-4">"</div>
                        <blockquote className="text-lg mb-8">
                          {selectedTestimonial.quote}
                        </blockquote>
                        <div className="flex justify-between items-center">
                          <button 
                            onClick={prevTestimonial} 
                            className="p-2 rounded-full hover:bg-secondary/70 transition-colors"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => selectTestimonial(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                              />
                            ))}
                          </div>
                          <button 
                            onClick={nextTestimonial} 
                            className="p-2 rounded-full hover:bg-secondary/70 transition-colors"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
          
          {/* Testimonial Grid */}
          <section className="py-16 bg-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">More Stories from Our Users</h2>
                <p className="text-muted-foreground">
                  Read about the diverse experiences of people using ReWear for their sustainable fashion journey.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="hover-lift"
                  >
                    <Card className="h-full border-border/30">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="text-4xl font-serif text-primary/10 mb-2">"</div>
                        <blockquote className="text-sm mb-4">
                          {testimonial.quote}
                        </blockquote>
                        <div className="flex justify-between items-center">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Award 
                                key={i} 
                                className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">User since {testimonial.since}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Statistics */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">By the Numbers</h2>
                <p className="text-muted-foreground">
                  Our users consistently rate their ReWear experience highly across all aspects of our platform.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { number: "4.9/5", label: "User Satisfaction" },
                  { number: "98%", label: "Would Recommend" },
                  { number: "4.8/5", label: "Platform Usability" },
                  { number: "4.7/5", label: "Customer Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center p-6 bg-secondary/20 rounded-lg"
                  >
                    <h3 className="text-3xl font-display font-bold mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Testimonials;
