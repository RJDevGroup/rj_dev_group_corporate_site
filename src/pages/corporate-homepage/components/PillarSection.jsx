import React from 'react';
import Icon from '../../../components/AppIcon';

const PillarSection = ({ id, title, description, iconName, isReversed = false }) => {
  return (
    <section id={id} className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            isReversed ? '' : ''
          }`}
        >
          {/* Icon + Text */}
          <div className={isReversed ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#006039]/10 flex items-center justify-center flex-shrink-0">
                <Icon name={iconName} size={22} color="#00b140" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white font-mono tracking-tight">
                {title}
              </h2>
            </div>
            <p className="text-base lg:text-lg text-[#9ca3af] leading-relaxed max-w-lg">
              {description}
            </p>
          </div>

          {/* Visual placeholder — dark card */}
          <div className={isReversed ? 'lg:order-1' : ''}>
            <div className="w-full h-64 lg:h-72 rounded-xl bg-[#111111] border border-[#1a1a1a] flex items-center justify-center">
              <Icon name={iconName} size={56} color="#1a3525" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarSection;
