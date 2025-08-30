import React from 'react';
import Button from './Button';

const ServiceCTAButton = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  trackingId,
  targetAction = 'contact',
  iconName,
  iconPosition = 'right',
  iconSize = 18,
  className = '',
  ...props 
}) => {
  const handleClick = (e) => {
    // Track CTA interaction for analytics
    if (trackingId) {
      console.log(`Service CTA clicked: ${trackingId} - ${targetAction}`);
    }

    // Handle target action
    if (targetAction === 'contact') {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const headerHeight = 80;
        const elementPosition = contactSection?.getBoundingClientRect()?.top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (targetAction?.startsWith('#')) {
      // Scroll to specific section
      const element = document.querySelector(targetAction);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element?.getBoundingClientRect()?.top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (targetAction?.startsWith('http')) {
      // External link
      window.open(targetAction, '_blank', 'noopener,noreferrer');
    }

    // Call custom onClick if provided
    if (props?.onClick) {
      props?.onClick(e);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      iconName={iconName}
      iconPosition={iconPosition}
      iconSize={iconSize}
      className={`corporate-hover-scale ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ServiceCTAButton;