import React from 'react';
import { FooterProps } from './Footer';


/**
 * Footer component with company, legal, and social links
 * 
 * Features:
 * - Auto-updating copyright year
 * - Three-column layout (Company, Legal, Social)
 * - External link support for social media
 * - Responsive design
 * 
 * Usage:
 * <Footer />
 */

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' }
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'GDPR', href: '#gdpr' }
  ]

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { label: 'GitHub', href: 'https://github.com', external: true },
    { label: 'Discord', href: 'https://discord.com', external: true }
  ]

  const LinkSection = ({ 
    title, 
    links 
  }: { 
    title: string
    links: Array<{ label: string; href: string; external?: boolean }> 
  }) => (
    <div>
      <h3 className="font-semibold text-[rgb(var(--fg))] mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map(({ label, href, external }) => (
          <li key={href}>
            <a
              href={href}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer'
              })}
              className="text-[rgb(var(--muted))] hover:text-[rgb(var(--brand))] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] rounded-md px-1 py-1"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className={`border-t border-[rgb(var(--border))] bg-[rgb(var(--surface))] ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <LinkSection title="Company" links={companyLinks} />
          <LinkSection title="Legal" links={legalLinks} />
          <LinkSection title="Social" links={socialLinks} />
        </div>
        
        <div className="pt-8 border-t border-[rgb(var(--border))]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-[rgb(var(--fg))] mb-4 md:mb-0">
              RJDevGroup
            </div>
            <div className="text-[rgb(var(--muted))]">
              © {currentYear} RJDevGroup. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer