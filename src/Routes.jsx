import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CorporateHomepage from './pages/corporate-homepage';
import ServicesOverviewPage from './pages/services-overview-page';
import AboutUsPage from './pages/about-us-page';
import ContactPage from './pages/contact-page';
import PrivacyPage from './pages/privacy-page';
const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CorporateHomepage />} />
        <Route path="/corporate-homepage" element={<CorporateHomepage />} />
        <Route path="/services" element={<ServicesOverviewPage />} />
        <Route path="/services-overview-page" element={<ServicesOverviewPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/about-us-page" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/privacy-page" element={<PrivacyPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
export default Routes;