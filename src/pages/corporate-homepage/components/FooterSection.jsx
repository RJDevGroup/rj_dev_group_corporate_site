import React from 'react';

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6b7280] font-mono">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <img
              src="/assets/images/avatar-rjdg.png"
              alt="RJ Dev Group"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <span>RJ Dev Group</span>
        </div>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-[#00b140] transition-colors">
            Privacy
          </a>
          <a href="/contact" className="hover:text-[#00b140] transition-colors">
            Contact
          </a>
        </div>
        <span>&copy; {year} RJ Dev Group</span>
      </div>
    </footer>
  );
};

export default FooterSection;
