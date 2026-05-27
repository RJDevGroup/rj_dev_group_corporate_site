import React from 'react';
import Icon from '../../../components/AppIcon';

const contacts = [
  { name: 'General / operations', email: 'raptorjesus@rjdevgroup.com', icon: 'Mail' },
  { name: 'Privacy / OAuth data', email: 'raptorjesus@rjdevgroup.com', icon: 'Shield' },
  { name: 'Technical support', email: 'raptorjesus@rjdevgroup.com', icon: 'Settings' }
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-surface rounded-xl p-6 corporate-shadow">
        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
          <Icon name="MapPin" size={24} className="mr-3 text-primary" />
          Operating base
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          RJ Development Group is operated as a compact, remote-first holding and digital operations group. Public contact is handled through the official RJDG email address.
        </p>
      </div>

      <div className="bg-surface rounded-xl p-6 corporate-shadow">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Icon name="Users" size={24} className="mr-3 text-primary" />
          Direct contacts
        </h3>
        <div className="space-y-4">
          {contacts.map((item) => (
            <div key={item.name} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-start space-x-3">
                <Icon name={item.icon} size={18} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                  <a href={`mailto:${item.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface rounded-xl p-6 corporate-shadow">
        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
          <Icon name="Clock" size={24} className="mr-3 text-primary" />
          Response
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Messages are reviewed in European business hours. Urgent operational issues should include the affected account, domain, or system in the subject line.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
