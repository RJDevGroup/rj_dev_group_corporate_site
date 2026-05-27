import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const ContactPage = () => {
  return (
    <Layout
      title="Contact - RJ Development Group"
      description="Contact RJ Development Group for operations, privacy, OAuth, web, and software workflow matters."
      keywords="contact RJ Development Group, rjdevgroup contact, OAuth support, software operations"
    >
      <Section id="hero-section" padding="pt-32 pb-16" backgroundColor="bg-gradient-to-br from-primary to-slate-900">
        <div className="max-w-4xl text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact RJDG</h1>
          <p className="text-xl text-primary-foreground/85">
            Use this page for operational, technical, privacy, and account-access matters.
          </p>
        </div>
      </Section>

      <Section id="main-contact" padding="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;
