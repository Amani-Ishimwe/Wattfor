"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

export default function Social() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Wattfor built my electrical site in 5 days. Since launch, I am getting 3-4 direct search bookings every single week.",
      name: "Marcus Miller",
      role: "Owner, Miller & Sons Electrical",
      location: "Denver, CO",
      trade: "Electrician",
    },
    {
      quote: "No upfront deposit meant zero risk for us. The site they built loads instantly on mobile and ranks #1 for plumbers near me.",
      name: "Dave Jenkins",
      role: "Founder, Jenkins Plumbing & Gas",
      location: "Aurora, CO",
      trade: "Plumber",
    },
    {
      quote: "We spent thousands on agencies with zero calls. Wattfor set up our site and Google listing, and our phone rang on day 3.",
      name: "Steven Croft",
      role: "Owner, Croft HVAC Solutions",
      location: "Lakewood, CO",
      trade: "HVAC Pro",
    },
    {
      quote: "Fair pricing, clean designs, and zero tech jargon. I can focus on repairing roofs while my website handles the bookings.",
      name: "Ray Mitchell",
      role: "Founder, Mitchell Roofing Crew",
      location: "Arvada, CO",
      trade: "Roofer",
    },
    {
      quote: "I was skeptical about the free sample, but they delivered a beautiful working page. Finalizing and launching was a breeze.",
      name: "Tony Vance",
      role: "Partner, Vance Brothers Electric",
      location: "Thornton, CO",
      trade: "Electrician",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 340; // width of a card + gap
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-brand-offwhite border-t border-brand-navy/5 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
              // SOCIAL PROOF LOGS
            </span>
            <h2 className="font-display text-5xl sm:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
              What local crew owners say.
            </h2>
            <p className="text-brand-slate text-xs font-mono uppercase tracking-wider flex items-center space-x-1.5 font-bold">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Note: Demonstration placeholders — to be swapped with your real reviews</span>
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-brand-navy/10 hover:bg-brand-navy/5 text-brand-navy transition-colors cursor-pointer rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-brand-navy/10 hover:bg-brand-navy/5 text-brand-navy transition-colors cursor-pointer rounded-full"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Horizontally Scrollable Bar */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="snap-start flex-shrink-0 w-full sm:w-[320px] bg-white p-8 border border-brand-navy/5 shadow-sm flex flex-col justify-between space-y-6 hover:border-brand-copper/30 transition-all duration-300 rounded-3xl"
            >
              <div className="space-y-4">
                {/* Stars and Quote Mark */}
                <div className="flex justify-between items-center text-amber-500">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-navy/10 fill-brand-navy/5" />
                </div>

                <p className="font-sans text-brand-navy text-sm leading-relaxed font-semibold italic text-brand-slate">
                  "{test.quote}"
                </p>
              </div>

              <div className="border-t border-brand-navy/5 pt-4 flex flex-col">
                <span className="font-sans font-bold text-brand-navy text-sm">
                  {test.name}
                </span>
                <span className="font-mono text-[9px] text-brand-slate uppercase tracking-widest mt-1 font-bold">
                  {test.role} · {test.location}
                </span>
                <span className="inline-block mt-3 self-start font-mono text-[8px] text-brand-copper uppercase tracking-widest bg-brand-copper/10 px-2.5 py-0.5 border border-brand-copper/10 rounded-full font-bold">
                  {test.trade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
