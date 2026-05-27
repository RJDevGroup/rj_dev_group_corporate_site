import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Icon from '../../components/AppIcon';

const pillars = [
  {
    title: 'Software & Web Operations',
    icon: 'Code',
    text: 'Reliable websites, internal tools, automations, integrations, and operational dashboards for small teams that need leverage without enterprise overhead.'
  },
  {
    title: 'AI-Assisted Workflows',
    icon: 'Brain',
    text: 'Practical AI systems for inbox handling, document workflows, research, reporting, and controlled back-office automation.'
  },
  {
    title: 'Holding Operations',
    icon: 'Briefcase',
    text: 'Administrative, digital, and process support for privately held ventures, real-estate assets, and founder-led operating companies.'
  }
];

const principles = [
  'Simple systems before complex platforms',
  'Documented ownership and repeatable runbooks',
  'Privacy-conscious handling of email, documents, and operational data',
  'Fast iteration with clear human approval points'
];

const CorporateHomepage = () => {
  return (
    <Layout
      title="RJ Development Group - Digital Operations & Holding Support"
      description="RJ Development Group supports founder-led ventures with software, web operations, AI-assisted workflows, and practical back-office automation."
      keywords="RJ Development Group, software operations, web development, AI workflows, holding operations, automation"
    >
      <Section id="home" padding="pt-32 pb-20" backgroundColor="bg-gradient-to-br from-primary via-primary to-slate-900">
        <div className="max-w-4xl text-primary-foreground">
          <p className="font-mono text-accent mb-4">RJ Development Group</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Digital operations for real-world ventures.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/85 max-w-3xl mb-10">
            A compact holding and software operations group focused on web systems, automation, AI-assisted workflows, and practical venture support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:opacity-90 transition-opacity">
              Contact RJDG <Icon name="ArrowRight" size={18} className="ml-2" />
            </a>
            <a href="/privacy" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              Privacy & OAuth data use
            </a>
          </div>
        </div>
      </Section>

      <Section id="services" padding="py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What we operate</h2>
          <p className="text-lg text-muted-foreground">
            The public version is intentionally simple: stable web presence, trustworthy contact points, and a clear privacy posture for the systems RJDG operates.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-surface rounded-2xl p-8 corporate-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon name={pillar.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="approach" padding="py-20" backgroundColor="bg-surface">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-primary mb-3">Operating style</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Small surface area. Clear control. Useful automation.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              RJDG builds and maintains lightweight systems around the work that actually matters: communication, documents, websites, operational records, and repeatable decision support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not publish private holding strategy, client data, internal financial planning, or operational secrets on this site. Public pages exist to identify the group, provide contact routes, and explain data handling for OAuth-connected workflows.
            </p>
          </div>
          <div className="bg-background rounded-2xl p-8 corporate-shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Principles</h3>
            <ul className="space-y-4">
              {principles.map((item) => (
                <li key={item} className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" padding="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For operational, technical, privacy, or account-access matters, use the official RJDG contact address.
          </p>
          <a href="mailto:raptorjesus@rjdevgroup.com" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            raptorjesus@rjdevgroup.com
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default CorporateHomepage;
