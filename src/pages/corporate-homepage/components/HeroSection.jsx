import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Dark textured overlay layer */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/assets/images/dark-texture.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Logo mark */}
        <div className="mb-10">
          <img
            src="/assets/images/logo-rjdg.png"
            alt="RJ Dev Group"
            className="w-20 h-20 mx-auto opacity-90"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono tracking-tight">
          RJ Dev Group
        </h1>

        <h2 className="text-lg sm:text-xl lg:text-2xl text-[#00b140] mb-6 font-mono font-medium">
          Private International Development &amp; Consultancy
        </h2>

        <p className="text-base sm:text-lg text-[#9ca3af] mb-12 max-w-2xl mx-auto leading-relaxed font-mono">
          System architecture, full-stack engineering, cross-border financial operations,
          and AI-assisted infrastructure — quietly operating across jurisdictions.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-5 h-8 border border-[#006039]/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[#006039]/60 rounded-full mt-1.5 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
