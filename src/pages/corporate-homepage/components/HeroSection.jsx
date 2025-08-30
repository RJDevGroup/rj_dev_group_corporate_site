import React from 'react';
import Image from '../../../components/AppImage';
import ServiceCTAButton from '../../../components/ui/ServiceCTAButton';

const HeroSection = () => {
  const heroData = {
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    companyName: "RaptorJesus Development Group Ltd.",
    tagline: "Transforming Business Through Innovation & Excellence",
    subtitle: "Leading corporate solutions across Web Development, Real Estate, AI/ML, and Strategic Advisory services",
    ctaButtons: [
      {
        id: "btnHeroWeb",
        text: "Web Development",
        targetAction: "#web-development",
        trackingId: "hero-web-dev"
      },
      {
        id: "btnHeroRE", 
        text: "Real Estate",
        targetAction: "#real-estate",
        trackingId: "hero-real-estate"
      },
      {
        id: "btnHeroFinance",
        text: "Financial Consulting", 
        targetAction: "#advisory",
        trackingId: "hero-finance"
      }
    ]
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData?.backgroundImage}
          alt="Corporate office building representing professional business environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Company Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 font-mono tracking-tight">
            {heroData?.companyName}
          </h1>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-4 font-mono">
            {heroData?.tagline}
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroData?.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-3xl mx-auto">
            {heroData?.ctaButtons?.map((button) => (
              <ServiceCTAButton
                key={button?.id}
                id={button?.id}
                variant="default"
                size="lg"
                targetAction={button?.targetAction}
                trackingId={button?.trackingId}
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={20}
                className="w-full sm:w-auto min-w-[200px] bg-primary hover:bg-secondary text-primary-foreground font-mono font-semibold"
              >
                {button?.text}
              </ServiceCTAButton>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;