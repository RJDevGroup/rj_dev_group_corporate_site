import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Icon from '../../components/AppIcon';

const PrivacyPage = () => {
  const lastUpdated = "December 2024";

  const privacySections = [
    {
      title: "Information We Collect",
      icon: "Database",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Professional information (Company, job title, business requirements)",
        "Technical information (IP address, browser type, device information)",
        "Usage data (How you interact with our website and services)",
        "Communication records (Emails, calls, meeting notes)"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: "Settings", 
      content: [
        "Provide and improve our corporate services",
        "Communicate with you about projects and services",
        "Send you relevant business updates and newsletters",
        "Analyze website usage to enhance user experience",
        "Comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Information Sharing",
      icon: "Share2",
      content: [
        "We do not sell, trade, or rent your personal information",
        "Information may be shared with trusted service providers",
        "Data may be disclosed when required by law",
        "Business transfers may include customer information",
        "Anonymous, aggregated data may be shared for research"
      ]
    },
    {
      title: "Data Security",
      icon: "Shield",
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers with regular security audits",
        "Access controls and authentication protocols",
        "Regular backups with encrypted storage",
        "Employee training on data protection practices"
      ]
    },
    {
      title: "Your Rights",
      icon: "User",
      content: [
        "Access your personal information",
        "Request correction of inaccurate data",
        "Request deletion of your personal information",
        "Object to processing of your personal information",
        "Request data portability"
      ]
    },
    {
      title: "Cookies and Tracking",
      icon: "Cookie",
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand usage patterns",
        "Marketing cookies for relevant content",
        "Third-party cookies from integrated services",
        "Cookie preferences can be managed in your browser"
      ]
    }
  ];

  return (
    <Layout
      title="Privacy Policy - RJ Dev Group"
      description="Learn how RJ Dev Group collects, uses, and protects your personal information. Our commitment to privacy and data security."
      keywords="privacy policy, data protection, personal information, cookies, GDPR, data security"
    >
      {/* Hero Section */}
      <Section 
        id="hero"
        className="relative overflow-hidden"
        backgroundColor="bg-gradient-to-r from-primary/95 to-primary/85"
        padding="pt-32 pb-16"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/assets/images/Hero-banner-RJDevGroup2-1756860254770.png')`
          }}
        />
        <div className="relative z-10">
          <div className="text-center text-primary-foreground">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/10 rounded-full mb-6">
              <Icon name="Shield" size={40} className="text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section id="introduction" padding="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface rounded-2xl p-8 corporate-shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Commitment to Privacy
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                At RaptorJesus Development Group Ltd., we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our website and services.
              </p>
              <p className="mb-4">
                We understand that your privacy is important, and we have implemented comprehensive measures 
                to protect your data while providing you with exceptional corporate services across web 
                development, real estate, AI/ML, and strategic advisory sectors.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance 
                with this Privacy Policy. We will not use or share your information except as described herein.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Privacy Sections */}
      <Section id="privacy-sections" backgroundColor="bg-surface" padding="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {privacySections?.map((section, index) => (
              <div key={index} className="bg-background rounded-xl p-8 corporate-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={section?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{section?.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section?.content?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Icon name="Check" size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" padding="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Icon name="MessageSquare" size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy, our data practices, or would like to 
              exercise your privacy rights, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:privacy@rjdevgroup.com"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-200"
              >
                <Icon name="Mail" size={18} className="mr-2" />
                privacy@rjdevgroup.com
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-border hover:bg-surface text-foreground rounded-lg font-medium transition-colors duration-200"
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer Note */}
      <Section id="footer-note" backgroundColor="bg-surface" padding="py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            This Privacy Policy is effective as of {lastUpdated} and will remain in effect except with respect to 
            any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPage;