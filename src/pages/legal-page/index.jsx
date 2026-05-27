import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

const LegalPage = () => (
  <Layout
    title="Legal Terms - RJ Development Group"
    description="Legal terms for RJ Development Group website and operational support services."
    keywords="RJ Development Group legal terms, terms of service"
  >
    <Section padding="pt-32 pb-16" backgroundColor="bg-gradient-to-br from-primary to-slate-900">
      <div className="max-w-4xl text-primary-foreground">
        <p className="font-mono text-accent mb-4">Last updated: May 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Terms</h1>
        <p className="text-xl text-primary-foreground/85">Basic terms for using this public website and contacting RJDG.</p>
      </div>
    </Section>
    <Section padding="py-16">
      <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Website information</h2>
          <p>This website provides general information about RJ Development Group. It is not financial, tax, legal, investment, or professional advice.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">No public offer</h2>
          <p>Nothing on this site is an offer to sell securities, solicit investment, or enter into a regulated financial service relationship.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Operational services</h2>
          <p>Any software, automation, AI-assisted, or administrative support is governed by the specific agreement, instruction, or approval flow that applies to that work.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Contact</h2>
          <p>For legal, privacy, or operational questions, contact <a className="text-primary underline" href="mailto:raptorjesus@rjdevgroup.com">raptorjesus@rjdevgroup.com</a>.</p>
        </div>
      </div>
    </Section>
  </Layout>
);

export default LegalPage;
