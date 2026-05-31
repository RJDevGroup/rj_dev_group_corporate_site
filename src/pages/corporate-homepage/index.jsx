import React from 'react';
import StickyNavHeader from '../../components/ui/StickyNavHeader';
import HeroSection from './components/HeroSection';
import PillarSection from './components/PillarSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const pillars = [
  {
    id: "system-architecture",
    title: "System Architecture & Design",
    description:
      "Infrastructure design, integration architecture, and technical strategy for complex multi-system environments. We architect scalable foundations that support cross-jurisdiction operations.",
    iconName: "Network",
  },
  {
    id: "web-development",
    title: "Full-Stack Web Development",
    description:
      "Custom React, Vue, and Node.js applications with a focus on performance, maintainability, and operator-grade reliability. From internal tooling to public-facing platforms.",
    iconName: "Code2",
  },
  {
    id: "financial-consultancy",
    title: "Financial Consultancy",
    description:
      "Financial planning, documentation, reporting, and advisory coordination. Supporting structured cross-border activity with clear records and compliance-first processes.",
    iconName: "Landmark",
  },
  {
    id: "cross-border",
    title: "Cross-Border Operations",
    description:
      "Cross-border entity management and operational coordination. Compliance monitoring, documentation, and advisory support for multi-jurisdiction structures.",
    iconName: "Globe2",
  },
  {
    id: "real-estate",
    title: "Real Estate & Land Development",
    description:
      "Residential and commercial project development — from site analysis and acquisition through construction oversight. Active coastal development projects in Kenya.",
    iconName: "Building2",
  },
  {
    id: "ai-operations",
    title: "AI-Assisted Digital Operations",
    description:
      "Agent-based automation, intelligent document processing, and AI-powered workflow optimization. Operator-grade digital infrastructure for lean, high-efficiency teams.",
    iconName: "Cpu",
  },
];

const CorporateHomepage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <StickyNavHeader />
      <HeroSection />
      {/* Pillar Sections */}
      {pillars.map((pillar, i) => (
        <PillarSection
          key={pillar.id}
          id={pillar.id}
          title={pillar.title}
          description={pillar.description}
          iconName={pillar.iconName}
          isReversed={i % 2 === 1}
        />
      ))}
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default CorporateHomepage;
