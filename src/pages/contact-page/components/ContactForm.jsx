import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const subject = encodeURIComponent('RJDG contact request');
  const body = encodeURIComponent('Hello RJDG,\n\nI am contacting you about:\n\n');

  return (
    <div className="bg-surface rounded-2xl p-8 corporate-shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Send a message</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The public site does not collect contact form submissions yet. Use email so the request reaches the controlled RJDG mailbox directly.
        </p>
      </div>
      <a
        href={`mailto:raptorjesus@rjdevgroup.com?subject=${subject}&body=${body}`}
        className="inline-flex items-center justify-center w-full px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
      >
        Email raptorjesus@rjdevgroup.com
        <Icon name="Send" size={18} className="ml-2" />
      </a>
      <div className="mt-8 border-t border-border pt-6">
        <h3 className="font-semibold text-foreground mb-3">Useful subject lines</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Domain / DNS / SSL support</li>
          <li>• Google OAuth / privacy request</li>
          <li>• Website or workflow automation</li>
          <li>• Operational support request</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
