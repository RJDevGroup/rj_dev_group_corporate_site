import React from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold font-mono">RJ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">RJ Development Group</h3>
                <p className="text-primary-foreground/70 text-sm">Digital operations & holding support</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-xl leading-relaxed">
              Software, automation, AI-assisted workflows, and practical back-office operations for founder-led ventures.
            </p>
            <a href="mailto:raptorjesus@rjdevgroup.com" className="inline-flex items-center mt-5 text-accent hover:opacity-90">
              <Icon name="Mail" size={18} className="mr-2" /> raptorjesus@rjdevgroup.com
            </a>
          </div>
          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-accent">Links</h4>
            <div className="flex md:justify-end flex-wrap gap-4">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-sm text-primary-foreground/60">
          © {currentYear} RJ Development Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
