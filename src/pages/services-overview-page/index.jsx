import React from 'react';
import Layout from '../../components/ui/Layout';

import ServiceHeroSection from './components/ServiceHeroSection';
import ServiceCardGrid from './components/ServiceCardGrid';

const ServicesOverviewPage = () => {
  return (
    <Layout 
      title="Services Overview - RaptorJesus Development Group"
      description="Comprehensive details about RaptorJesus Development Group's four core service offerings: Web Development, Real Estate Development, Applied AI & Machine Learning, and Management & Advisory services."
      keywords="web development services, real estate development, AI machine learning services, management advisory, corporate solutions, software development, property development"
    >
      <ServiceHeroSection />
      <ServiceCardGrid />
    </Layout>
  );
};

export default ServicesOverviewPage;