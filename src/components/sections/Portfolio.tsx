"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Apex Electrical Services",
      location: "Denver, CO",
      trade: "Electrician",
      metric: "+140% Call Volume",
      metricDesc: "Increased monthly inbound calls via GBP pack rankings within 60 days.",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mitchell Roofing Crew",
      location: "Arvada, CO",
      trade: "Roofer",
      metric: "#1 Local Pack Slot",
      metricDesc: "Ranked #1 for local roofing searches in immediate Denver metro suburbs.",
      image:
        "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Vance Brothers Plumbing",
      location: "Thornton, CO",
      trade: "Plumber",
      metric: "98 PageSpeed Score",
      metricDesc: "Optimized landing speeds leading to direct conversion rate increases.",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Summit HVAC Solutions",
      location: "Boulder, CO",
      trade: "HVAC Pro",
      metric: "Zero Ads Retained",
      metricDesc: "Swapped expensive Google Ads spend for organic local map leads.",
      image:
        "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-navy text-white overflow-hidden scroll-mt-20"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,114,44,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 space-y-12 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // ACTIVE PROOFS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-none">
            Our Trade Portfolio.
          </h2>
          <p className="text-brand-slate text-sm font-sans font-medium">
            Take a look at local contractor websites designed, coded, and optimized by Wattfor.
          </p>
        </div>

        {/* Projects Grid — 1 col mobile, 2 col md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-black/30 border border-white/5 p-5 sm:p-6 lg:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-between gap-5 hover:border-brand-copper/30 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="bg-brand-navy border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] relative shadow-md">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Title & Info */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold block mb-1">
                    // {proj.trade} · {proj.location}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
                    {proj.title}
                  </h3>
                </div>

                {/* Metric Callout */}
                <div className="bg-white/5 border border-white/5 p-3 sm:p-4 rounded-xl space-y-1">
                  <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
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
