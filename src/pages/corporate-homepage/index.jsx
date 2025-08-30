import React from 'react';
import StickyNavHeader from '../../components/ui/StickyNavHeader';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const CorporateHomepage = () => {
  const servicesData = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Transform your digital presence with cutting-edge web applications, responsive websites, and scalable e-commerce platforms. Our expert development team leverages the latest technologies including React, Node.js, and cloud infrastructure to deliver high-performance solutions that drive business growth and enhance user engagement.",
      buttonText: "Explore Web Solutions",
      buttonId: "btnWeb",
      trackingId: "service-web-development",
      iconName: "Code",
      isReversed: false,
      backgroundColor: "bg-background"
    },
    {
      id: "real-estate",
      title: "Real Estate Development",
      description: "Unlock property investment opportunities with our comprehensive real estate development services. From market analysis and site selection to project management and construction oversight, we provide end-to-end solutions for residential, commercial, and mixed-use developments that maximize returns and create lasting value.",
      buttonText: "View Real Estate Services",
      buttonId: "btnRE",
      trackingId: "service-real-estate",
      iconName: "Building",
      isReversed: true,
      backgroundColor: "bg-surface"
    },
    {
      id: "ai-ml",
      title: "Applied AI & Machine Learning",
      description: "Harness the power of artificial intelligence to revolutionize your business operations. Our AI/ML solutions include predictive analytics, natural language processing, computer vision, and automated decision-making systems that optimize efficiency, reduce costs, and unlock new revenue streams through intelligent automation.",
      buttonText: "Discover AI Solutions",
      buttonId: "btnAI",
      trackingId: "service-ai-ml",
      iconName: "Brain",
      isReversed: false,
      backgroundColor: "bg-background"
    },
    {
      id: "advisory",
      title: "Management & Advisory",
      description: "Navigate complex business challenges with strategic guidance from our experienced advisory team. We provide management consulting, financial planning, operational optimization, and growth strategy services that help organizations achieve sustainable success and competitive advantage in today's dynamic marketplace.",
      buttonText: "Get Strategic Guidance",
      buttonId: "btnAdvisory",
      trackingId: "service-advisory",
      iconName: "Users",
      isReversed: true,
      backgroundColor: "bg-surface"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation Header */}
      <StickyNavHeader />
      {/* Hero Section */}
      <HeroSection />
      {/* Service Sections */}
      {servicesData?.map((service) => (
        <ServiceSection
          key={service?.id}
          id={service?.id}
          title={service?.title}
          description={service?.description}
          buttonText={service?.buttonText}
          buttonId={service?.buttonId}
          trackingId={service?.trackingId}
          iconName={service?.iconName}
          isReversed={service?.isReversed}
          backgroundColor={service?.backgroundColor}
        />
      ))}
      {/* Contact Section */}
      <ContactSection />
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default CorporateHomepage;