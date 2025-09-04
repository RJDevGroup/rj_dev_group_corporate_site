import React, { useState } from 'react';
import Section from '../../../components/ui/Section';
import ServiceCard from './ServiceCard';

const ServiceCardGrid = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const servicesData = [
    {
      id: "web-development",
      title: "Web Development",
      icon: "Code",
      description: "Transform your digital presence with cutting-edge web applications, responsive websites, and scalable e-commerce platforms. Our expert development team leverages the latest technologies including React, Node.js, and cloud infrastructure to deliver high-performance solutions that drive business growth and enhance user engagement.",
      keyBenefits: [
        "Custom web applications tailored to your business needs",
        "Responsive design ensuring optimal user experience across all devices",
        "Scalable e-commerce platforms with secure payment integration",
        "Modern technology stack including React, Node.js, and cloud services",
        "Performance optimization and SEO-friendly development"
      ],
      technicalSpecs: [
        "Frontend: React.js, Next.js, Vue.js, TypeScript",
        "Backend: Node.js, Express, Python, PHP",
        "Databases: PostgreSQL, MongoDB, MySQL",
        "Cloud: AWS, Google Cloud, Azure deployment",
        "Testing: Automated testing and quality assurance"
      ],
      caseStudyPreview: "Recently delivered a high-traffic e-commerce platform handling 10,000+ concurrent users with 99.9% uptime.",
      ctaText: "Explore Web Solutions",
      inquiryLink: "/contact?service=web-development"
    },
    {
      id: "real-estate",
      title: "Real Estate Development",
      icon: "Building",
      description: "Unlock property investment opportunities with our comprehensive real estate development services. From market analysis and site selection to project management and construction oversight, we provide end-to-end solutions for residential, commercial, and mixed-use developments that maximize returns and create lasting value.",
      keyBenefits: [
        "Comprehensive market analysis and feasibility studies",
        "Strategic site selection and acquisition support",
        "Full project management from concept to completion",
        "Residential, commercial, and mixed-use development expertise",
        "Investment optimization and risk management"
      ],
      technicalSpecs: [
        "Market Research: Demographic analysis, competition assessment",
        "Financial Modeling: ROI projections, cash flow analysis",
        "Project Management: Timeline planning, resource allocation",
        "Regulatory: Zoning compliance, permit acquisition",
        "Quality Control: Construction oversight, safety protocols"
      ],
      caseStudyPreview: "Successfully managed a $50M mixed-use development project, delivering 25% above projected returns.",
      ctaText: "View Real Estate Services",
      inquiryLink: "/contact?service=real-estate"
    },
    {
      id: "ai-ml",
      title: "Applied AI & Machine Learning",
      icon: "Brain",
      description: "Harness the power of artificial intelligence to revolutionize your business operations. Our AI/ML solutions include predictive analytics, natural language processing, computer vision, and automated decision-making systems that optimize efficiency, reduce costs, and unlock new revenue streams through intelligent automation.",
      keyBenefits: [
        "Predictive analytics for informed business decisions",
        "Natural language processing for customer service automation",
        "Computer vision solutions for quality control and monitoring",
        "Automated decision-making systems reducing manual overhead",
        "Custom AI models trained on your specific business data"
      ],
      technicalSpecs: [
        "Machine Learning: TensorFlow, PyTorch, Scikit-learn",
        "Deep Learning: Neural networks, CNN, RNN, Transformers",
        "Data Processing: Python, R, Apache Spark",
        "Cloud AI: AWS SageMaker, Google AI Platform, Azure ML",
        "Deployment: MLOps pipelines, model monitoring"
      ],
      caseStudyPreview: "Implemented AI-driven inventory optimization reducing operational costs by 30% for a Fortune 500 client.",
      ctaText: "Discover AI Solutions",
      inquiryLink: "/contact?service=ai-ml"
    },
    {
      id: "advisory",
      title: "Management & Advisory",
      icon: "Users",
      description: "Navigate complex business challenges with strategic guidance from our experienced advisory team. We provide management consulting, financial planning, operational optimization, and growth strategy services that help organizations achieve sustainable success and competitive advantage in today's dynamic marketplace.",
      keyBenefits: [
        "Strategic business planning and growth roadmap development",
        "Operational efficiency analysis and improvement recommendations",
        "Financial planning and investment strategy guidance",
        "Change management and organizational transformation",
        "Market expansion and competitive positioning strategies"
      ],
      technicalSpecs: [
        "Business Analysis: SWOT analysis, market positioning",
        "Financial Modeling: Budget planning, investment analysis",
        "Process Optimization: Lean methodologies, workflow improvement",
        "Strategic Planning: Goal setting, milestone tracking",
        "Performance Metrics: KPI development, dashboard creation"
      ],
      caseStudyPreview: "Guided a mid-size company through digital transformation, increasing revenue by 40% within 18 months.",
      ctaText: "Get Strategic Guidance",
      inquiryLink: "/contact?service=advisory"
    }
  ];

  const handleCardExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <Section 
      id="services-grid" 
      backgroundColor="bg-background"
      padding="py-20 sm:py-24 lg:py-32"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Our Core
          <span className="block text-primary font-mono">Service Offerings</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Four distinct service areas backed by deep expertise, proven methodologies, 
          and a track record of delivering exceptional results for our clients.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {servicesData?.map((service, index) => (
          <ServiceCard
            key={service?.id}
            service={service}
            isExpanded={expandedCard === service?.id}
            onExpand={() => handleCardExpand(service?.id)}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help drive your business forward. 
            Contact us for a personalized consultation and project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 corporate-hover-scale">
              Schedule Consultation
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceCardGrid;