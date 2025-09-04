import React from 'react';
import { SectionProps } from './Section';


/**
 * Section container with optional eyebrow, title, and subtitle
 * 
 * Props:
 * - id?: string
 * - className?: string  
 * - eyebrow?: string - Small uppercase text above title
 * - title?: string - Main section heading
 * - subtitle?: string - Supporting text below title
 * - children?: React.ReactNode
 * 
 * Usage:
 * <Section eyebrow="About" title="Our Story" subtitle="Building the future">
 *   <div>Content goes here</div>
 * </Section>
 */

export interface SectionProps {
  id?: string
  className?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children?: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  eyebrow,
  title,
  subtitle,
  children
}) => {
  return (
    <section id={id} className={`py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(eyebrow || title || subtitle) && (
          <div className="text-center mb-16">
            {eyebrow && (
              <div className="inline-block px-3 py-1 rounded-2xl bg-[rgb(var(--surface))] text-[rgb(var(--muted))] text-sm font-medium uppercase tracking-wide mb-4">
                {eyebrow}
              </div>
            )}
            
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-[rgb(var(--fg))] mb-4">
                {title}
              </h2>
            )}
            
            {subtitle && (
              <p className="text-lg text-[rgb(var(--muted))] max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  )
}


export default Section