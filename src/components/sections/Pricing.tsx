"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "../ui/Button";

interface PricingProps {
  onCtaClick: () => void;
}

export default function Pricing({ onCtaClick }: PricingProps) {
  const plans = [
    {
      name: "Website Build",
      price: "$500",
      priceTo: " – $1,500",
      period: "One-time",
      desc: "Fast, custom website build to establish instant trust and launch your crew online in 7 days.",
      features: [
        "Complete hand-coded layout",
        "Responsive call-to-booking forms",
        "Starred reviews integration",
        "Trade-specific service menus",
        "SEO schema metadata structure",
        "100% ownership transfer",
      ],
      buttonText: "Request Website Sample",
      dark: false,
    },
    {
      name: "Hosting & Upkeep",
      price: "$50",
      priceTo: " – $100",
      period: "/ month",
      desc: "Secure enterprise hosting, cloud backups, and regular adjustments to keep your site performing.",
      features: [
        "High-performance cloud hosting",
        "Free SSL security certificate",
        "Daily automated database backups",
        "Uptime diagnostics monitoring",
        "Regular text & image updates",
        "Core web vital speed audits",
      ],
      buttonText: "Secure My Hosting",
      dark: false,
    },
    {
      name: "Local SEO & GBP",
      price: "$300",
      priceTo: " – $600",
      period: "/ month",
      desc: "Google Business Profile optimization and mapping to rank your trade crew #1 on local packs.",
      features: [
        "Google Business Profile setup",
        "Trade keyword optimization",
        "Local citation directories sync",
        "Weekly ranking grid reports",
        "Customer review response strategy",
        "Direct search traffic analytics",
      ],
      buttonText: "Dominate Local Search",
      dark: false,
    },
    {
      name: "Bundled Package",
      price: "$800",
      priceTo: " setup + $400/mo",
      period: "Hybrid Retainer",
      desc: "The ultimate growth engine. Hybrid model combining custom website launch with ongoing search visibility.",
      features: [
        "Everything in Website Build",
        "Everything in Hosting & Upkeep",
        "Everything in Local SEO & GBP",
        "Priority 12-hour support line",
        "Direct lead conversion tracking",
        "Highest value & ROI for crews",
      ],
      buttonText: "Get The Builder Bundle",
      dark: true,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-brand-offwhite border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // SERVICE SPECS & PLANS
          </span>
          <h2 className="font-display text-5xl sm:text-7xl font-extrabold uppercase text-brand-navy tracking-tight leading-[0.95]">
            Transparent pricing. <br />
            No hidden retainers.
          </h2>
          <p className="text-brand-slate text-sm font-sans font-medium max-w-xl">
            We build your free website sample first. You choose to select a plan and activate billing only after you approve the layout.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 rounded-[2.5rem] border shadow-lg flex flex-col justify-between space-y-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
                plan.dark
                  ? "bg-brand-navy text-white border-white/5 md:col-span-2 max-w-none"
                  : "bg-white text-brand-navy border-brand-navy/5"
              }`}
            >
              {plan.dark && (
                <div className="absolute top-0 right-0 bg-brand-copper text-white font-mono text-[9px] uppercase tracking-widest px-5 py-2 font-bold rounded-bl-2xl">
                  Best Value Bundle
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[9px] text-brand-copper uppercase tracking-widest font-bold block mb-2">
                    // SPEC-{idx + 1}: {plan.name}
                  </span>
                  <div className="flex items-baseline flex-wrap">
                    <span className="font-display text-5xl sm:text-6xl font-black">{plan.price}</span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-brand-slate">{plan.priceTo}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-brand-copper ml-3 bg-brand-copper/10 px-2 py-0.5 rounded-full">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-brand-slate text-xs mt-4 leading-relaxed font-medium max-w-xl">
                    {plan.desc}
                  </p>
                </div>

                <ul className={`grid gap-3 pt-6 border-t border-brand-navy/5 dark:border-white/5 ${
                  plan.dark ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                }`}>
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start space-x-3 text-xs font-semibold">
                      <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.dark ? "bg-brand-copper/20 text-brand-copper" : "bg-brand-copper/10 text-brand-copper"
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.dark ? "text-white/95" : "text-brand-navy/90"}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 max-w-md">
                <Button
                  onClick={onCtaClick}
                  variant={plan.dark ? "primary" : "secondary"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Small Notice */}
        <p className="text-center font-mono text-[10px] text-brand-slate uppercase tracking-widest font-bold pt-4">
          All retainer services are month-to-month contracts. Cancel anytime with zero buyout fees.
        </p>

      </div>
    </section>
  );
}
