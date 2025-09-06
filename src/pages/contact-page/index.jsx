import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ContactMap from './components/ContactMap';

const ContactPage = () => {
  return (
    <Layout
      title="Contact Us - RJ Dev Group"
      description="Get in touch with RJ Dev Group for your corporate solution needs. Multiple communication channels, quick response times, and expert consultation available."
      keywords="contact, consultation, web development services, real estate development, AI services, business advisory"
    >
      {/* Hero Section with Background Image */}
      <Section 
        id="hero-section"
        className="relative overflow-hidden"
        backgroundColor="bg-gradient-to-r from-primary/95 to-primary/85"
        padding="pt-32 pb-16"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/assets/images/Hero-banner-RJDevGroup2-1756860254770.png')`
          }}
        />
        <div className="relative z-10">
          <div className="text-center text-primary-foreground mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-accent">Our Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </Section>

      {/* Main Contact Section */}
      <Section id="main-contact" padding="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </Section>

      {/* Response Time Section */}
      <Section id="response-time" backgroundColor="bg-surface" padding="py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quick Response Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">24h</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Initial Response</h3>
              <p className="text-muted-foreground">We respond to all inquiries within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">48h</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation Call</h3>
              <p className="text-muted-foreground">Schedule your consultation within 48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">7d</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Project Proposal</h3>
              <p className="text-muted-foreground">Receive detailed proposal within one week</p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;