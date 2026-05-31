import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#006039]/10 mb-6">
          <Icon name="Mail" size={22} color="#00b140" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 font-mono">Contact</h2>
        <p className="text-[#9ca3af] mb-8 leading-relaxed">
          For business inquiries, partnership opportunities, or general questions.
        </p>
        <a
          href="mailto:contact@rjdevgroup.com"
          className="inline-block px-8 py-3 bg-[#006039] hover:bg-[#004f2f] text-white font-mono font-semibold rounded-lg transition-colors"
        >
          contact@rjdevgroup.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
