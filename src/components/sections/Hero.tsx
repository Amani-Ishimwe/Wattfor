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
    <section className="relative h-screen max-h-screen flex flex-col overflow-hidden bg-brand-navy text-white">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')`,
        }}
      />
      {/* Layered gradient for high contrast — stronger on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/75 to-brand-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

      {/* Content — vertically centred, left-aligned, sits within viewport height */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-5"
        >
          {/* Eyebrow Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-brand-sky font-bold">
              Websites & Local SEO for Trade Contractors
            </span>
          </motion.div>

          {/* Mixed Serif / Display Headline */}
          <motion.h1
            variants={itemVariants}
            className="tracking-tight leading-[0.95] text-white"
          >
            <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl text-brand-sky block normal-case mb-1">
              wired for trades.
            </span>
            <span className="font-display text-5xl sm:text-7xl md:text-8xl uppercase font-black block">
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
            className="flex flex-col sm:flex-row items-start gap-4 pt-2"
          >
            <button
              onClick={onCtaClick}
              className="flex items-center space-x-2 bg-white text-brand-navy hover:bg-brand-sky hover:text-brand-navy px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-colors duration-200"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold self-center">
              Flat-rate plans · No locked contracts · 7-day delivery
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom client strip — anchored to the very bottom of the viewport */}
      <div className="relative z-10 border-t border-white/10 px-6 sm:px-12 py-5 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 opacity-40">
          {["Apex Electric", "Summit HVAC", "Vance Plumb", "Croft Roof", "Jenkins Gas"].map(
            (brand, i) => (
              <span
                key={i}
                className="font-display text-xl uppercase tracking-widest font-extrabold text-white"
              >
                {brand}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
