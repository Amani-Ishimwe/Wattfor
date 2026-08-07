"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Apex Electrical Services",
      location: "Denver, CO",
      trade: "Electrician",
      metric: "+140% Call Volume",
      metricDesc: "Increased monthly inbound calls via GBP pack rankings within 60 days.",
      layout: (
        <svg className="w-full h-32 stroke-white/20 fill-none" viewBox="0 0 100 60">
          <rect x="5" y="5" width="90" height="50" rx="2" />
          <line x1="5" y1="18" x2="95" y2="18" />
          <circle cx="15" cy="11" r="2" className="text-brand-copper" fill="currentColor" />
          <rect x="10" y="24" width="30" height="24" rx="1" strokeDasharray="1,1" />
          <line x1="48" y1="26" x2="88" y2="26" strokeWidth="2" className="stroke-brand-copper" />
          <line x1="48" y1="34" x2="78" y2="34" />
          <line x1="48" y1="40" x2="68" y2="40" />
        </svg>
      ),
    },
    {
      title: "Mitchell Roofing Crew",
      location: "Arvada, CO",
      trade: "Roofer",
      metric: "#1 Local Pack Slot",
      metricDesc: "Ranked #1 for local roofing searches in immediate Denver metro suburbs.",
      layout: (
        <svg className="w-full h-32 stroke-white/20 fill-none" viewBox="0 0 100 60">
          <rect x="5" y="5" width="90" height="50" rx="2" />
          <line x1="5" y1="18" x2="95" y2="18" />
          <circle cx="15" cy="11" r="2" className="text-brand-copper" fill="currentColor" />
          <path d="M 20 48 L 50 24 L 80 48" strokeWidth="2" className="stroke-brand-copper" />
          <circle cx="50" cy="24" r="3" />
        </svg>
      ),
    },
    {
      title: "Vance Brothers Plumbing",
      location: "Thornton, CO",
      trade: "Plumber",
      metric: "98 PageSpeed Score",
      metricDesc: "Optimized landing speeds leading to direct conversion rate increases.",
      layout: (
        <svg className="w-full h-32 stroke-white/20 fill-none" viewBox="0 0 100 60">
          <rect x="5" y="5" width="90" height="50" rx="2" />
          <line x1="5" y1="18" x2="95" y2="18" />
          <circle cx="15" cy="11" r="2" className="text-brand-copper" fill="currentColor" />
          <circle cx="50" cy="36" r="10" strokeDasharray="2,2" />
          <circle cx="50" cy="36" r="6" />
          <line x1="50" y1="36" x2="56" y2="30" strokeWidth="2" className="stroke-brand-copper" />
        </svg>
      ),
    },
    {
      title: "Summit HVAC Solutions",
      location: "Boulder, CO",
      trade: "HVAC Pro",
      metric: "Zero Ads Retained",
      metricDesc: "Swapped expensive Google Ads spend for organic local map leads.",
      layout: (
        <svg className="w-full h-32 stroke-white/20 fill-none" viewBox="0 0 100 60">
          <rect x="5" y="5" width="90" height="50" rx="2" />
          <line x1="5" y1="18" x2="95" y2="18" />
          <circle cx="15" cy="11" r="2" className="text-brand-copper" fill="currentColor" />
          <rect x="15" y="24" width="20" height="8" rx="1" />
          <rect x="45" y="24" width="20" height="8" rx="1" />
          <rect x="15" y="38" width="50" height="10" rx="1" strokeDasharray="1,1" />
        </svg>
      ),
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-brand-navy text-white overflow-hidden scroll-mt-24">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,114,44,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // ACTIVE PROOFS
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-extrabold uppercase text-white tracking-tight leading-none">
            Our Trade Portfolio.
          </h2>
          <p className="text-brand-slate text-sm font-sans font-medium">
            Take a look at local contractor websites designed, coded, and optimized by Wattfor.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-black/30 border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-between space-y-6 hover:border-brand-copper/30 transition-all duration-300 group"
            >
              {/* Browser mockup layout */}
              <div className="bg-brand-navy/60 border border-white/5 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
                {proj.layout}
              </div>

              {/* Title & Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold block mb-1">
                      // {proj.trade} · {proj.location}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                {/* Metric Callout */}
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-1 text-left">
                  <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-widest flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>METRIC ACHIEVED: {proj.metric}</span>
                  </span>
                  <p className="text-white/60 text-xs font-sans leading-relaxed font-medium">
                    {proj.metricDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
