import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Icon from '../../components/AppIcon';

const sections = [
  {
    title: 'Website data',
    icon: 'Globe',
    items: [
      'Basic technical data may be processed when you visit this website, such as browser, device, and request metadata.',
      'We keep the public website intentionally minimal and do not use it to collect sensitive personal information.'
    ]
  },
  {
    title: 'Google OAuth and Workspace data',
    icon: 'KeyRound',
    items: [
      'RJDG uses Google OAuth to connect authorized Gmail, Drive, Calendar, Docs, Sheets, and related Workspace accounts for internal operational workflows.',
      'OAuth access is used only for the account owner’s requested workflows, such as mail triage, drafts, document retrieval, scheduling, reporting, and operational automation.',
      'Google user data is not sold, rented, or shared for advertising.'
    ]
  },
  {
    title: 'Limited use',
    icon: 'ShieldCheck',
    items: [
      'Use of Google user data is limited to providing or improving user-facing RJDG workflow functionality.',
      'Data is not used to train general-purpose AI models outside the controlled tools selected for the workflow.',
      'Human approval is required for sensitive outbound actions such as sending email or making material account changes.'
    ]
  },
  {
    title: 'Security and retention',
    icon: 'Lock',
    items: [
      'Access tokens and operational credentials are stored in controlled local/profile-specific environments where possible.',
      'Operational records are retained only as needed for continuity, auditability, legal obligations, and the requested workflow.',
      'Access can be revoked through the relevant Google Account security settings or by contacting RJDG.'
    ]
  }
];

const PrivacyPage = () => {
  return (
    <Layout
      title="Privacy Policy - RJ Development Group"
      description="RJ Development Group privacy policy, including Google OAuth and Workspace data use for internal operational workflows."
      keywords="RJ Development Group privacy, Google OAuth, Workspace data, Gmail data, Drive data"
    >
      <Section padding="pt-32 pb-16" backgroundColor="bg-gradient-to-br from-primary to-slate-900">
        <div className="max-w-4xl text-primary-foreground">
          <p className="font-mono text-accent mb-4">Last updated: May 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-primary-foreground/85">
            This page explains how RJ Development Group handles website data and Google OAuth-connected Workspace data.
          </p>
        </div>
      </Section>

      <Section padding="py-16">
        <div className="max-w-4xl mx-auto bg-surface rounded-2xl p-8 corporate-shadow-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">Scope</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            RJ Development Group operates software, web, AI-assisted, and administrative workflows for internal and venture-support purposes. This policy covers the public website and OAuth-connected Google Workspace workflows operated by RJDG.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Contact for privacy, data access, deletion, or OAuth access questions: <a className="text-primary underline" href="mailto:raptorjesus@rjdevgroup.com">raptorjesus@rjdevgroup.com</a>.
          </p>
        </div>
      </Section>

      <Section padding="py-16" backgroundColor="bg-surface">
        <div className="grid lg:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-background rounded-2xl p-8 corporate-shadow">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                  <Icon name={section.icon} size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <Icon name="Check" size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section padding="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Revoking access</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can revoke Google OAuth access at any time from your Google Account security settings. RJDG will also remove locally held access for a connected workflow on request.
          </p>
          <h2 className="text-2xl font-bold text-foreground mb-4">Changes</h2>
          <p className="text-muted-foreground leading-relaxed">
            This policy may be updated when services, workflows, or legal requirements change. The current version is published on this page.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPage;
