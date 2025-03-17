
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import ChatMessage from '@/components/ChatMessage';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const preBuiltResponse = `Selling on ReWear is simple! Just follow these steps:

1️⃣ Create a Listing – Sign up, upload clear photos, and add a detailed description.
2️⃣ Set Your Price – Choose a fair price or enable price suggestions for better sales.
3️⃣ Receive an Order – Once a buyer purchases, you'll get a prepaid shipping label.
4️⃣ Ship the Item – Pack your item securely and send it using the provided label.
5️⃣ Get Paid! – After the buyer confirms receipt, your payment is released.

Start selling today and give your clothes a second life! ♻️👗💰`;

interface Message {
  id: string;
  content: string;
  type: 'user' | 'ai';
  isNew?: boolean;
}

const AIFeature = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', content: 'How do I sell my clothes on ReWear?', type: 'user' },
    { id: '2', content: preBuiltResponse, type: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user'
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI typing and response
    setTimeout(() => {
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: preBuiltResponse,
        type: 'ai',
        isNew: true
      };
      
      setMessages(prev => [...prev, newAiMessage]);
      setIsTyping(false);
      
      // Clear the "isNew" flag after animation
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === newAiMessage.id ? { ...msg, isNew: false } : msg
          )
        );
      }, 1000);
    }, 1500);
  };

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div 
                  className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary text-primary/80"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  NOW AVAILABLE
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  AI Style Assistant
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Get personalized fashion advice, discover sustainable style tips, and learn how to make the most of your ReWear experience.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Chat Interface Section */}
          <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="w-[90%] max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Card className="border border-primary/10 shadow-xl bg-card/60 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between border-b border-border/40 p-4">
                        <div className="flex items-center gap-2">
                          <Bot className="h-6 w-6 text-primary" />
                          <h3 className="font-medium">ReWear Style Assistant</h3>
                        </div>
                        <div className="flex gap-2">
                          <motion.div 
                            className="h-2.5 w-2.5 rounded-full bg-green-500" 
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-xs text-muted-foreground">Online</span>
                        </div>
                      </div>
                      
                      <ScrollArea className="h-[400px] p-6" ref={scrollAreaRef}>
                        <div className="flex flex-col">
                          {messages.map((message) => (
                            <ChatMessage 
                              key={message.id}
                              message={message.content}
                              type={message.type}
                              isNew={message.isNew}
                            />
                          ))}
                          
                          {isTyping && (
                            <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                              <Bot className="h-4 w-4" />
                              <motion.div className="flex items-center gap-1">
                                <motion.div 
                                  className="h-2 w-2 rounded-full bg-foreground/70"
                                  animate={{ y: [0, -6, 0] }}
                                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
                                />
                                <motion.div 
                                  className="h-2 w-2 rounded-full bg-foreground/70"
                                  animate={{ y: [0, -6, 0] }}
                                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.3, delay: 0.1 }}
                                />
                                <motion.div 
                                  className="h-2 w-2 rounded-full bg-foreground/70"
                                  animate={{ y: [0, -6, 0] }}
                                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.3, delay: 0.2 }}
                                />
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </ScrollArea>
                      
                      <div className="border-t border-border/40 p-4">
                        <form onSubmit={handleSubmit} className="flex gap-2">
                          <Input
                            ref={inputRef}
                            type="text"
                            placeholder="Ask about sustainable fashion, selling tips, or style advice..."
                            value={inputValue}
                            onChange={handleInputChange}
                            className="flex-1 border border-primary/20 focus-visible:ring-primary/30"
                            autoComplete="off"
                          />
                          <Button type="submit" size="icon" disabled={isTyping || inputValue.trim() === ''}>
                            <Send className="h-4 w-4" />
                          </Button>
                        </form>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <div className="mt-12 text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <p className="text-sm text-muted-foreground mb-8">
                      Our AI assistant provides instant answers to all your ReWear questions.
                      Try asking about sustainable fashion, selling strategies, or style advice!
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300">
                      Start Selling Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
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
