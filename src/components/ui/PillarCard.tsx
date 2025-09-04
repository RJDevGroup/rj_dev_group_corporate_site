import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PillarCardProps } from './PillarCard';


/**
 * PillarCard component for showcasing services or features
 * 
 * Props:
 * - icon?: React.ReactNode - Icon to display at top of card
 * - title: string - Card heading (required)
 * - description: string - Card description text (required)
 * - href?: string - Optional link URL
 * - external?: boolean - Whether link opens in new tab
 * - className?: string
 * 
 * Usage:
 * <PillarCard 
 *   icon={<Code size={24} />}
 *   title="Development" 
 *   description="Full-stack web development services"
 *   href="/services/development"
 * />
 */

export interface PillarCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  href?: string
  external?: boolean
  className?: string
}

export const PillarCard: React.FC<PillarCardProps> = ({
  icon,
  title,
  description,
  href,
  external = false,
  className = ''
}) => {
  const CardContent = () => (
    <div className={`group p-8 rounded-2xl bg-[rgb(var(--surface))] shadow-sm border border-[rgb(var(--border))] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${href ? 'cursor-pointer' : ''} ${className}`}>
      {icon && (
        <div className="text-[rgb(var(--brand))] mb-6">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-3">
        {title}
      </h3>
      
      <p className="text-[rgb(var(--muted))] leading-relaxed mb-6">
        {description}
      </p>
      
      {href && (
        <div className="flex items-center text-[rgb(var(--brand))] font-medium">
          <span className="mr-2">Learn more</span>
          {external ? (
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          ) : (
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          )}
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        {...(external && {
          target: '_blank',
          rel: 'noopener noreferrer'
        })}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] rounded-2xl"
      >
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}


export default PillarCard