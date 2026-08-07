"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlueprintGallery() {
  const blueprints = [
    {
      title: "Landing Wireframe Grid",
      tag: "Site Architecture",
      icon: (
        <svg className="w-full h-24 stroke-brand-navy/20 fill-none" viewBox="0 0 100 60">
          <rect x="5" y="5" width="90" height="50" rx="3" strokeDasharray="2,2" />
          <line x1="5" y1="20" x2="95" y2="20" />
          <line x1="30" y1="20" x2="30" y2="55" />
          <rect x="10" y="27" width="12" height="6" rx="1" />
          <rect x="10" y="37" width="12" height="6" rx="1" />
          <rect x="37" y="27" width="50" height="22" rx="2" strokeDasharray="1,2" />
        </svg>
      ),
    },
    {
      title: "Local Citations Map Grid",
      tag: "SEO Signal Mapping",
      icon: (
        <svg className="w-full h-24 stroke-brand-navy/20 fill-none" viewBox="0 0 100 60">
          <circle cx="50" cy="30" r="22" strokeDasharray="3,3" />
          <circle cx="50" cy="30" r="12" />
          <circle cx="50" cy="30" r="2" fill="currentColor" />
          <line x1="50" y1="0" x2="50" y2="60" />
          <line x1="0" y1="30" x2="100" y2="30" />
          <circle cx="30" cy="18" r="4" fill="currentColor" className="text-brand-copper" />
          <circle cx="70" cy="42" r="4" fill="currentColor" className="text-brand-copper" />
          <circle cx="65" cy="15" r="3" />
        </svg>
      ),
    },
    {
      title: "Click-To-Call Pipeline",
      tag: "Lead Conversion Flow",
      icon: (
        <svg className="w-full h-24 stroke-brand-navy/20 fill-none" viewBox="0 0 100 60">
          <rect x="5" y="15" width="22" height="30" rx="2" />
          <circle cx="16" cy="30" r="6" />
          <path d="M 27 30 L 45 30" strokeDasharray="2,2" />
          <polygon points="45,27 51,30 45,33" fill="currentColor" className="text-brand-copper" />
          <rect x="51" y="20" width="44" height="20" rx="4" />
          <line x1="58" y1="30" x2="88" y2="30" strokeWidth="2" className="stroke-brand-copper" />
        </svg>
      ),
    },
    {
      title: "Mobile View Layout",
      tag: "Responsive Specs",
      icon: (
        <svg className="w-full h-24 stroke-brand-navy/20 fill-none" viewBox="0 0 100 60">
          <rect x="35" y="5" width="30" height="50" rx="4" />
          <line x1="35" y1="12" x2="65" y2="12" />
          <line x1="35" y1="47" x2="65" y2="47" />
          <circle cx="50" cy="51" r="1.5" />
          <rect x="40" y="18" width="20" height="10" rx="1" strokeDasharray="1,1" />
          <line x1="40" y1="34" x2="60" y2="34" />
          <line x1="40" y1="39" x2="52" y2="39" />
        </svg>
      ),
    },
    {
      title: "Structured Schema Graph",
      tag: "JSON-LD Automation",
      icon: (
        <svg className="w-full h-24 stroke-brand-navy/20 fill-none" viewBox="0 0 100 60">
          <circle cx="20" cy="30" r="6" />
          <circle cx="50" cy="15" r="6" />
          <circle cx="50" cy="45" r="6" />
          <circle cx="80" cy="30" r="6" />
          <line x1="26" y1="27" x2="44" y2="18" />
          <line x1="26" y1="33" x2="44" y2="42" />
          <line x1="56" y1="18" x2="74" y2="27" />
          <line x1="56" y1="42" x2="74" y2="33" />
        </svg>
      ),
    },
    {
      title: "Core Web Vitals Metric",
      tag: "Performance Stack",
      icon: (
        <svg className="w-full h-24 stroke-brand-navy/20 fill-none" viewBox="0 0 100 60">
          <rect x="5" y="15" width="90" height="30" rx="2" />
          <line x1="5" y1="25" x2="95" y2="25" />
          <line x1="35" y1="15" x2="35" y2="45" />
          <line x1="65" y1="15" x2="65" y2="45" />
          <circle cx="20" cy="35" r="3" className="text-brand-copper" fill="currentColor" />
          <circle cx="50" cy="35" r="3" className="text-brand-copper" fill="currentColor" />
          <circle cx="80" cy="35" r="3" className="text-brand-copper" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="blueprints" className="relative py-20 sm:py-24 bg-brand-offwhite scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="max-w-xl text-left space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // ARCHITECTURAL PORTFOLIO
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
            Structural Blueprint Gallery.
          </h2>
          <p className="text-brand-slate text-sm font-sans font-medium">
            Clean, optimized local schema structures and wireframe nodes that we implement for your business website.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blueprints.map((bp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white p-6 rounded-3xl border border-brand-navy/5 shadow-sm space-y-4 group hover:border-brand-copper/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="bg-brand-offwhite/50 border border-brand-navy/5 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#152238_1px,transparent_1px)] [background-size:16px_16px]" />
                {bp.icon}
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[8px] text-brand-copper uppercase tracking-widest font-bold">
                  {bp.tag}
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-brand-navy tracking-wider">
                  {bp.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
