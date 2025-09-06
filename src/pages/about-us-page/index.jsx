import React from 'react';
import Layout from '../../components/ui/Layout';

import AboutHeroSection from './components/AboutHeroSection';
import CompanyTimelineSection from './components/CompanyTimelineSection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import AchievementsSection from './components/AchievementsSection';
import TestimonialsSection from './components/TestimonialsSection';

const AboutUsPage = () => {
  return (
    <Layout 
      title="About Us - RaptorJesus Development Group"
      description="Learn about RaptorJesus Development Group's company story, team expertise, and core values. Discover our journey, leadership team, achievements, and commitment to innovation and client success."
      keywords="about RaptorJesus Development Group, company story, team expertise, leadership, corporate values, company history, achievements, testimonials"
    >
      <AboutHeroSection />
      <CompanyTimelineSection />
      <TeamSection />
      <ValuesSection />
      <AchievementsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default AboutUsPage;