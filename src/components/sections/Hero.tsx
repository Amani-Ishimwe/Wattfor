"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 18 },
    },
  };

  return (
    <section className="relative h-[100dvh] flex flex-col overflow-hidden bg-brand-navy text-white">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')`,
        }}
      />
      {/* Gradient layers — heavier on mobile so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/98 via-brand-navy/85 to-brand-navy/50 sm:from-brand-navy/95 sm:via-brand-navy/75 sm:to-brand-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />

      {/* Main content — vertically centred, fills viewport */}
      <div className="relative z-10 flex-1 flex items-center w-full px-5 sm:px-10 lg:px-16 pt-24 pb-6 sm:pt-28 sm:pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl space-y-5 sm:space-y-6"
          >
            {/* Eyebrow Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-brand-sky font-bold">
                Websites &amp; Local SEO for Trade Contractors
              </span>
            </motion.div>

            {/* Mixed Serif / Display Headline */}
            <motion.h1 variants={itemVariants} className="tracking-tight leading-none text-white">
              <span className="font-serif italic font-normal text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-brand-sky block normal-case mb-1 sm:mb-2">
                wired for trades.
              </span>
              <span className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-black block">
                Built for Search.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed font-medium font-sans"
            >
              We build high-speed websites and manage local search visibility for electricians,
              plumbers, HVAC, and roofers — so the next job goes to your crew, not whoever ranks
              first on Google.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4 pt-1"
            >
              <button
                onClick={onCtaClick}
                className="flex items-center gap-2 bg-white text-brand-navy hover:bg-brand-sky hover:text-brand-navy px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm shadow-md transition-colors duration-200 w-full xs:w-auto justify-center"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[9px] sm:text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold self-center text-center xs:text-left">
                Flat-rate plans · No locked contracts · 7-day delivery
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom client strip — infinite sliding marquee */}
      <div className="relative z-10 border-t border-white/10 w-full overflow-hidden py-4 sm:py-5">
        {/* Fade vignettes */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-x-10 sm:gap-x-16 opacity-35">
          {[
            "Apex Electric", "Summit HVAC", "Vance Plumb", "Croft Roof", "Jenkins Gas",
            "Apex Electric", "Summit HVAC", "Vance Plumb", "Croft Roof", "Jenkins Gas",
          ].map((brand, i) => (
            <span
              key={i}
              className="font-display text-base sm:text-xl uppercase tracking-widest font-extrabold text-white whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
