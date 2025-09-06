import React from 'react';

const Section = ({ 
  children, 
  className = "", 
  id = "", 
  backgroundColor = "bg-background",
  padding = "py-16 sm:py-20 lg:py-24"
}) => {
  return (
    <section 
      id={id} 
      className={`${backgroundColor} ${padding} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;