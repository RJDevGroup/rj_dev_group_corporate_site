import React from 'react';
import Section from '../../../components/ui/Section';
import AppImage from '../../../components/AppImage';

const AboutHeroSection = () => {
  return (
    <Section 
      id="about-hero" 
      backgroundColor="bg-gradient-to-br from-accent/5 via-background to-primary/5"
      padding="py-24 sm:py-32 lg:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Building Excellence
            <span className="block text-primary font-mono">Since Day One</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            RaptorJesus Development Group was founded on the principles of innovation, 
            reliability, and unwavering commitment to client success. We transform 
            ambitious ideas into reality through expertise, dedication, and proven results.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
              <span className="text-muted-foreground font-mono">
                <strong className="text-foreground">Founded:</strong> With a vision to bridge technology and business excellence
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
              <span className="text-muted-foreground font-mono">
                <strong className="text-foreground">Mission:</strong> Delivering innovative solutions that drive sustainable growth
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
              <span className="text-muted-foreground font-mono">
                <strong className="text-foreground">Values:</strong> Innovation • Reliability • Client Focus • Technical Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl corporate-shadow-lg">
            <AppImage
              src="/assets/images/Hero-banner-RJDevGroup2-1756860254770.png"
              alt="RaptorJesus Development Group - Company Heritage and Innovation"
              className="w-full h-80 lg:h-96 object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-surface/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-mono text-foreground font-semibold">
                  "Excellence is not a destination, but a continuous journey"
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  — RaptorJesus Development Group Foundation Principle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutHeroSection;