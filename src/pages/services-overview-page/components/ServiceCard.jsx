import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isExpanded, onExpand, isReversed }) => {
  const {
    id,
    title,
    icon,
    description,
    keyBenefits,
    technicalSpecs,
    caseStudyPreview,
    ctaText,
    inquiryLink
  } = service;

  const handleInquiryClick = () => {
    // In a real application, this would navigate to the contact form
    // with pre-filled service information
    console.log(`Inquiry for service: ${id}`);
    // navigate(inquiryLink);
  };

  return (
    <div className={`group ${isReversed ? 'lg:mt-12' : ''}`}>
      <div className="bg-surface rounded-2xl p-8 corporate-shadow-lg hover:corporate-shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border/50 hover:border-primary/20">
        {/* Card Header */}
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon name={icon} size={28} className="text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground font-mono">{title}</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-2" />
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Key Benefits */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-3 font-mono">Key Benefits</h4>
          <ul className="space-y-2">
            {keyBenefits?.slice(0, 3)?.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Icon name="CheckCircle" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
          {keyBenefits?.length > 3 && (
            <button
              onClick={onExpand}
              className="text-primary text-sm font-medium mt-2 hover:text-primary/80 transition-colors duration-200 flex items-center"
            >
              {isExpanded ? 'Show less' : `+${keyBenefits?.length - 3} more benefits`}
              <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={14} className="ml-1" />
            </button>
          )}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-6 border-t border-border/50 pt-6 animate-in slide-in-from-top-2 duration-300">
            {/* Remaining Benefits */}
            {keyBenefits?.length > 3 && (
              <ul className="space-y-2">
                {keyBenefits?.slice(3)?.map((benefit, index) => (
                  <li key={index + 3} className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Technical Specifications */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 font-mono">Technical Specifications</h4>
              <ul className="space-y-2">
                {technicalSpecs?.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="Settings" size={16} className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Study Preview */}
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
              <h4 className="text-sm font-semibold text-primary mb-2 font-mono">Case Study Highlight</h4>
              <p className="text-sm text-muted-foreground">{caseStudyPreview}</p>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-8">
          <Button
            variant="default"
            fullWidth
            onClick={handleInquiryClick}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            className="corporate-hover-scale"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;