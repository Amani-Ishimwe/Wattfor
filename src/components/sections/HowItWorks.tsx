"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Send, Activity } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      idx: "01",
      icon: ClipboardList,
      title: "We Build First",
      description: "Give us your business info. We build a fully functional homepage sample customized for your local area — completely free, no payment details required.",
    },
    {
      idx: "02",
      icon: Send,
      title: "You Approve It",
      description: "If you love the design and layout, we finalize your core pages, configure your reviews feed, hook up your phone numbers, and push it live.",
    },
    {
      idx: "03",
      icon: Activity,
      title: "We Keep It Working",
      description: "We handle your fast cloud hosting, optimize your local Google Business signals weekly, and update text/services whenever you need it.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-brand-offwhite border-t border-brand-navy/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-xl text-left space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // WORKFLOW PIPELINE
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
            Three Steps. Zero Guesswork.
          </h2>
        </div>

        {/* Steps track */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-brand-navy/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="space-y-6 bg-white p-8 rounded-3xl border border-brand-navy/5 shadow-sm relative group hover:border-brand-copper/30 transition-all duration-300"
                >
                  {/* Step bubble */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-brand-navy text-white flex items-center justify-center font-display text-2xl font-bold select-none rounded-full group-hover:bg-brand-copper transition-colors">
                      {step.idx}
                    </div>
                    <Icon className="w-5 h-5 text-brand-slate group-hover:text-brand-copper transition-colors" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-3xl uppercase font-bold text-brand-navy leading-none">
                      {step.title}
                    </h3>
                    <p className="text-brand-slate text-sm leading-relaxed font-medium">
                      {step.description}
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
