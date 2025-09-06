import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Nav } from './Nav';
import { PillarCard } from './PillarCard';
import { CTA } from './CTA';
import { Footer } from './Footer';
import Section from '../Section';

/**
 * Header with logo, desktop nav, and mobile hamburger menu
 * 
 * Features:
 * - Sticky positioning with blur backdrop
 * - Mobile-responsive hamburger menu
 * - Keyboard accessible navigation
 * - Focus management for mobile drawer
 * 
 * Usage:
 * <Header />
 * 
 * Showcase example (composition):
 * <Header />
 * <Section id="services" eyebrow="Welcome" title="Our Services">
 *   <PillarCard title="Development" description="Full-stack development" />
 * </Section>
 * <CTA headline="Ready to start?" primary={{label: "Get Started", href: "#"}} />
 * <Footer />
 */

export interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`sticky top-0 z-50 border-b border-[rgb(var(--border))] backdrop-blur-xl bg-[rgb(var(--surface))]/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl text-[rgb(var(--fg))]">
          RJDevGroup
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Nav orientation="horizontal" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-2xl text-[rgb(var(--fg))] hover:bg-[rgb(var(--surface))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav"
          className="md:hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-6 py-4 shadow-sm"
        >
          <Nav 
            orientation="vertical" 
            onNavigate={closeMobileMenu}
            className="space-y-2"
          />
        </div>
      )}
    </header>
  )
}

export default Header