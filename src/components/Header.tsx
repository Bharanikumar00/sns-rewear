
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isLoggedIn = location.pathname !== '/login';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'AI Feature', path: '/ai-feature' },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-2xl font-display font-bold text-primary hover:opacity-80 transition-opacity"
            >
              <span className="text-3xl">ReWear</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isLoggedIn && navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium story-link transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isLoggedIn && (
              <Button 
                onClick={handleLogout} 
                variant="ghost" 
                className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/80"
              >
                Logout
              </Button>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200 ease-in-out" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200 ease-in-out" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {isLoggedIn && navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded text-base font-medium ${
                  location.pathname === link.path 
                    ? 'text-primary bg-secondary/50' 
                    : 'text-gray-700 hover:text-primary hover:bg-secondary/30'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {isLoggedIn && (
              <Button 
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }} 
                variant="ghost" 
                className="w-full justify-start px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary/30"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
