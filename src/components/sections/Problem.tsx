"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="relative py-12 sm:py-16 bg-brand-offwhite overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="flex justify-center items-center space-x-2"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold">
            // THE SHORT CIRCUIT
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl font-extrabold uppercase text-brand-navy tracking-tight leading-none"
        >
          Your work is solid. <br />
          Your search presence isn't.
        </motion.h2>

        {/* Body Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-navy font-sans text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto text-brand-slate"
        >
          Referrals are great, but they aren't enough to scale. Someone in your service area is searching for a local electrician, plumber, or HVAC technician <span className="font-bold text-brand-copper border-b border-brand-copper/30">right now</span>. If they can't find your website on the first page, they hire your competitor. It is that direct. We solve the discovery gap so your phone keeps ringing.
        </motion.p>

        {/* Visual trace connector */}
        <div className="pt-10 flex justify-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-brand-copper to-transparent" />
        </div>
      </div>
    </section>
  );
}
