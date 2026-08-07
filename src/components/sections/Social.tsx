"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Social() {
  const testimonials = [
    {
      quote:
        "Wattfor built my electrical site in 5 days. Since launch, we are getting 3-4 direct search bookings every single week.",
      name: "Marcus Miller",
      role: "Owner, Miller & Sons Electrical",
      location: "Denver, CO",
      trade: "Electrician",
      image: "/images/profile_marcus.png",
    },
    {
      quote:
        "We went with their bundled setup. The website loads instantly on mobile and our local maps ranking went from non-existent to #1.",
      name: "Dave Jenkins",
      role: "Founder, Jenkins Plumbing & Gas",
      location: "Aurora, CO",
      trade: "Plumber",
      image: "/images/profile_dave.png",
    },
    {
      quote:
        "We spent thousands on marketing agencies with zero calls. Wattfor sorted our local SEO, and our phone rang on day 3.",
      name: "Steven Croft",
      role: "Owner, Croft HVAC Solutions",
      location: "Lakewood, CO",
      trade: "HVAC Pro",
      image: "/images/profile_steven.png",
    },
    {
      quote:
        "Flat-rate pricing, clean designs, and zero tech jargon. I can focus on repairing roofs while my website handles the bookings.",
      name: "Ray Mitchell",
      role: "Founder, Mitchell Roofing Crew",
      location: "Arvada, CO",
      trade: "Roofer",
      image: "/images/profile_ray.png",
    },
    {
      quote:
        "Excellent communication and fast turnaround. They customised the layout to represent my trade and the local SEO is driving solid leads.",
      name: "Tony Vance",
      role: "Partner, Vance Brothers Electric",
      location: "Thornton, CO",
      trade: "Electrician",
      image: "/images/profile_tony.png",
    },
  ];

  // Duplicate for seamless infinite marquee
  const marqueeList = [...testimonials, ...testimonials];

  return (
    <section
      id="reviews"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-offwhite border-t border-brand-navy/5 overflow-hidden scroll-mt-20"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 mb-10 sm:mb-14">
        <div className="max-w-2xl text-left space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // CLIENT FEEDBACK
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
            What local crew owners say.
          </h2>
          <p className="text-brand-slate text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 font-bold">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span>Compounding customer satisfaction</span>
          </p>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex py-2">
        {/* Fade vignettes */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-brand-offwhite to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-brand-offwhite to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-5 sm:gap-6">
          {marqueeList.map((test, i) => (
            <div
              key={i}
              className="w-[280px] sm:w-[320px] lg:w-[360px] bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-brand-navy/5 shadow-sm flex flex-col justify-between gap-5 flex-shrink-0 select-none"
            >
              <div className="space-y-3 sm:space-y-4 text-left">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-brand-copper text-brand-copper" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-brand-navy text-xs sm:text-sm font-sans leading-relaxed font-semibold italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex justify-between items-end border-t border-brand-navy/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-brand-navy/10 overflow-hidden bg-brand-navy flex-shrink-0">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-sm sm:text-base uppercase font-bold text-brand-navy tracking-wider leading-none">
                      {test.name}
                    </h4>
                    <span className="text-[9px] text-brand-slate font-medium block mt-0.5">
                      {test.role}
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-mono text-[9px] text-brand-copper uppercase tracking-wider font-bold block">
                    {test.trade}
                  </span>
                  <span className="text-[8px] text-brand-slate font-mono uppercase tracking-wider block mt-0.5">
                    {test.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
