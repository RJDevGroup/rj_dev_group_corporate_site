import React from 'react';
import StickyNavHeader from '../../components/ui/StickyNavHeader';

const PrivacyPage = () => {
  const lastUpdated = "December 2024";

  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Professional information (Company, job title, business requirements)",
        "Technical information (IP address, browser type, device information)",
        "Usage data (How you interact with our website and services)",
        "Communication records (Emails, calls, meeting notes)",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and improve our services",
        "Communicate with you about projects and services",
        "Send you relevant business updates and newsletters",
        "Analyze website usage to enhance user experience",
        "Comply with legal obligations and protect our rights",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information",
        "Information may be shared with trusted service providers",
        "Data may be disclosed when required by law",
        "Business transfers may include customer information",
        "Anonymous, aggregated data may be shared for research",
      ],
    },
    {
      title: "Data Security",
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers with regular security audits",
        "Access controls and authentication protocols",
        "Regular backups with encrypted storage",
        "Employee training on data protection practices",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access your personal information",
        "Request correction of inaccurate data",
        "Request deletion of your personal information",
        "Object to processing of your personal information",
        "Request data portability",
      ],
    },
    {
      title: "Cookies and Tracking",
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand usage patterns",
        "Marketing cookies for relevant content",
        "Third-party cookies from integrated services",
        "Cookie preferences can be managed in your browser",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-mono">
      <StickyNavHeader />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#9ca3af] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-14">
          <h2 className="text-lg font-semibold text-white mb-4">
            Our Commitment to Privacy
          </h2>
          <div className="space-y-3 text-[#d1d5db] leading-relaxed text-sm">
            <p>
              At RJ Dev Group, we are committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              We have implemented comprehensive measures to protect your data. By using our services,
              you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </div>

        {/* Policy sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6"
            >
              <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#006039]/50 rounded-full inline-block" />
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.content.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-[#d1d5db] leading-relaxed pl-4 border-l border-[#1a1a1a]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#9ca3af] mb-4">
            Questions about this policy?
          </p>
          <a
            href="mailto:privacy@rjdevgroup.com"
            className="inline-block text-sm text-[#00b140] hover:text-white transition-colors"
          >
            privacy@rjdevgroup.com
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-14 text-xs text-[#6b7280] text-center leading-relaxed">
          This Privacy Policy is effective as of {lastUpdated} and will remain in effect
          except with respect to any changes in its provisions in the future, which will
          be in effect immediately after being posted on this page.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPage;
