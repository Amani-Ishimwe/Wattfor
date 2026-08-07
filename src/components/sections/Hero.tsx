"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, PhoneCall, Check } from "lucide-react";
import Button from "../ui/Button";
import CircuitBg from "../ui/CircuitBg";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-36 pb-20 overflow-hidden bg-brand-offwhite border-b border-brand-navy/5">
      {/* Circuit Line Background */}
      <CircuitBg opacity={0.07} color="light" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col justify-between h-full">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Avatar stack + Trust Badge */}
          <motion.div variants={itemVariants} className="inline-flex flex-col items-center space-y-3">
            <div className="flex items-center -space-x-2">
              {["profile_marcus.png", "profile_dave.png", "profile_steven.png", "profile_ray.png"].map((img, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-offwhite overflow-hidden shadow-sm relative bg-brand-navy">
                  <img
                    src={`/images/${img}`}
                    alt="Contractor Headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="inline-flex items-center space-x-2 bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 rounded-full shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-copper" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-navy font-bold">
                Trusted by 40+ local trade contractors
              </span>
            </div>
          </motion.div>

          {/* Technical Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
              // ON-DEMAND WEBSITES & LOCAL SEARCH VISIBILITY
            </span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-8xl md:text-9xl uppercase font-black text-brand-navy tracking-tight leading-[0.95]"
          >
            Wired for trades. <br />
            Built for search.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-brand-slate text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium"
          >
            We build websites and manage local search visibility for electricians, plumbers, HVAC, and roofers — so the next job goes to your crew, not whoever ranks first on Google.
          </motion.p>

          {/* CTA Group */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={onCtaClick}
                variant="primary"
                className="group flex items-center space-x-3 w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="text-[10px] font-mono text-brand-slate uppercase tracking-widest font-bold">
              Flat-rate plans · No locked contracts · Fast 7-day delivery
            </p>
          </motion.div>
        </motion.div>

        {/* The Three Visual Mockup Cards (Sunbeam Style Hero Display) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full mt-20"
        >
          {/* Card 1: Specs Sheet (Dark Navy) */}
          <div className="bg-brand-navy text-white p-8 rounded-3xl border border-white/5 shadow-lg flex flex-col justify-between aspect-[4/3] relative overflow-hidden group hover:border-brand-copper/30 transition-all duration-300">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
            <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest block relative z-10 font-bold">
              // SCHEMATIC FRAMEWORK
            </span>
            <div className="space-y-2 relative z-10">
              <h3 className="font-display text-3xl uppercase font-black tracking-wider leading-none text-white">
                Websites Built <br /> For Local Crews
              </h3>
              <p className="text-brand-slate text-xs font-sans leading-relaxed">
                Hand-coded layouts optimize for loading speed and phone call conversions.
              </p>
            </div>
            <div className="text-[10px] font-mono text-white/40 relative z-10">
              SECURE SOURCE CODE // v1.0.4
            </div>
          </div>

          {/* Card 2: Interactive Call Metrics (Smartphone Frame) */}
          <div className="bg-white p-6 rounded-3xl border border-brand-navy/5 shadow-md flex flex-col justify-between aspect-[4/3] relative overflow-hidden group hover:border-brand-copper/30 transition-all duration-300">
            <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest block font-bold">
              // LOCAL CALL VOLUME
            </span>
            
            {/* Phone Screen Mock */}
            <div className="bg-brand-offwhite/50 border border-brand-navy/10 rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-copper text-white rounded-full flex items-center justify-center animate-pulse">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-brand-navy">New Lead: John K.</h4>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-brand-slate">Electrician Call Dispatch</p>
                </div>
              </div>
              <span className="font-display text-xs font-black bg-brand-navy text-white px-2 py-1 rounded-full uppercase tracking-wider">
                Denver
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-1 text-brand-copper">
                <Star className="w-3.5 h-3.5 fill-brand-copper" />
                <span className="font-sans text-xs font-bold text-brand-navy">5.0 Star Rankings</span>
              </div>
              <p className="text-brand-slate text-xs">GBP profiles sync for maximum local pack exposure.</p>
            </div>
          </div>

          {/* Card 3: Orange Branded Config Card (Copper Brand) */}
          <div className="bg-brand-copper text-white p-8 rounded-3xl border border-brand-copper/10 shadow-lg flex flex-col justify-between aspect-[4/3] relative overflow-hidden group hover:bg-brand-copper-hover transition-all duration-300">
            {/* Tiny faint background schematic lines */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_70%)]" />
            <span className="font-mono text-[9px] text-white/60 uppercase tracking-widest block relative z-10 font-bold">
              // OWNER FIRST TERMS
            </span>
            <div className="space-y-2 relative z-10">
              <h3 className="font-display text-3xl uppercase font-black tracking-wider leading-none">
                You own <br /> everything
              </h3>
              <p className="text-white/80 text-xs leading-relaxed">
                Zero lock-ins. You own the code, content, domain, and listings from launch.
              </p>
            </div>
            <div className="flex items-center space-x-1.5 text-[9px] font-mono text-white/50 relative z-10">
              <Check className="w-3.5 h-3.5" />
              <span>CONTRACT SPEC: 100% TRANSPARENT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
