import React from 'react';
import { Helmet } from 'react-helmet';
import StickyNavHeader from './ui/StickyNavHeader';
import FooterSection from '../pages/corporate-homepage/components/FooterSection';

const Layout = ({ children, title, description, keywords }) => {
  const defaultTitle = 'RJ Development Group - Digital Operations & Holding Support';
  const defaultDescription = 'RJ Development Group supports software, web operations, AI-assisted workflows, and practical holding administration.';
  const defaultKeywords = 'RJ Development Group, web operations, AI workflows, automation, holding support';

  return (
    <>
      <Helmet>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <StickyNavHeader />
        <main>{children}</main>
        <FooterSection />
      </div>
    </>
  );
};

export default Layout;
