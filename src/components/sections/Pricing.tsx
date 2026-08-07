"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "../ui/Button";

interface PricingProps {
  onCtaClick: () => void;
}

export default function Pricing({ onCtaClick }: PricingProps) {
  const mainPlans = [
    {
      name: "Website Build",
      price: "$500",
      priceTo: " – $1500",
      period: "ONE-TIME SETUP",
      desc: "Fast, custom landing or multi-page build to establish immediate trust and launch your crew online.",
      popular: false,
      groups: [
        {
          title: "Deliverables",
          items: [
            "Complete hand-coded layout",
            "Trade-specific service menus",
            "Customer reviews integration",
            "100% domain & code transfer",
          ],
        },
        {
          title: "Technical",
          items: [
            "Mobile responsive schema",
            "Lead contact booking forms",
          ],
        },
      ],
      buttonText: "Request Free Sample",
      featured: false,
    },
    {
      name: "Local SEO & GBP",
      price: "$300",
      priceTo: " – $600",
      period: "PER MONTH RECURRING",
      desc: "Active Google Business Profile management and citation mapping to rank your trade crew #1 on local packs.",
      popular: false,
      groups: [
        {
          title: "Search Strategy",
          items: [
            "GBP profile creation & audit",
            "Local search maps ranking",
            "Weekly keyword content syncs",
            "Local citation directories",
          ],
        },
        {
          title: "Diagnostics",
          items: [
            "Weekly ranking grid logs",
            "Review response monitoring",
          ],
        },
      ],
      buttonText: "Dominate Local Search",
      featured: false,
    },
    {
      name: "Builder Bundle",
      price: "$800",
      priceTo: " + $400/mo",
      period: "HYBRID SETUP & RETAINER",
      desc: "The ultimate growth engine. Combines your custom site build with ongoing local pack search dominance.",
      popular: true,
      groups: [
        {
          title: "Retainer Specs",
          items: [
            "Everything in Website Build",
            "Everything in Local SEO & GBP",
            "Hosting and maintenance included",
            "WeeklyGBP updates & posts",
          ],
        },
        {
          title: "Priority Scale",
          items: [
            "12-hour priority support line",
            "Active lead capture dashboard",
          ],
        },
      ],
      buttonText: "Get The Bundle Plan",
      featured: true,
    },
  ];

  return (
    <section id="pricing" className="relative py-12 sm:py-16 bg-brand-offwhite border-t border-brand-navy/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // COMPACT FEES
          </span>
          <h2 className="font-display text-5xl sm:text-7xl font-extrabold uppercase text-brand-navy tracking-tight leading-[0.95]">
            Transparent pricing. <br />
            No hidden retainers.
          </h2>
          <p className="text-brand-slate text-sm font-sans font-medium max-w-xl">
            Flat rates with zero setup fees. We map out your local keyword signals and design layouts to convert local search clicks into real business phone calls.
          </p>
        </div>

        {/* 3-Column Dark Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
          {mainPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[2.2rem] flex flex-col justify-between space-y-10 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] bg-brand-navy text-white shadow-xl ${
                plan.featured
                  ? "border border-brand-copper/45 ring-1 ring-brand-copper/30"
                  : "border border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-brand-copper text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-bold rounded-full">
                  Popular
                </div>
              )}

              {/* Top Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl uppercase font-black tracking-wider text-white">
                    {plan.name}
                  </h3>
                  <p className="text-brand-slate text-xs mt-2 leading-relaxed font-medium">
                    {plan.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-white/5 space-y-1">
                  <div className="flex items-baseline">
                    <span className="font-display text-5xl font-black text-white leading-none">
                      {plan.price}
                    </span>
                    <span className="font-display text-xl font-bold text-brand-slate ml-1">
                      {plan.priceTo}
                    </span>
                  </div>
                  <div className="font-mono text-[9px] text-brand-copper font-bold tracking-widest">
                    {plan.period}
                  </div>
                </div>

                {/* Grouped Features */}
                <div className="space-y-6">
                  {plan.groups.map((group, gidx) => (
                    <div key={gidx} className="space-y-2.5">
                      <h4 className="font-mono text-[9px] uppercase tracking-widest text-brand-slate font-bold">
                        {group.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {group.items.map((item, iidx) => (
                          <li key={iidx} className="flex items-start space-x-2.5 text-xs text-white/90 font-medium">
                            <div className="w-4 h-4 bg-brand-copper/10 border border-brand-copper/25 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-copper">
                              <Check className="w-2.5 h-2.5" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button Action */}
              <div className="pt-2">
                <button
                  onClick={onCtaClick}
                  className={`w-full py-3.5 px-6 rounded-full font-mono text-[11px] uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer text-center ${
                    plan.featured
                      ? "bg-brand-copper text-white hover:bg-brand-copper-hover"
                      : "bg-white text-brand-navy hover:bg-brand-offwhite"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Standalone Hosting Callout Row */}
        <div className="max-w-7xl mx-auto bg-white border border-brand-navy/5 p-6 sm:p-8 rounded-[2rem] shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-brand-copper/30 transition-all duration-300">
          <div className="space-y-2 text-left max-w-2xl">
            <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold block">
              // STANDALONE UPKEEP SUPPORT
            </span>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-brand-navy">
              Hosting & Maintenance Tier — $50 to $100 / month
            </h3>
            <p className="text-brand-slate text-xs font-sans font-medium leading-relaxed">
              Includes secure cloud hosting, daily automated database backups, custom domain linking, SSL setups, and text changes. Already included in the hybrid Builder Bundle.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={onCtaClick}
              className="py-3 px-6 rounded-full border border-brand-navy bg-transparent text-brand-navy hover:bg-brand-navy hover:text-white font-mono text-[10px] uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer"
            >
              Secure Hosting Only
            </button>
          </div>
        </div>

        {/* Bottom Notice */}
        <p className="text-center font-mono text-[10px] text-brand-slate uppercase tracking-widest font-bold pt-4">
          All contracts are flat-rate and billed month-to-month. Cancel anytime without buyout fees.
        </p>

      </div>
    </section>
  );
}
