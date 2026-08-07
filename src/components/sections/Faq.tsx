"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does the free sample work?",
      a: "Give us your business name, logo, and trade specialties. We design and build a fully functional mockup of your homepage within 48 hours. We host it on a private link. You look at it, test it, and decide. If you like it, we activate your billing and launch the site. If you don't, you pay absolutely nothing and we destroy the draft.",
    },
    {
      q: "Are there any hidden setup fees?",
      a: "Absolutely not. We do not charge configuration, activation, or design fees. You pay the flat-rate monthly cost for the plan you select, which covers custom development, maintenance, local search tracking, and hosting.",
    },
    {
      q: "Do I own my domain and website?",
      a: "Yes. From launch, the domain registration and GBP listings are set up under your name. If you ever choose to cancel your monthly service, we will transfer full ownership of the domain and website assets directly to you. No buy-out fees.",
    },
    {
      q: "What trades do you work with?",
      a: "We specialize in independent contractors and small crews in the home service trades. This includes electricians, plumbers, HVAC technicians, roofers, and general handymen. Our designs and keywords are custom-tailored for these specific markets.",
    },
    {
      q: "How do updates and changes work?",
      a: "Both plans include monthly text and layout changes. Simply drop an email or text to Clayton with your changes (e.g. updating pricing, adding a service, uploading new job site pictures), and we'll apply it to the live site within 24 hours.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-brand-offwhite border-t border-brand-navy/5">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // RESOLVING AMBIGUITY
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-slate text-sm font-sans font-medium">
            Everything you need to know about the free sample, ownership, and flat-rate contracts.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-navy/5 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer select-none"
                >
                  <span className="font-display text-2xl uppercase tracking-wide font-extrabold text-brand-navy pr-4 leading-none">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-brand-copper" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-slate leading-relaxed font-medium border-t border-brand-navy/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
