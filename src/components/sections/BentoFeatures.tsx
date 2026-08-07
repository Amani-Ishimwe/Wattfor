"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldAlert, Cpu, Globe, Lock, ShieldCheck } from "lucide-react";

export default function BentoFeatures() {
  const [speedVal, setSpeedVal] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpeedVal(98);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const checklistItems = [
    "Google Maps Local SEO setup",
    "Uptime performance monitoring",
    "SSL certificate installation",
    "Responsive contact lead form",
    "Trade-specific service menus",
  ];

  return (
    <section id="specs" className="relative py-20 sm:py-24 bg-brand-offwhite border-t border-brand-navy/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="max-w-xl text-left space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // PLATFORM BENCHMARKS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
            What every site receives.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Checklist */}
          <div className="bg-white p-8 rounded-3xl border border-brand-navy/5 shadow-sm space-y-6 flex flex-col justify-between group hover:border-brand-copper/30 transition-all duration-300">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold block">
                // COMPONENT LIST
              </span>
              <h3 className="font-display text-3xl uppercase font-bold text-brand-navy leading-none">Included Specs</h3>
              <ul className="space-y-3 pt-2">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-brand-slate font-medium">
                    <div className="w-4 h-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-[9px] font-mono text-brand-slate uppercase tracking-wider block border-t border-brand-navy/5 pt-4">
              100% pre-configured on launch
            </span>
          </div>

          {/* Card 2: Metrics / Performance */}
          <div className="bg-white p-8 rounded-3xl border border-brand-navy/5 shadow-sm space-y-6 flex flex-col justify-between group hover:border-brand-copper/30 transition-all duration-300">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold block">
                // ENGINE STATS
              </span>
              <h3 className="font-display text-3xl uppercase font-bold text-brand-navy leading-none">Page Speed</h3>
              
              {/* Dial Representation */}
              <div className="flex items-center space-x-6 py-2">
                <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" className="stroke-brand-navy/5 fill-none" strokeWidth="4" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      className="stroke-brand-copper fill-none transition-all duration-1000 ease-out"
                      strokeWidth="4"
                      strokeDasharray="200"
                      strokeDashoffset={200 - (200 * speedVal) / 100}
                    />
                  </svg>
                  <span className="absolute font-display text-2xl font-black text-brand-navy">{speedVal}</span>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[9px] text-emerald-500 font-bold uppercase tracking-wider">
                    ⚡ Core Web Vitals
                  </div>
                  <p className="text-brand-slate text-[10px] leading-relaxed font-medium">
                    Google mobile score optimized for immediate discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-[9px] font-mono text-emerald-500 uppercase font-bold border-t border-brand-navy/5 pt-4">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>99.98% Measured Uptime</span>
            </div>
          </div>

          {/* Card 3: Ownership */}
          <div className="bg-white p-8 rounded-3xl border border-brand-navy/5 shadow-sm space-y-6 flex flex-col justify-between group hover:border-brand-copper/30 transition-all duration-300">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold block">
                // COMPLIANCE CODE
              </span>
              <h3 className="font-display text-3xl uppercase font-bold text-brand-navy leading-none">Your Domain</h3>
              <p className="text-brand-slate text-xs leading-relaxed font-medium">
                Unlike general agencies who lease you website codes, Wattfor ensures you own your domain names, GBP listings, client data, and final assets under full legal terms.
              </p>
              
              <div className="bg-brand-navy/5 p-3.5 border-l border-brand-copper text-[10px] text-brand-slate font-mono uppercase tracking-wide leading-relaxed rounded-r-xl">
                contract segment // section 9: domain and profile assets belong 100% to client.
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-[9px] font-mono text-brand-navy uppercase font-bold border-t border-brand-navy/5 pt-4">
              <Lock className="w-3.5 h-3.5 text-brand-copper" />
              <span>Full Portability Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
