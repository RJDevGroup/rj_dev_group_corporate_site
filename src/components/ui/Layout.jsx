import React from 'react';
import { Helmet } from 'react-helmet';
import StickyNavHeader from './StickyNavHeader';
import FooterSection from '../../pages/corporate-homepage/components/FooterSection';

const Layout = ({ 
  children, 
  title = "RaptorJesus Development Group - Corporate Solutions", 
  description = "Leading corporate solutions across Web Development, Real Estate, AI/ML, and Strategic Advisory services.",
  keywords = "web development, real estate development, AI, machine learning, advisory services, corporate solutions" 
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <StickyNavHeader />
        <main className="pt-20">
          {children}
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default Layout;