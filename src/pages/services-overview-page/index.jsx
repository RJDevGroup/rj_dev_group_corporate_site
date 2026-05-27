import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Icon from '../../components/AppIcon';

const services = [
  ['Web presence', 'Globe', 'Static and dynamic websites, deployment pipelines, DNS/SSL coordination, and maintenance runbooks.'],
  ['Workflow automation', 'Workflow', 'Inbox, document, calendar, reporting, and approval flows built around real operating constraints.'],
  ['AI operations', 'Bot', 'Controlled use of AI agents for research, drafting, monitoring, summarization, and internal support tasks.'],
  ['Back-office support', 'Briefcase', 'Practical digital-office support for venture administration, records, and recurring operational checks.']
];

const ServicesOverviewPage = () => (
  <Layout
    title="Services - RJ Development Group"
    description="RJDG services: web presence, workflow automation, AI operations, and back-office support."
    keywords="web operations, workflow automation, AI operations, back office support"
  >
    <Section padding="pt-32 pb-16" backgroundColor="bg-gradient-to-br from-primary to-slate-900">
      <div className="max-w-4xl text-primary-foreground">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
        <p className="text-xl text-primary-foreground/85">Practical systems work for founder-led operations and privately held ventures.</p>
      </div>
    </Section>
    <Section padding="py-20">
      <div className="grid md:grid-cols-2 gap-6">
        {services.map(([title, icon, text]) => (
          <div key={title} className="bg-surface rounded-2xl p-8 corporate-shadow">
            <Icon name={icon} size={28} className="text-primary mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">{title}</h2>
            <p className="text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  </Layout>
);

export default ServicesOverviewPage;
