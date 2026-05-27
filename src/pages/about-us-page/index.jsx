import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

const AboutUsPage = () => (
  <Layout
    title="About - RJ Development Group"
    description="RJ Development Group is a compact digital operations and holding support group."
    keywords="RJ Development Group about, digital operations, holding support"
  >
    <Section padding="pt-32 pb-16" backgroundColor="bg-gradient-to-br from-primary to-slate-900">
      <div className="max-w-4xl text-primary-foreground">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About RJDG</h1>
        <p className="text-xl text-primary-foreground/85">A small, controlled operating layer for software, automation, and venture administration.</p>
      </div>
    </Section>
    <Section padding="py-20">
      <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>RJ Development Group supports privately held ventures with practical digital infrastructure: websites, workflows, AI-assisted operations, and administrative systems.</p>
        <p>The group keeps its public surface deliberately simple. Private strategy, financial planning, client data, and internal operating details are not published here.</p>
        <p>For official contact, privacy, or OAuth-related questions, use <a className="text-primary underline" href="mailto:raptorjesus@rjdevgroup.com">raptorjesus@rjdevgroup.com</a>.</p>
      </div>
    </Section>
  </Layout>
);

export default AboutUsPage;
