"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Social() {
  const testimonials = [
    {
      quote: "Wattfor built my electrical site in 5 days. Since launch, we are getting 3-4 direct search bookings every single week.",
      name: "Marcus Miller",
      role: "Owner, Miller & Sons Electrical",
      location: "Denver, CO",
      trade: "Electrician",
      image: "/images/profile_marcus.png",
    },
    {
      quote: "We went with their bundled setup. The website loads instantly on mobile and our local maps ranking went from non-existent to #1.",
      name: "Dave Jenkins",
      role: "Founder, Jenkins Plumbing & Gas",
      location: "Aurora, CO",
      trade: "Plumber",
      image: "/images/profile_dave.png",
    },
    {
      quote: "We spent thousands on marketing agencies with zero calls. Wattfor sorted our local SEO, and our phone rang on day 3.",
      name: "Steven Croft",
      role: "Owner, Croft HVAC Solutions",
      location: "Lakewood, CO",
      trade: "HVAC Pro",
      image: "/images/profile_steven.png",
    },
    {
      quote: "Flat-rate pricing, clean designs, and zero tech jargon. I can focus on repairing roofs while my website handles the bookings.",
      name: "Ray Mitchell",
      role: "Founder, Mitchell Roofing Crew",
      location: "Arvada, CO",
      trade: "Roofer",
      image: "/images/profile_ray.png",
    },
    {
      quote: "Excellent communication and fast turnaround. They customized the layout to represent my trade and the local SEO is driving solid leads.",
      name: "Tony Vance",
      role: "Partner, Vance Brothers Electric",
      location: "Thornton, CO",
      trade: "Electrician",
      image: "/images/profile_tony.png",
    },
  ];

  // Duplicate testimonials list to create infinite marquee illusion
  const marqueeList = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-brand-offwhite border-t border-brand-navy/5 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-bold block">
            // CLIENT FEEDBACK
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none">
            What local crew owners say.
          </h2>
          <p className="text-brand-slate text-xs font-mono uppercase tracking-wider flex items-center space-x-1.5 font-bold">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Compounding customer satisfaction</span>
          </p>
        </div>
      </div>

      {/* Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Left/Right Vignettes for fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-brand-offwhite to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-brand-offwhite to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex space-x-6">
          {marqueeList.map((test, i) => (
            <div
              key={i}
              className="w-[320px] sm:w-[360px] bg-white p-8 rounded-3xl border border-brand-navy/5 shadow-sm flex flex-col justify-between space-y-6 flex-shrink-0 select-none"
            >
              <div className="space-y-4 text-left">
                {/* Star rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-brand-copper text-brand-copper" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-brand-navy text-xs sm:text-sm font-sans leading-relaxed font-semibold italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex justify-between items-end border-t border-brand-navy/5 pt-4">
                <div className="flex items-center text-left">
                  {/* Real Image Headshot */}
                  <div className="w-10 h-10 rounded-full border border-brand-navy/10 overflow-hidden relative bg-brand-navy flex-shrink-0 mr-3">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-base uppercase font-bold text-brand-navy tracking-wider leading-none">
                      {test.name}
                    </h4>
                    <span className="text-[9px] text-brand-slate font-medium block mt-1">
                      {test.role}
                    </span>
                  </div>
                </div>
                <div className="text-right">
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
