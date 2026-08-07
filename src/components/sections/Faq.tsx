"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
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
      a: "We specialise in independent contractors and small crews in the home service trades. This includes electricians, plumbers, HVAC technicians, roofers, and general handymen. Our designs and keywords are custom-tailored for these specific markets.",
    },
    {
      q: "How do updates and changes work?",
      a: "Both plans include monthly text and layout changes. Simply drop an email or text with your changes (e.g. updating pricing, adding a service, uploading new job site pictures), and we'll apply it to the live site within 24 hours.",
    },
    {
      q: "How long does it take to go live?",
      a: "Typical site builds are live within 5–7 business days of receiving your business details, logo, and service list. Local SEO setup begins in parallel and shows measurable ranking movement within 30–60 days.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-offwhite border-t border-brand-navy/5 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-10 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center sm:text-left space-y-3 max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // RESOLVING AMBIGUITY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-slate text-sm font-sans font-medium">
            Everything you need to know about ownership, plans, and flat-rate contracts.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl border border-brand-navy/5 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer select-none gap-4"
                >
                  <span className="font-display text-lg sm:text-2xl uppercase tracking-wide font-extrabold text-brand-navy leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-copper" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
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
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-brand-slate leading-relaxed font-medium border-t border-brand-navy/5 pt-4">
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
