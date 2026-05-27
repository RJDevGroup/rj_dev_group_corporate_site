import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Home', href: '/', icon: 'Home' },
    { label: 'Services', href: '/services', icon: 'Code' },
    { label: 'About', href: '/about', icon: 'Users' },
    { label: 'Contact', href: '/contact', icon: 'Mail' },
    { label: 'Privacy', href: '/privacy', icon: 'Shield' },
    { label: 'Terms', href: '/terms', icon: 'FileText' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  const isActiveRoute = (href) => href === '/' ? location.pathname === '/' : location.pathname === href;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-surface/95 backdrop-blur-sm corporate-shadow' : 'bg-surface/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => handleNavigation('/')} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-mono">RJ</span>
              </div>
              <div className="hidden sm:block text-left">
                <h1 className="text-xl font-bold text-foreground">RJ Development Group</h1>
                <p className="text-sm text-muted-foreground">Digital operations</p>
              </div>
            </button>

            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button key={item.href} onClick={() => handleNavigation(item.href)} className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActiveRoute(item.href) ? 'text-primary bg-primary/5' : 'text-foreground hover:text-primary'}`}>
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button variant="default" size="sm" onClick={() => handleNavigation('/contact')} iconName="ArrowRight" iconPosition="right" iconSize={16}>
                Contact
              </Button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5" aria-label="Toggle mobile menu">
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-0 right-0 bg-surface corporate-shadow-lg border-t border-border transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <nav className="px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <button key={item.href} onClick={() => handleNavigation(item.href)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${isActiveRoute(item.href) ? 'text-primary bg-primary/5 border border-primary/20' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}>
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default StickyNavHeader;
