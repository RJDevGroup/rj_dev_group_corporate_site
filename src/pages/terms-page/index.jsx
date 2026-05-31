import React from 'react';
import StickyNavHeader from '../../components/ui/StickyNavHeader';

const TermsPage = () => {
  const lastUpdated = "December 2024";

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-mono">
      <StickyNavHeader />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-[#9ca3af] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-14">
          <p className="text-sm text-[#d1d5db] leading-relaxed">
            These Terms of Service govern your use of the RJ Dev Group website
            and services. By accessing or using our services, you agree to be bound
            by these terms. If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Terms sections */}
        <div className="space-y-6">
          <Section title="Use of Services">
            <p>
              Our services are provided for lawful business purposes. You agree not to
              misuse our services or use them in any way that violates applicable laws
              or regulations.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              All content, trademarks, and intellectual property on this website are owned
              by or licensed to RJ Dev Group. You may not reproduce, distribute, or create
              derivative works without prior written permission.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              RJ Dev Group provides this website and its services on an &ldquo;as is&rdquo;
              basis. We make no warranties, express or implied, regarding the accuracy,
              reliability, or availability of our services. To the fullest extent permitted
              by law, we disclaim all liability for any damages arising from your use of our
              services.
            </p>
          </Section>

          <Section title="Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not responsible
              for the content, privacy policies, or practices of any third-party sites.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These terms are governed by and construed in accordance with the laws of the
              Netherlands. Any disputes arising from these terms shall be subject to the
              exclusive jurisdiction of the Dutch courts.
            </p>
          </Section>

          <Section title="Changes to Terms">
            <p>
              We reserve the right to modify these terms at any time. Changes will be
              effective immediately upon posting. Your continued use of our services
              after changes constitutes acceptance of the updated terms.
            </p>
          </Section>
        </div>

        {/* Contact */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#9ca3af] mb-4">
            Questions about these terms?
          </p>
          <a
            href="mailto:contact@rjdevgroup.com"
            className="inline-block text-sm text-[#00b140] hover:text-white transition-colors"
          >
            contact@rjdevgroup.com
          </a>
        </div>

        <p className="mt-14 text-xs text-[#6b7280] text-center leading-relaxed">
          Effective as of {lastUpdated}
        </p>
      </main>
    </div>
  );
};

/** Local section component for consistent document layout */
const Section = ({ title, children }) => (
  <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
    <h2 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
      <span className="w-1 h-4 bg-[#006039]/50 rounded-full inline-block" />
      {title}
    </h2>
    <div className="text-sm text-[#d1d5db] leading-relaxed">{children}</div>
  </div>
);

export default TermsPage;
