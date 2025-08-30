import React from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();
  
  const footerData = {
    companyInfo: {
      name: "RaptorJesus Development Group Ltd.",
      description: "Leading corporate solutions across Web Development, Real Estate, AI/ML, and Strategic Advisory services.",
      email: "contact@rjdevgroup.com",
      phone: "+1 (555) 123-4567",
      address: "123 Corporate Plaza, Business District, NY 10001"
    },
    socialLinks: [
      { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/rjdevgroup" },
      { name: "Twitter", icon: "Twitter", url: "https://twitter.com/rjdevgroup" },
      { name: "GitHub", icon: "Github", url: "https://github.com/rjdevgroup" },
      { name: "Facebook", icon: "Facebook", url: "https://facebook.com/rjdevgroup" }
    ],
    services: [
      { name: "Web Development", href: "#web-development" },
      { name: "Real Estate", href: "#real-estate" },
      { name: "AI & Machine Learning", href: "#ai-ml" },
      { name: "Management Advisory", href: "#advisory" }
    ],
    quickLinks: [
      { name: "About Us", href: "#home" },
      { name: "Services", href: "#web-development" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" }
    ]
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-primary-foreground font-bold text-xl font-mono">RJ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-mono">{footerData?.companyInfo?.name}</h3>
                <p className="text-primary-foreground/80 text-sm font-mono">Corporate Solutions</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-md">
              {footerData?.companyInfo?.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Mail" size={18} className="mr-3 text-accent" />
                <a 
                  href={`mailto:${footerData?.companyInfo?.email}`}
                  className="text-primary-foreground/90 hover:text-accent transition-colors duration-200 font-mono"
                >
                  {footerData?.companyInfo?.email}
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" size={18} className="mr-3 text-accent" />
                <a 
                  href={`tel:${footerData?.companyInfo?.phone}`}
                  className="text-primary-foreground/90 hover:text-accent transition-colors duration-200 font-mono"
                >
                  {footerData?.companyInfo?.phone}
                </a>
              </div>
              <div className="flex items-start">
                <Icon name="MapPin" size={18} className="mr-3 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/90 font-mono">
                  {footerData?.companyInfo?.address}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-mono text-accent">Services</h4>
            <ul className="space-y-3">
              {footerData?.services?.map((service) => (
                <li key={service?.name}>
                  <button
                    onClick={() => scrollToSection(service?.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 font-mono text-left"
                  >
                    {service?.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-mono text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {footerData?.quickLinks?.map((link) => (
                <li key={link?.name}>
                  <button
                    onClick={() => scrollToSection(link?.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 font-mono text-left"
                  >
                    {link?.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              {footerData?.socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-200 group"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon 
                    name={social?.icon} 
                    size={20} 
                    className="text-primary-foreground/80 group-hover:text-accent transition-colors duration-200" 
                  />
                </a>
              ))}
            </div>
            
            <p className="text-primary-foreground/60 text-sm font-mono">
              © {currentYear} {footerData?.companyInfo?.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;