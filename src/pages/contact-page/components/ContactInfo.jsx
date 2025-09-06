import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactData = {
    office: {
      address: "123 Corporate Plaza, Business District",
      city: "New York, NY 10001",
      country: "United States"
    },
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      weekends: "Saturday: 10:00 AM - 4:00 PM EST",
      closed: "Sunday: Closed"
    },
    departments: [
      {
        name: "General Inquiries",
        phone: "+1 (555) 123-4567",
        email: "contact@rjdevgroup.com",
        icon: "Phone"
      },
      {
        name: "Sales & Partnerships",
        phone: "+1 (555) 123-4568",
        email: "sales@rjdevgroup.com",
        icon: "Handshake"
      },
      {
        name: "Technical Support",
        phone: "+1 (555) 123-4569",
        email: "support@rjdevgroup.com",
        icon: "Settings"
      },
      {
        name: "Emergency Contact",
        phone: "+1 (555) 123-4570",
        email: "emergency@rjdevgroup.com",
        icon: "AlertTriangle"
      }
    ],
    socialMedia: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/company/rjdevgroup",
        icon: "Linkedin",
        handle: "@rjdevgroup"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/rjdevgroup", 
        icon: "Twitter",
        handle: "@rjdevgroup"
      },
      {
        name: "GitHub",
        url: "https://github.com/rjdevgroup",
        icon: "Github", 
        handle: "rjdevgroup"
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Office Information */}
      <div className="bg-surface rounded-xl p-6 corporate-shadow">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Icon name="MapPin" size={24} className="mr-3 text-primary" />
          Office Location
        </h3>
        <div className="space-y-3">
          <p className="text-foreground font-medium text-lg">
            {contactData?.office?.address}
          </p>
          <p className="text-muted-foreground">
            {contactData?.office?.city}
          </p>
          <p className="text-muted-foreground">
            {contactData?.office?.country}
          </p>
        </div>
      </div>
      {/* Business Hours */}
      <div className="bg-surface rounded-xl p-6 corporate-shadow">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Icon name="Clock" size={24} className="mr-3 text-primary" />
          Business Hours
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-foreground font-medium">Weekdays</span>
            <span className="text-muted-foreground">{contactData?.hours?.weekdays?.split(': ')?.[1]}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-foreground font-medium">Saturday</span>
            <span className="text-muted-foreground">{contactData?.hours?.weekends?.split(': ')?.[1]}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-foreground font-medium">Sunday</span>
            <span className="text-muted-foreground">{contactData?.hours?.closed?.split(': ')?.[1]}</span>
          </div>
        </div>
      </div>
      {/* Department Contacts */}
      <div className="bg-surface rounded-xl p-6 corporate-shadow">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Icon name="Users" size={24} className="mr-3 text-primary" />
          Direct Contacts
        </h3>
        <div className="space-y-4">
          {contactData?.departments?.map((dept, index) => (
            <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-start space-x-3">
                <Icon name={dept?.icon} size={18} className="text-primary mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{dept?.name}</h4>
                  <div className="space-y-1">
                    <a 
                      href={`tel:${dept?.phone}`} 
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {dept?.phone}
                    </a>
                    <a 
                      href={`mailto:${dept?.email}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {dept?.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-surface rounded-xl p-6 corporate-shadow">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Icon name="Share2" size={24} className="mr-3 text-primary" />
          Follow Us
        </h3>
        <div className="flex flex-wrap gap-4">
          {contactData?.socialMedia?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
            >
              <Icon 
                name={social?.icon} 
                size={18} 
                className="text-primary group-hover:scale-110 transition-transform duration-200" 
              />
              <span className="text-foreground font-medium">{social?.handle}</span>
            </a>
          ))}
        </div>
      </div>
      {/* Download Links */}
      <div className="bg-surface rounded-xl p-6 corporate-shadow">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Icon name="Download" size={24} className="mr-3 text-primary" />
          Resources
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center justify-between p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <Icon name="FileText" size={18} className="text-primary" />
              <span className="text-foreground font-medium">Company Brochure</span>
            </div>
            <Icon name="Download" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="#"
            className="flex items-center justify-between p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <Icon name="FileImage" size={18} className="text-primary" />
              <span className="text-foreground font-medium">Service Portfolio</span>
            </div>
            <Icon name="Download" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;