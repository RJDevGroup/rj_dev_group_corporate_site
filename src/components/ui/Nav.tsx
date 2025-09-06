import React from 'react';
import { NavProps } from './Nav';


/**
 * Navigation component with flexible links and keyboard accessibility
 * 
 * Props:
 * - links?: Array<{ label: string; href: string }>
 * - orientation?: "horizontal" | "vertical"
 * - onNavigate?: () => void
 * - className?: string
 * 
 * Usage:
 * <Nav links={[{label: "About", href: "/about"}]} orientation="horizontal" />
 */

export interface NavProps {
  links?: Array<{ label: string; href: string }>
  orientation?: 'horizontal' | 'vertical'
  onNavigate?: () => void
  className?: string
}

export const Nav: React.FC<NavProps> = ({
  links = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ],
  orientation = 'horizontal',
  onNavigate,
  className = ''
}) => {
  const handleClick = (href: string) => {
    onNavigate?.()
  }

  return (
    <nav aria-label="Primary" className={className}>
      <ul 
        className={`flex gap-6 ${
          orientation === 'vertical' ? 'flex-col' : 'flex-row'
        }`}
      >
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => handleClick(href)}
              className="text-[rgb(var(--fg))] hover:text-[rgb(var(--brand))] px-3 py-2 rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] hover:-translate-y-0.5"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}


export default Nav