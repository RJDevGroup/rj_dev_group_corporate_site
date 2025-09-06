import React from 'react';
import { CTAProps } from './CTA';


/**
 * Call-to-Action section with primary and optional secondary buttons
 * 
 * Props:
 * - headline: string - Main CTA heading (required)
 * - sub?: string - Supporting text below headline
 * - primary: { label: string; href: string } - Primary action button (required)
 * - secondary?: { label: string; href: string } - Optional secondary button
 * - className?: string
 * 
 * Usage:
 * <CTA 
 *   headline="Ready to get started?"
 *   sub="Join thousands of satisfied customers"
 *   primary={{ label: "Start Now", href: "/signup" }}
 *   secondary={{ label: "Learn More", href: "/about" }}
 * />
 */

export interface CTAProps {
  headline: string
  sub?: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
  className?: string
}

export const CTA: React.FC<CTAProps> = ({
  headline,
  sub,
  primary,
  secondary,
  className = ''
}) => {
  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl bg-[rgb(var(--surface))] p-12 md:p-16 shadow-lg relative overflow-hidden">
          {/* Subtle highlight */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(var(--fg))] mb-6">
            {headline}
          </h2>
          
          {sub && (
            <p className="text-lg text-[rgb(var(--muted))] mb-10 max-w-2xl mx-auto">
              {sub}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={primary.href}
              className="px-8 py-4 rounded-2xl bg-[rgb(var(--brand))] text-[rgb(var(--brand-contrast))] font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--surface))] transition-all duration-200"
            >
              {primary.label}
            </a>
            
            {secondary && (
              <a
                href={secondary.href}
                className="px-8 py-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--fg))] font-semibold hover:bg-[rgb(var(--bg))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--surface))] transition-all duration-200"
              >
                {secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


export default CTA