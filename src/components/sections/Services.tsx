"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Search, RefreshCcw } from "lucide-react";
import Button from "../ui/Button";
import BuildMock from "../mockups/BuildMock";
import SignalMock from "../mockups/SignalMock";
import UpkeepMock from "../mockups/UpkeepMock";

interface ServicesProps {
  onCtaClick: () => void;
}

export default function Services({ onCtaClick }: ServicesProps) {
  const panels = [
    {
      id: "01",
      icon: Globe,
      eyebrow: "Website Development",
      headline: "The Build",
      description:
        "A high-speed, modern website built specifically for your trade. Featuring clean service menus, actual review feeds, clear booking forms, and absolute mobile polish — live in less than a week.",
      cta: "Contact Us",
      mockup: <BuildMock />,
    },
    {
      id: "02",
      icon: Search,
      eyebrow: "Local SEO & Optimization",
      headline: "The Signal",
      description:
        "Complete setup and weekly management of your Google Business Profile, local citations, and trade-specific keywords. When local prospects search '[your trade] near me', you show up at the top.",
      cta: "Contact Us",
      mockup: <SignalMock />,
    },
    {
      id: "03",
      icon: RefreshCcw,
      eyebrow: "Hosting & Maintenance",
      headline: "The Upkeep",
      description:
        "Secure enterprise hosting, weekly automated content backups, active uptime monitoring, and layout updates. We handle the tech specs so you can focus on handling job sites.",
      cta: "Contact Us",
      mockup: <UpkeepMock />,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-offwhite overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 space-y-20 sm:space-y-28 lg:space-y-36">
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // SERVICE SPECS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
            Engineered to convert clicks into phone calls.
          </h2>
        </div>

        {/* Alternating Panels */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {panels.map((panel, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={panel.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Text Block */}
                <div
                  className={`lg:col-span-5 space-y-5 sm:space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Step ID Card */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-xs text-brand-copper font-bold border border-brand-copper/30 px-3 py-1 bg-brand-copper/5 rounded-full select-none">
                      {panel.id}
                    </span>
                    <span className="font-mono text-[10px] text-brand-slate uppercase tracking-widest font-bold">
                      {panel.eyebrow}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl sm:text-5xl uppercase font-black text-brand-navy leading-none">
                    {panel.headline}
                  </h3>

                  <p className="text-brand-slate text-sm sm:text-base leading-relaxed font-medium">
                    {panel.description}
                  </p>

                  <div className="pt-1">
                    <Button
                      onClick={onCtaClick}
                      variant="secondary"
                      className="group inline-flex items-center gap-3 text-xs w-full sm:w-auto justify-center sm:justify-start"
                    >
                      <span>{panel.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* Visual Mockup Block */}
                <div
                  className={`lg:col-span-7 flex justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-2xl border border-brand-navy/5 shadow-lg rounded-[1.5rem] overflow-hidden"
                  >
                    {panel.mockup}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
