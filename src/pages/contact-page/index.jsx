import React from 'react';
import StickyNavHeader from '../../components/ui/StickyNavHeader';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-mono">
      <StickyNavHeader />

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Contact
          </h1>
          <p className="text-sm text-[#9ca3af] mb-10">
            For business inquiries, partnership opportunities, or general questions.
          </p>
        </div>

        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <p className="text-sm text-[#9ca3af] mb-6 leading-relaxed">
            We typically respond within 24 hours. Please use the email below
            for all correspondence.
          </p>
          <a
            href="mailto:contact@rjdevgroup.com"
            className="inline-block px-6 py-3 bg-[#006039]/80 hover:bg-[#006039] text-white text-sm font-medium rounded-md transition-colors"
          >
            contact@rjdevgroup.com
          </a>
        </div>

        <p className="mt-12 text-xs text-[#6b7280] text-center">
          RJ Dev Group — A private international development and consultancy group
        </p>
      </main>
    </div>
  );
};

export default ContactPage;
