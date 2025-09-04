import React from 'react';

const Section = ({ 
  children, 
  className = "", 
  id,
  backgroundColor = "bg-background",
  padding = "py-16",
  containerMaxWidth = "max-w-7xl",
  ...props 
}) => {
  return (
    <section 
      id={id}
      className={`${backgroundColor} ${padding} ${className}`}
      {...props}
    >
      <div className={`${containerMaxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
};

export default Section;