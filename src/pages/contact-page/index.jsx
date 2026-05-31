import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-mono">
      <div className="max-w-2xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>
        <p className="text-lg text-[#9ca3af] mb-10 leading-relaxed">
          For business inquiries, partnership opportunities, or general questions,
          please reach out via email. We typically respond within 24 hours.
        </p>
        <a
          href="mailto:contact@rjdevgroup.com"
          className="inline-block px-8 py-4 bg-[#006039] hover:bg-[#004f2f] text-white font-semibold rounded-lg transition-colors"
        >
          contact@rjdevgroup.com
        </a>
        <p className="mt-16 text-sm text-[#6b7280]">
          RJ Dev Group &mdash; A private international development and consultancy group
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
