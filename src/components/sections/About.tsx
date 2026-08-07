"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Code, ShieldCheck } from "lucide-react";

export default function About() {
  const founders = [
    {
      icon: Hammer,
      name: "Clayton Vance",
      role: "Founder, Client Relationships & Operations",
      bio: "12 years managing local electrical crews and HVAC contracting. Clay handles client onboarding, service scoping, and trade compliance so your site speaks exactly like your crew.",
    },
    {
      icon: Code,
      name: "Marcus Ward",
      role: "Founder, Technical Architecture & SEO",
      bio: "Former lead engineer for trade directory networks. Marcus designs the codebases, manages the Core Web Vitals performance benchmarks, and builds local SEO ranking grids.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-brand-offwhite border-t border-brand-navy/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
              // TEAM CREDENTIALS
            </span>
            <h2 className="font-display text-5xl sm:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
              Built by people who get both sides.
            </h2>
            <p className="text-brand-slate text-sm sm:text-base leading-relaxed font-medium">
              We started Wattfor because we saw how disconnected standard agencies were from the reality of contractor work. We know how busy your crew is, how expensive lead generation lists are, and how hard it is to maintain a professional local presence. Clay understands the trades; Marcus understands the code.
            </p>

            <div className="inline-flex items-center space-x-2 bg-brand-copper/10 text-brand-copper px-4 py-2 font-mono text-[9px] uppercase tracking-widest font-bold border border-brand-copper/20 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>Domain Expertise Verified</span>
            </div>
          </div>

          {/* Cards Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {founders.map((fd, i) => {
              const Icon = fd.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="bg-white p-8 border border-brand-navy/5 shadow-sm space-y-4 hover:border-brand-copper/30 transition-colors rounded-3xl"
                >
                  {/* Card Icon */}
                  <div className="w-10 h-10 bg-brand-navy text-white flex items-center justify-center rounded-2xl">
                    <Icon className="w-4 h-4 text-brand-copper" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-brand-navy leading-none">
                      {fd.name}
                    </h3>
                    <p className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold">
                      {fd.role}
                    </p>
                  </div>

                  <p className="text-brand-slate text-xs leading-relaxed font-medium">
                    {fd.bio}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
