import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home', icon: 'Home' },
    { label: 'Web Development', href: '#web-development', icon: 'Code' },
    { label: 'Real Estate', href: '#real-estate', icon: 'Building' },
    { label: 'AI/ML', href: '#ai-ml', icon: 'Brain' },
    { label: 'Advisory', href: '#advisory', icon: 'Users' },
    { label: 'Contact', href: '#contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);

      // Update active section based on scroll position
      const sections = menuItems?.map(item => item?.href?.substring(1));
      const currentSection = sections?.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element?.getBoundingClientRect();
          return rect?.top <= 100 && rect?.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleCTAClick = (action) => {
    // Track CTA clicks for analytics
    console.log(`CTA clicked: ${action}`);
    if (action === 'contact') {
      scrollToSection('#contact');
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-corporate ${
          isSticky 
            ? 'bg-surface/95 backdrop-blur-sm corporate-shadow' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('#home')}
                className="flex items-center space-x-3 corporate-hover-opacity"
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg font-mono">RJ</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-foreground">RJ Dev Group</h1>
                  <p className="text-sm text-muted-foreground font-mono">Corporate Solutions</p>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems?.map((item) => (
                <button
                  key={item?.href}
                  onClick={() => scrollToSection(item?.href)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 corporate-hover-opacity ${
                    activeSection === item?.href?.substring(1)
                      ? 'text-primary bg-primary/5' :'text-foreground hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.label}</span>
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCTAClick('contact')}
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
              >
                Get Quote
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleCTAClick('contact')}
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
                className="corporate-hover-scale"
              >
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-corporate ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' :'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-20 left-0 right-0 bg-surface corporate-shadow-lg border-t border-border transition-transform duration-300 ease-corporate ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="px-4 py-6 space-y-2">
            {menuItems?.map((item) => (
              <button
                key={item?.href}
                onClick={() => scrollToSection(item?.href)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item?.href?.substring(1)
                    ? 'text-primary bg-primary/5 border border-primary/20' :'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span className="font-medium">{item?.label}</span>
              </button>
            ))}
            
            {/* Mobile CTAs */}
            <div className="pt-4 mt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleCTAClick('contact')}
                iconName="Phone"
                iconPosition="left"
                iconSize={18}
              >
                Get Quote
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={() => handleCTAClick('contact')}
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={18}
              >
                Start Project
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default StickyNavHeader;