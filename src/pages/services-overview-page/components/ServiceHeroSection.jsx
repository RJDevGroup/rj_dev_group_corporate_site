import React from 'react';
import Section from '../../../components/ui/Section';
import AppImage from '../../../components/AppImage';

const ServiceHeroSection = () => {
  return (
    <Section 
      id="services-hero" 
      backgroundColor="bg-gradient-to-br from-primary/5 via-background to-accent/5"
      padding="py-24 sm:py-32 lg:py-40"
    >
      <div className="text-center">
        {/* Hero Image */}
        <div className="relative mb-12 mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl corporate-shadow-lg">
            <AppImage
              src="/assets/images/Hero-banner-RJDevGroup2-1756860254770.png"
              alt="RaptorJesus Development Group - Professional Corporate Services"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Professional
            <span className="block text-primary font-mono">Service Solutions</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover our comprehensive suite of corporate services designed to drive innovation, 
            growth, and success across multiple industries and business domains.
          </p>

          <div className="text-sm text-muted-foreground font-mono bg-surface/50 rounded-lg px-6 py-4 inline-block">
            Four Core Expertise Areas • Enterprise Solutions • Proven Results
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceHeroSection;