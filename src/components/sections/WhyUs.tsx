"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Zap, DollarSign, Clock, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      icon: Wrench,
      title: "Built for Your Trade Only",
      text: "We specialize in tradespeople — electricians, plumbers, HVAC, and roofers. We understand your service areas, licenses, and what local dispatch prospects look for.",
    },
    {
      icon: DollarSign,
      title: "Fair Pricing Structure",
      text: "No enterprise-level markup. Priced fairly for independent contractors and small crews. You see what we build first, ensuring absolute alignment with zero upfront risk.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround Specs",
      text: "No three-month discovery cycles or endless scoping meetings. We build your sample homepage in days and launch your completed website in one week.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Agency Jargon",
      text: "No talk about 'brand synergy' or 'omnichannel pipelines'. We focus on the stats that matter to your crew: local pack rankings, mobile page speed, and phone booking counts.",
    },
  ];

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-brand-navy text-white overflow-hidden scroll-mt-24">
      {/* Subtle lines inside the dark band */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,114,44,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
              // POSITIONING BRIEF
            </span>
            <h2 className="font-display text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
              Not an Agency. <br />
              A Trade Specialist.
            </h2>
            <p className="text-brand-slate text-sm sm:text-base leading-relaxed max-w-md font-medium">
              Most marketing agencies sell complex retainers and generic designs to local contractors. We skip the fluff. Wattfor is engineered specifically to help independent trades establish a professional search presence quickly and affordably.
            </p>
            
            <div className="border-t border-white/10 pt-6 mt-8 space-y-3 max-w-sm">
              <div className="flex items-center space-x-3 text-xs font-mono text-brand-copper uppercase tracking-wider font-bold">
                <span>🔧 SPECS: SPECIALIST VS GENERALIST</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed font-mono">
                Generalist agencies try to market everyone from local bakeries to law firms. We do one thing: we build websites that rank for tradespeople.
              </p>
            </div>
          </div>

          {/* Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="spec-card-dark p-6 space-y-4 hover:border-brand-copper/30 transition-colors rounded-3xl"
                >
                  <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-copper rounded-2xl">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl uppercase font-bold text-white leading-none">
                      {pt.title}
                    </h3>
                    <p className="text-brand-slate text-xs leading-relaxed font-medium">
                      {pt.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
